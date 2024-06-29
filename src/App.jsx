import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home/Home";
import SinglePage from "./pages/single-page/SinglePage";
import Wishlist from "./pages/wishlist/Wishlist";
import Login from "./pages/login/Login";
import Auth from "./components/auth/Auth";
import Admin from "./pages/admin/Admin";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<SinglePage />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
