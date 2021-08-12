import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserDisplay() {
  const { id } = useParams();
  const [singleUser, setSingleUser] = useState({});
  const [userAddress, setUserAddress] = useState({});

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setSingleUser(res.data);
        setUserAddress(res.data.address);
      });
  };
  // console.log(address);

  return (
    <>
      <div>
        <Link to="/">Back</Link>
      </div>
      <div>
        <h1>{singleUser.username}</h1>
        <h3>{userAddress.street}</h3>
        <h3>{userAddress.city}</h3>
      </div>
    </>
  );
}
