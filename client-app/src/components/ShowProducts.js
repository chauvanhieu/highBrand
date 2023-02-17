import Cards from "./Card";
import Pagination from "react-bootstrap/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

function ShowProducts(props) {
  const [ListProduct, setListProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  let items = [];
  const [api, setApi] = useState(
    `http://localhost:4000/product?_limit=24&_page=${page}&_sort=createdAt&_order=desc`
  );
  useEffect(() => {
    getProduct(page);
  }, [page]);

  async function getProduct(index) {
    const res = await axios.get(
      `http://localhost:4000/product?_limit=24&_page=${index}&_sort=createdAt&_order=desc`
    );
    if (res.status === 200 && res.data) {
      setListProduct(res.data);
    }

    const resTotal = await axios.get("http://localhost:4000/total-product");
    setTotal(resTotal.data.total);
  }
  for (let number = 1; number <= Math.ceil(total / 24); number++) {
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
  if (ListProduct)
    return (
      <div className=" row mt-4">
        <h1 className="text-center">TẤT CẢ SẢN PHẨM</h1>
        {ListProduct?.map((item) => {
          return (
            <Cards
              key={item.id}
              price={item.price}
              id={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          );
        })}

        <br />
        <div className="pagination">
          <Pagination className="item-center">{items}</Pagination>
        </div>
      </div>
    );
}

export default ShowProducts;
