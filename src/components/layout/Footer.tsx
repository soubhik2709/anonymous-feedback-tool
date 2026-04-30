
export default function Footer() {
  return (
<footer className="w-full bg-slate-200 py-8">
 <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-2xl font-bold text-indigo-600">FeedIn</span>

        <nav className="flex gap-6 text-lg font-semibold text-gray-700">
          <a href="/" className="hover:text-indigo-600 transition">Home</a>
          <a href="/privacy" className="hover:text-indigo-600 transition">Privacy</a>
          <a href="/contact" className="hover:text-indigo-600 transition">Contact</a>
        </nav>

        <p className="text-xs font-semibold text-gray-400">© 2026 FeedIn</p>
 </div>
</footer>
  );
}