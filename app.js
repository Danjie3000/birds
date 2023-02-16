const express = require('express');
const app = express();
console.log(app);

const birds3 = [
    { 
        id: '1', 
        name: 'Crow'
    },
    { 
        id: '2', 
        name: 'Seagol'
    },
    { 
        id: '3', 
        name: 'Eagle'
    }
]

let birds1 = 0;
app.get('/bird1', (req, res) => {
    birds1 += 1;
    res.send({message: `${birds1} bird(s)`});
});

app.get('/birds', (req, res) => {
    res.send(birds3);
});

app.get('/birds/:id', (req, res) => {
    const id = req.params.id;
    const bird = birds3.find(bird => bird.id === id);
    res.send(bird);
});
/*
app.post('/', (req, res) => {
 
});

app.patch('/', (req, res) => {
 
});

app.delete('/', (req, res) => {
 
});
*/
console.log("Server is running on port 8080");

app.listen(8080);