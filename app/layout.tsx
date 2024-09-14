import { Inter } from "next/font/google";
import "@app/globals.css";

const inter = Inter({
  subsets: ["cyrillic"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

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
      <body className={inter.className}>
        <div className="max-w-screen-xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
