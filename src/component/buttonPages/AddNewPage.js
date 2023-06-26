import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AddNewPage = () => {
  let history = useHistory();
  const [addnew, setAddnew] = useState({
    newName: "",
    newUserName: "",
    newEmail: "",
    newWebsite: "",
    newPhone: "",
  });

  const { newName, newUserName, newEmail, newWebsite, newPhone } = addnew;

  const onInputChange = (e) => {
    // console.log("onInputChange-->", e.target.value);
    setAddnew({ ...addnew, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const newFormData = {
      name: addnew.newName,
      username: addnew.newUserName,
      email: addnew.newEmail,
      website: addnew.newWebsite,
      phone: addnew.newPhone,
    };
    await axios
      .post("http://localhost:3006/userdata", newFormData)
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

  return (
    <div className="container my-3" style={{ width: "60%" }}>
      <div className="card border shadow">
        <div className="text-center">
          <h2>Add a User</h2>
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
                id="formGroupExampleInput2"
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
                id="formGroupExampleInput2"
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
                id="formGroupExampleInput2"
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
                id="formGroupExampleInput2"
                placeholder="Contact no."
                name="newPhone"
                value={newPhone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="row" style={{ width: "60%", margin: "0 auto 0" }}>
              <div className="col-md-6">
                <button type="submit" className="btn btn-success border shadow">
                  Add new (+)
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
  );
};

export default AddNewPage;
