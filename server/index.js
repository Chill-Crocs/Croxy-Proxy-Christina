const server = require('./server.js');
const axios = require('axios'); 
const app = require('./server.js');

app.get('/api/relatedItems/:itemID', (req, res) => {
    axios.get(`http://3.23.86.72:3001/api/relatedItems/${5}`)
    .then((result) => {res.send(result.data)});
});

app.get('/api/reviews/:id', (req, res) => {
    axios.get(`http://18.221.226.62:3002/api/reviews/${5}`)
    .then((result) => res.send(result.data));
});

app.get('/api/item/:itemID', (req, res) => {
    axios.get(`http://3.140.252.86:3003/api/item/${5}`)
    .then((result) => res.send(result.data));
});

app.get('/api/items/:itemID', (req, res) => {
    axios.get(`http://3.140.248.238:3004/api/items/${5}`)
    .then((result) => res.send(result.data));
});

const PORT = 3000|| process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});