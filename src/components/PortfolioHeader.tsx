import Link from "next/link";

export default function PortfolioHeader({ detail = false }: { detail?: boolean }) {
  return (
    <header className="portfolio-header">
      <Link href="/" className="portfolio-brand" aria-label="返回作品集首页">
        <span>MX</span>
        <span className="portfolio-brand__name">陶振辉 / Technical Artist</span>
      </Link>
      <nav className="portfolio-nav" aria-label="主要导航">
        {detail ? (
          <Link href="/#work">← 返回项目</Link>
        ) : (
          <>
            <a href="#about">About</a>
            <a href="#work">Work</a>
          </>
        )}
        <Link href="/resume">Resume</Link>
      </nav>
    </header>
  );
}
