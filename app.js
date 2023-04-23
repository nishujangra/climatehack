const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = 3000



// Set public folder as static folder for static files
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Set EJS as templating engine
app.set('view engine', 'ejs');


// Routes

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/calc', (req, res) => {
    res.render('calc.ejs')
})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})