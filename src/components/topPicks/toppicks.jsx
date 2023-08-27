import React, {useEffect} from "react";
import "./toppicks.css";
import line from "../../assets/images/line_design.png";
import { useSelector, useDispatch } from "react-redux";
import {gettoppost} from "../../actions/toppost"
import ProductCard from "../../widgets/productcard/product_card";



const TopPicks = () => {
      const toppost = useSelector((state) => state.toppost);
      const dispatch = useDispatch();

           useEffect(() => {
             dispatch(gettoppost());
           }, [dispatch]);
  return (
    <div className="toppicks-container flex__center section__padding">
      <div  className="toppicks-container-title">
        <h1>Our Top Picks</h1>
        <img src={line} alt="line" />
      </div>
      <div className="toppicks-container-footer">
        {toppost.map((item) => (
          <ProductCard key={item._id} productimg={item.image} productname={item.jewellery_name} productweight={item.weight} productid={item.id} />
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
