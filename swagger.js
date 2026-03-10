const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Contacts Api",
        description: "Contacts Api"
    },
    host: "localhost:5000",
    schemes: ["http", "https"]
};

const outputFile = './swagger.json';
const endpointsFile = ['./server.js'];

swaggerAutogen(outputFile, endpointsFile, doc);