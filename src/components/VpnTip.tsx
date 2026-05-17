"use client"; // 必须声明为客户端组件

import { useState, useEffect } from "react";

export default function VpnTip() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. 设置一个“加载慢”的阈值（比如 3 秒）
    // 如果 3 秒后还没触发 load 事件，就显示提示
    const timer = setTimeout(() => {
      if (document.readyState !== "complete") {
        setIsVisible(true);
      }
    }, 3000);

    // 2. 监听浏览器加载完成事件
    const handleLoad = () => {
      clearTimeout(timer); // 清除定时器
      setIsVisible(false);  // 隐藏提示
    };

    // 如果进入页面时已经加载完了（比如缓存），直接隐藏
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none animate-in fade-in duration-500">
      <div className="bg-white/80 backdrop-blur-md border border-pink-200 px-6 py-2 rounded-full shadow-[0_0_15px_rgba(255,182,193,0.5)] pointer-events-auto">
        <p className="text-pink-500 text-sm font-medium whitespace-nowrap">
          If the page takes too long to load, please try using a VPN
        </p>
      </div>
    </div>
  );
}