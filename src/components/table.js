import React from "react";
import { useState, useEffect } from "react";

import { Main, Tr, Th, Td } from "../styles/table";
import axios from "axios";

import Modals from "../components/modal";

const Table = () => {
  const [input, setInput] = useState([]);
  const [set, setReady] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const getDetails = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        setInput(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getDetails();
  }, []);
  const deleteUser = (id) => {
    setInput(input.filter((input) => input.id !== id));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const add = (data) => {
    console.log("data", data);
  };
  return (
    <Main>
      <Td>
        <Th>Id</Th>
        <Th>Title</Th>
        <Th>Category</Th>
        <Th className="description">Description</Th>
        <Th>Price</Th>
        <Th className="image">Image</Th>
        <Th>Action</Th>
      </Td>
      {input.map((row) => (
        <Td>
          <Tr>{row.id}</Tr>
          <Tr>{row.title}</Tr>
          <Tr>{row.category}</Tr>
          <Tr style={{justifyContent: "center" ,alignSelf: "start",width: 500}}>{row.description}</Tr>
          <Tr>{row.price}</Tr>
          <Tr>
            {""}
            <img style={{ width: 100, height: 100 }} src={row.image}></img>
          </Tr>
          <Tr>
            <button className="button" onClick={() => deleteUser(row.id)}>
              Delete
            </button>
            <button
              className="update"
              onClick={() => {
                openModal();
                setReady(row);
                 
              }}
            >
              Edit
            </button>
          </Tr>
          {modalIsOpen && (
            <Modals
              show={modalIsOpen}
              data={set}
              fun={add}
              close={closeModal}
            />
          )}
        </Td>
      ))}
    </Main>
  );
};
export default Table;
