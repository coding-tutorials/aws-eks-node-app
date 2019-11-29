const express = require('express')
const app = express()

app.get('/consume', (request, response) => {
  console.info('[consume] received request')

  const initDate = Date.now()
  setTimeout(() => {
    const finishDate = Date.now()

    response.send({
      initDate,
      finishDate,
      response: 'OK'
    })
    console.info('[consume] response sent')
  }, 5000)
})

const port = process.env.HTTP_PORT
app.listen(port, () => {
  console.info(`listening at: ${port}`)
})