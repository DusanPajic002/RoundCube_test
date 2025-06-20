const express = require('express');
const {sequelize} = require("./src/models");
const cors = require("cors");
const app = express();

const corsOptions = {
    origin: ['http://localhost:9000', 'http://127.0.0.1:9000', 'http://localhost:8080', 'http://127.0.0.1:8080'],
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello from REST API service');
});  
const routes = { 
    '/newMessage': require('.src/routes/message-routes.js'),
    '/getAllMessages': require('.src/routes/message-routes.js'),
};

Object.entries(routes).forEach(([path, route]) => {
    app.use(path, route);
});

const PORT = process.env.PORT || 8080;

app.listen({port: PORT}, async () => { 
    await sequelize.sync({ force: false }); 
});