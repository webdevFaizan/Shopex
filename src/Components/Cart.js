import React, { Component } from 'react'
import './cart.css'
import CartItem from './CartItem'

export default class Cart extends Component {

    

    constructor(){
        super();
        this.state = {
            products : [
                {
                    title : 'iPhone',
                    price : 5000,
                    totalCost : 5000,
                    qty : 1,
                    img : 'https://img.icons8.com/emoji/344/mobile-phone.png',
                    id : 0
                },
                {
                    title : 'Laptop',
                    price : 20000,
                    totalCost : 20000,
                    qty : 1,
                    img : 'https://img.icons8.com/fluency/344/mac-book-pro-m1.png',
                    id : 1
                },
                {
                    title : 'Sofa',
                    price : 6750,
                    totalCost : 6750,
                    qty : 1,
                    img : 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-sofa-comfort-flaticons-lineal-color-flat-icons-3.png',
                    id : 2
                },
                {
                    title : 'Speaker',
                    price : 3484,
                    totalCost : 3484,
                    qty : 1,
                    img : 'https://cdn-icons-png.flaticon.com/512/2061/2061136.png',
                    id : 3
                },
                {
                    title : 'Wallet',
                    price : 734,
                    totalCost : 734,
                    qty : 1,
                    img : 'https://cdn-icons-png.flaticon.com/512/855/855279.png',
                    id : 4
                }
            ]
        }
    }

    increaseQuantity=(product)=>{
        const {products} = this.state;
        let index = products.indexOf(product);
        products[index].qty+=1;
        products[index].totalCost+=products[index].price;
        this.setState({
            products : products
        })
    }

    decreaseQuantity=(product)=>{
        const {products} = this.state;
        let index = products.indexOf(product);
        if(products[index].qty>=1)
        {
            products[index].qty-=1;
            products[index].totalCost-=products[index].price;
            this.setState({
                products : products
            })
        }
    }

  render() {
    
    return (
      <>
        <div style={{display : 'flex', flexDirection : 'row'}}>            
            {                
                this.state.products.map((element)=>{
                    return <CartItem key={element.id} product={element} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity}/>
                })                
            }            
        </div>
      </>
    )
  }
}
