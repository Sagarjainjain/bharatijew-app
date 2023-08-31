import React from "react";
import "./category_card.css";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ products }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      {products.map((item) => (
        <div
          onClick={() => handleClick(item._id)}
          key={item._id}
          className="categorycard"
        >
          <div className="categorycard-media">
            <img src={item.image} alt="" />
            <div className="categorycard-weight">
              <p>{item.weight} Gram</p>
            </div>
            <div className="categorycard-title">
              <div className="categorycard-title_tag">
                <p>Category</p>
                <p>{item.category}</p>
              </div>
              <div className="categorycard-title_tag">
                <p>Melting</p>
                <p>{item.melting}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
    </>
  );
};

export default CategoryCard;
