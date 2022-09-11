import React, { Component } from 'react'
import './cart.css'
import CartItem from './CartItem'

export default class Cart extends Component {
  render() {
    return (
      <>
        <div style={{display : 'flex', flexDirection : 'row'}}>
            <CartItem title ={"iPhone"} img={"https://img.icons8.com/emoji/344/mobile-phone.png"} price={5000} />
            <CartItem title ={"Laptop"} img={"https://img.icons8.com/fluency/344/mac-book-pro-m1.png"} price={20000} />
            <CartItem title ={"Sofa"} img={"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-sofa-comfort-flaticons-lineal-color-flat-icons-3.png"} price={6750}/>
            <CartItem title ={"Speaker"} img={"https://cdn-icons-png.flaticon.com/512/2061/2061136.png"} price={3484}/>
            <CartItem title ={"Wallet"} img={"https://cdn-icons-png.flaticon.com/512/855/855279.png"} price={734}/>
        </div>
      </>
    )
  }
}
