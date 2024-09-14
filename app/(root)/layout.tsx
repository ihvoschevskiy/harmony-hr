import { Header } from "@widgets/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HarmonyHR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
