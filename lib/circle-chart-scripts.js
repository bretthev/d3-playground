const d3 = require('d3')

let heviaFamily = [
  {name: 'Brett', age: 28, intelligence: 100},
  {name: 'Tyler', age: 23, intelligence: 7},
  {name: 'Jesse', age: 21, intelligence: 98},
  {name: 'Mom', age: 55, intelligence: 103},
  {name: 'Dad', age: 59, intelligence: 90}
]

let width = 700
    height = 500

let chart = d3.select('.circle-chart')
