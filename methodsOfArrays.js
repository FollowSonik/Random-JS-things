const people = [
  { name: 'Sonik', age: 12, sticks: 2 },
  { name: 'Bitch', age: 19, sticks: 3 },
  { name: 'Pinkie', age: 19, sticks: 1 },
  { name: 'Eightbot', age: 322, sticks: 1488 },
  { name: 'Kappa', age: 41, sticks: 0 },
]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for (const person of people) {
//     console.log(person)
// }

// forEach
// people.forEach((person) => console.log(person.sticks))

// map
// const newPeople = people.map(person => {
//     return `Name is ${person.name}. (Age: ${person.age}).`
// })

// console.log(newPeople)

// filter
// const adults = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// const adults = people.filter(person => person.age >= 18)
// console.log(adults)

// reduce
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].sticks
// }
// const amount = people.reduce((total, person) => {
//     return total + person.sticks
// }, 0)
// console.log(amount)

// find
// const sonik = people.find(person => person.name === 'Sonik')
// console.log(sonik)

// findIndex
// const sonikIndex = people.findIndex(person => person.name === 'Sonik')
// console.log(sonikIndex)

// ========================================================
const theSticks = people
  .filter(p => p.sticks > 3)
  .map(p => {
    return {
      info: `${p.name} (${p.age})`,
      sticks: Math.sqrt(p.sticks) / 0.0000001
    }
  })
  .reduce((total, p) => total + p.sticks)

console.log(theSticks)