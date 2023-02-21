import Header from "../components/Header";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBProgress,
  MDBProgressBar,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function ControlOrderProfile() {
  const { id } = useParams();
  const [order, setOrder] = useState();
  const [isPay, setIsPay] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getOrder();
  }, []);
  async function removeOrder() {
    if (window.confirm("Bạn muốn xóa đơn hàng ?") === true) {
      const res = await axios.delete(`http://localhost:4000/order/${order.id}`);
      navigate("/profile");
    }
  }
  async function getOrder() {
    const res = await axios.get("http://localhost:4000/order/" + id);
    setOrder(res.data);
    console.log("hóa đơn", order);
    setIsPay(res.data.isPay === true ? Number(1) : Number(0));
  }
  async function updateIsPay() {
    const res = await axios.put(
      "http://localhost:4000/statusorder/" + order.id,
      { isPay: isPay === 1 ? 0 : 1 }
    );
    setIsPay(isPay === 1 ? 0 : 1);
  }
  return (
    <>
      <Header />

      <section
        className="h-100 gradient-custom"
        style={{ backgroundColor: "#eee" }}
      >
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="10" xl="8">
              <MDBCard style={{ borderRadius: "10px" }}>
                <MDBCardHeader className="px-4 py-5">
                  <MDBTypography tag="h5" className="text-muted mb-0">
                    CHI TIẾT HÓA ĐƠN
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p
                      className="lead fw-normal mb-0"
                      style={{ color: "#a8729a" }}
                    >
                      Sản phẩm:
                    </p>
                  </div>

                  <MDBCard className="shadow-0 border mb-4">
                    <MDBCardBody>
                      {order &&
                        order.details &&
                        order.details?.map((item, index) => {
                          return (
                            <MDBRow key={index} className="m-2">
                              <MDBCol md="2">
                                <MDBCardImage
                                  src={item.image}
                                  fluid
                                  alt="Phone"
                                />
                              </MDBCol>
                              <MDBCol
                                md="2"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0">{item.name}</p>
                              </MDBCol>
                              <MDBCol
                                md="1"
                                className="text-center d-flex justify-content-center align-items-center"
                              ></MDBCol>
                              <MDBCol
                                md="3"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0 small">
                                  Đơn giá: {item.price.toLocaleString()} vnđ
                                </p>
                              </MDBCol>
                              <MDBCol
                                md="2"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0 small">
                                  Số lượng: {item.quantity}
                                </p>
                              </MDBCol>
                              <MDBCol
                                md="2"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0 small">
                                  {(
                                    item.quantity * item.price
                                  ).toLocaleString()}{" "}
                                  vnđ
                                </p>
                              </MDBCol>
                            </MDBRow>
                          );
                        })}
                    </MDBCardBody>
                  </MDBCard>
                  {!order ? (
                    <></>
                  ) : (
                    <>
                      {" "}
                      <div className="d-flex justify-content-between pt-2">
                        <p className="fw-bold mb-0">
                          Khách hàng : {order.username}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between pt-2">
                        <p className="text-muted mb-0">
                          Số điện thoại : {order.soDienThoai}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-muted mb-0">
                          Địa chỉ : {order.address}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between mb-5">
                        <p className="text-muted mb-0">Email : {order.email}</p>
                      </div>
                    </>
                  )}

                  {order && order.isPay ? (
                    <>Thank iu</>
                  ) : (
                    <>
                      <button onClick={removeOrder} className="btn btn-danger">
                        Hủy đơn hàng
                      </button>
                    </>
                  )}
                </MDBCardBody>
                <MDBCardFooter
                  className="border-0 px-4 py-5"
                  style={{
                    backgroundColor: "#a8729a",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <MDBTypography
                    tag="h5"
                    className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                  >
                    <button
                      onClick={() => {
                        navigate("/profile/");
                      }}
                      className="btn btn-info"
                    >
                      Back
                    </button>
                    {!order ? (
                      <></>
                    ) : (
                      <>
                        <span className="h2 mb-0 ms-2">
                          {order.totalPrice.toLocaleString()} vnđ
                        </span>
                      </>
                    )}
                  </MDBTypography>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default ControlOrderProfile;
