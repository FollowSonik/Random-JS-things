console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'aws',
//         port: 3228,
//         status: 200
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...')

//         const backendData = {
//         server: 'aws',
//         port: 3228,
//         status: 200
//         }

//         resolve(backendData)
//     }, 2000)
// })

// p.then((data) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             data.modified = true
//             res(data)
//             // console.log('Data received', backendData)
//         }, 2000)
//     })

//     // p2.then(anotherData => {
//     //     console.log('Data received', anotherData)
//     // })
// })
// .then(anotherData => {
//     console.log('Data received:', anotherData)
//     anotherData.fromPromise = true
//     return anotherData
// })
// .then(dataTwo => {
//     console.log('Modified data:',dataTwo)
// })
// .catch(e => console.error('Rejected Error:', e))
// .finally(() => console.log('Kappa'))

const sleep = async ms => {
  return await new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

// console.log(ms)

sleep(a = 1000)
// .then(() => console.log(`After ${/*new Date().getSeconds()*/ + a / 1000} s`))

// sleep(b = 2000)
// .then(() => console.log(`After ${/*new Date().getSeconds()*/ + b / 1000} s`))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('All promises!')
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log('Race promises!')
})