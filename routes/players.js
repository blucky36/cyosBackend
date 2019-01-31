const express = require('express');
const router = express.Router();
const knex = require("../knex.js")

router.get("/", (req, res, next) => {
  return knex("death").then(data=>res.status(200).send(data)).catch(err=>err)
})

router.post("/",(req,res,next) => {
  const {alias,deaths} = req.body
  return !alias?next({error:"oi"}):knex("death").insert({alias,death_array:deaths}).then(d=>res.status(201).send(d)).catch(err=>err)
})

router.delete("/:id",(req,res,next)=>{
  return !req.params.id?next({error:"oi"}):knex("death").where("death.id",req.params.id).first().del().returning("*").then(d=>res.status(204).send(d)).catch(err=>err)
})

module.exports = router
