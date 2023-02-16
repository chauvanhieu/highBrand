import EditProduct from "../components/EditProduct";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function EditProductPage() {
  const navigate = useNavigate();
  if (JSON.parse(localStorage.getItem("user")) === null) {
    navigate("/");
  }
  return (
    <>
      <Header />
      <EditProduct />
    </>
  );
}

export default EditProductPage;
