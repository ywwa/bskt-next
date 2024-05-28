import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = { title: "bskt-next" };

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${inter.className} bg-zinc-950 text-white`}>
        {children}
        {modal}
        <div id="modal-root" className="absolute left-0 top-0" />
      </body>
    </html>
  );
}
