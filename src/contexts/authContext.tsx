// AuthContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

type AuthContextType = {
  token: string | null;
  error: string | null;
  setToken: (val: string | null) => void;
  refreshToken: () => Promise<void>;
};
const SERVER_URL = process.env.NEXT_PUBLIC_API_URL;
const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
  initialToken?: string;
};

export function AuthProvider({ children, initialToken }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(initialToken ?? null);
  const [expiry, setExpiry] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const refreshToken = useCallback(async () => {
    setError(null);
    try {
      const res = await fetch(`${SERVER_URL}/api/auth/refresh-token`, {
        method: "post",
        credentials: "include",
      });

      const resData = await res.json();

      if (resData.status !== "success") {
        setError(resData.message || "Refresh failed");
        return;
      }

      const data: { accessToken: string; expiresIn: number } = resData.data;

      setToken(data.accessToken);
      setExpiry(Date.now() + data.expiresIn * 1000);
    } catch (err: any) {
      setToken(null);
      setExpiry(null);
      setError(err.message || "Error refreshing token");
    }
  }, []);

  const value = useMemo(
    () => ({ token, error, setToken, refreshToken }),
    [token, error, refreshToken]
  );

  useEffect(() => {
    if (!token) refreshToken();
  }, [token, refreshToken]);

  useEffect(() => {
    if (!expiry) return;
    const now = Date.now();
    const refreshTime = expiry - now - 120_000;
    if (refreshTime > 0) {
      const id = setTimeout(refreshToken, refreshTime);
      return () => clearTimeout(id);
    } else {
      refreshToken();
    }
  }, [expiry, refreshToken]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
