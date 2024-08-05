import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSaveUsername = () => {
    localStorage.setItem("username", username);
    navigate("/Redirect");
  };

  return (
    <div>
      <h1>Enter Your Username</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <button onClick={handleSaveUsername}>
        Save Username to Local Storage
      </button>
    </div>
  );
};
export default Home;
