import React, { useState } from "react";
import ComplainTable from "./ComplainTable";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/admin.css";

const Admin = () => {
  const [passkey, setPasskey] = useState("");
  const [complaints, setComplaints] = useState([]);

  const handlePasskeyChange = (event) => {
    setPasskey(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/admin", { key: passkey })
      .then((response) => {
        setComplaints(response.data.complains);
        toast.success("Scroll Down For Complaints", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid key", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="main">
      <img className="admin" src="./images/admin.png" alt="admin icon" />
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter The Key Of Your Hostel"
          style={{}}
          value={passkey}
          onChange={handlePasskeyChange}
        />
        <button className="buttonadmin" type="submit">
          Submit
        </button>
      </form>
      {complaints.length > 0 && <ComplainTable complaints={complaints} />}
      <ToastContainer />
    </div>
  );
};

export default Admin;
