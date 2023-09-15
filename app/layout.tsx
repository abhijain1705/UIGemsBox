"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pro Frontend Developer",
  description: "Become a Pro Frontend Developer",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <title>UI Gem Box</title>
      </Head>
      <body className={inter.className}>
        <ProgressBar
          height="4px"
          color="#7a62f6"
          options={{ showSpinner: false }}
          shallowRouting
        />
        {children}
      </body>
    </html>
  );
}
