import React from "react";
import img_1 from "../../assets/images/aboutus_1.jpg";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container flex__center section__padding">
      <div className="aboutus-container_title">
        <h1>About Us</h1>
      </div>
      <div className="aboutus-container_main">
        {/* <div className="aboutus-container_card-border-second" /> */}
        <div className="aboutus-container_card">
          <div className="aboutus-container_card-border" />
          <img src={img_1} alt="" />
        </div>
        <article className="article">
          <p>
            Welcome to Bharati Jewellers Dharavi , a premier destination for
            exquisite gold jewelry that has been a cornerstone of elegance and
            craftsmanship since 2000. For the past 20+ years,
            we have been curating and offering an unparalleled selection of gold
            jewelry pieces that reflect the essence of beauty, tradition, and
            innovation.
          </p>
          {/* <div className="article_profiles">
            <div className="article_profile-1">
              <div className="article_profile_media">
                <img
                  src="https://t3.ftcdn.net/jpg/05/90/59/88/240_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg"
                  alt=""
                />
              </div>
              <div className="article_profile_title">
                <h3>Suresh Chandanmal Jain</h3>
                <p>Owner</p>
              </div>
            </div>
            <div className="article_profile-2">
              <div className="article_profile_media">
                <img
                  src="https://t3.ftcdn.net/jpg/05/90/59/88/240_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg"
                  alt=""
                />
              </div>
              <div className="article_profile_title">
                <h3>kishor Chandanmal Jain</h3>
                <p>Owner</p>
              </div>
            </div>
          </div> */}
        </article>
      </div>
    </div>
  );
};

export default AboutUs;
