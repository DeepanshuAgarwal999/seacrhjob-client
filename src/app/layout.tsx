import type { Metadata } from "next";
import { Inter,Noto_Sans } from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SearchJob.com",
  description: "A portal where you find endless opportunity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>{children}</body>
    </html>
  );
}
