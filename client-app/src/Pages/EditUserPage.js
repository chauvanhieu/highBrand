import EditUser from "../components/EditUser";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function EditUserPage() {
  const navigate = useNavigate();
  if (JSON.parse(localStorage.getItem("user")) === null) {
    navigate("/");
  }
  return (
    <>
      <Header />
      <EditUser />
    </>
  );
}

export default EditUserPage;
