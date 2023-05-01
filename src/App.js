import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';
import Home from './Screens/Home/Home';
import ShoppingCart from './Screens/ShoppingCart/ShoppingCart';
import Profile from './Screens/Profile/Profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
