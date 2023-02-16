import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ListOrder from "../components/ListOrder";

function OrderManagerment() {
  const navigate = useNavigate();
  if (JSON.parse(localStorage.getItem("user")) === null) {
    navigate("/");
  }
  return (
    <>
      <Header />
      <ListOrder />
    </>
  );
}

export default OrderManagerment;
