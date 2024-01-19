// we should implement a TTL for this as well
const basketMap = {}

async function fakeFetchOperation() {
  console.log('fake fetch operation')
  await new Promise((resolve) => setTimeout(resolve, 3000))
}

// Function to add a message with a key
async function processBasket(data) {
  console.log('processBasket operation started for #' + data.basketId, data)
  await fakeFetchOperation()
  console.log('processBasket operation finalized for #' + data.basketId, data)
  basketMap[data.basketId] = data
}

// Listen for messages from pages
self.addEventListener('message', async event => {
  const message = event.data
  if (message.type === 'processBasket') {
    processBasket(message.data)
  } else if (message.type === 'getBasket') {
    const { basketId } = message.data
    const basketPayload = basketMap[basketId]
    if (basketPayload) {
        event.source.postMessage({ type: 'basketResponse', data: basketPayload })
    }
  }
})
