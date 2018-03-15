const express = require('express')

const app = express()

app.get('', (req, res, next) => {
  res.json({ running: true })
})

app.listen(3000)

console.log('Server listen at 3000')
