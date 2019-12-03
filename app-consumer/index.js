const express = require('express')
const app = express()

app.get('/consume', (request, response) => {
  console.info('[consumer] received request')

  const initDate = Date.now()
  setTimeout(() => {
    const finishDate = Date.now()

    response.send({
      initDate,
      finishDate,
      response: 'OK',
      version: '0.0.1'
    })
    console.info('[consumer] response sent')
  }, 5000)
})

const port = process.env.HTTP_PORT
app.listen(port, () => {
  console.info(`[consumer] listening at: ${port}`)
})