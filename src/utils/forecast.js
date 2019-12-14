const request = require('request')



const forecast = (latitude, longitude, callback) =>{
  const url = `https://api.darksky.net/forecast/${process.env.DARKSKY}/${latitude}, ${longitude}`
  
  request({ url, json: true }, (error, { body }) => {

    if (error){
      callback('Unable to connect to weather service!', undefined)
      } else if (body.error){
      callback('Unable to find location', undefined)
      } else {
      callback(undefined, `${body.daily.data[1].summary} It is currently ${body.currently.temperature} degrees out. The high today is ${body.daily.data[0].temperatureHigh}. With a low of ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast
