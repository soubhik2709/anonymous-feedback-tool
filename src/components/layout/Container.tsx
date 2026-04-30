import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
type ContainerProps = {
  children: React.ReactNode;
};
export default function Container({ children }: ContainerProps) {
  return (
    <div className="min-h-screen bg-slate-200 custom-scrollbar flex flex-col ">
      <Navbar />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        {children}
      </main>

      <Footer/>
    </div>
  );
}

// how should i use this file? where will it work?
