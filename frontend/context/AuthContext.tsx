"use client";

import React, { createContext, useEffect, useState } from "react";

type AuthContextType = {
  user: unknown;
  setUser: React.Dispatch<React.SetStateAction<object | unknown>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<unknown>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) setToken(localToken);
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));

    if (token) localStorage.setItem("token", token);
  }, [user, token]);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
