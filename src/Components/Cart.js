import React, { Component } from 'react'
import './cart.css'
import CartItem from './CartItem'
import { collection, getDocs } from "firebase/firestore"; 
import db from '../firebase-config'     //The firebase config was done in its own separate file, so that we could import the db, this import and export is not available in fire base docs, but once you import anything from any file all the modules required for that import is already completed when that file is run, this is how the import statement would work.

export default class Cart extends Component{
    constructor(){
        super();
        this.state = {          //IMPORTANT : All the states are being managed in one single parent itself, and this.state is always an object, inside this we could contain an array of objects named products. And change we wish to make, will be done by finding the index of the product variable and then changing the states of this products array itself, instead of individually adding the state variable inside the CartItem.js, although reasearch which method is more preferrable in react??
            products : [ ]
        }
    }

    async componentDidMount(){
        // The basic configuration of the firebase-db was done only by using the firebase docs, I researched about reading data from firebase db, and integrated the code line by line, and this is the working code, without any error. I will not remember this though, but I do not need to remember just need to read the documentation again.
        const querySnapshot = await getDocs(collection(db, "productsOnWebsite"));
        let arr=[];
        querySnapshot.forEach((doc) => {
            let temp = [];
            temp=doc.data();
            temp['id'] = doc.id;
            arr.push(temp);
        });
        this.setState({
            products : arr
        })
    }         

    trackTotal(){
        let sum=0;
        let costs=0;
        this.state.products.forEach((element)=>{
            sum+=element.qty;
            costs+=element.totalCost;        
        });
        this.props.trackTotalCounts(sum);
        this.props.trackTotalCost(costs);
        return sum;
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
        <div className="contianer" style={{display : 'flex',alignItems: 'center', justifyContent: 'center'}}> 
            <div style={{maxWidth: '70%',display : 'flex', flexDirection : 'row', flexWrap : 'wrap',alignItems: 'center',border:"0px solid red"}}>
                {                
                    this.state.products.map((element)=>{
                        return <CartItem key={element.id} product={element} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} deleteProduct={this.deleteProduct}/>
                    })                
                }            
            </div>
        </div>
      </>
    )
  }
}



