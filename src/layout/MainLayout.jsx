import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Header2 from "../components/header/Header2";

const MainLayout = () => {
  return (
    <>
      <Header />
  
      <main>
        <Suspense fallback={<div className="loading">Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
