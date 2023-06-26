import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

const ViewPage = () => {
  const { id } = useParams();
  const [editUser, setEditUser] = useState({
    name: "",
    username: "",
    email: "",
    website: "",
    phone: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    await axios
      .get(`http://localhost:3006/userdata/${id}`)
      .then((res) => {
        console.log("res-->", res);
        setEditUser(res.data);
      })
      .catch((error) => {
        console.log("error-->", error);
      });
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {editUser.name}</li>
        <li className="list-group-item">user name: {editUser.username}</li>
        <li className="list-group-item">email: {editUser.email}</li>
        <li className="list-group-item">phone: {editUser.phone}</li>
        <li className="list-group-item">website: {editUser.website}</li>
      </ul>
    </div>
  );
};

export default ViewPage;
