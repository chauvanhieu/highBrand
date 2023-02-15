import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShoppingCart from "../components/ShoppingCart";

function CartPage() {
  const [isCart, setIsCart] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <Header />
      <ShoppingCart />
      <Footer />
    </>
  );
}

export default CartPage;
