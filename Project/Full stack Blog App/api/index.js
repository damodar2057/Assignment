import express from  "express"
import mysql from "mysql"
const app=express()
app.use(express.json())
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Damodar$2000",
    database:"test",
})
//if auth problem occurs use below line in mysql workbench because sometime mysql create null password even if we create a password
 //ALTER USER 'root'@'localhost'IDENTIFIED WITH mysql_native_password BY 'Damodar$2000';

 //Get request
app.get("/",(req,res)=>{
    res.json("Hello this is backend")
})
//
app.get("/books",(req,res)=>{
    const q="SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})
//POST METHOD
app.post("/books",(req,res)=>{
    const q="INSERT INTO books(`title`,`desc`,`cover`) VALUES(?)"
    const values=[req.body.title,req.body.desc,req.body.cover]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been created Successfully")
    })
})
app.listen(8800,()=>{
    console.log("connected to the server")
})