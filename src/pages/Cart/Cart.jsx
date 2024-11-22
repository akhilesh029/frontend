import React, {useContext} from 'react'
import './Cart.css'
import {StoreContext} from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

 const {cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);

const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              
              <div>
                 <div className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                  <hr />
              </div>
            )
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>Rs.{getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>Rs.{2}</p>
          </div>
          <div className="cart-total-details">
            <p>Total</p>
            <p>Rs.{getTotalCartAmount()+2}</p>
          </div>
          <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
        <div>
          <p>If you have a promo code, enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promo code' />
            <button>Apply</button>
          </div>
        </div>
      </div>
      </div>
    

    </div>
  )
}

export default Cart