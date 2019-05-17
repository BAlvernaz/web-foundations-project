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

/* 
Great job setting up your template strings!
 */
// eslint-disable-next-line quotes
const allPrizes = document.querySelector('#allPrizes');

/* 
I'm glad you're using arrow functions!  It's the latest and greatest in JS Syntax!
 */
const renderPrizes = () => {
const HTML = `
   <div id="prizeBlock">
    ${Object.keys(data.prizes)
        .map(key =>
          `
            <div>
              <div id="prizeName">
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
// good rendering on first load.
renderPrizes()

const allCustomers = document.querySelector('#allCustomers');

const renderCustomers = () => {
  const HTML =
  /* 
  Good job with this!  
  The way we have to loop over the object is a tough thing to do!  Good job, keep up the good work!
   */
  ` ${Object.keys(data.customers).map(name => `

        <div id="customerCards">
          <div>
          ${name}
          </div>
          ${Object.keys(data.customers[name]).map(prize => `
          <div>
            <button type="button" class="minus ${name}" id=${prize} ${data.customers[name][prize] === 0 ? 'disabled' : ''}>-</button>
            ${[prize]}
            ${data.customers[name][prize]}
            <button type="button" class='plus ${name}'  id=${prize} ${data.prizes[prize] === 0 ? 'disabled' : ''}>+</button>
          </div>
          `).join('')}
        </div>

  `).join('')}
  `
  allCustomers.innerHTML = HTML
}
// good rendering on first load.
renderCustomers()

const plushandler = (event) => {
  if (event.target.tagName === 'BUTTON' && event.target.classList[0] === `plus`) {
    data.prizes[event.target.id] -= 1
    data.customers[event.target.classList[1]][event.target.id] += 1
    // Nice. Rembembered to render on any update.
    renderPrizes()
    renderCustomers()
  }

}
const minushandler = (event) => {
  if (event.target.tagName === 'BUTTON' && event.target.classList[0] === `minus`) {
    data.prizes[event.target.id] += 1
    data.customers[event.target.classList[1]][event.target.id] -= 1
    // Nice. Rembembered to render on any update.
    renderPrizes()
    renderCustomers()
  }

  }

  /* 
  Great job with Event hanlders! Take a look at Eric's solution. These could be done in one function instead of two, and just using your conditionals you've already set up.  That might be a little more DRY (don't repeat yourself)
   */
allCustomers.addEventListener('click', plushandler)
allCustomers.addEventListener('click', minushandler)
