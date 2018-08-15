const express = require('express');
const bodyParser= require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function() {
    console.log(`listening on ${port}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/formData', (req, res) => {
    console.log(req.body.text);
    res.end(200);
});