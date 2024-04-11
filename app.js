const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const schema1 = require('./User')
const app = express()
const port = 5000;

app.use(express.json(),cors())

mongoose.connect('mongodb://localhost:27017/the')
.then(db => console.log('db is c..................'))
.catch(err => console.log(err))

// kalpesh1
//IsHbcnSYLrHrbJHO
app.get('/', (req,res) => {
  const id = req.params.id;
  schema1.find(id)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

app.get('/test/:id', (req,res) => {
  const id = req.params.id;
  schema1.findById(id)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

app.post('/create', (req,res) => {
  schema1.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})


app.put('/update/:id', (req,res) => {
  const id = req.params.id;
  const update = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  }

  schema1.findByIdAndUpdate(id, update)
  .then(update => res.json(update))
  .catch(err => res.json(err))
})

app.delete('/delete/:id', (req,res) => {
  const id = req.params.id;
  schema1.findByIdAndDelete(id)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

app.get('/', (req,res) => {
  res.send('hello..........................')
})

app.listen(port, (req,res) => {
  console.log(`running................`);
})




