"use client";

import { Header } from "@widgets/Header";
import { useUserStore } from "@shared/store/user/store";
import { useAuth } from "@shared/hooks/useAuth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useUserStore(({ user }) => user);
  useAuth(user);

  if (!user) return null;

  return (
    <>
      <Header />
      {children}
    </>
  );
}
