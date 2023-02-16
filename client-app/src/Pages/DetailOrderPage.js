import Header from "../components/Header";
import OrderDetail from "../components/OrderDetail";
import { useNavigate } from "react-router-dom";

function DetailOrderPage() {
  const navigate = useNavigate();
  if (JSON.parse(localStorage.getItem("user")) === null) {
    navigate("/");
  }
  return (
    <>
      <Header />
      <OrderDetail />
    </>
  );
}

export default DetailOrderPage;
