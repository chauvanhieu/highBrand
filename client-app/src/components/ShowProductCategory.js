import Cards from "./Card";
import Pagination from "react-bootstrap/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ShowProducts() {
  const [ListProduct, setListProduct] = useState([]);
  const { idCategory } = useParams();
  const [category, setCategory] = useState();
  useEffect(() => {
    getProduct();
    getCategory();
  });
  async function getCategory() {
    const res = await axios.get(`http://localhost:4000/category/${idCategory}`);
    if (res.status === 200 && res.data) {
      setCategory(res.data[0]);
    }
  }
  async function getProduct() {
    const res = await axios.get(
      `http://localhost:4000/product?_limit=24&_categoryId=${idCategory}&_sort=createdAt&_order=desc`
    );
    if (res.status === 200 && res.data) {
      setListProduct(res.data);
    }
  }

  return (
    <div className=" row mt-4 mb-5">
      <h1 className="text-center">
        {ListProduct.length > 0 ? "TẤT CẢ SẢN PHẨM" : " CHƯA CÓ SẢN PHẨM NÀO"}
      </h1>
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
