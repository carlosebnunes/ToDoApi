const express = require('express')

const router = new express.Router()

router.post('/tasks', (req,res)=>{
  res.status(201).send()
})

router.get('/tasks', (req,res)=>{
  const tasks = [
      {name: 'tasks'},
      {name: 'tasks'},
  ]
  res.status(200).send(tasks)
})

router.get('/tasks/:id', (req,res)=>{
  console.log(req.params.id)
  const user = {name: 'tasks'}
  res.status(200).send(tasks)
})

router.patch('/tasks/:id', (req,res)=>{
//Atualização
  res.send()
})

router.delete('/tasks/:id', (req,res)=>{
  //Deletar
    res.send()
  })

module.exports = router