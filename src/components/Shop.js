import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch("https://fakestoreapi.com/products?limit=10");
    const data = await res.json();
    console.log(data);
    setItems(data);
    setIsLoading(false);
  };

  const mapItems = (item) => (
    <h3 key={item.id}>
      <Link to={`/shop/${item.id}`}>{item.title}</Link>
    </h3>
  );

  return (
    <div>
      <h1>Shop</h1>
      <div>{isLoading ? <h3>Loading...</h3> : items.map(mapItems)}</div>
    </div>
  );
}

export default Shop;
