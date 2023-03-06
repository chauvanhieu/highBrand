import Header from "../components/Header";
import OrderDetail from "../components/OrderDetail";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function DetailOrderPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("user")) === null ||
      JSON.parse(localStorage.getItem("user")).isUsing !== 9
    ) {
      navigate("/");
    }
  });
  return (
    <>
      <Header />
      <OrderDetail />
    </>
  );
}

export default DetailOrderPage;
