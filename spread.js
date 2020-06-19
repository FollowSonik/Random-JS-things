// SPREAD:
// const divs = document.querySelectorAll("div")
// const nodes = [...divs]
// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))
// // console.log(nodes)

// console.log(Math.max(5, 77, 243, 3223))
// const numbers = [5, 322, 228, 3228]
// console.log(Math.max(...numbers))
// // These are the same, btw.
// console.log(Math.max.apply(null, numbers))


const ruCitiesPopulation = {
  Moscow: 322,
  "Saint-P": 228,
  Kazan: 5,
  NewSiberia: 3
}

const euCitiesPopulation = {
  Moscow: 26,
  Berlin: 1488,
  Praha: 322,
  Paris: 8
}

// console.log({...ruCitiesPopulation})
// console.log({...euCitiesPopulation, ...ruCitiesPopulation})

const ruCities = [
  "Moscow", "Saint-P", "Kazan",
  "NewSiberia"
]

const euCities = [
  "Berlin", "Praha", "Paris"
]

// console.log(...ruCities)
// console.log(...euCities)

// const allCities = [...euCities, ...ruCities]
// const allCities = euCities.concat(ruCities)

// console.log(allCities)