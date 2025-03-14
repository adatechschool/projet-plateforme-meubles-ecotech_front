import React, { useEffect, useState } from "react";

export default function Search() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setDatas(data);
    };
    loadProducts();
  }, []);
  return (
    <>
      <div className="search">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Recherch"
        />
      </div>
      <div className="searchResults">
        <div className="searchResult">donné</div>
      </div>
    </>
  );
}
