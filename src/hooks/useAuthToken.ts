"use client";
import { useState, useEffect, useCallback } from "react";

type TokenResponse = {
  accessToken: string;
  expiresIn: number; 
};

export function useAuthToken() {
  const [token, setToken] = useState<string | null>(null);
  const [expiry, setExpiry] = useState<number | null>(null);

  const fetchNewToken = useCallback(async () => {
    try {
      // السيرفر هيشوف الـsession cookie HttpOnly ويولد توكن
      const res = await fetch("/api/auth/refresh", { credentials: "include" });
      if (!res.ok) throw new Error("Refresh failed");
      const data: TokenResponse = await res.json();
      setToken(data.accessToken);
      setExpiry(Date.now() + data.expiresIn * 1000);
    } catch (err) {
      console.error("Error refreshing token:", err);
      setToken(null);
      setExpiry(null);
    }
  }, []);

  useEffect(() => {
    // أول ما الصفحة تفتح حاول تجيب توكن جديد
    if (!token) fetchNewToken();
  }, [token, fetchNewToken]);

  useEffect(() => {
    if (!expiry) return;

    // احسب قد ايه باقي لانتهاء التوكن
    const now = Date.now();
    const refreshTime = expiry - now - 30_000; // قبل الانتهاء بـ30 ثانية

    if (refreshTime > 0) {
      const id = setTimeout(fetchNewToken, refreshTime);
      return () => clearTimeout(id);
    } else {
      // لو خلص بالفعل
      fetchNewToken();
    }
  }, [expiry, fetchNewToken]);

  return { token, refreshToken: fetchNewToken };
}
