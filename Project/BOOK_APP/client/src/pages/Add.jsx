import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Add = () => {
  const [book,setBook]=useState({
    title:'',
    desc:'',
    price:null,
    cover:'',
  })
  const navigate=useNavigate();
  const handleChange =(e)=>{
 
    setBook((prev)=>({...prev,[e.target.name]:e.target.value}))
    console.log(book)
  }
  const handleClick =async (e)=>{
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books",book)
      navigate("/")
    } catch (error) {
      console.log(error);
    }

  }

  
  return (
    <div className='form'>
    <h1>Add New Book</h1>
    <input type="text" placeholder="Title" name="title" onChange={handleChange}></input>
    <input type="text" placeholder="Description" name="desc" onChange={handleChange}></input>
    <input type="number" placeholder="Price" name="price" onChange={handleChange}></input>
    <input type="text" placeholder="Cover" name="cover" onChange={handleChange}></input>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add
