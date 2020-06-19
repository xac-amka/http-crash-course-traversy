const path = require('path');
const express = require('express');

const app = express();

// Express static folder
app.use(express.static('public'));

app.use(express.json());
// https://expressjs.com/en/api.html#express.urlencoded

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(req.rawHeaders);
    // res.send(req.header('user-agent'));
    // res.send('Hello From Express');
});

app.post('/contact', (req, res) => {
    // send data to body
    // res.send(req.body);
    if(!req.body.name) {
        return res.status(400).send('Name is required!');
    }

    // Database Server
    res.status(201).send('Thank you' + req.body.name);
});

app.post('/login', (req, res) => {
    if(!req.header('x-auth-token')){
        return res.status(400).send('No Token');
    }

    if(req.header('x-auth-token') != '123456') {
        return res.status(401).send('Not authorized');
    }

    res.send('logged in');
});

app.put('/post/:id', (req, res) => {
    // Database Stuff
    

    res.json({
        id: req.params.id,
        title: req.body.title
    })
});

app.delete('/post/:id', (req, res) => {
    // Database Stuff
    

    res.json({
        msg: 'Post ' + req.params.id + ' deleted'
    })
});

app.listen(5000, ()=> console.log('Server is running on port 5000'));
