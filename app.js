const express = require('express');
const app = express();

app.use(express.json());

console.log(app);

const birdFam = [
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
    res.send(birdFam);
});

app.get('/birds/:id', (req, res) => {
    const id = req.params.id;
    const bird = birdFam.find(bird => bird.id === id);
    if (!bird) return res.status(404).send({message: 'Bird not found'});
    res.send(bird);
});

app.post('/makebird', (req, res) => {
    const bird = {
        id: birdFam.length + 1,
        name: req.body.name
    };
    birdFam.push(bird);
    res.send(bird);
});

app.put('/updatebird', (req, res) => {
    // Find fugl. Hvis fugl ikke findes, send 404.
    const bird = birdFam.find(bird => bird.id === id);
    if (!bird) return res.status(404).send({message: '404. Bird not found'});

    bird.name = req.body.name;
    res.send(bird);
});

app.delete('/deletebird/:id', (req, res) => {
    const bird = birdFam.find(bird => bird.id === id);
    if (!bird) return res.status(404).send({message: '404. Bird not found'});

    const index = birdFam.indexOf(bird);
    birdFam.splice(index, 1);

    res.send(bird);
});

console.log("Server is running on port 8080");

app.listen(8080);