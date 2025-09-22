const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const User = require('./modules/user');

app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.render("index"); 
})

app.get('/fixtures',(req,res)=>{
    res.render('fixtures')
})

app.listen(port);