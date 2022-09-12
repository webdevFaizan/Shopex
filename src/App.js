
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
// import Cart from './Components/Cart';
import Footer from './Components/Footer';
import React, {useState} from 'react';

// let totalItems=0;

function App() {
  const [totalItems, setTotalItems] = useState(0);
  function trackTotalCounts(number){    
    setTotalItems(number);
  }
  const [totalCost, setTotalCost] = useState(0);
  function trackTotalCost(number){    
    setTotalCost(number);
  }
  return (
    <>
      <Navbar totalItems={totalItems} totalCost={totalCost}/>
      <div style={{minHeight : 60}}>
      </div>
      <Cart trackTotalCounts={trackTotalCounts} trackTotalCost={trackTotalCost}/>
      <Footer/>
      
    </>
  );
}

export default App;
