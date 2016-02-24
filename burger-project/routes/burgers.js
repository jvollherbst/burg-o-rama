'use strict'
var express    = require('express');
var request    = require('request');
var db         = require('../db/pg');
var burgers     = express.Router();//create a new router, name it burgers

var  burgerData = [];

var dumpMethod = (req, res) => {
  res.send(req.method + " burgers! //method not implemented")
}

burgers.route('/')
  .get((req, res)=>{
    res.render('./pages/burgerall', { data: burgerData })
  })

  .post((req, res)=>{
    burgerData.push(req.body)
    var newID = burgerData.length-1;
    res.redirect('./' + newID)
    console.log(newID);
  })

burgers.route('/new')
  .get((req, res)=>{
    res.render('pages/editBurger.ejs', {
    burgerForm:{
      title:'Create your Dream Burger',
      burgerURL:'/burgers/',
      submitMethod:'post'
      }
    })
  })

burgers.route('/:id')
  .get((req, res)=>{
    console.log('hit-----------burgersID.get')
    var bID = req.params.id;
    if(!(bID in burgerData)){ //if the id is not in our array, throw a 404
      res.sendStatus(404);
      return;
    }
    res.render('pages/burger_one', { //if the id is found, render this ejs page
      burgerID: bID, //the burger's id
      burgerURL:'/burgers/' + bID, //make the url burgers/burger's id
      burgerData: burgerData[bID] // select the burger by id from our array
    })
  })

/*one burger update*/
  .put((req,res)=>{
    console.log('hit-----------burgersID.put')
    var bID = req.params.id;
    burgerData[bID] = req.body;

    res.redirect('./' + bID)
    if(!(bID in burgerData)){
      res.sendStatus(404);
      return;
    }
  })

  .delete((req,res)=>{
    var bID = req.params.id;

    burgerData.splice(bID, 1);
    res.redirect('./')
  })

burgers.route('/:id/edit')
.get((req, res)=>{
  console.log('hit-----------burgers.get')
  res.render('pages/editBurger.ejs', {
  burgerForm:{
    title:'Edit your Dream Burger',
    burgerURL:'/burgers/' + req.params.id + '?_method=PUT',
    submitMethod:'post'
    }
  })
})


module.exports = burgers;
