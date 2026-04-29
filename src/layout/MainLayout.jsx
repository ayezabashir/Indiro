import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div className="loading">Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MainLayout;
