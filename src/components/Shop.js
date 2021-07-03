import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div>
        {items.map((item) => (
          <h2 key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.title}</Link>
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Shop;
