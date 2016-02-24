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
    res.send('/', {data: burgerData})
  })

  .post((req, res)=>{
    burgerData.push(req.body)
    var newID = burgerData.length-1;
    res.redirect('./' + newID)
    console.log(newID);

  })

burgers.route('/new')
  .get((req, res)=>{
    res.send('new burgers!')
  })

burgers.route('/:id')
  .get((req, res)=>{
    res.send('single burger!')
  })
/*one burger update*/
  .put((req,res)=>{
    var bID = req.params.burgerID;
    // console.log("PUT", req.body)
    //replace the burger at :burgerID position
    burgerData[bID] = req.body;
    //redirect to the new burger
    res.redirect('./' + bID)
    // if we don't have a burger there, let's
    if(!(bID in burgerData)){
      res.sendStatus(404);
      return;
    }
  })
  .delete((req,res)=>{
    var bID = req.params.burgerID;

    burgerData.splice(bID, 1);
    res.redirect('./')
  })

burgers.route('/:id/edit')
  .get((req, res)=>{
    res.send('edit a single burger!')
  })


module.exports = burgers;
