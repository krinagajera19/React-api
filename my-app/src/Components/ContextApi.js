import React, { useContext } from "react";

const UserContext = React.createContext({
  username: "johnny-appleseed",
  firstName: "John",
  lastName: "Appleseed",
});

const contextApi = () => {
  return (
    <div className="box">
      <User />
    </div>
  );
};

const User = () => (
  <div>
    <UserProfile />
  </div>
);

const UserProfile = (props) => {
  const context = useContext(UserContext);

  return (
    <div>
      <div className="subtitle">Profile Page </div>
      <h1 className="title">{context.username}</h1>
      <UserDetails />
    </div>
  );
};

const UserDetails = () => {
  const context = useContext(UserContext);

  return (
    <div>
      <p>
        <b>Username:</b> {context.username}
      </p>
      <p>
        <b>First Name:</b> {context.firstName}
      </p>
      <p>
        <b>Last Name:</b> {context.lastName}
      </p>
    </div>
  );
};
export default contextApi;
