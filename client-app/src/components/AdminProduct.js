import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";

function AdminProduct() {
  const [listProduct, setListProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  let items = [];
  const navigate = useNavigate();
  useEffect(() => {
    getListProduct(page);
  }, [page]);
  async function getListProduct(number) {
    const res = await axios.get(
      `http://localhost:4000/product?_page=${number}&_limit=10&_sort=createdAt&_order=desc`
    );
    if (res.status === 200) {
      setListProduct(res.data);
      setTotal(res.data[0].total);
    }
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
