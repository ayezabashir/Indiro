import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Loader from "./Loader";
import Header2 from "../components/header/Header2";

const MainLayout = () => {
  return (
    <>
      {/* Header hamesha visible rahega */}
      {/* <Header /> */}
<Header2 />
      <main className="min-h-screen">
        {/* Suspense sirf Outlet (dynamic pages) ko handle karega */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer hamesha bottom par rahega */}
      <Footer />
    </>
  );
};

export default MainLayout;