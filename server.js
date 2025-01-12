const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

// Percorsi ai certificati
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

// Servire file statici (es. index.html)
app.use(express.static('public'));

// Creare server HTTPS
https.createServer(options, app).listen(3000, () => {
    console.log('Server HTTPS avviato su https://localhost:3000');
});
