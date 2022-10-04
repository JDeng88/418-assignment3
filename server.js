const express = require('express');
const app = express();
require('dotenv').config();

const port = 8088;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
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
  