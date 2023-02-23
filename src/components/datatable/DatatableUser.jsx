import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();


  axios
    .get("http://127.0.0.1:8088/api/v1/users/filter?=", {
      params: {
        id: 1,
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">RoleId</th>
              <th scope="col">Modified</th>
              <th scope="col">ModifiedBy</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

