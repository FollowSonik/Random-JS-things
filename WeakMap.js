let obj = { name: 'WeakMap' }
// const arr = [obj]

// obj = null

// console.log(arr[0])

const map = new WeakMap([
  [obj, 'object']
])

// obj = 'Kappa'
const cache = new WeakMap()

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now())
  }

  return cache.get(user)
}

let who = { name: 'who' }
let sonik = { name: 'Sonik' }

cacheUser(who)
cacheUser(sonik)

who = null

console.log(cache.has(who))
console.log(cache.has(sonik))