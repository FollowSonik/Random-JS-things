const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms))
}

// delay(a = 2000).then(() => console.log('Sec:', a / 1000))

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetching...')
//     return delay(1488)
//     .then(() => fetch(url))
//     .then(res => res.json())
// }

// fetchTodos()
// .then(data => console.log('Data:', data))
// .catch(e => console.error('Fucking error:', e))

async function fetchAsyncTodos() {
  console.log('Fetching...')

  try {
    await delay(1488)
    const res = await fetch(url)
    const data = await res.json()

    console.log(data)
  } catch (e) {
    console.error('FUCKING ERROR:', e)
  } finally {
    console.log('Finally!')
  }
}

fetchAsyncTodos()