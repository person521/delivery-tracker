require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const request = require('request')
const Delivery = require('./models/delivery')
const mapsUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'
const key = 'AIzaSyDwdKdt1Sn0CmERazHNs1Mn8wwG9pqOVCI'

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

app.get('/api/deliveries', (req, res) => {
    Delivery.find({}).then(delivery => {
        res.json(delivery)
    })
})

app.put('/api/deliveries/:id', (req, res, next) => {
  const body = req.body
  const delivery = {}
  delivery.address = body.address
  delivery.total = body.total
  delivery.payment = body.payment
  Delivery.findByIdAndUpdate(req.params.id, delivery).then(newDelivery => {
    res.json(newDelivery)
  })
  .catch(error => next(error))
})

app.get('/api/deliveries/:id', (req, res) => {
  Delivery.findById(req.params.id).then(delivery => {
    res.json(delivery)
  })
})

app.get('/api/predictions', (req, res) => {
  const params = {}
  params.address = req.query.address
  params.sessiontoken = req.query.sessiontoken
  request(
    { url: `${mapsUrl}input=${params.address}&location=40.290447, -74.078151&radius=5520&strictbounds&key=${key}&sessiontoken=${params.sessiontoken}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message })
      }
      console.log(JSON.parse(body))
      res.json(JSON.parse(body))
    }
  )
})

app.post('/api/deliveries', (req, res) => {
  const body = req.body
  const delivery = new Delivery({
    address: body.address,
    total: body.total,
    payment: body.payment
  })

  delivery.save().then(delivery => {
    res.json(delivery)
  })
})

app.delete('/api/deliveries/:id', (req, res) => {
  Delivery.findByIdAndDelete(req.params.id).then(delivery => {
    res.json(delivery)
  })
})

const errorHandler = (error, req, res, next) => {
  console.log(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})