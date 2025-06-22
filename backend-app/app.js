const express = require('express');
const {sequelize} = require("./src/models");
const cors = require("cors");
const app = express();

// Set up CORS options to allow requests from specific origins
const corsOptions = {
    origin: ['http://localhost:9000', 'http://127.0.0.1:9000', 'http://localhost:8080', 'http://127.0.0.1:8080'],
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));

// Set up a simple route for testing
app.get('/', (req, res) => {
    res.send('Hello from REST API service');
});  

// Import and use the message routes
const routes = { 
    '/newMessage': require('.src/routes/message-routes.js'),
    '/getAllMessages': require('.src/routes/message-routes.js'),
};

// Register the routes with the app
Object.entries(routes).forEach(([path, route]) => {
    app.use(path, route);
});


const PORT = process.env.PORT;

app.listen({port: PORT}, async () => { 
    await sequelize.sync({ force: false }); 
});