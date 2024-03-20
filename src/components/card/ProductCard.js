import React from "react";
import "../../style/ProductCardStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const cardContainer = {
  height: "300px",
  width: "200px",
  boxShadow: "3px 3px 16px 7px rgba(128, 122, 124, 0.35)",
};

function ProductCard() {
  const amount = 100899999;
  const measurement = "10kg";
  const productTitle =
    "Junior is a person who is smaller in age so what do you think is it write to";
  const url =
    "https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg";
  const url2 = "https://chaldn.com/_mpimage/date-crown-lulu-dates-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129300&q=best&v=1&m=400&webp=1";
  return (
    <>
      <div className="card-container">
        <div className="card-background">
          <div className="product-image-wrapper">
            <CardMedia
              component="img"
              height="154"
              image={url2}
              alt="prodcut"
              className="product-image"
            />
          </div>
          <div className="product-title-wrapper"></div>
          <div className="product-title">{productTitle}</div>
          <div className="measurement-wrapper">
            <div className="measurement">{measurement}</div>
          </div>
          <div className="price-container-wrapper">
            <div className="price-container">
              <FontAwesomeIcon
                className="dollar-icon"
                icon="fa-solid fa-bangladeshi-taka-sign"
              />
              <span className="amount">{amount}</span>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>

        <div className="card-foreground">
          <div className="details-and-add-to-cart-wrapper">
            <div className="add-to-cart">
              <div className="total-price">
                <div className="price-container">
                  <FontAwesomeIcon
                    className="dollar-icon-1"
                    icon="fa-solid fa-bangladeshi-taka-sign"
                  />
                  <span className="amount" style={{ color: "white" }}>
                    {amount}
                  </span>
                </div>
              </div>
              <div className="adder-remover">
                <RemoveCircleOutlineOutlinedIcon
                  className="icon-hover"
                  sx={{ fontSize: "40px" }}
                />
                <div className="cart-item-count">6</div>
                <AddCircleOutlineOutlinedIcon
                  className="icon-hover"
                  sx={{ fontSize: "40px" }}
                />
              </div>
              {/* <div className="add-message">Add to cart</div> */}
              <div className="in-bag">In bag</div>
            </div>
            <div className="details-container-wrapper">
              <div className="details-container">
                <span className="amount">Details</span>
                <FontAwesomeIcon
                  className="details-icon"
                  icon="fa-solid fa-angle-right"
                />
              </div>
            </div>
          </div>
          <div className="card-foreground-footer">
            <RemoveOutlinedIcon
              className="remove"
              
            />
            <div className="cart-item-count-in-footer">{`26 in bag`}</div>
            <AddOutlinedIcon
              className="add"
              
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
