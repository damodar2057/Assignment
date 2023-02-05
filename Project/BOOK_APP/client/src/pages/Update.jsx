import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {useNavigate,useLocation} from "react-router-dom"

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  // const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  

  
  return (
    <div className='form'>
    <h1>Update The Book</h1>
    <input type="text" placeholder="Title" name="title" onChange={handleChange}></input>
    <input type="text" placeholder="Description" name="desc" onChange={handleChange}></input>
    <input type="number" placeholder="Price" name="price" onChange={handleChange}></input>
    <input type="text" placeholder="Cover" name="cover" onChange={handleChange}></input>
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update
