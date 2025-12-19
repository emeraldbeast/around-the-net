const express = require('express');
const app = express();
const port = process.env.port||3000;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const teams = require('./teams'); 
// const mongoose = require("mongoose");
// const User = require('./modules/user');

app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.render("index"); 
})

app.get('/tournament',(req,res)=>{
    res.render('tournament')
})

app.get('/tournament/matches',(req,res)=>{
    res.render('matches')
})

app.get('/news',(req,res)=>{
    res.render('news')
})

app.get('/auction', (req, res) => {
  const sortedPlayers = [];

  teams.forEach(team => {
    if (Array.isArray(team.players)) {
      team.players.forEach(player => {
        sortedPlayers.push({
          name: player.name,
          price: player.price,
          teamName: team.name,
          teamLogo: team.logo
        });
      });
    }
  });

  sortedPlayers.sort((a, b) => b.price - a.price);

  res.render('auction', { sortedPlayers });
});

app.get('/teams/:id', (req, res) => {
  const teamId = (req.params.id);
  const team = teams.find(t => t.id === teamId);
  if (!team) {
    return res.status(404).render('404', {
      message: "Team not found. Please check the ID."
    });
  }
  res.render('team-detail', { team });
});

app.use((req, res) => {
  res.status(404).render('404', {
    message: "Oops! The page you're looking for doesn't exist."
  });
});


app.listen(port);