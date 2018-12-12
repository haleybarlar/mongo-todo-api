let express = require('express')
let bodyParser = require('body-parser')

let {mongoose} = require('./db/mongoose')
let {Todo} = require('./models/todo')
let {User} = require('./models/user')

let app = express()

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

app.listen(3000, () => {
  console.log('Started on port 3000')
})

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
