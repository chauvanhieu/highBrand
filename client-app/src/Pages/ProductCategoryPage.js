import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowPost from "../components/ShowPost";
import ShowProductCategory from "../components/ShowProductCategory";

function ProductCategoryPage() {
  return (
    <>
      <Header />
      <ShowProductCategory />
      <ShowPost />
      <Footer />
    </>
  );
}

export default ProductCategoryPage;
