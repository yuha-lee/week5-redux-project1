const express = require('express');
const app = express();

app.listen(3355, () => {
    console.log('Server start...', 'http://localhost:3355');
});

// app.all('/*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });

const path = require('path');
app.use('/', express.static('./public'));
app.get('/', (request, response) => {
   response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

const Client = require('mongodb').MongoClient;

app.get('/category', (request, response) => {
    var url = "mongodb://211.238.142.181:27017";
    Client.connect(url, (err, client) => {
        var db = client.db('mydb');
        db.collection('category').find({}).toArray((err, docs) => {
            response.json(docs);
            // console.log(docs);
            client.close();
        });
    });
});

app.get('/cate_food', (request, response) => {
    var cno = request.query.cno;
    var url = "mongodb://211.238.142.181:27017";
    Client.connect(url, (err, client) => {
        var db = client.db('mydb');
        db.collection('food').find({cno: Number(cno)}).toArray((err, docs) => {
            response.json(docs);
            // console.log(docs);
            client.close();
        });
    });
});

app.get('/cate_info', (request, response) => {
    var cno = request.query.cno;
    var url = "mongodb://211.238.142.181:27017";
    Client.connect(url, (err, client) => {
        var db = client.db('mydb');
        db.collection('category').find({cateno: Number(cno)}).toArray((err, docs) => {
            response.json(docs[0]);
            // console.log(docs[0]);
            client.close();
        });
    });
});

app.get('/food_detail', (request, response) => {
        var no = request.query.no;
        var url = "mongodb://211.238.142.181:27017";
        Client.connect(url, (err, client) => {
            var db = client.db('mydb');
            db.collection('food').find({no: Number(no)}).toArray((err, docs) => {
                response.json(docs[0]);
                console.log(docs[0]);
                client.close();
            });
        });
});