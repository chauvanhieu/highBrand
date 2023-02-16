import { useNavigate } from "react-router-dom";
function EditAdminPage() {
  const navigate = useNavigate();
  if (JSON.parse(localStorage.getItem("user")) === null) {
    navigate("/");
  }
  return <>he</>;
}

export default EditAdminPage;
