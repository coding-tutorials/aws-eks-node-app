const request = require('request')

let itemsToProduce = 0

const consumerAddress = process.env.CONSUMER_ADDRESS

setInterval(() => {
  console.info(`[producer] item produced, in queue: ${++itemsToProduce}`)

  request(`${consumerAddress}/consume`, (error, response) => {
    if(error) {
      return console.error(`[producer] error: ${error}`)
    }
    
    console.info(`[producer] consumed: ${response.statusCode}, in queue: ${--itemsToProduce}`)
  })
}, 2000)