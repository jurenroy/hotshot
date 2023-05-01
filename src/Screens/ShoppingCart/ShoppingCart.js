import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSale, updateQuantity, updateCash} from '../../Components/Redux/ShoppingCart/ShoppingCartSlice'
import Header from '../../Components/Header/Header';
import './ShoppingCart.css';

function ShoppingCart() {
    const sales = useSelector(state => state.shoppingCart.sales);
    const cash = useSelector(state => state.shoppingCart.cash);
    const dispatch = useDispatch();
    
    

    const handleQuantityChange = (id, quantity) => {
      dispatch(updateQuantity({ id, quantity }));
    };
  
    const handleDelete = (id) => {
      dispatch(removeSale(id));
    };
  
    const getTotalPrice = (sale) => {
      return sale.price * sale.quantity;
    };
  
    const getGrandTotalPrice = () => {
      let grandTotal = 0;
      sales.forEach((sale) => {
        grandTotal += getTotalPrice(sale);
      });
      return grandTotal.toFixed(2);
    };
  
    const getChange = () => {
      return cash - getGrandTotalPrice();
    };
  
    const handlePay = () => {
      const grandTotal = getGrandTotalPrice();
      const change = cash - grandTotal;
      alert(`Paid: $${cash.toFixed(2)}\nChange: $${change.toFixed(2)}`);
    };
  
    const handleCashChange = (e) => {
      dispatch(updateCash(parseInt(e.target.value) >= 0 ? parseInt(e.target.value) : 0));
    };
  
return (
    <div>
      <Header />
      <div className='container'>
        <h1 style={{ marginTop: 40 }}>Shopping Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id}>
                <td>
                  <div className='item'>
                    <img src={sale.image} alt={sale.name} />
                    <span>{sale.name}</span>
                  </div>
                </td>
                <td>${sale.price.toFixed(2)}</td>
                <td>
                  <div className='quantity'>
                    <button onClick={() => handleQuantityChange(sale.id, sale.quantity - 1)}>-</button>
                    <input
                      type='number'
                      min='1'
                      value={sale.quantity}
                      onChange={(e) => handleQuantityChange(sale.id, parseInt(e.target.value))}
                    />
                    <button onClick={() => handleQuantityChange(sale.id, sale.quantity + 1)}>+</button>
                  </div>
                </td>
                <td>${getTotalPrice(sale).toFixed(2)}</td>
                <td>
                  <button className='delete' onClick={() => handleDelete(sale.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={handlePay}>
          <div className='payment'>
            <label htmlFor='cash'>Cash:</label>
            <input
              type='number'
              id='cash'
              value={cash}
              onChange={(e) => handleCashChange}
            />
          </div>
          {cash > 0 && cash < getGrandTotalPrice() && <div className='insufficient'>Insufficient cash</div>}
          <div className='payment'>
            <label htmlFor='grandTotal'>Grand Total:</label>
            <input type='number' id='grandTotal' value={getGrandTotalPrice()} readOnly />
          </div>
          {cash >= getGrandTotalPrice() && (
            <div className='payment'>
              <label htmlFor='change'>Change:</label>
              <input type='number' id='change' value={getChange()} readOnly />
            </div>
          )}
          <div className='payment'>
            <button type='submit' disabled={cash === 0 || cash < getGrandTotalPrice()}>
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );      
}

export default ShoppingCart;
