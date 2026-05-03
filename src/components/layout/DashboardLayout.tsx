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
    className=""
  >
     
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};
