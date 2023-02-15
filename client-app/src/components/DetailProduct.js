import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import helper from "../utils/helper";
function DetailProduct() {
  let { id } = useParams();
  let [product, setProduct] = useState();
  useEffect(() => {
    getProduct();
  }, []);

  function addToCart() {
    helper.addToCart(product, JSON.parse(localStorage.getItem("user")).id);
  }

  async function getProduct() {
    try {
      const res = await axios.get("http://localhost:4000/product/" + id);
      if (res.status === 200 && res) {
        setProduct(res.data);
      }
    } catch (err) {
      throw err;
    }
  }
  if (product) {
    return (
      <div className="container row m-5">
        <div className="col-5">
          <img style={{ width: "100%" }} src={product.image} alt="" />
        </div>
        <div className="col-7">
          <center>
            <h2 className="mb-4 p-2">THÔNG TIN SẢN PHẨM</h2>
          </center>
          <h1
            style={{
              fontSize: 50,
              color: "Highlight",
              marginBottom: 30,
            }}
          >
            {product.name}
          </h1>
          <h4
            style={{
              fontSize: 20,
              color: "black",
            }}
          >
            Mô tả :<br /> {product.description}
          </h4>
          <h3
            style={{
              fontSize: 25,
              color: "red",
            }}
          >
            Giá : {product.price.toLocaleString()} vnđ
          </h3>
          <button onClick={addToCart} className="btn btn-primary">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default DetailProduct;
