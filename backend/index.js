const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors")

const db = mysql.createPool({
    host:"34.95.191.208",
    user: "root",
    password: "Gui132lherme!",
    database: "tracksuit_project",
})

app.use(cors());
app.use(express.json());

app.post("/register",(req, res)=>{
const{nome, email, mensagem} = req.body;

let SQL = "INSERT INTO contact (nome, email, mensagem) VALUES (?,?,?)"

db.query(SQL, [nome, email, mensagem], (err, result)=>{
    console.log(err)
})

})

app.listen(3001, ()=>{
    console.log("rodou")
})
