function createCalcFunction(n) {
  return function() {
    console.log(1000 * n)
  }
}

const calc = createCalcFunction(42)
calc()

function cI(n) {
  return function(NaM) {
    return n + NaM
  }
}

const aO = cI(1)
const aT = cI(10)

function urlGen(domain) {
  return function(url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGen('com')
const ruUrl = urlGen('ru')