const d3 = require('d3');

let heviaFamily = [
  {name: 'Brett', height: 69},
  {name: 'Tyler', height: 65},
  {name: 'Jesse', height: 65},
  {name: 'Mom', height: 60},
  {name: 'Dad', height: 66 }
]


d3.select('.chart-1')
  .selectAll('div')
  .data(heviaFamily)
  .enter().append('div')
  .style('width', function(d) { return d.height * 5 + 'px' })
  .style('height', function(d) { return 30 + 'px'})
  .style('background-color', function(d) { return 'blue'})
  .style('color', function(d) { return 'white' })
  .style('border', function(d) { return '2px solid black'})
  .text(function(d) { return d.name })

d3.select('.chart-1')
  .append('text')
  .text('Hevia family heights')
