import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HomePage = () => {
  // const {eid} = useParams();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    loadusers();
  }, []);

  const loadusers = async () => {
    const result = await axios.get("http://localhost:3006/userdata");
    // console.log("result-->", result.data);
    setUserList(result.data.reverse());
  };

  const delUser = async (id) => {
    // console.log('delid-->',id);
    await axios
      .delete(`http://localhost:3006/userdata/${id}`)
      .then((res) => {
        if (res.status === 200) {
          // if(window.warning("Do you want to delete ?")){
          // console.log('res-->',res);
          loadusers(res.data);
        }
      })
      .catch((err) => {
        console.log("err-->", err);
      });
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Sl.No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((uData, uIndex) => (
              <tr key={uData.id}>
                <th scope="row">{uIndex + 1}.</th>
                <td>{uData.name}</td>
                <td>{uData.email}</td>
                <td>{uData.phone}</td>
                <td>
                  <div
                    className="btn-group border shadow"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <Link to={`/view/${uData.id}`} className="btn btn-outline-primary">
                      View
                    </Link>
                    <Link
                      to={`/edit/${uData.id}`}
                      className="btn btn-outline-primary"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => delUser(uData.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
