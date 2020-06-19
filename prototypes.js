const person = new Object({
  name: 'Sonik',
  age: 12,
  greet: () => {
    console.log('Kappa')
  }
})

Object.prototype.sayPog = () => {
  console.log('PogChamp')
}

const theName = Object.create(person)
theName.name = 'theName'

const str = new String('I\'m String!')