import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSale, updateQuantity } from '../../Components/Redux/ShoppingCart/ShoppingCartSlice'
import Header from '../../Components/Header/Header';
import './ShoppingCart.css';

function ShoppingCart() {
  const sales = useSelector((state) => state.sales);
  const [quantities, setQuantities] = useState({});
  const [cash, setCash] = useState(0);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
    setQuantities((prevState) => ({
      ...prevState,
      [id]: quantity,
    }));
  };

  const handleDelete = (id) => {
    dispatch(removeSale(id));
  };

  const getQuantity = (id) => {
    return quantities[id] || 1;
  };

  const getTotalPrice = (sale) => {
    const quantity = getQuantity(sale.id);
    return sale.price * quantity;
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
                    <button
                      onClick={() =>
                        handleQuantityChange(sale.id, getQuantity(sale.id) - 1)
                      }
                    >
                      -
                    </button>
                    <input
                      type='number'
                      min='1'
                      value={getQuantity(sale.id)}
                      onChange={(e) =>
                        handleQuantityChange(sale.id, parseInt(e.target.value))
                      }
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(sale.id, getQuantity(sale.id) + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${getTotalPrice(sale).toFixed(2)}</td>
                <td>
                  <button onClick={() => handleDelete(sale.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <span>Total: ${getGrandTotalPrice()}</span>
        
      </div>
    </div>
  );
}

export default ShoppingCart