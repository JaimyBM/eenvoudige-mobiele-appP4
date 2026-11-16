// Stap 1: Express inladen
const express = require('express');
const app     = express();
const PORT    = 3000;

// Here it waits for a connection to the local host and if it is succesfull it will send this message in the console.
app.listen(PORT, () => {
    console.log(`✅ Server draait op http://localhost:${PORT}`);
});

//Here i make the map public available to use
app.use(express.static('public'));

//With this function i make the index.html the first page u see when u open the PWA.
app.get('/', (req, res) => {
    res.sendFile(_dirname + 'public/index.html');
})