const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('unable to connect to mongodb server')
  }
  console.log('connected to MongoDB server')
  const db = client.db('TodoApp')

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // deleteOne (deletes first item that matches criteria)
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // findOneAndDelete (deletes first one it finds and returns document)
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Users').deleteMany({name: 'Gatsby'}).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5c0fef0a8a542032898ee9a3')
  }).then((result) => {
    console.log(JSON.stringify(results, undefined, 2))
  })

  // client.close()
})
