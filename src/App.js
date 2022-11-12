import React, { useState } from "react";
import Addusers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [user, setUser] = useState([]);

  const onAddHandler = (name, age) => {
    setUser((prevList) => {
      return [...prevList, { username: name, age: age }];
    });
  };
  return (
    <div>
      <Addusers onAdd={onAddHandler} />
      <UsersList users={user} />
    </div>
  );
}

export default App;
