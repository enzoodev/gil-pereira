import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import WhatsAppButton from "../components/WhatsAppButton";
import { name } from "../constants/name";
import { textFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: name,
  description: "Mental Health Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </head>
      <body className={textFont.className}>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer /> 
        <Analytics />
      </body>
    </html>
  );
}
