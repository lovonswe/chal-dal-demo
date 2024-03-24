import React from 'react';
import './ShoppingCart.scss';
import { IconButton, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CartItem from './CartItem';

function ShoppingCart() {
    const cartImage = "https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-450/Default/components/header/ShoppingCart/images/emptyShoppingBag.png?q=low&webp=1&alpha=1";
    const itemsInCart = 0;
    const deliveryChargeStyle = () => {
        
    }
    return (
        <div className='shopping-cart'>
            <div className='header'>
                <div className='item-count'>
                    <IconButton>
                        <ShoppingBagIcon fontSize='medium' />
                        <Typography className='counter'>
                            {
                                `19`
                            } items
                        </Typography>
                    </IconButton>
                </div>
                <div className='cart-close-button'>
                    <IconButton className='_close'>
                        <Typography>Close</Typography>
                    </IconButton>
                </div>
            </div>
            <div className='delivery-charge-info' style={itemsInCart>0 ? {backgroundColor: "#104a0285"} : {backgroundColor: "#aaa"}}>
                {/* <div className='charge-message'>
                    {`You have reduced delivery charge`}
                </div> */}
                <div className='charge-message-no-discount'>
                    {`You have reduced delivery charge`}
                </div>
                <div className='info-item-container'>
                    <IconButton sx={{ color: 'white' }}>
                        <FontAwesomeIcon
                            className='delivery-taka-icon' icon="fa-solid fa-bangladeshi-taka-sign" />
                        <Typography>{`39`}</Typography>
                        <InfoIcon fontSize='small' />

                    </IconButton>
                </div>
            </div>
            <div className='item-container'>
                {/* <>
                    <div>
                        <img src={cartImage} />
                    </div>
                    <div>
                        Your shopping bag is empty. Start shopping
                    </div>
                </> */}
                <CartItem />
            </div>
            <div className='footer'>
                <div className='hotline'>
                    Hotline : 16710
                </div>
                {/* <div className='place-order-container'>
                    <div className='place-order'>Place Order</div>
                    <div className='order-price'>
                        <FontAwesomeIcon
                            className='delivery-taka-icon' icon="fa-solid fa-bangladeshi-taka-sign" />
                            {
                                `150`
                            }
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ShoppingCart