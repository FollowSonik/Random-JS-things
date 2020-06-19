const set = new Set([1, 2, 2, 2, 4, 3, 3, 3, 5, 5, 6, 6, 6].sort())
set.add(10).add(322).add(322).add(10)
// console.log(set)
// console.log(set.has(322))
// console.log(set.size)
// console.log(set.delete(322))
// console.log(set.size)
// set.clear()
// console.log(set.size)

// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())

// for (const key of set) {
//     console.log(key)
// }

//====================================
function uniqueValues(array) {
  // return [...new Set(array)]
  return Array.from(new Set(array)).sort()
}

console.log(uniqueValues([1, 1, 3, 4, 4, 5, 5, 5, 5, 7, 7, 6]))