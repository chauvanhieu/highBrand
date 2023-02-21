import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import helper from "../utils/helper";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
function Profile() {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [infoMode, setInfoMode] = useState(false);
  let items = [];

  const [message, setMessage] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    getOrders(page);
  }, [page]);
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

    const res = await axios.put("http://localhost:4000/user/" + user.id, {
      user: user,
    });
  }
  async function getOrders(page) {
    const res = await axios.get(
      `http://localhost:4000/order/?iduser=${user.id}&_page=${page}&_limit=10&_sort=createdAt&_order=desc`
    );
    setOrders(res.data);
    setTotal(res.data[0].total);
  }

  for (let number = 1; number <= Math.ceil(total / 12); number++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          setPage(number);
        }}
        key={number}
        active={number === page}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <>
        {infoMode ? (
          <button
            onClick={() => {
              setInfoMode(infoMode ? false : true);
            }}
            className="btn btn-primary float-right m-4"
          >
            Xem lịch sử mua hàng
          </button>
        ) : (
          <button
            onClick={() => {
              setInfoMode(infoMode ? false : true);
            }}
            className="btn btn-primary float-right m-4"
          >
            Thông tin tài khoản
          </button>
        )}
        {infoMode ? (
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

              <Button onClick={handleUpdate} className="m-4" variant="primary">
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
        ) : (
          <>
            <div className="pagination">
              <Pagination className="item-center">{items}</Pagination>
            </div>
            <Table
              striped
              bordered
              hover
              size="sm"
              className="text-center"
              style={{ fontSize: 20 }}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Khách hàng</th>
                  <th>Số điện thoại</th>
                  <th>Địa chỉ</th>
                  <th>Thời gian</th>
                  <th>Tổng hóa đơn</th>
                  <th>Trạng thái</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td style={{ fontWeight: "bold", color: "blue" }}>
                        {item.username}
                      </td>
                      <td>{item.soDienThoai}</td>
                      <td>{item.address}</td>
                      <td>{helper.formatDate(item.createdAt)}</td>
                      <td>{item.totalPrice.toLocaleString()}</td>
                      {item.isPay === 1 ? (
                        <td style={{ color: "green" }}>Đã thanh toán</td>
                      ) : (
                        <td style={{ color: "red" }}>Chưa thanh toán</td>
                      )}
                      <td className="">
                        <button
                          onClick={() => {
                            navigate("/profile/order/" + item.idOrder);
                          }}
                          className="btn btn-primary mr-2"
                        >
                          Xem
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </>
        )}
      </>
    </>
  );
}

export default Profile;
