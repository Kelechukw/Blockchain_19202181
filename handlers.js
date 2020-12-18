let contract = require('./project_contract.js')
let method = require('./project_method.js')

const express = require('express')
const { METHODS } = require('http')
const app = express()
app.use(express.json())

app.get('/totalsupply', async (req,res) => {
  res.send(await contract.totalSupply())
})

app.post('/transfer', async (req, res) => {
 res.send(await method.go())
})

app.get('/balance/:id', async (req, res) => {
  var account = req.params.id
  res.send( await method.getBalanceOf(account))
})

const port = 8082;
app.listen(port, () => console.log(`Listening on port ${port}...`));

