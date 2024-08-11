import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

import Menu from "@/components/Menu";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Dog Blog",
  description: "Dog blog for test my skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-slate-50 my-10">
        <header className="max-w-4xl mx-auto flex flex-col pb-4">
          <div className="w-100 justify-center content-center mx-auto text-center flex-col">
            <Link
              href={`/`}
              className="flex justify-center w-[200px] mx-auto flex-col"
            >
              <Logo />
              <h1 className="font-mono font-semibold tracking-tight text-3xl py-3">
                Dogs Blog{" "}
              </h1>
            </Link>
            <Menu />
          </div>
        </header>
        <main className="max-w-4xl mx-auto mb-10">{children}</main>
        <footer className="max-w-4xl mx-auto text-gray-500 text-sm px-5 md:px-0">
          Dog Blog 2024
        </footer>
      </body>
    </html>
  );
}
