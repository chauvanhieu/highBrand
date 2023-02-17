import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function ForgotPassword() {
  const navigate = useNavigate();
  const [isSend, setIsSend] = useState(false);
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [idUser, setIdUser] = useState();

  async function handleConfirmOTP() {
    setImage("https://thumbs.gfycat.com/NecessaryEvilGuillemot-max-1mb.gif");
    const res = await axios.put(
      "http://localhost:4000/forgot-password/" + idUser,
      {
        OTPCode: otp,
      }
    );
    if (
      res.status === 200 &&
      res.data.message &&
      res.data.message === "Thành công"
    ) {
      setImage("");
      setMessage(
        "Đã xác nhận mã OTP. Email và mật khẩu đã được gửi đến email của bạn !"
      );
      setOtp("");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      setImage("");
      setMessage("Mã OTP không đúng");
    }
  }

  async function handleSubmit() {
    if (!email || !email.length) {
      setMessage("Chưa nhập email...");
      return;
    }
    setImage("https://thumbs.gfycat.com/NecessaryEvilGuillemot-max-1mb.gif");
    const res = await axios.post("http://localhost:4000/forgot-password", {
      email: email,
    });

    if (
      res.status === 200 &&
      res.data.isSend &&
      res.data.message === "Mã code xác nhận đã được gửi đến email của bạn."
    ) {
      setIdUser(res.data.iduser);
      setIsSend(true);
      setMessage("");
      setImage("");
    } else if (
      res.status === 200 &&
      res.data.message === "Không tìm thấy tài khoản"
    ) {
      setMessage("Tài khoản không tồn tại !");
      setImage("");
    }
  }

  useEffect(() => {}, [isSend]);

  if (isSend) {
    return (
      <div className="container col-5 mt-5">
        <center>
          <h1>NHẬP MÃ OTP</h1>
        </center>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nhập mã OTP</Form.Label>
            <Form.Control
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              type="text"
              placeholder="Enter OTP"
            />
            <Form.Text className="text-muted">
              Mã OTP đã được gửi đến email của bạn...
            </Form.Text>
          </Form.Group>
          <Button onClick={handleConfirmOTP} variant="primary">
            Xác nhận OTP
          </Button>
          <Button
            className="btn btn-danger ml-3"
            onClick={() => {
              setIsSend(false);
              setMessage("");
              setImage("");
              setEmail("");
              setIdUser("");
            }}
            variant="primary"
          >
            Quay lại
          </Button>
          <>
            <img style={{ height: 30 }} src={image} alt="" />
          </>
          {!message ? (
            <></>
          ) : (
            <>
              <Alert className="mt-4">{message}</Alert>
              <Link style={{ color: "green", fontSize: 20 }} to="/login">
                Trở lại đăng nhập
              </Link>
            </>
          )}
        </Form>
      </div>
    );
  } else {
    return (
      <>
        <div className="container col-5 mt-5">
          <center>
            <h1>LẤY LẠI MẬT KHẨU</h1>
          </center>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => {
                  setMessage("");
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                Mã OTP sẽ được gửi đến email của bạn...
              </Form.Text>
            </Form.Group>
            <Button onClick={handleSubmit} variant="primary">
              Submit
            </Button>
            {!message || image ? (
              <>
                <img style={{ height: 30 }} src={image} alt="" />
              </>
            ) : (
              <Alert variant="danger" className="mt-2">
                {message}
              </Alert>
            )}
          </Form>
        </div>
      </>
    );
  }
}

export default ForgotPassword;
