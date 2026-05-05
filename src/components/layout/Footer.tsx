import { Link } from "react-router-dom";
type FooterProps={
  onLogoClick : ()=>void;
}

export default function Footer({onLogoClick}:FooterProps) {
  return (
<footer className="w-full bg-slate-200 py-3 lg:py-8 ">
 <div className="max-w-7xl mx-auto px-4 flex flex-row md:flex-row items-center justify-between gap-4">
        <button
        onClick={onLogoClick}
        className="text-2xl font-bold text-indigo-600 cursor-pointer">FeedIn</button>

        <nav className="flex gap-2.5 md:gap-2 lg:gap-6 text-lg font-semibold text-gray-700">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <a href="/privacy" className="hover:text-indigo-600 transition">Privacy</a>
          <a href="/contact" className="hover:text-indigo-600 transition">Contact</a>
        </nav>

        <p  
        className="text-xs font-semibold text-gray-400 cursor-pointer">© 2026 FeedIn</p>
 </div>
</footer>
  );
}