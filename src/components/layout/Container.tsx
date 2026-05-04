import React from "react";
import Navbar from "./PublicNavbar";
// import LoggedNavbar from "./LoggeNavbar";
import Footer from "./Footer";
type ContainerProps = {
  children: React.ReactNode;
};
export default function Container({ children }: ContainerProps) {
  return (
    <div className="min-h-screen bg-slate-200 custom-scrollbar flex flex-col w-full ">
      <Navbar/>
      <main className="flex-grow  mx-auto px-5 lg:px-3 ">
        {children}
      </main>

      <Footer/>
    </div>
  );
}

// how should i use this file? where will it work?
