import "../App.css";
import React, { useEffect, useState } from "react";

function ItemDetail({ match }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const res = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    );
    const data = await res.json();
    setItem(data);
  };

  return (
    <div>
      <h1>Shop</h1>
      <div>
        <h1>Item</h1>
        <h2 prop={item.id}>{item.title}</h2>
        <p>{item.description}</p>
        <img src={item.image} alt="product-image" width="200" height="250" />
        <p>£{item.price}</p>
        <button>BUY NOW</button>
      </div>
    </div>
  );
}

export default ItemDetail;
