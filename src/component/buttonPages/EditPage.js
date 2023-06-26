import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const EditPage = () => {
  const { eid } = useParams();
  let history = useHistory();
  const [editUser, setEditUser] = useState({
    newName: "",
    newUserName: "",
    newEmail: "",
    newWebsite: "",
    newPhone: "",
  });

  const { newName, newUserName, newEmail, newWebsite, newPhone } = editUser;

  const onInputChange = (e) => {
    // console.log("onInputChange-->", e.target.value);
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    const newFormData = {
      name: editUser.newName,
      username: editUser.newUserName,
      email: editUser.newEmail,
      website: editUser.newWebsite,
      phone: editUser.newPhone,
    };
    await axios
      .put(`http://localhost:3006/userdata/${eid}`, newFormData)
      .then((response) => {
        console.log("add_response-->", response);
        if (response.status === 201) {
          history.push("/");
        }
      })
      .catch((err) => {
        console.log("err-->", err);
      });
  };

  const loadUser = async () => {
    const newFormData = {
      name: editUser.newName,
      username: editUser.newUserName,
      email: editUser.newEmail,
      website: editUser.newWebsite,
      phone: editUser.newPhone,
    };
    await axios
      .get(`http://localhost:3006/userdata/${eid}`,newFormData)
      .then((res) => {
        console.log("res-->", res);
        setEditUser(res.data);
      })
      .catch((error) => {
        console.log("error-->", error);
      });
  };

  return (
    <>
      <div className="container my-3" style={{ width: "60%" }}>
        <div className="card border shadow">
          <div className="text-center">
            <h2>Edit User</h2>
          </div>
          <div className="card-body">
            <form onSubmit={(e) => formSubmit(e)}>
              <div className="mb-3">
                <label className="form-label">Employee Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Employee Name"
                  name="newName"
                  value={newName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                  name="newUserName"
                  value={newUserName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="newEmail"
                  value={newEmail}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Website</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Website"
                  name="newWebsite"
                  value={newWebsite}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact no.</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contact no."
                  name="newPhone"
                  value={newPhone}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="row" style={{ width: "60%", margin: "0 auto 0" }}>
                <div className="col-md-6">
                  <button
                    type="submit"
                    className="btn btn-success border shadow"
                  >
                    Edit user
                  </button>
                </div>
                <div className="col-md-6">
                  <Link to="/" className="btn btn-secondary border shadow">
                    Back to home
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPage;
