import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ListOrder from "../components/ListOrder";

function OrderManagerment() {
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
      <ListOrder />
    </>
  );
}

export default OrderManagerment;
