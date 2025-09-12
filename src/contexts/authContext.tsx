// AuthContext.tsx
"use client";
import { mapErrorToMessage } from "@/utils/mapErrorToMessage";
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
  authError: string | null;
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
  const [authError, setAuthError] = useState<string | null>(null);

  const refreshToken = useCallback(async () => {
    setAuthError(null);
    try {
      const res = await fetch(`${SERVER_URL}/api/auth/refresh`, {
        method: "post",
        credentials: "include",
      });

      const resData = await res.json();

      if (resData.status !== "success") {
        return;
      }

      const data: { authToken: string; expiresIn: number } = resData.data;

      setToken(data.authToken);
      setExpiry(Date.now() + data.expiresIn * 1000);
    } catch (err: any) {
      setToken(null);
      setExpiry(null);
      setAuthError(mapErrorToMessage(err));
    }
  }, []);

  const value = useMemo(
    () => ({ token, authError, setToken, refreshToken }),
    [token, authError, refreshToken]
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
