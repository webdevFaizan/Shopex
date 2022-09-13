import React, { Component } from 'react'
import './cart.css'
import CartItem from './CartItem'
// import { collection, getDocs } from "firebase/firestore"; 

export default class Cart extends Component{

    createItemAndAdd=(e)=>{
        // const str= this.generateString(10);
        // const str = Math.random().toString(36).substring(2,10);    //We were trying to get the random string, but as we understood later, we do not need to have an id field, as soon as we carate an product, the id is avaialable in the product.id object.
        e.preventDefault();
        // const formData = new FormData(e.target);
        const form = document.getElementById('addElem');

        let title = form.elements['title'].value;
        let price =parseInt(form.elements['price'].value);
        let qty= parseInt(form.elements['qty'].value);
        let img = form.elements['img'].value;
        let createdTime = +new Date();          //This is a shortcut to render the time in milliseconds, and this is being rendered on the client side and then added to the data base. So that we will have the items that were added at the last position appearing at the top position.

        // console.log(title, price, qty, img)

        const obj={
            title : title,
            price : price,
            totalCost : qty*price,
            qty : qty,
            img : img,
            created: createdTime
          }
        //   console.log(obj);
        this.props.addItems(obj);
      }

  render() {    
    return (
      <>
            {   !this.props.loading && this.props.addingItemsOnWebsite   && 
                (<div className = "container" style={{minWidth: 200,  borderBottom :'2px solid black', padding: 20}}> 
                    <form id="addElem" style={{display : 'flex', flexWrap : 'wrap', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div className="form-group">
                          <label htmlFor="title">Title</label>
                          <input type="text" name = "title" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter the name of product."/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="price">Price</label>
                          <input type="text" name = "price"  className="form-control" id="price" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div> 
                        <div className="form-group">
                          <label htmlFor="qty">Quantity</label>
                          <input type="text" name = "qty"  className="form-control" id="qty" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div> 
                        <div className="form-group">
                          <label htmlFor="img">Image Link</label>
                          <input type="text" name = "img"  className="form-control" id="img" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>                        
                        <button type= "submit" className="btn btn-primary" onClick={this.createItemAndAdd}>Submit</button>
                      </form>
                </div>)
            }
        <div style={{display : 'flex', flexDirection : 'row',alignItems: 'center', justifyContent: 'center'}}> 
            <div style={{maxWidth: '70%',display : 'flex', flexDirection : 'row', flexWrap : 'wrap',alignItems: 'top',border:"0px solid red"}}>
                {
                    this.props.loading && <h1>Connecting to DB...</h1>
                }
                {                
                    !this.props.loading && this.props.products.map((element)=>{
                        return <CartItem key={element.id} product={element} increaseQuantity={this.props.increaseQuantity} decreaseQuantity={this.props.decreaseQuantity} deleteProduct={this.props.deleteProduct}/>
                    })                
                }                
            </div>                
        </div>
        <div className="freeSpace" style={{minHeight : 150}}></div>
      </>
    )
  }
}



