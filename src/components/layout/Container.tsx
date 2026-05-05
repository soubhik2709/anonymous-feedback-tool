import React from "react";
import Navbar from "./PublicNavbar";
import Footer from "./Footer";
type ContainerProps = {
  onLogoClick:()=>void;
  onGuideClick:()=>void;
  children: React.ReactNode;
};

export default function Container({ children,onGuideClick,onLogoClick }: ContainerProps) {
  return (
    <div className="min-h-screen bg-slate-200 custom-scrollbar flex flex-col w-full ">
      <Navbar onguideClick={ onGuideClick}/>
      <main className="flex-grow  mx-auto px-5 lg:px-3 ">
        {children}
      </main>

      <Footer onLogoClick={onLogoClick}/>
    </div>
  );
}

// how should i use this file? where will it work?
