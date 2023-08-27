import React from "react";
import "./product_card.css"

const ProductCard = ({ productimg, productname, productweight, productid }) => {
  return (
    <div key={productid} className="product-card">
      <div className="product-card_media">
        <img src={productimg} alt={productname} />
      </div>
      <div className="product-card_title">
        <div className="product-card_title-weight">
          <p>{productweight} Gm</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
