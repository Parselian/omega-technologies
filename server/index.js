const express = require('express'),
  db = require('./db'),
  fs = require('fs'),
  cors = require('cors')


const app = express(),
  PORT = 3306

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})