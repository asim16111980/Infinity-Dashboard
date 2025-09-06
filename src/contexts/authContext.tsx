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
  const refreshToken = useCallback(async () => {
    try {
      const sid = document.cookie
        .split("; ")
        .find((c) => c.startsWith("connect.sid"));
      if (!sid) {
        console.log("No session cookie, skip refresh");
        return;
      }

      const res = await fetch(`${SERVER_URL}/api/auth/refresh-token`, {
        method: "post",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Refresh failed");
      const data: { accessToken: string; expiresIn: number } = await res.json();
      setToken(data.accessToken);
      setExpiry(Date.now() + data.expiresIn * 1000);
    } catch (err) {
      console.error("Error refreshing token:", err);
      setToken(null);
      setExpiry(null);
    }
  }, []);

  const value = useMemo(
    () => ({ token, setToken, refreshToken }),
    [token, refreshToken]
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
