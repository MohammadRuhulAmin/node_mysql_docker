require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const db = require('./db')

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);

app.get('/get-data',(req,res)=>{
    res.send("test-api called");
});

app.get('/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `applications` ORDER BY id LIMIT 5;');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});


app.listen(port,()=>{
    console.log(`Application is running on port ${port}`);
})

