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
import { useParams } from "react-router-dom";

export default function OrderDetail() {
  const { id } = useParams();
  const [order, setOrder] = useState();
  useEffect(() => {
    getOrder();
  }, []);
  async function getOrder() {
    const res = await axios.get("http://localhost:4000/order/" + id);
    console.log(res.data);
    setOrder(res.data);
  }
  return (
    <>
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
                      <MDBRow>
                        <MDBCol md="2">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                            fluid
                            alt="Phone"
                          />
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0">Samsung Galaxy</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        ></MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">Đơn giá: 64GB</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">Số lượng: 1</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">$499</p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>

                  <div className="d-flex justify-content-between pt-2">
                    <p className="fw-bold mb-0">Khách hàng : {}</p>
                  </div>

                  <div className="d-flex justify-content-between pt-2">
                    <p className="text-muted mb-0">Số điện thoại : 788152</p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">Địa chỉ : 22 Dec,2019</p>
                  </div>

                  <div className="d-flex justify-content-between mb-5">
                    <p className="text-muted mb-0">Email : 18KU-62IIK</p>
                  </div>
                  <Form.Select className="col-3">
                    <option
                      value={1}
                      style={{
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Đã thanh toán
                    </option>
                    <option
                      value={0}
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      Chưa thanh toán
                    </option>
                  </Form.Select>
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
                    Tổng tiền : <span className="h2 mb-0 ms-2">$1040</span>
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
