
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
// import Cart from './Components/Cart';
import Footer from './Components/Footer';
import React from 'react';
import db from './firebase-config'     //The firebase config was done in its own separate file, so that we could import the db, this import and export is not available in fire base docs, but once you import anything from any file all the modules required for that import is already completed when that file is run, this is how the import statement would work.


export default class App extends React.Component{
  
  constructor(){
    super();
    this.state = {          //IMPORTANT : All the states are being managed in one single parent itself, and this.state is always an object, inside this we could contain an array of objects named products. And change we wish to make, will be done by finding the index of the product variable and then changing the states of this products array itself, instead of individually adding the state variable inside the CartItem.js, although reasearch which method is more preferrable in react??
        products : [ ],
        loading :true,
        totalItems : 0,
        totalCost : 0
    }
  }

  async componentDidMount(){
      // The basic configuration of the firebase-db was done only by using the firebase docs, I researched about reading data from firebase db, and integrated the code line by line, and this is the working code, without any error. I will not remember this though, but I do not need to remember just need to read the documentation again.
      
      db.collection("productsOnWebsite").onSnapshot((querySnapshot) => {      //This is the web version 8 code. Earlier I was using web version 9 code, it was having slight trouble.
          // Also note that we have removed the .get() method, which was simply a one sided communication tool, when the client requested only then the db data will be fetched, but now it is behaving just like a websocket, where if the db has been altered anyhow, this will be automatically reflected in the front end of each and every client.
          let arr=[];     //Array will be created for each change in the db, but in the setState method only those element will be updated, which are changed acutally.
          querySnapshot.forEach((doc) => {
              let temp = [];
              temp=doc.data();
              temp['totalCost']=temp['qty']*temp['price'];        //We chaned the qty, we updae the totalCost automatically, just a minor bug.
              temp['id'] = doc.id;        //This will act as a key variable for the list of elements that are to be in the state, just like the children those will have a unique id.
              arr.push(temp);
          })
          console.log(arr);
          this.setState({
              products : arr,
              loading : false
          },()=>{
              this.trackTotal();      //This is to be added inside the second argument of the setState, if we want to see the change in state as soon it is updated. If we keep this method outside the setState's second parameter, then this will give the old state and not the new one.
          })
  })
  }         

  trackTotal(){
      let sum=0;
      let costs=0;
      this.state.products.forEach((element)=>{
          sum+=element.qty;
          costs+=element.totalCost;        
      });
      this.setState({
        totalItems : sum,
        totalCost : costs
      })
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




  // const [totalItems, setTotalItems] = useState(0);
  // function trackTotalCounts(number){    
  //   setTotalItems(number);
  // }
  // const [totalCost, setTotalCost] = useState(0);
  // function trackTotalCost(number){    
  //   setTotalCost(number);
  // }


  render(){
    return (
      <>
        <Navbar totalItems={this.state.totalItems} totalCost={this.state.totalCost}/>
        <div style={{minHeight : 60}}>
        </div>
        <Cart loading={this.state.loading} products={this.state.products} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} deleteProduct={this.deleteProduct}/>
        <Footer/>
        
      </>
    );
  }
}


