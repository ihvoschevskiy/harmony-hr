import { Inter } from "next/font/google";
import "@app/globals.css";
import { cn } from "@shared/utils";
import { ApolloWrapper } from "@shared/utils/apolo/wrapper";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["cyrillic"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "HarmonyHR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn(inter.className, "min-h-lvh")}>
        <div className="max-w-screen-xxl mx-auto">
          <ApolloWrapper>{children}</ApolloWrapper>
        </div>
      </body>
    </html>
  );
}
