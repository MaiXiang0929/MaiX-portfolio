"use client";

export default function PrintButton() {
  // 调用浏览器打印面板，用户可在其中选择“另存为 PDF”。
  const handlePrint = () => window.print();

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="cursor-pointer rounded-full border border-[#00ffcc]/50 px-4 py-2 text-[#00ffcc] transition-colors hover:bg-[#00ffcc] hover:text-black"
    >
      导出 PDF
    </button>
  );
}
