function call(context, fn) {
  fn.apply(context)
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
  name: 'Sonik',
  age: 12,
  job: 'Procrastination'
}

const person2 = {
  name: 'Who',
  age: 19,
  job: 'Something'
}