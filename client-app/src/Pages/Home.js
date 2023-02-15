import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowPost from "../components/ShowPost";
import ShowProducts from "../components/ShowProducts";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <ShowProducts />
      <ShowPost />
      <Footer />
    </>
  );
}

export default HomePage;
