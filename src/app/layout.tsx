import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VpnTip from "@/components/VpnTip"; // 引入VpnTip组件
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MaiX's Portfolio", 
  description: "Technical Artist Portfolio - Focusing on Rendering & Pipeline", // 建议同步更新描述
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <VpnTip />  // 在全局布局中引入VpnTip组件
        <Analytics /> // 添加 Vercel Analytics 组件 

        {children}
      </body>
    </html>
  );
}