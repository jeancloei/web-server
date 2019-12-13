const path    = require('path')
const express = require('express')
const hbs     = require('hbs')

const app = express()

//Defined paths for express config
const publicDirectoryPath = path.join(__dirname, '../public') 
const viewsPath           = path.join(__dirname, '../templates/views')
const partialsPath        = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to save
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Jean De Castrp'
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
    message: 'Tell me what we can do for you today.',
    title:'Help',
    name:"Jean De Castro"
  })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address!'
    })
  }

  res.send({
    forcast:"It is claudy",
    location:'Miami, FL',
    address: req.query.address
  })
})

app.get('/products', (req, res) => {
  if (!req.query.serch) {
    return res.send({
      error: 'You must provide a search term'
    })
  }

  res.send({
    products:[]
  })
})

app.get('/help/*', (req,res) => {
  res.render('404', {
    title:'404',
    name: 'Jean De Castro',
    errorMessage: 'Help article not found.'
  })
}) 

app.get('*', (req, res) => {
  res.render('404', {
    title:'404',
    name: 'Jean De Castro',
    errorMessage: 'Page not found.'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
