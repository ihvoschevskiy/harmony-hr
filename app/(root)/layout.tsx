"use client";

import { Header } from "@widgets/Header";
import { useUserStore } from "@shared/store/user/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const user = useUserStore(({ user }) => user);
  const fetchUser = useUserStore(({ fetchUser }) => fetchUser);

  useEffect(() => {
    if (!user) fetchUser(router.push);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) return null;

  return (
    <>
      <Header />
      {children}
    </>
  );
}
