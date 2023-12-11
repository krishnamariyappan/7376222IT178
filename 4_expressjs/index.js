const express = require('express')
const app = express()
const PORT = 3000
app.get('/',(req,res) =>res.send('Hello World-7376222it178-krishna'))
app.get('/god',(req,res) =>res.send('Hello World-7376222it139-godson'))
app.listen(PORT,()=>console.log(
    `Example app listening at http:localhost:${PORT}`))