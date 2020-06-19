// REST:
function sum(a, b, ...motherfucker) {
  // console.log(motherfucker)
  return a + b + motherfucker.reduce((a, i) => a + i, 0)
}

const numbers = [1, 2, 3, 4, 5, 7, 8]
// console.log(sum(...numbers))

// const a = numbers[0]
// const b = numbers[1]

// const [a, b, ...motherfucker] = numbers
// console.log(a, b, motherfucker)

const person = {
  name: "Who",
  age: 19,
  city: "Moscow",
  country: "San-Francisco"
}

const { name, age, ...theFuckingAddress } = person
console.log(name, age, theFuckingAddress)