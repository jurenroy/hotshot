import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './Components/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './Screens/Home/Home';
import ShoppingCart from './Screens/ShoppingCart/ShoppingCart';
import Profile from './Screens/Profile/Profile';
import Logs from './Screens/Logs/Logs';
import CartLogs from './Screens/Logs/CartLogs.js/CartLogs';
import AddProduct from './Screens/AddProduct/AddProduct';


function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/logs" element={<Logs/>} />
          <Route path="/cartlogs/:index" element={<CartLogs/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
        </Routes>
      </Router>
      </PersistGate>
  </Provider>
  );
}

export default App;
