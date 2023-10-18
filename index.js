const express = require('express')
const app = express()

// Sinalizar para o Express que o corpo
// das requisições estará sempre em JSON
app.use(express.json());

app.get('/', function (req, res) {
    res.send("Hello World!")
});

app.get('/oi', function (req, res) {
    res.send("Olá mundo!")
});

// CRUD de lista de DevMon
 const items = ["Java", "Kotlin", "Android", "Express", "NestJS"];


// READ ALL - [GET] /items
app.get("/items", function (req, res) {
    res.send(items.filter(Boolean))
});

// READ BY ID - [GET] /items/:id
app.get("/items/:id", function (req, res) {
    // Acessamos o parâmetro de rota ID
    // Subtraímos 1 para corrigir a questão do índice
    // da lista que começa em 0
    const id = req.params.id - 1;

    // Acessamos o item na lista a partir do index
    const item = items[id]

    // Exibimos o item obtido
    res.send(item)
});

// CREAT - [POST] /items
app.post("/items", function (req, res) {
    //Extraio a informação do corpo da requisição
    const item = req.body.name

    //Insiro o item na lista
    items.push(item)

    //Enviamos uma msg de sucesso
    res.send("Item created sucessfuly!")
});

// UPDATE - [PUT] /items/:id
app.put("/items/:id", function (req, res) {
    // Acessamos o parâmetro de rota e corrigimos o índice
    const id = req.params.id - 1
  
    // Obtemos o novo item a partir do corpo da requisição
    const newItem = req.body.name
  
    // Colocamos o novo item na mesma posição do item anterior
    items[id] = newItem
  
    // Enviamos uma mensagem de sucesso
    res.send("Item updated successfully.")
});

// DELETE - [DELETE] /items/:id
app.delete("/items/:id", function (req, res) {
    // Acessamos o parâmetro de rota e corrigimos o índice
    const id = req.params.id - 1
  
    // Removemos a informação a partir do índice
    delete items[id]
  
    // Enviamos uma mensagem de sucesso
    res.send("Item deleted successfully.")
});

app.listen(3000, () => {
    console.log("App running on http://localhost:3000");
})
