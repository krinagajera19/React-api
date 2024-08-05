import React, { useEffect, useState } from "react";
import axios from "axios";

const Demo = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        const data = response.data;
        if (data) {
          setUserData(data);
        }
      });
  }, []);

  return (
    <div>
      <ul id="idUlTag">
        {userData.map((item) => (
          <li key={item.id}>
            <b>Name:</b> {item.name} <br />
            <b>Username:</b> {item.username} <br />
            <b>Email:</b> {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Demo;
