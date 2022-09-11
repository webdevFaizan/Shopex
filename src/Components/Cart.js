import React, { Component } from 'react'
import './cart.css'

export default class Cart extends Component {
  render() {
    return (
      <>
        <div className='card-top'>
            <h1>Cart Top section</h1>
        </div>
        <div className='card-bottom'>
        <h1>Cart Bottom section</h1>
        </div>
      </>
    )
  }
}
