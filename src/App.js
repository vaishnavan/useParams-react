import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListsLink from "./ListsLink";
import UserDisplay from "./UserDisplay";

export default function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  //get user
  const getAllUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Router>
        <h1>params routing</h1>
        <Switch>
          <Route exact path="/">
            <ListsLink userData={userData} />
          </Route>
          <Route exact path="/:id">
            <UserDisplay />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
