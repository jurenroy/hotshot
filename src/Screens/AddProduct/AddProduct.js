import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../Components/Header/Header';
import { addProduct } from '../../Components/Redux/Products/ProductsSlice';
import { useNavigate } from "react-router-dom";
import './AddProduct.css';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { name, price, image };
    dispatch(addProduct(newProduct));
    setName('');
    setPrice(0);
    setImage('');
    navigate('/');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const isDisabled = !name || !price || !image;

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
          </div>
          <button type="submit" disabled={isDisabled}>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
