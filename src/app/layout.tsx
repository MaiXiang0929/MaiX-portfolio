import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        {/* --- 插入顶部提示栏开始 --- */}
        {/* fixed 定位确保滚动时提示依然存在，z-50 保证它在渲染层级的最上方 */}
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
          <div className="bg-white/80 backdrop-blur-md border border-pink-200 px-6 py-2 rounded-full shadow-[0_0_15px_rgba(255,182,193,0.5)] pointer-events-auto">
            <p className="text-pink-500 text-sm font-medium whitespace-nowrap">
              If the page takes too long to load, please try using a VPN
            </p>
          </div>
        </div>
        {/* --- 插入顶部提示栏结束 --- */}

        {/* 页面主体内容 */}
        {children}
      </body>
    </html>
  );
}