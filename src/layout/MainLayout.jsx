import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Loader from "./Loader";

const MainLayout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </>
  );
};

export default MainLayout;
