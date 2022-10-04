const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const cors = require('cors');



const port = 8088;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
//app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('index.ejs');
})

app.get("/add", (req, res) => {
    res.json({
        "sum": res.body.num1 + res.body.num2
    })
})


app.listen(port, () => {
    console.log('Listening on port ', port);
})
  

