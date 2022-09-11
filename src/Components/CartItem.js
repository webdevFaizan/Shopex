import React, { Component } from 'react'



export default class CartItem extends Component {
    constructor(){
        super();
        this.state = {
            price: 1,            
            qty: 1
        }
        this.increaseQuantity = this.increaseQuantity.bind(this);
        
    }
    componentDidMount(){
        this.setState({
            price : this.props.price
        })
    }

    increaseQuantity(){
        this.setState({
            qty : this.state.qty+1,
            price : (this.state.qty+1)*this.props.price
        })
    }

    decreaseQuantity=()=>{
        if(this.state.qty>=1)
        {
            this.setState({
                qty : this.state.qty-1,
                price : (this.state.qty-1)*this.props.price
            })
        }
    }


  render() {
    const {price, qty} = this.state;
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
                <img src={this.props.img} style={styles.image} alt="..."/>
            </div>
            <div className="right-block">
            <div style={ { fontSize: 25 } }>{this.props.title}</div>
            <div style={ { color: '#777' } }>Price for one Item {this.props.price} </div>
            <div style={ { color: '#777' } }>Rs {price} </div>
            <div style={ { color: '#777' } }>Qty: {qty} </div>
            <div className="cart-item-actions">
                {/* Buttons */}
                <img
                alt="increase"
                className="action-icons"
                width={30}                
                src="https://cdn-icons-png.flaticon.com/512/3416/3416075.png"
                onClick={this.increaseQuantity}
                />
                <img
                alt="decrease"
                className="action-icons"
                width={30}
                src="https://cdn-icons-png.flaticon.com/512/3249/3249894.png"
                onClick={this.decreaseQuantity}
                />
                <img
                alt="delete"
                className="action-icons"
                width={50}
                src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png"
                />
            </div>
            </div>
        </div>
      </>
    )
  }
}
