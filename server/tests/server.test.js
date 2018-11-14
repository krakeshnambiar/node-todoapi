const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    text: 'test1 todos'
},{
    text: 'test2 todos'
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) =>{
        var text = 'Test todo test';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });

    //2nd test case to check empty string is not saving in db 

    it('should not create a new todo with invalid data', (done) =>{
        //var text = 'Test todo test';

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            // .expect((res) => {
            //     expect(res.body.text).toBe();
            // })
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    //expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });

});

//Test todos for GEt

describe('GET /todos', () =>{
    it('should get all todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(3);
        })
        .end(done);
    });
});