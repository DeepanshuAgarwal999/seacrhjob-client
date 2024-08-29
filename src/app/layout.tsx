import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/providers/SessionProvider";
import { cn } from "@/lib/utils";

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
    <html lang="en" suppressHydrationWarning>
      <SessionProvider>
        <body className={cn(noto_sans.className,"antialiased min-h-screen bg-[#faf8f9]")}>{children}</body>
      </SessionProvider>
    </html>
  );
}
