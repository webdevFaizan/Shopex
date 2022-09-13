import React, { Component } from 'react'
import './cart.css'
import CartItem from './CartItem'
// import { collection, getDocs } from "firebase/firestore"; 

export default class Cart extends Component{

  render() {    
    return (
      <>
        <div className="contianer" style={{display : 'flex',alignItems: 'center', justifyContent: 'center'}}> 
            <div style={{maxWidth: '70%',display : 'flex', flexDirection : 'row', flexWrap : 'wrap',alignItems: 'center',border:"0px solid red"}}>
                {
                    this.props.loading && <h1>Loading...</h1>
                }
                {                
                    !this.props.loading && this.props.products.map((element)=>{
                        return <CartItem key={element.id} product={element} increaseQuantity={this.props.increaseQuantity} decreaseQuantity={this.props.decreaseQuantity} deleteProduct={this.props.deleteProduct}/>
                    })                
                }            
            </div>
        </div>
                <div className="btn btn-primary">Add items</div>
                <div className="freeSpace" style={{minHeight : 150}}></div>
      </>
    )
  }
}



