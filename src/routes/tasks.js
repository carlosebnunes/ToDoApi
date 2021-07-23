const express = require('express')
const Task = require('../models/tasks')
const router = new express.Router()

router.post('/tasks', async(req,res)=>{
  const tasks = new Task(req.body)

  try {
    await tasks.save()
    res.status(201).send(tasks)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.get('/tasks', async(req,res)=>{
  try {
    const tasks = await Task.find({})
    res.status(200).send(tasks)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/tasks/:id', async(req,res)=>{
  const _id = req.params.id
  try {
    const tasks = await Task.findById(_id)
    if (!tasks) {
      return res.status(404).send()
    }else{
      res.status(200).send(tasks)
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

router.patch('/tasks/:id', async(req,res)=>{
//Atualizar
  const updates = Object.keys(req.body)
  const allowedUpdate = ["description","completed"]
  const isValidOperation = updates.every((update)=> allowedUpdate.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({error: 'Esses campos não podem ser atualizados'})
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    if (!task) {
      return res.status(400).send()
    }
    return res.send(task)
  } catch (error) {
    res.status(500).send(error)
  }

  res.send()
})

router.delete('/tasks/:id', async(req,res)=>{
  //Deletar
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) {
      return res.status(404).send()
    }else{
      res.status(200).send()
    }
  } catch (error) {
    res.status(500).send(error)
  }
  })

module.exports = router