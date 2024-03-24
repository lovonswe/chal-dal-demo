import React from 'react';
import { CancelOutlined, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { CardMedia, IconButton, Typography } from '@mui/material';
import styles from './CartItemStyle.module.scss'
function CartItem() {
    const url2 =
        "https://chaldn.com/_mpimage/date-crown-lulu-dates-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129300&q=best&v=1&m=400&webp=1";
    return (
        <div className={styles.cartitemcontainer}>
            <div className={styles.addremovebutton}>
                <div className={styles.uparrow}>
                    <IconButton>
                        <KeyboardArrowUp />
                    </IconButton>
                </div>
                <div className={styles.productincart}>
                    <Typography>
                        {
                            "5"
                        }
                    </Typography>
                </div>
                <div className={styles.downarrow}>
                    <IconButton>
                        <KeyboardArrowDown />
                    </IconButton>
                </div>
            </div>
            <div className={styles.productdetails}>
                <div className={styles.imagecontainer}>
                    <CardMedia
                        component="img"
                        height="70px"
                        image={url2}
                        alt="prodcut"
                        className="product-image"
                    />
                </div>
                <div className={styles.titlepricecontainer}>
                    <div className={styles.title}> Laundry </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={styles.cancel}>
                <IconButton>
                    <CancelOutlined />
                </IconButton>
            </div>
        </div>
    )
}

export default CartItem