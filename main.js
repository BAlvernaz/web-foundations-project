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
              <div id="prizeName">${key}
              </div>
              <div id="amoutOf">${data.prizes[key]}
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
  `
    <div id="customerCard">
      ${Object.keys(data.customers)
        .map(name =>
          `
            <div>
              <div>
                ${name}
              </div>
              <div>
                ${Object.keys(data.customers[name]).join('')}
              </div>
            </div>`).join('')}
    </div>
  `
  allCustomers.innerHTML = HTML
}

renderCustomers()
