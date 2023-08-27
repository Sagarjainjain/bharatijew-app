import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {getlivegoldrate} from "../../actions/liverate"
import "./goldrate.css";

const GoldRate = () => {
    const goldrate = useSelector((state) => state.goldrate);
    const dispatch = useDispatch();


      useEffect(() => {
        dispatch(getlivegoldrate());
      }, [dispatch]);
  return (
    <div className="goldRate-container flex__center section__padding">
      <div className="gold-rate-title">
        <h1>Gold and Silver Rate</h1>
      </div>
      <div className="goldrate-card">
        <div className="goldrate-card_header">
          <h2>Today's Rate</h2>
        </div>
        <div className="goldrate-card_rate">
          <div className="goldrate-card_rate-type">
            <h3>Melting</h3>
            <p>75 (HallMark)</p>
            <p>916 (HallMark)</p>
          </div>
          <div className="goldrate-card_rate-live-rate">
            <h3>Live Gold Rate</h3>
            <p>{goldrate.map((item) => item["goldRateofseven"])}/10gm</p>
            <p>{goldrate.map((item) => item["goldRateofnine"])}/10gm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldRate;
