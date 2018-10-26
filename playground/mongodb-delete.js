//mongo db client
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//url, amzone weservice url, or horoku url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');
//deleteMany
    // db.collection('Todos').deleteMany({text: 'have lunch'}).then((results) => {
    //     console.log(results);
    // });
//delete one
    // db.collection('Todos').deleteOne({text: 'have lunch'}).then((results) => {
    //     console.log(results);
    // });
// find one and delete
    db.collection('Todos').findOneAndDelete({completed: true}).then((results) => {
        console.log(results);
    });
   

    
    //client.close();
});