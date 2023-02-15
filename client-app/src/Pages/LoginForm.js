import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import helper from "../utils/helper";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
} from "mdb-react-ui-kit";

function LoginForm() {
  const navigate = useNavigate();
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  async function handleSignIn() {
    if (!username) {
      setMessage("Họ và tên sai");
      return;
    }
    if (!helper.isEmail(email)) {
      setMessage("Email sai");
      return;
    }
    if (!helper.isPhoneNumber(phoneNumber)) {
      setMessage("Số điện thoại sai");
      return;
    }
    if (!address || address.length < 10) {
      setMessage("Địa chỉ sai");
      return;
    }
    if (!helper.isPassword(password)) {
      setMessage("Mật khẩu bắt đầu bằng ký tự in hoa. Độ dài 6-32 ký tự");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Mật khẩu nhập lại không trùng khớp !");
      return;
    }
    setMessage("");

    const user = {
      username: username,
      password: password,
      email: email,
      soDienThoai: phoneNumber,
      address: address,
    };

    const res = await axios.post("http://localhost:4000/user", user);
    console.log("res", res);
    if (res.status === 200) {
      if (res.data === null) {
        setMessage("Email đã tồn tại !");
        return;
      } else {
        alert("Đăng ký thành công !");
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      }
    }
  }

  async function handleLoginClick() {
    const res = await axios.post("http://localhost:4000/login", {
      email: email,
      password: password,
    });

    if (res.status === 200 && res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));

      let gioHang = await helper.getGioHangDTB(res.data.id);

      localStorage.setItem("shoppingCart", JSON.stringify(gioHang));
      navigate("/");
    } else {
      alert("Email và mật khẩu không chính xác !!!");
      localStorage.removeItem("user");
    }
  }
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <Link href="#">Forgot password?</Link>
          </div>
          <center>
            <button className="btn btn-primary" onClick={handleLoginClick}>
              Đăng nhập
            </button>
            <button
              className="btn btn-primary m-4"
              onClick={() => {
                navigate("/");
              }}
            >
              Trở về trang chủ
            </button>
          </center>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <center style={{ color: "red" }}>{message}</center>
          <MDBInput
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            wrapperClass="mb-4"
            label="Tên"
            id="form1"
            type="text"
          />
          <MDBInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            wrapperClass="mb-4"
            label="Email"
            id="form1"
            type="email"
          />
          <MDBInput
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            wrapperClass="mb-4"
            label="Số điện thoại"
            id="form1"
            type="text"
          />
          <MDBInput
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            wrapperClass="mb-4"
            label="Địa chỉ"
            id="form1"
            type="text"
          />
          <MDBInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            wrapperClass="mb-4"
            label="Mật khẩu"
            id="form1"
            type="password"
          />
          <MDBInput
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            wrapperClass="mb-4"
            label="Nhập lại mật khẩu"
            id="form1"
            type="password"
          />
          <button className="btn btn-primary" onClick={handleSignIn}>
            Đăng ký
          </button>
          {/* <MDBBtn className="mb-4 w-100">Sign up</MDBBtn> */}
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default LoginForm;
