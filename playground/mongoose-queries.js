const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

let userID = '5c11617d7831bf4953ed7a1e'

User.findById(userID).then((user) => {
  if (!user) {
    return console.log('User not found')
  }
  console.log(JSON.stringify(user, undefined, 2))
}).catch((err) => {
  console.log(err)
})

// let id = '5c1177ea56d7da4dcd960209'
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid')
// }

// returns array
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos", todos)
// })
//
// // returns object
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo", todo)
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log("Todo By Id", todo)
// }).catch((err) => {
//   console.log(err)
// })
