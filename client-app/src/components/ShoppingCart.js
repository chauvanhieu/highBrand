import { useEffect, useState } from "react";
import helper from "../utils/helper";

function ShoppingCart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("shoppingCart"))
  );
  let totalPrice = 0;
  if (cart !== null) {
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
  }

  function addQuantity(id) {
    let gioHang = [];
    if (JSON.parse(localStorage.getItem("shoppingCart"))) {
      gioHang = cart;
    } else {
      gioHang = [];
    }
    console.log("Giỏ hàng:", gioHang);
    for (let i = 0; i < gioHang.length; i++) {
      if (gioHang[i].id === id) {
        gioHang[i].quantity++;
      }
    }
    setCart(gioHang);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    reloadCart();
  }

  function removeQuantity(id) {
    let gioHang = [];
    if (JSON.parse(localStorage.getItem("shoppingCart"))) {
      gioHang = cart;
    } else {
      gioHang = [];
    }
    console.log("Giỏ hàng:", gioHang);

    for (let i = 0; i < gioHang.length; i++) {
      if (gioHang[i].id === id) {
        gioHang[i].quantity--;
        if (gioHang[i].quantity === 0) {
          gioHang.splice(i, 1);
        }
      }
    }
    setCart(gioHang);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    reloadCart();
  }

  async function setGioHangTam() {
    const iduser = JSON.parse(localStorage.getItem("user")).id;
    helper.setGioHangTam(iduser);
  }

  useEffect(() => {
    reloadCart();
  }, []);
  function reloadCart() {
    setCart(JSON.parse(localStorage.getItem("shoppingCart")));
  }
  return (
    <section className="h-100 gradient-custom m-5">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">
                  Giỏ hàng : {cart ? cart.length : 0} sản phẩm
                </h5>
              </div>
              <div className="card-body">
                {cart?.map((item) => {
                  return (
                    <div className="row" key={item.id}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        {/* Image */}
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img src={item.image} className="w-100" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{item.name}</strong>
                        </p>
                        <p>{item.description}...</p>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                          <button
                            onClick={() => {
                              removeQuantity(item.id);
                            }}
                            className="btn btn-primary px-3 me-2"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <div className="form-outline">
                            <input
                              value={item.quantity}
                              type="text"
                              disabled={true}
                              className="form-control text-center"
                            />
                            <label
                              className="form-label text-center"
                              htmlFor="form1"
                            >
                              Số lượng
                            </label>
                          </div>
                          <button
                            onClick={() => {
                              addQuantity(item.id);
                            }}
                            className="btn btn-primary px-3 ms-2"
                          >
                            <i className="fas fa-plus" />
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>
                            {(item.quantity * item.price).toLocaleString()} vnđ
                          </strong>
                        </p>
                      </div>
                      <hr className="my-3" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Hóa đơn</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Tổng tiền</strong>
                    </div>
                    <span>
                      <strong>{totalPrice.toLocaleString()} vnđ</strong>
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Gửi đơn đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
