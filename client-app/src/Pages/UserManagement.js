import Header from "../components/Header";
import ListUsers from "../components/ListUsers";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserManagement() {
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
      <ListUsers />
    </>
  );
}

export default UserManagement;
