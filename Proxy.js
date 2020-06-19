// Objects
const person = {
  name: 'Sonik',
  age: 12,
  job: 'Procrastination'
}

const op = new Proxy(person, {
  get(target, prop) {
    // console.log(`Getting prop ${prop}`)
    if (!(prop in target)) {
      return prop
        .split('_')
        .map(p => target[p])
        .join(' ')
    }
    // console.log('Target', target)
    // console.log('Prop', prop)
    return target[prop]
  },

  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No ${prop} field in target`)
    }
  },

  has(target, prop) {
    return ['name', 'age', 'job'].includes(prop)
  },

  deleteProperty(target, prop) {
    console.log('Deleting...', prop)
    delete target[prop]
    return true
  }
})

// Functions
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log('Calling fn...')

    return target.apply(thisArg, args).toUpperCase()
  }
})

// Classes
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  };
};

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log('Construct...')

    return new Proxy(new target(...args), {
      get(trgt, prop) {
        console.log(`Getting prop "${prop}"`)
        return trgt[prop]
      }
    })
  }
})

const p = new PersonProxy('Who', 18)