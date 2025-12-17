import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Website!');
});

app.get("/about", (req, res) => {
    res.send("This is a simple Node.js website using Express.");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});