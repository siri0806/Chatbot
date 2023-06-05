import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Td, Th, Tr, Tbody, Thead } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./css/table.css";

const ComplainTable = ({ complaints }) => {
  const [complains, setComplains] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    axios
      .get("/complain")
      .then((response) => {
        setComplains(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCheckboxChange = (complainId) => {
    const updatedComplains = complaints.map((complain) => {
      if (complain._id === complainId) {
        const updatedComplain = { ...complain, completed: !complain.completed };
        axios
          .put(`/complain/${complainId}`, {
            completed: updatedComplain.completed,
          })
          .then(() => {
            setComplains((prevComplains) =>
              prevComplains.map((prevComplain) =>
                prevComplain._id === complainId ? updatedComplain : prevComplain
              )
            );
          })
          .catch((error) => {
            console.log(error);
          });
        return updatedComplain;
      }
      return complain;
    });
    setComplains(updatedComplains);
  };

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  const filteredComplains = selectedOption
    ? complaints.filter((complain) => complain.problem === selectedOption)
    : complaints;

  return (
    <>
      <div className="options">
        <select
          className="complain-select"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">All</option>
          <option value="Electricity">Electricity</option>
          <option value="Food">Food</option>
          <option value="Water">Water</option>
          <option value="Furniture">Furniture</option>
          <option value="Room Cleaning">Room Cleaning</option>
          <option value="Ragging">Ragging</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <Table className="complain-table">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Contact</Th>
            <Th>Hostel</Th>
            <Th>Room</Th>
            <Th>Problem</Th>
            <Th>Comment</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredComplains.map((complain) => (
            <Tr key={complain._id}>
              <Td>{complain.name}</Td>
              <Td>{complain.contact}</Td>
              <Td>{complain.hostel}</Td>
              <Td>{complain.room}</Td>
              <Td>{complain.problem}</Td>
              <Td>{complain.comment}</Td>
              <Td>
                {complain.completed ? (
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                ) : (
                  <input
                    type="checkbox"
                    checked={complain.completed}
                    onChange={() => handleCheckboxChange(complain._id)}
                  />
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default ComplainTable;
