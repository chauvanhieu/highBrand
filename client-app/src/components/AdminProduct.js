import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
function AdminProduct() {
  const [listProduct, setListProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [addMode, setAddMode] = useState(false);
  let items = [];
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getCategory();
    getListProduct(page);
  }, [page]);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    desciption: "",
    idCategory: 1,
    image: "",
  });
  async function createProduct() {
    const res = await axios.post("http://localhost:4000/product/", {
      product: product,
    });
    setPage(1);
    setAddMode(false);
    setProduct({
      name: "",
      price: 0,
      desciption: "",
      idCategory: category[0].id,
      image: "",
    });
    getListProduct(page);
  }
  async function getCategory() {
    const res = await axios.get("http://localhost:4000/category");
    setCategory(res.data);
  }
  async function getListProduct(number) {
    const res = await axios.get(
      `http://localhost:4000/product?_page=${number}&_limit=10&_sort=createdAt&_order=desc`
    );
    if (res.status === 200) {
      setListProduct(res.data);
      setTotal(res.data[0].total);
    }
  }

  function onchangeSetProduct(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  for (let number = 1; number <= Math.ceil(total / 10); number++) {
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
      <button
        className={`btn ${
          addMode ? "btn-danger" : "btn-primary"
        } m-3 float-right `}
        onClick={() => {
          setAddMode(addMode ? false : true);
        }}
      >
        {!addMode ? "Thêm sản phẩm mới" : "Thoát"}
      </button>
      {!addMode ? (
        <></>
      ) : (
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

              <button onClick={createProduct} className="btn btn-primary mt-3">
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="pagination">
        <Pagination className="item-center">{items}</Pagination>
      </div>
      <Table
        striped
        bordered
        hover
        className="text-center"
        style={{
          fontSize: 20,
          textAlign: "center",
          justifyContent: "center",
          verticalAlign: "middle",
        }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Hỉnh ảnh</th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Danh mục</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listProduct &&
            listProduct.length > 0 &&
            listProduct.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.image} style={{ width: "8rem" }} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price.toLocaleString()} vnđ</td>
                  <td>{item.category}</td>
                  {item.isUsing === 1 ? (
                    <td style={{ color: "green" }}>Đang bán</td>
                  ) : (
                    <td style={{ color: "red" }}>Ngưng bán</td>
                  )}
                  <td>
                    <button
                      onClick={() => {
                        navigate("/admin/product/" + item.id);
                      }}
                      className="btn btn-primary mr-3"
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
  );
}

export default AdminProduct;
