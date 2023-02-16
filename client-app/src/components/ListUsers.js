import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import helper from "../utils/helper";
import { useNavigate } from "react-router-dom";
function ListUsers() {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  let items = [];
  useEffect(() => {
    getListUsers();
  }, [page]);
  async function getListUsers() {
    const res = await axios.get(
      `http://localhost:4000/user?_page=${page}&_sort=isUsing&_order=desc&_limit=10 `
    );
    setTotal(res.data[0].total);
    setListUser(res.data);
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
        style={{ fontSize: 20 }}
        className="text-center"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Khách hàng</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Email</th>
            <th>Ngày tạo</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length &&
            listUser.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td style={{ color: "blue", fontWeight: "bold" }}>
                    {item.username}
                  </td>
                  <td>{item.soDienThoai}</td>
                  <td>{item.address}</td>
                  <td>{item.email}</td>
                  <td>{helper.formatDate(item.createdAt)}</td>
                  {item.isUsing === 0 ? (
                    <td style={{ color: "red" }}>Đã hủy</td>
                  ) : (
                    <td style={{ color: "green" }}>Đang sử dụng</td>
                  )}

                  <td>
                    <button
                      onClick={() => {
                        navigate("/admin/users/" + item.id);
                      }}
                      className="btn btn-primary"
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

export default ListUsers;
