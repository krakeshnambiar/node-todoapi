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

    // db.collection('Todos').insertOne({
    //     text: 'some todo',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('unable to insert Todos');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined,2));
    // });

    db.collection('Users').insertOne({
        name: 'rakesh',
        age: 30,
        location: 'EC1'
    }, (err,result) => {
        if(err){
             return console.log('unable to insert Users');
         }

         console.log(JSON.stringify(result.ops, undefined,2));
         console.log(result.ops[0]._id.getTimestamp());

    });

    client.close();
});