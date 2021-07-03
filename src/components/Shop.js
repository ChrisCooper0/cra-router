import "../App.css";
import React, { useState, useEffect } from "react";

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await res.json();
    console.log(data);
    setItems(data);
  };

  return (
    <div>
      <h1>Shop</h1>
      {items.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
}

export default Shop;
