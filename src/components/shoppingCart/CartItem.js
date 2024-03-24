import React from 'react';
import { CancelOutlined, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { CardMedia, IconButton, Typography } from '@mui/material';
import styles from './CartItemStyle.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CartItem() {
    const url2 =
        "https://chaldn.com/_mpimage/date-crown-lulu-dates-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129300&q=best&v=1&m=400&webp=1";
    return (
        <div className={styles.cartitemcontainer}>
            <div className={styles.addremovebutton}>
                <div className={styles.uparrow}>
                    <KeyboardArrowUp fontSize='large' />
                </div>
                <div className={styles.productincart}>
                    <Typography>
                        {
                            "5"
                        }
                    </Typography>
                </div>
                <div className={styles.downarrow}>
                    <KeyboardArrowDown fontSize='large' />
                </div>
            </div>
            <div className={styles.productdetails}>
                <div className={styles.imageDetaisWrapper}>
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
                        <div>
                            <FontAwesomeIcon
                                className='delivery-taka-icon' icon="fa-solid fa-bangladeshi-taka-sign" />
                            <span>{`150/ 300gm`}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon
                            className='delivery-taka-icon' icon="fa-solid fa-bangladeshi-taka-sign" />
                        <span>{`150/ 300gm`}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            className='delivery-taka-icon' icon="fa-solid fa-bangladeshi-taka-sign" />
                        <span>{`150/ 300gm`}</span>
                    </div>
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