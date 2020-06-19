const readline = require("readline")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

const person = Object.create(
  {
    calcAge() {
      console.log(`Age: ${new Date().getFullYear() - this.BIRTHYEAR}`)
    }
  },
  {
    name: {
      VALUE: "Sonik",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    BIRTHYEAR: {
      VALUE: 2008,
      enumerable: true,
      writable: true,
      configurable: true
    },
    age: {
      get() {
        return new Date().getFullYear() - this.BIRTHYEAR
      },
      set(VALUE) {
        document.body.style.background = "darkblue"
        console.log(`Set age: ${VALUE}`)
      }
    }
  })

// const person1 = {
//     name: "FollowSonik",
//     BIRTHYEAR: 2008
// }

person.name = "Erich Krause"

for (let key in person1) {
  if (person1.hasOwnProperty(key)) {
    console.log(`Key ${key}: ${person1[key]}`)
  }
}