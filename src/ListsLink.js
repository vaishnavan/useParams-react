import React from "react";
import { Link } from "react-router-dom";

export default function ListsLink({ userData }) {
  return (
    <>
      {userData.map((data) => {
        return (
          <div key={data.id}>
            <Link to={`/${data.id}`}>{data.username}</Link>
          </div>
        );
      })}
    </>
  );
}
