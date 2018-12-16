let express = require('express')
let bodyParser = require('body-parser')
let {ObjectID} = require('mongodb')

let {mongoose} = require('./db/mongoose')
let {Todo} = require('./models/todo')
let {User} = require('./models/user')

let app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc)
  }, (err) => {
    res.status(400).send(err)
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos: todos})
  }, (err) => {
    res.status(400).send(e)
  })
})

// GET /todos/:id
// validate id using .isValid
// if not valid, stop execution and respond w 404 and send back empty value

// findById
  // success
    // if todo - send back
    // if no todo -  send back 404 w empty body
  // error
    // 404 - and send empty body back
app.get('/todos/:id', (req, res) => {
  let id = req.params.id

  if(!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }

    res.send({todo})
  }).catch((e) => {
    res.status(400).send()
  })
})

app.listen(port, () => {
  console.log(`Started on port ${port}`)
})

module.exports = {app}

// let newTodo = new Todo({
//   text: 'Take Gatsby for a walk',
//   completed: false
// })
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc)
// }, (error) => {
//   console.log('Unable to save todo')
// })

// Make new user model
// Email - require it - trim it - set type - set min length of 1
// let newUser = new User({
//   email: 'gatsby@gmail.com'
// }).save().then((doc) => {
//   console.log("Saved todo", doc)
// }, (err) => {
//   console.log("Unable to save todo", err)
// })
