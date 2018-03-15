const express = require('express')
const os = require('os')

const app = express()

app.get('', (req, res, next) => {
  const NODE_ENV = process.env.NODE_ENV
  const hostname = os.hostname()

  res.json({
    NODE_ENV,
    hostname,
  })
})

app.listen(3000)

console.log('Server listen at 3000')
