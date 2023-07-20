const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Learn Spring boot"
    },
    {
      "id":"2",
      "title":"Learn Django"
    },
    {
      "id":"3",
      "title":"Learn DevOps"
    }
  ])
})

app.listen(4000, () => {
  console.log('connected on port 4000')
})