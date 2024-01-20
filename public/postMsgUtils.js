// we should implement a TTL for this as well
const basketMap = {}

async function fakeFetchOperation() {
  console.log('fake fetch operation starting...')
  await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log('fake fetch operation done!')
}

async function processBasket(data) {
  console.log('processBasket operation started for #' + data.basketId, data)
  await fakeFetchOperation()
  console.log('processBasket operation finalized for #' + data.basketId, data)
  basketMap[data.basketId] = data
}

async function sendBasketWithPostMessage(basketId) {
  processBasket({
    basketId,
    name: 'test',
    price: 100,
    description: 'one long description.....',
  })
}

function registerPostMessageListenerForPage1() {
  window.addEventListener('message', event => {
    // Handle the received message
    if (event.data.type === 'getBasket') {
      const basketId = event.data.data.basketId
      const basketPayload = basketMap[basketId]
      if (basketPayload) {
        event.source.postMessage({ type: 'basketResponse', data: basketPayload })
      }
    }
  })
  console.log('Registered postMessage listener for page 1')
}

function registerPostMessageListenerForPage2(basketId) {
  let timerId = undefined
  window.addEventListener('message', event => {
    // lets make sure we only react to the correct basket
    if (event.data.type === 'basketResponse' && event.data.data.basketId === basketId) {
      clearInterval(timerId)
      document.getElementById('response').innerHTML = `
        Done processing basket! <br> <pre>${JSON.stringify(event.data.data, null, 2)}</pre>
        Ready to go to checkout!
      `
      console.log('timer cleared and response displayed')
    }
  })

  timerId = setInterval(() => {
    getBasketFromOtherTabUsingPostMessage(basketId)
  }, 1000)
}

function getBasketFromOtherTabUsingPostMessage(basketId) {
  console.log('Attempt to get basket: #' + basketId)
  opener.postMessage({ type: 'getBasket', data: { basketId } })
}
