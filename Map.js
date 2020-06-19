const obj = {
  name: 'Sonik',
  age: 12,
  job: 'Procrastination'
}

const entries = [
  ['name', 'Sonik'],
  ['age', 12],
  ['job', 'Procrastination']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)

map
  .set('Sonik', 19)
  .set(obj, !String().toString())
  .set(NaN, null)

// console.log(map.get(NaN))
// map.delete(obj)
// console.log(!map.has(obj))
// console.log('The map\'s size is', map.size)
// console.log('All elements in the map', map)
// map.clear()
// console.log('All elements in the map', map, 'After a method \'clear\'.')
// console.log('The map\'s size is', map.size)

//========================================

// for (const [key, value] of map) {
//     console.log(key, value)
// }

// for (const value of map.values()) {
//     console.log('The values of that', value)
// }

// for (const key of map.keys()) {
//     console.log('The keys of that', key)
// }

// map.forEach((val, key, m) => {
//     console.log(val, key)
// })

//=========================================

// const array = [...map]
// const array = Array.from(map) // <- Similar above!
// console.log(array)

// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

//==========================================

const users = [
  { name: 'Panasonic' },
  { name: 'Sonik' },
  { name: 'Pinkie' },
  { name: 'Eightbot' },
  { name: 'IrenGree' },
  { name: 'Kappa' },
  { name: 'Keepo' },
]

const visits = new Map()

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 3228))
  .set(users[2], new Date(new Date().getTime() + 1488))
  .set(users[3], new Date(new Date().getTime() + 322))
  .set(users[4], new Date(new Date().getTime() + 228))
  .set(users[5], new Date(new Date().getTime() + 12))
  .set(users[6], new Date(new Date().getTime() + 777))

function lastVisit(user) {
  return visits.get(user)
}

console.log(lastVisit(users[1]))