import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import MainRootLayout from "./layout/MainRootLayout";
import Shop from "./pages/shop/Shop";
import { ErrorPage } from "./pages/errorpage/ErrorPage";
import { Product } from "./pages/product/Product";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Page from "./pages/page/Page";
import Login from "./pages/login/Login";
import Faq from "./pages/faq/Faq";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainRootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Page />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
