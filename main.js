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

const allPrizes = document.querySelector("#allPrizes")

allPrizes.innerHTML = `
  <div>
    ${Object.keys(data.prizes).map(key => `<div>${key}</div><div>${data.prizes[key]}</div></div>`).join('')}</div>`



