import Cards from "./Card";
import Pagination from "react-bootstrap/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

function ShowProducts() {
  const [ListProduct, setListProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const res = await axios.get(
      "http://localhost:4000/product?_limit=24&_sort=createdAt&_order=desc"
    );
    if (res.status === 200 && res.data) {
      setListProduct(res.data);
    }
  }

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
    </div>
  );
}

export default ShowProducts;
