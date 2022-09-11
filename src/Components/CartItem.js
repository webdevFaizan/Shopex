import React, { Component } from 'react'



export default class CartItem extends Component {
    

  render() {
    const { product} = this.props;
    const styles = {
        image: {
          height: 110,
          width: 110,
          borderRadius: 4,
          background: 'white'
        }
      }

    return (
      <>
        <div className="cart-item" style={{display : 'flex', flexDirection : 'row', padding : 20, margin: 20}}>            
            <div className="left-block" style={{padding : 20}}>
                <img src={product.img} style={styles.image} alt="..."/>
            </div>
            <div className="right-block">
            <div style={ { fontSize: 25 } }>{product.title}</div>
            <div style={ { color: '#777' } }>Price for one Item : {product.price} </div>
            <div style={ { color: '#777' } }>Total Cost : {product.totalCost} </div>
            <div style={ { color: '#777' } }>Qty : {product.qty} </div>
            <div className="cart-item-actions">
                {/* Buttons */}
                <img
                alt="increase"
                className="action-icons"
                width={30}       
                style={{margin : 15}}         
                src="https://cdn-icons-png.flaticon.com/512/3416/3416075.png"
                onClick={()=>{this.props.increaseQuantity(product)}}
                // This we have read already, arrow function will be used in the case when the props function is to be called with a parameter. If there is no parameter then this could have been called directly.
                />
                <img
                alt="decrease"
                className="action-icons"
                width={30}
                style={{margin : 15}}      
                src="https://cdn-icons-png.flaticon.com/512/3249/3249894.png"
                onClick={()=>{this.props.decreaseQuantity(product)}}
                />
                <img
                alt="delete"
                className="action-icons"
                width={50}
                src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png"
                onClick={()=>{this.props.deleteProduct(product)}}
                />
            </div>
            </div>
        </div>
      </>
    )
  }
}
