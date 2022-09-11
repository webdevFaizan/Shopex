
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
// import Cart from './Components/Cart';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <div style={{minHeight : 60}}>
      </div>
      <Cart/>
      <Footer/>
    </>
  );
}

export default App;
