import React, { Component } from 'react'
import './cart.css'
import CartItem from './CartItem'

export default class Cart extends Component {    

    constructor(){
        super();
        this.state = {          //IMPORTANT : All the states are being managed in one single parent itself, and this.state is always an object, inside this we could contain an array of objects named products. And change we wish to make, will be done by finding the index of the product variable and then changing the states of this products array itself, instead of individually adding the state variable inside the CartItem.js, although reasearch which method is more preferrable in react??
            products : [
                {
                    title : 'iPhone',
                    price : 5000,
                    totalCost : 5000,
                    qty : 1,
                    img : 'https://img.icons8.com/emoji/344/mobile-phone.png',
                    id : 0      //Although we did not use the id of each element, but it is a good idea to provide id for each element, so that there would be a unique identifier for each and every product in the products array.
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
                },
                {
                    title : 'Mjolnir Key Ring',
                    price : 234,
                    totalCost : 234,
                    qty : 1,
                    img : 'https://cdn-icons-png.flaticon.com/512/1396/1396645.png',
                    id : 5
                },
                {
                    title : 'Bottle pack combo',
                    price : 230,
                    totalCost : 230,
                    qty : 1,
                    img : 'https://cdn-icons-png.flaticon.com/512/3239/3239567.png',
                    id : 6
                },
                {
                    title : 'Perfume Bottle',
                    price : 100,
                    totalCost : 100,
                    qty : 1,
                    img : 'https://cdn-icons-png.flaticon.com/512/3365/3365786.png',
                    id : 7
                },          
                {
                    title : 'Earphone',
                    price : 700,
                    totalCost : 700,
                    qty : 1,
                    img : 'https://cdn-icons-png.flaticon.com/512/3791/3791461.png',
                    id : 8
                }                
            ]
        }
    }

    trackTotal(){
        let sum=0;
        this.state.products.forEach((element)=>sum+=element.qty);
        this.props.trackTotalCounts(sum);
        return sum;
    }

    componentDidMount(){
        let sum =this.trackTotal();
        console.log(sum);
    }

    increaseQuantity=(product)=>{
        const {products} = this.state;      //Here we are simply creating a local products variable so that it could be used in the following lines, calling this.state.products[index] feels tiresome.
        let index = products.indexOf(product);
        products[index].qty+=1;     //This is a local variable being created and updated, and when this array is passed in the setState method only this the state will get updated, before that the State will remain unchanged.
        products[index].totalCost+=products[index].price;
        this.setState({
            products : products     //We could have used the short hand property of react as well, when the name of variables on both side is the same, then we do not need to write the right side variable, and still there will be no error.
        },()=>{
            let sum =this.trackTotal();
            console.log(sum);
            // this.props.trackTotalCounts(number);
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
            },()=>{                
                let sum =this.trackTotal();
                console.log(sum);                
                // this.props.trackTotalCounts(number);
            })
        }
    }

    deleteProduct = (product)=>{
        console.log('inside delete')
        const {products} = this.state;
        let index = products.indexOf(product);
        products.splice(index,1);
        this.setState({
            products
        },()=>{                
            let sum =this.trackTotal();
            console.log(sum);                
            // this.props.trackTotalCounts(number);
        })
    }

  render() {
    
    return (
      <>
        <div style={{display : 'flex', flexDirection : 'row', flexWrap : 'wrap', justifyContent : 'space-between'}}>            
            {                
                this.state.products.map((element)=>{
                    return <CartItem key={element.id} product={element} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} deleteProduct={this.deleteProduct}/>
                })                
            }            
        </div>
      </>
    )
  }
}
