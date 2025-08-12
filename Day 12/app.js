const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.get('/about', (req, res) => {
    res.send('Welcome to the about page!');
}); 
app.get('/contact', (req, res) => {
    res.send('Welcome to the contact page!');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});