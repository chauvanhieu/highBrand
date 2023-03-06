import EditProduct from "../components/EditProduct";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function EditProductPage() {
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
      <EditProduct />
    </>
  );
}

export default EditProductPage;
