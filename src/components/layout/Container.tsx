import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
type ContainerProps = {
    children:React.ReactNode;
}
export default function Container({children}:ContainerProps){
    return(
        <div  className="min-h-screen overflow-hidden bg-[#dfcacaa3] custom-scrollbar">
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}

// what is this ?Center column (max-width ~600px)