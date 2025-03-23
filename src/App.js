import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Accueil from './Pages/Accueil';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import PlaceOrder from './Pages/PlaceOrder';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids"/>} />

          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>} />
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
