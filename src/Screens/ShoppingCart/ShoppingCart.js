import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSale, updateQuantity, updateCash, clearSales } from '../../Components/Redux/ShoppingCart/ShoppingCartSlice';
import { addLog } from '../../Components/Redux/Logs/LogsSlice';
import Header from '../../Components/Header/Header';
import './ShoppingCart.css';

function ShoppingCart() {
  const sales = useSelector((state) => state.sales.salesItems);
  const cash = useSelector((state) => state.sales.cash);

  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      quantity = 1;
    }
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleDelete = (id) => {
    dispatch(removeSale(id));
    alert("Item has been removed");
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

  const handleCashChange = (e) => {
    dispatch(updateCash(parseInt(e.target.value) >= 0 ? parseInt(e.target.value) : 0));
  };

  const handlePay = () => {
     // Check if sales array is empty
     if (sales.length === 0) {
        alert("Please select an item first.");
        return;
    }
    alert("Transaction Completed.");
    // Dispatch the salesItems and cash values to the LogsSlice
    dispatch(addLog({ sales, cash }));

    // Clear the salesItems array and set the cash value to 0 in the ShoppingCartSlice
    dispatch(clearSales());
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
                <td>₱{sale.price.toFixed(2)}</td>
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
                <td>₱{getTotalPrice(sale).toFixed(2)}</td>
                <td>
                  <button className='delete' onClick={() => handleDelete(sale.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='transaction'>
  <div className='activity'>
    <input type='number' id='total' value={getGrandTotalPrice()} readOnly className='totali'/>
    <input type='number' id='cash' value={cash} onChange={handleCashChange} className='cashi'/>
    <button type='submit' disabled={cash === 0 || cash < getGrandTotalPrice()} className='payb' onClick={() => {
        if (sales.length === 0) {alert('Please select item(s) first');} else {handlePay();}}}>Pay</button>
    {cash >= getGrandTotalPrice() && (
      <input type='number' id='change' value={getChange()} readOnly className='changei'/>
    )}
  </div>
  <div className='labelss'>
    <h1>Total</h1>
    <h1 className='cashl'>Cash</h1>
    <div className={cash > 0 && cash < getGrandTotalPrice() ? 'insufficient red' : 'insufficient'}>Insufficient cash</div>
    {cash >= getGrandTotalPrice() && (<h1>Change</h1>)}
  </div>
</div>

      </div>
    </div>
  );
}

export default ShoppingCart;
