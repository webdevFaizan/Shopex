import React, { Component } from 'react'
import './cart.css'
import CartItem from './CartItem'

export default class Cart extends Component {
  render() {
    return (
      <>
        <CartItem title ={"iPhone"} img={"https://cdn-icons-png.flaticon.com/512/186/186239.png"} />
        <CartItem title ={"iPhone"} img={"https://cdn-icons-png.flaticon.com/512/186/186239.png"} />
        <CartItem title ={"iPhone"} img={"https://cdn-icons-png.flaticon.com/512/186/186239.png"} />
      </>
    )
  }
}
