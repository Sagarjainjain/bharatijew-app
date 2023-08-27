import React, { useEffect } from "react";
import "./header.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getBanner } from "../../actions/banner";

const Header = () => {
  const banner = useSelector((state) => state.banner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);
  return (
    <div className="header flex__center ">
      <div className="carousel-images">
        <Carousel
          className="carousel-slider-images"
          width="100%"
          dynamicHeight={true}
          swipeable
          autoPlay
        >
          {banner.map((item) => (
            <div key={item._id}>
              <img src={item.bannerimage} alt="data" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
