const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const vociSchema = new mongoose.Schema({
  english: String,
  german: String,
  french: String,
})

const question = mongoose.model('voci', vociSchema)

mongoose.set('strictQuery', true)

mongoose
  .connect(
    'mongodb+srv://Elvis:BigDipsey@cluster.rkr89yd.mongodb.net/LA1304(Quiz)?retryWrites=true&w=majorit'
  )
  .then(() => {
    console.log('Connected to database')
  })

app.get('/questions', (req, res) => {
  question
    .find({}, { _id: 0 }, (err, data) => {
      res.json(data)
    })
    .catch((err) => console.log(err))
})

app.listen(3000, () => {
  console.log('Server running on Port 3000')
})
