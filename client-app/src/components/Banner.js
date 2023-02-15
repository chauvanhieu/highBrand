import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
export default function Banner() {
  const [index, setIndex] = useState(0);
  const [banners, setBanners] = useState([]);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    getBanner();
  }, []);
  async function getBanner() {
    const res = await axios.get("http://localhost:4000/banner");
    setBanners(res.data);
  }
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {banners?.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img className="d-block w-100" src={item.url} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
