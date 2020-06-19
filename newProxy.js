// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
  })
}

const position = withDefaultValue({
  x: 24,
  y: 42
}, 0)

// Hidden props
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => (prop in obj) && !prop.startsWith(prefix),
    ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
    ownKeys: (obj) => Object.keys(obj).filter(key => !key.startsWith(prefix))
  })
}

const data = withHiddenProps({
  name: 'Sonik',
  age: 12,
  _uid: Date.now(),
  _kappa: new Date().toLocaleTimeString()
})

// for (const key in data) { console.log(key) }
// console.log(Object.keys(data))
console.log(Object.values(data))

// Optimization
// const userData = [
//     { id: 1, name: 'Sonik', job: 'Procrastination', age: 12 },
//     { id: 2, name: 'Eightbot', job: 'monkaS', age: 24 },
//     { id: 3, name: 'Monkas', job: 'Procrastination', age: 19 },
//     { id: 4, name: 'Pinkie', job: 'lawyer2AYAYA', age: 19 },
//     { id: 5, name: 'Who', job: 'Something', age: 19 },
//     { id: 6, name: 'He', job: 'Procrastination', age: 12 },
// ]

const IndexedArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {}
    args.forEach(item => index[item.id] = item)

    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push': return item => {
            index[item.id] = item
            arr[prop].call(arr, item)
          }
          case 'findById': return id => index[id]
          default: return arr[prop]
        }
      }
    })
  }
})

const users = new IndexedArray([
  { id: 1, name: 'Sonik', job: 'Procrastination', age: 12 },
  { id: 2, name: 'Eightbot', job: 'monkaS', age: 24 },
  { id: 3, name: 'Monkas', job: 'Procrastination', age: 19 },
  { id: 4, name: 'Pinkie', job: 'lawyer2AYAYA', age: 19 },
  { id: 5, name: 'Who', job: 'Something', age: 19 },
  { id: 6, name: 'He', job: 'Procrastination', age: 12 },
])

// userData.forEach(i => index[i.name] = i)