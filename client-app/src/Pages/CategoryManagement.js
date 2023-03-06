import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ListCategory from "../components/ListCategory";

function CategoryManagement() {
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
      <ListCategory />
    </>
  );
}

export default CategoryManagement;
