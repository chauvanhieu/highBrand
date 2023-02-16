import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import helper from "../utils/helper";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
function ListOrder() {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  let items = [];
  const navigate = useNavigate();

  useEffect(() => {
    getOrders(page);
  }, [page]);

  async function getOrders(page) {
    const res = await axios.get(
      `http://localhost:4000/order?_page=${page}&_limit=10&_sort=createdAt&_order=desc`
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

  async function removeOrder(id) {
    const res = await axios.delete(`http://localhost:4000/order/${id}`);
    getOrders();
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
              <tr key={item.id}>
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
                      navigate("/admin/orders/" + item.id);
                    }}
                    className="btn btn-primary mr-2"
                  >
                    Xem
                  </button>
                  <button
                    onClick={() => {
                      removeOrder(item.id);
                    }}
                    className="btn btn-danger "
                  >
                    Xóa
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

export default ListOrder;
