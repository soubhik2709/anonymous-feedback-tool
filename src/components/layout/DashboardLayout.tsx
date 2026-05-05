// DashboardLayout(wrapper content)
// import Navbar from "./Navbar";
import Footer from "./Footer";
import LoggedNavbar from "./LoggeNavbar";
// import style from "../../styles/components/layout/DashboardLayout.module.css";
export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div 
    className="min-h-screen flex flex-col bg-slate-100 "
  >   
  <LoggedNavbar/>
      <main className="flex-grow flex flex-col min-h-0 border-2 shadow-2xl">{children}</main>
      <Footer></Footer>
    </div>
  );
};
