import React, { useState, useEffect } from "react";

const Redirect = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        localStorage.setItem("userData", JSON.stringify(data));
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername || "");
  }, []);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const handleToggleCart = (id) => {
    if (cartItems.includes(id)) {
      const newCartItems = cartItems.filter((itemId) => itemId !== id);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, id];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
    setRefresh(true);
  };

  return (
    <div>
      <h1>API Call Page</h1>
      <p>Username: {username}</p>
      {isLoading ? <p>Loading...</p> : null}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.map((_data) => (
          <div key={_data.id} style={{ display: "flex", alignItems: "center" }}>
            <p>
              {_data.name} {_data.username}
            </p>

            <button
              className="my-button"
              onClick={() => handleToggleCart(_data.id)}
            >
              {cartItems.includes(_data.id)
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Redirect;
