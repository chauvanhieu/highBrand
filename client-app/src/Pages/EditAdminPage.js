import { useNavigate } from "react-router-dom";
function EditAdminPage() {
  const navigate = useNavigate();
  if (
    JSON.parse(localStorage.getItem("user")) === null ||
    JSON.parse(localStorage.getItem("user")).isUsing !== 9
  ) {
    navigate("/");
  }
  return <>he</>;
}

export default EditAdminPage;
