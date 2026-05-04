import Button from "../ui/Button";
import logo from "../../assets/wave-sound.png";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function LoggedNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-200 py-3 lg:py-5 ">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="FeedIn logo" className="h-7 lg:h-9 w-7 lg:w-9" />
          <span className="text-xl lg:text-2xl font-bold text-indigo-600">
            FeedIn
          </span>
        </a>

        <div className="hidden md:flex gap-6 text-purple-700 font-medium text-xl ">
          <a href="/forms" className="hover:underline">
            NewForms
          </a>
          <a href="/dashboard" className="hover:underline">
            Dashboard
          </a>
          <a href="/docs" className="hover:underline">
            Docs
          </a>
        </div>

        <div className="hidden md:flex gap-3">
          <Button size="md" variant="secondary">
            Logout
          </Button>
        </div>
        <Menu
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* responsive nav bar */}
      <>
        <div
          className={`
    fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
    `}
    onClick={() => setIsOpen(false)}
        />
        {/* drawer */}
        <div
          className={`
    fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg 
    transform transition-transform duration-500 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}
        >
        <div className="p-4 space-y-4">
          <div className="size-9 cursor-pointer">
            <ChevronRight onClick={() => setIsOpen(false)} />
          </div>

          <a href="/features" className="block">
            NewForm
          </a>
          <a href="/dashboard" className="block">
            Dashboard
          </a>
          <a href="/about" className="block">
            Docs
          </a>

          <button className="w-full bg-indigo-600 text-white py-2 rounded">
            Login
          </button>
        </div>

        </div>


      </>
    </nav>
  );
}
