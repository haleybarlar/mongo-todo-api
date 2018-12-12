const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('unable to connect to mongodb server')
  }
  console.log('connected to MongoDB server')
  const db = client.db('TodoApp')

  // MongoDB update operators

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c113a996cd79a23a7bc43a0')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndUpdate({name: 'Jen'},
  {
    $set: {name: 'Gatsby'},
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  // client.close()
})
