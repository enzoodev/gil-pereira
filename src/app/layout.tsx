import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { textFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Gil Pereira</title>
      </head>
      <body className={textFont.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
