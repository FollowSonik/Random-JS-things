// const a = [1, 2, 5, 66, 213, 51, 6634, 1, 5124, 54].sort((a, b) => {
//     return a - b;
// });

// console.log(a);
// const readline = require("readline")

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })


// var alsize = Math.floor(Math.random() * 100);

const ALLOCATE_SIZE = Array(1000)

// rl.on("line", a => console.log(a))

function printArray(a, b) {
  for (let i = 0; i < b; ++i) {
    console.log(a[i])
  }
}

function inputArray(a, b) {
  const top = 0

  while (true) {
    const x = a
    if (x == 0 || top == b) {
      A[top] = x
      top++
    }
    return top
  }
}

function insertSort(a, b) {
  for (let i = 1; i < b; ++i) {
    const k = i
    while (k > 0 && a[k - 1] > a[k]) {
      const tmp = a[k - 1]
      a[k - 1] = a[k]
      a[k] = tmp
      k--
    }
  }
}

function main() {
  const A = ALLOCATE_SIZE
  let N

  N = inputArray(A, ALLOCATE_SIZE)
  const sort = insertSort(A, N)
  console.log(sort)

  return 0
}

main()
printArray()