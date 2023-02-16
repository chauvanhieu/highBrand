import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [category, setCategory] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  async function getCategory() {
    const res = await axios.get("http://localhost:4000/category");
    setCategory(res.data);
  }

  async function getProduct() {
    const res = await axios.get("http://localhost:4000/product/" + id);
    if (res.status === 200) {
      setProduct(res.data);
    }
  }
  async function handleUpdate() {
    setMessage("Cập nhật thành công !");
    const res = await axios.put("http://localhost:4000/product/" + product.id, {
      product: product,
    });
    setTimeout(() => {
      setMessage("");
      navigate("/admin/product");
    }, 1000);
  }
  function onchangeSetProduct(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  if (product)
    return (
      <div className="container row mt-5">
        <div className="image col-6">
          <img src={product.image} style={{ width: "100%" }} alt="" />
        </div>
        <div className="info col-6">
          <MDBInput
            onChange={(e) => onchangeSetProduct(e)}
            id="typeText"
            className="mb-3"
            type="text"
            name="name"
            placeholder="Tên sản phẩm"
            value={product.name}
          />
          <MDBInput
            onChange={(e) => onchangeSetProduct(e)}
            id="typeText"
            className="mb-3"
            type="text"
            placeholder="Giá sản phẩm"
            name="price"
            value={product.price}
          />
          <MDBInput
            onChange={(e) => onchangeSetProduct(e)}
            id="typeText"
            className="mb-3"
            type="text"
            placeholder="URL hình ảnh"
            name="image"
            value={product.image}
          />
          <MDBTextArea
            onChange={(e) => onchangeSetProduct(e)}
            className="mb-3"
            id="textAreaExample"
            name="description"
            rows={4}
            placeholder="Mô tả sản phẩm"
            value={product.description}
          />
          <div className="container row">
            <div className="col-5">
              <Form.Select
                onChange={(e) => {
                  setProduct({
                    ...product,
                    idCategory: Number(e.target.value),
                  });
                }}
                aria-label="Default select example"
                name="idCategory"
                value={product.idCategory}
              >
                {category &&
                  category.length &&
                  category.map((item) => {
                    return <option value={item.id}>{item.name}</option>;
                  })}
              </Form.Select>
            </div>
            <div className="col-4">
              <Form.Select
                onChange={(e) => {
                  setProduct({ ...product, isUsing: Number(e.target.value) });
                }}
                aria-label="Default select example"
                value={product.isUsing}
              >
                <option
                  style={{ color: "green", fontWeight: "bold" }}
                  value={1}
                >
                  Đang bán
                </option>
                <option style={{ color: "red", fontWeight: "bold" }} value={0}>
                  Ngưng bán
                </option>
              </Form.Select>
            </div>
            <button onClick={handleUpdate} className="btn btn-primary mt-3">
              Lưu
            </button>
            {!message ? <></> : <Alert>{message}</Alert>}
          </div>
        </div>
      </div>
    );
}

export default EditProduct;
