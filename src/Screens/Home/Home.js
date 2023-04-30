import React from 'react';
import Header from '../../Components/Header/Header';

function Home() {
  const items = [
    { name: "Jack Daniel's Tennessee Whiskey", price: "$25.99", imgSrc: "jack-daniels.png" },
    { name: "Bacardi Superior White Rum", price: "$19.99", imgSrc: "bacardi-rum.png" },
    { name: "Smirnoff Vodka", price: "$14.99", imgSrc: "smirnoff-vodka.png" },
    { name: "Captain Morgan Spiced Rum", price: "$22.99", imgSrc: "captain-morgan.png" },
    { name: "Johnnie Walker Black Label Blended Scotch Whisky", price: "$39.99", imgSrc: "johnnie-walker.png" },
    { name: "Tanqueray London Dry Gin", price: "$29.99", imgSrc: "tanqueray-gin.png" },
  ];
  

  return (
    <div>
      <Header />
      <div className='container'>
        <h1>HotShot Liquor Store</h1>
      </div>

      <div className='container'>
        <h2>Featured Items</h2>
        <div className='row'>
          {items.slice(0, 3).map((item) => (
            <div key={item.name} className='col-4'>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
        <div className='row'>
          {items.slice(3, 6).map((item) => (
            <div key={item.name} className='col-4'>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
        <div className='row'>
          {items.slice(6, 9).map((item) => (
            <div key={item.name} className='col-4'>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
