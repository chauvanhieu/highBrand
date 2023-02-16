import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import axios from "axios";
import helper from "../utils/helper";
function EditUser() {
  const [message, setMessage] = useState();
  const { id } = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    getUser();
  }, []);
  async function getUser() {
    const res = await axios.get("http://localhost:4000/user/" + id);
    setUser(res.data[0]);
  }
  function onchangeSetUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  async function handleUpdate() {
    if (!user.username) {
      setMessage("Họ và tên sai");
      return;
    }
    if (!helper.isEmail(user.email)) {
      setMessage("Email sai");
      return;
    }
    if (!helper.isPhoneNumber(user.soDienThoai)) {
      setMessage("Số điện thoại sai");
      return;
    }
    if (!user.address || user.address.length < 10) {
      setMessage("Địa chỉ sai");
      return;
    }
    if (!helper.isPassword(user.password)) {
      setMessage("Mật khẩu bắt đầu bằng ký tự in hoa. Độ dài 6-32 ký tự");
      return;
    }
    setMessage("");

    const res = await axios.put("http://localhost:4000/user/" + id, {
      user: user,
    });
  }
  if (user)
    return (
      <>
        <Form className="container col-5 mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tên đầy đủ</Form.Label>
            <Form.Control
              onChange={(e) => {
                onchangeSetUser(e);
              }}
              name="username"
              type="text"
              value={user.username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              onChange={(e) => {
                onchangeSetUser(e);
              }}
              name="soDienThoai"
              type="text"
              value={user.soDienThoai}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              onChange={(e) => {
                onchangeSetUser(e);
              }}
              name="address"
              type="text"
              value={user.address}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email (Dùng để đăng nhập)</Form.Label>
            <Form.Control
              onChange={(e) => {
                onchangeSetUser(e);
              }}
              name="email"
              type="text"
              value={user.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              onChange={(e) => {
                onchangeSetUser(e);
              }}
              name="password"
              type="text"
              value={user.password}
            />
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            value={user.isUsing}
            onChange={(e) => {
              setUser({ ...user, isUsing: e.target.value });
            }}
          >
            <option style={{ color: "green", fontWeight: "bold" }} value={1}>
              Đang sử dụng
            </option>
            <option style={{ color: "red", fontWeight: "bold" }} value={0}>
              Đã hủy
            </option>
          </Form.Select>
          <Button onClick={handleUpdate} variant="primary">
            Cập nhật
          </Button>
          {!message ? (
            <></>
          ) : (
            <span>
              <Alert
                variant="danger"
                style={{
                  color: "red",
                  width: "max-content",
                  display: "inline-block",
                  marginLeft: 50,
                  marginTop: 5,
                }}
              >
                {message}
              </Alert>
            </span>
          )}
        </Form>
      </>
    );
}

export default EditUser;
