// DashboardLayout(wrapper content)
// import Navbar from "./Navbar";
import Footer from "./Footer";
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
      <main className="flex-grow flex flex-col min-h-0">{children}</main>
      <Footer></Footer>
    </div>
  );
};
