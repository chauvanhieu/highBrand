import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";

function ListCategory() {
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [editRow, setEditRow] = useState(999999);
  const [total, setTotal] = useState();
  const [createMode, setCreateMode] = useState(false);
  let items = [];
  const navigate = useNavigate();
  useEffect(() => {
    getListCategory(page);
  }, [page]);
  async function getListCategory(page) {
    const res = await axios.get(
      `http://localhost:4000/category?_page=${page}&_limit=10&_sort=id&_order=desc`
    );
    setCategory(res.data);
    setTotal(res.data[0].total);
  }
  async function updateCategory(id, newname, newisusing) {
    const res = await axios.put("http://localhost:4000/category/" + id, {
      name: newname,
      isusing: newisusing,
    });
  }
  async function createCategory() {
    const res = await axios.post("http://localhost:4000/category", {
      name: document.getElementById("newCategoryName").value,
      isusing: 1,
    });
    setCreateMode(false);
    getListCategory(page);
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
        onClick={() => {
          setCreateMode(createMode ? false : true);
        }}
        className={`btn ${
          createMode ? "btn-danger" : "btn-primary"
        } float-right m-4`}
      >
        {createMode ? "Thoát" : "Thêm danh mục mới"}
      </button>
      <br />
      <br />
      <br />
      {!createMode ? (
        <></>
      ) : (
        <div className="col-3 float-right">
          <MDBInput
            id="newCategoryName"
            className="mb-3"
            type="text"
            name="name"
            placeholder="Tên danh mục"
          />
          <button
            onClick={createCategory}
            className="btn btn-primary float-right"
          >
            Lưu
          </button>
        </div>
      )}
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
            <th>Danh mục sản phẩm</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {category &&
            category.map((item, index) => {
              if (editRow === index) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <MDBInput
                        id={`categoryName${index}`}
                        className="mb-3"
                        type="text"
                        name="name"
                        placeholder={item.name}
                      />
                    </td>
                    <td>
                      <Form.Select
                        id={`categoryIsuing${index}`}
                        aria-label="Default select example"
                        name="idCategory"
                      >
                        <option value={1}>Đang sử dụng</option>
                        <option value={0}>Ngưng sử dụng</option>
                      </Form.Select>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          updateCategory(
                            item.id,
                            document.getElementById(`categoryName${index}`)
                              .value,
                            document.getElementById(`categoryIsuing${index}`)
                              .value
                          );
                          setEditRow(999999);
                          setPage(page);
                          getListCategory(page);
                        }}
                        className="btn btn-primary"
                      >
                        Cập nhật
                      </button>
                    </td>
                  </tr>
                );
              }
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    {item.isusing === 1 ? "Đang sử dụng" : "Ngưng sử dụng"}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setEditRow(index);
                        getListCategory(page);
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

export default ListCategory;
