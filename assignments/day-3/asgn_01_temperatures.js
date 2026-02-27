let temperatures=[32,35,28,40,38,30,42,45,41]

//
const above_35=temperatures.filter((element)=>element>35)
console.log(above_35)

//
const fahrenheit=temperatures.map((element)=>element*9/5+32)
console.log(fahrenheit)

//
const sum=temperatures.reduce((accumulator,element)=>accumulator+element)
console.log(`Average:${sum/temperatures.length}`)

//
const firstElementAbove_40=temperatures.find((element)=>element>40)
console.log(firstElementAbove_40)

//
const indexOfTemperature_28=temperatures.findIndex((element)=>element==28)
console.log(indexOfTemperature_28)