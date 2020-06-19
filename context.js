function kapp() {
  console.log('Kapp', this)
}

const person = {
  name: 'Sonik',
  age: 12,
  sayKapp: kapp,
  sayKappWindow: kapp.bind(document),
  logInfo: function(job, amount) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is: ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Amount ${amount}`)
    console.groupEnd('END!')
  }
}

const who = {
  name: 'Who',
  age: 23
}

// person.logInfo.bind(bitch, 'Procrastination', 2)()
// person.logInfo.call(bitch, 'Procrastination', 2)
// person.logInfo.apply(bitch, ['Procrastination', 2])


const array = [1, 2, 3, 4, 5]

// function multiply(arr, n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }

Array.prototype.multiply = function(n) {
  return this.map(function(i) {
    return i * n
  })
}

// array.multiply(2)

console.log(array.multiply(312321))