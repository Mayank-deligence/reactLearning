import React from "react";
import contentImage from "../../../images/banner-1.jpg";
const BannerImage = () => {
  return (
    <div class="col-md-7">
      <div class="h-100 m-5">
        <img
          src={contentImage}
          alt="patient-image"
        />
      </div>
    </div>
  );
};

export default BannerImage;

