const d3 = require('d3')

let heviaFamily = [
  {name: 'Brett', age: 28},
  {name: 'Tyler', age: 23},
  {name: 'Jesse', age: 21},
  {name: 'Mom', age: 55},
  {name: 'Dad', age: 59}
]

let width = 700
    height = 500

let y = d3.scaleLinear()
          .range([0, height])

let chart = d3.select('.chart-2')
              .attr('width', width)
              .attr('height', height)

let barWidth = width / heviaFamily.length

let barGraph = chart.selectAll('g')
  .data(heviaFamily)
  .enter().append('g')
  .attr('transform', function(d, i) { return "translate(" + i * barWidth + ",0)"})

barGraph.append('rect')
    .attr('y', function(d) { return height - d.age * 5 })
    .attr('height', function(d) { return d.age * 5 })
    .attr('width', barWidth / 2)
    .attr('fill', function(d) { return 'green'})
    .text(function(d) { return d.name })
