import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "../../actions/category"
import {useNavigate} from "react-router-dom"
import line from "../../assets/images/line_design.png"
import "./categories.css";
import { useEffect } from "react";

const Categories = () => {
  const category = useSelector((state) => state.category)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])

  const handleClick =(category_name) => { 
    navigate(`/search?category=${category_name}&subcategory=`)
  }
  return (
    <div className="categories flex__center">
      <div className="categories-title">
        <h1>Categories</h1>
        <img src={line} alt="line-design" />
      </div>
        <div className="categories-cards">
      {category.map((item) => (
          <div onClick={() => handleClick(item.category_name)} key={item._id} className="categories-card">
          <img src={item["category_image"]} alt={item.category_name} />
          <p>{item.category_name}</p>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Categories;
