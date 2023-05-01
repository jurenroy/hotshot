import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Components/Header/Header';
import { addSale } from '../../Components/Redux/ShoppingCart/ShoppingCartSlice';
import './Home.css';

function Home() {
  const products = useSelector(state => state.products.products);
  const selectedItems = useSelector(state => state.sales);
  const dispatch = useDispatch();

  const handleSelect = (item) => {
    // Check if item has already been selected
    if (selectedItems.find(sale => sale.id === item.id)) {
      alert("Item has already been selected");
      return;
    }

    // Dispatch addSale action with selected item
    dispatch(addSale(item));
  }

  return (
    <div>
      <Header />
      <div className='container'>
        <h1 style={{marginTop: 45}}>HotShot Liquor Store</h1>
      </div>
      <div className="image-container">
        <div className='row'>
          {products.map((item, index) => (
            <div key={item.id} className='col-4'>
              <div className="image-wrapper">
                <img src={item.image} alt={item.name} />
                <button onClick={() => handleSelect(item)} disabled={selectedItems.find(sale => sale.id === item.id)}>Select</button>
              </div>
              {(index + 1) % 3 === 0 && <div className='clearfix'></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
