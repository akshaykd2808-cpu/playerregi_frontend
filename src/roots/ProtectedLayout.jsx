import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProtectedLayout;
