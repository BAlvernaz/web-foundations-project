const data = {
  customers: {
    Moe: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Larry: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Curly: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    }
  },
  prizes: {
    Foo: 1,
    Bar: 3,
    Bazz: 5
  }
};

// eslint-disable-next-line quotes
const allPrizes = document.querySelector('#allPrizes');

const renderPrizes = () => {
const HTML = `
   <div id="prizeBlock">
    ${Object.keys(data.prizes)
        .map(key =>
          `
            <div>
              <div>
                ${key}
              </div>
              <div class="value" id=${key}>
                ${data.prizes[key]}
              </div>
            </div>
                `).join('')}
  </div>`;
    allPrizes.innerHTML  = HTML

}
renderPrizes()

const allCustomers = document.querySelector('#allCustomers');

const renderCustomers = () => {
  const HTML =
  ` ${Object.keys(data.customers).map(name => `

        <div id="customerCards">
          <div>
          ${name}
          </div>
          ${Object.keys(data.customers[name]).map(prize => `
          <div>
            <button type="button" class="minus" id=${prize}>-</button>
            ${[prize]}
            ${data.customers[name][prize]}
            <button type="button" class="plus" id=${prize}>+</button>
          </div>
          `).join('')}
        </div>

  `).join('')}
  `
  allCustomers.innerHTML = HTML
}

renderCustomers()

const minusButtons = document.querySelectorAll('.minus')

const plushandler = (event) => {
  if (event.target.tagName === 'BUTTON' && event.target.className === 'plus') {
    data.prizes[event.target.id] -= 1
      if (data.prizes[event.target.id] === 0) {
     //disable all minus class buttons
     minusButtons.disabled = true
    }
  }

}

const minushandler = (event) => {
  if (event.target.tagName === 'BUTTON' && event.target.className === 'minus') {
    data.prizes[event.target.id] += 1

  }
  renderPrizes()
  renderCustomers()
}

allCustomers.addEventListener('click', plushandler)
allCustomers.addEventListener('click', minushandler)
