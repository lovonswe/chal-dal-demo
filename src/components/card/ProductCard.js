import React from "react";
import '../../style/ProductCardStyle.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';


const cardContainer = {
  height: "300px",
  width: "200px",
  boxShadow: "3px 3px 16px 7px rgba(128, 122, 124, 0.35)"
}
function ProductCard() {

  const amount = 100899999;
  const measurement = "10kg";
  const productTitle = "Junior is a person who is smaller in age so what do you think is it write to"
  return (
    <>
    {/* <div className="test">
      <div className="contents">Hello</div>
      
    </div> */}
    
      <div className="card-container">
        <div className="card-background">
          <div className="product-image-wrapper">
            <CardMedia
              component="img"
              height="154"
              image="https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg"
              alt="prodcut"
              className="product-image"
            />
          </div>
          <div className="product-title-wrapper">

          </div>
          <div className="product-title">
            {productTitle}
          </div>
          <div className="measurement-wrapper">
            <div className="measurement">
              {measurement}
            </div>
          </div>
          <div className="price-container-wrapper">
            <div className="price-container">
              <FontAwesomeIcon className="dollar-icon" icon="fa-solid fa-bangladeshi-taka-sign" />
              <span className="amount">
                {amount}
              </span>
            </div>
          </div>
          <div className="card-footer">
          </div>
        </div>

        
          <div className="card-forground" >hjhjkjhkjhkjhkj
          </div>
        
      </div>
    </>
  );
}

export default ProductCard;
