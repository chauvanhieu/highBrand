import AdminProduct from "../components/AdminProduct";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function ProductManagement() {
  const navigate = useNavigate();
  if (JSON.parse(localStorage.getItem("user")) === null) {
    navigate("/");
  }
  return (
    <>
      <Header />
      <AdminProduct />
    </>
  );
}

export default ProductManagement;
