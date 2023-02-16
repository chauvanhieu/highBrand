import Header from "../components/Header";
import ListUsers from "../components/ListUsers";
import { useNavigate } from "react-router-dom";

function UserManagement() {
  const navigate = useNavigate();
  if (JSON.parse(localStorage.getItem("user")) === null) {
    navigate("/");
  }
  return (
    <>
      <Header />
      <ListUsers />
    </>
  );
}

export default UserManagement;
