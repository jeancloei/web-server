const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public') 

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Created by Jean'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Jean De Castro'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'Tell me what we can do for you today.'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forcast:"It is claudy",
    location:'Miami, FL'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
