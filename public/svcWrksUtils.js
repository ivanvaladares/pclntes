var serviceWorkerRegistered = false

function registerWorkerForPage1() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('Service Worker registered for page 1:', registration)
        serviceWorkerRegistered = true
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error)
      })
  }
}

function registerWorkerForPage2(basketId) {
  let timerId = undefined
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        serviceWorkerRegistered = true
        console.log('Service Worker registered for page 2:', registration)

        navigator.serviceWorker.addEventListener('message', event => {
          const message = event.data
          // lets make sure we only react to the correct basket
          if (message.type === 'basketResponse' && message.data.basketId === basketId) {
            clearInterval(timerId)
            document.getElementById('response').innerHTML = `
              Done processing basket! <br> <pre>${JSON.stringify(message.data, null, 2)}</pre>
              Ready to go to checkout!
            `
            console.log('timer cleared and response displayed')
          }
        })
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error)
      })

      timerId = setInterval(() => {
        getBasketFromServiceWorker(basketId)
      }, 1000)
  }
}

function sendBasketToServiceWorker(basketId) {
  if (serviceWorkerRegistered) {
    navigator.serviceWorker.controller.postMessage({
      type: 'processBasket',
      data: { 
        basketId,
        name: 'test',
        price: 100,
        description: 'one long description.....',
      }
    })
  }
}

function getBasketFromServiceWorker(basketId) {
  console.log('Attempt to get basket: #' + basketId)
  navigator.serviceWorker.controller.postMessage({
    type: 'getBasket',
    data: { basketId }
  })
}
