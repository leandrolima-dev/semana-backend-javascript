const express = require('express')
const app = express()

// Sinalizar para o Express que o corpo
// das requisições estará sempre em JSON
app.use(express.json())

app.get('/', function (req, res) {
    res.send("Hello World!")
});

app.get('/oi', function (req, res) {
    res.send("Olá mundo!")
})

// CRUD de lista de DevMon

const items = ["Java", "Android", "Kotlin", "Express", "NestJS"];

// READ ALL - [GET] /items
app.get("/items", function (req, res) {
    res.send(items)
});

// CREAT - [POST] /items
app.post("/items", function (req, res) {
    //Extraio a informação do corpo da requisição
    const item = req.body.name

    //Insiro o item na lista
    items.push(item)

    //Enviamos uma msg de sucesso
    res.send("Item created sucessfuly!")
})

app.listen(3000, () => {
    console.log("App running on http://localhost:3000");
})
