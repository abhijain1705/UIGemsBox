"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pro Frontend Developer",
  description: "Become a Pro Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
