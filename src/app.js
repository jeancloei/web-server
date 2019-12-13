const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public') 

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.send('<h1>Hellow express!</hi>')
})

app.get('/help', (req, res) => {
  res.send([{
    name: 'Jean'
  }, {
    age:36
  }])
})

app.get('/about', (req, res) => [
  res.send('<h1>About page</h1>')
])

app.get('/weather', (req, res) => {
  res.send({
    forcast:"It is claudy",
    location:'Miami, FL'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
