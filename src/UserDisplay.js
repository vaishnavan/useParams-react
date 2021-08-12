import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserDisplay() {
  const { id } = useParams();
  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setSingleUser(res.data);
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
      </div>
    </>
  );
}
