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
  title: {
    default: "陶振辉 | Technical Artist",
    template: "%s",
  },
  description: "陶振辉的技术美术作品集，关注实时渲染、Shader、NPR 与工具开发。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* 全局网络提示与访问统计。 */}
        <VpnTip />
        <Analytics />

        {children}
      </body>
    </html>
  );
}
