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

   // db.collection('Todos').find().toArray().then((docs) => {
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err) => {
    //     console.log('unable to fetch the records',err);
    // });

    db.collection('Todos').find({completed: false}).count().then((count) => {
        console.log(`Todos Count : ${count}`);
    }, (err) => {
        console.log('unable to fetch the records',err);
    });

    //find using count

    db.collection('Users').find({name: 'rakesh'}).count().then((count) => {
        console.log(`Users count : ${count}`)
    }, (err) => {
        console.log('unable to fetch the records',err);
    });

    //find using to Array

    db.collection('Users').find({name: 'rakesh'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined,2));
    },(err) => {
        console.log('unable to fetch the records from Users',err);
    })

    //client.close();
});