import React, { useEffect } from "react";
import "./product_details.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsbyId } from "../../actions/products";
import whatsapp from "../../assets/images/WhatsAppicon.jpg";

const ProductDetails = () => {
  const productid = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsbyId(productid.id));
  }, [dispatch, productid.id]);

  const handlesubmit = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=919833231301&text=Hey!%20I%20have%20seen%20on%20your%20website%2C%20Can%20you%20let%20know%20it%27s%20price%20and%20any%20offers%20related%20to%20it.%0A%0A%0A%0Ahttps%3A%2F%2Fbharatijewellers.netlify.app%2Fproduct%2F${product._id}`
    );
  };
  return (
    <>
      <div className="productdetails-navbar flex__center section__padding">
        <h1>Bharati Jewellers</h1>
      </div>
      <div className="productdetails  flex__center">
        <div className="productdetails_media">
          <img src={product.image} alt="necklace" />
        </div>
      </div>
      <div className="productdetails-footer_container flex__center section__padding">
        <div className="productdetails-title_weight">
          <p>Weight</p>
          <p>{product.weight} Grams</p>
        </div>
        <div className="productdetails-footer ">
          <div className="productdetails-title">
            <p>Category</p>
            <p>{product.category}</p>
          </div>
          <div className="productdetails-title">
            <p>Melting</p>
            <p>{product.melting}</p>
          </div>
        </div>
        <div className="productdetails-title_subcategory">
          <p>Sub-Catgeory</p>
          <p>{product.subcategory} </p>
        </div>

        <div onClick={handlesubmit} className="productdetails-whatsapp">
          <div className="productdetails-whatsapp_media">
            <img src={whatsapp} alt="" />
          </div>
          <div className="productdetails-whatsapp_title">
            <p>Get Connect with us on What's App</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
