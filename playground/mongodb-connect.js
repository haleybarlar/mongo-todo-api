// const MongoClient = require('mongodb').MongoClient
// destructured: (same as above)
const {MongoClient, ObjectID} = require('mongodb')

// *destructured* the user object, pulling out the name property, creating a new name variable and setting it equal to whatever the value is
// let user = {name: 'gatsby', age: 25}
// let {name} = user

// let obj = new ObjectID()
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('unable to connect to mongodb server')
  }
  console.log('connected to MongoDB server')
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // insert new doc into Users (name, age, location)

  db.collection('Users').insertOne({
    name: "Gatsby",
    age: 8,
    location: "the woods",
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  client.close()
})
