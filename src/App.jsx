import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import { About } from "./pages/About";
import Secret from "./pages/Secret";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="secret" element={<Secret />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App