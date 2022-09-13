import React, { Component } from 'react'
import './navbar.css'

export default class Navbar extends Component{
   generateString(length) {
    let result = ' ';
    const charactersLength = 26;
    for ( let i = 0; i < length; i++ ) {
        result += result.charAt(Math.floor(Math.random() * charactersLength)+97);
    }
    return result;
  }


  createItemAndAdd(){
    // const str= this.generateString(10);
    // const str = Math.random().toString(36).substring(2,10);    //We were trying to get the random string, but as we understood later, we do not need to have an id field, as soon as we carate an product, the id is avaialable in the product.id object.

    const obj={
        title : 'Leviathan Axe',
        price : 1230,
        totalCost : 0,
        qty : 0,
        img : 'https://cdn-icons-png.flaticon.com/512/2208/2208228.png',
        // id : str  
      }
    this.props.addItems(obj);
  }

  render() {
    return (
      <>
      <div className='' style={{display : 'flex', justifyContent : 'space-between',color : 'white', backgroundColor : 'black'}}>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
        
          <div className="" style={{paddingTop : 8,paddingLeft : 18, alignItems: 'center',justifyContent: 'center', fontSize : 20}}>
              Shopex
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent : 'center'}}>
            <div className="btn btn-primary" onClick={()=>{this.createItemAndAdd()}} style={{marginRight : 20}}>Add items</div>
            <div className="freeSpace" style={{minWidth : 30, border: '0px solid red'}}>
                Total - {this.props.totalCost}
            </div>
            <div className="cartInNavbar position-relative" style={{padding : 5,display: 'flex', flexDirection: 'row',position : 'relative'}}>            
              <img src="https://cdn-icons-png.flaticon.com/512/8081/8081347.png" style={{height : 40}} alt="..." />
              <span className="badge rounded-pill bg-primary" style={{position : 'absolute', top : '120', start :'100'}}>
                {this.props.totalItems}
              </span>
            </div>
          </div>        
        </div>
      </>
    )
  }
}
