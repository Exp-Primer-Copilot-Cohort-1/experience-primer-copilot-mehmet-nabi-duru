// Create web server
// create comments
// create getcomments
// create deletecomments
// create updatecomments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send(comment);
});

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.splice(id, 1);
    res.send(comments);
});

app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments[id] = req.body;
    res.send(comments[id]);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});