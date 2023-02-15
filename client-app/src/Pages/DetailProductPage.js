import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import DetailProduct from "../components/DetailProduct";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowPost from "../components/ShowPost";

function DetailProductPage() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <Banner />
      <DetailProduct />
      <ShowPost />
      <Footer />
    </>
  );
}

export default DetailProductPage;
