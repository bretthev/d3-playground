const d3 = require('d3')

let heviaFamily = [
  {name: 'Brett', age: 28},
  {name: 'Tyler', age: 23},
  {name: 'Jesse', age: 21},
  {name: 'Mom', age: 55},
  {name: 'Dad', age: 59}
]

let margin = { top: 25, right: 25, bottom: 50, left: 50 }

let width = 700 - margin.right - margin.left
    height = 500 - margin.top - margin.bottom


let y = d3.scaleLinear()
          .domain([0, 75])
          .range([height, 0])

let x = d3.scaleBand()
    .domain(heviaFamily.map(function(d) { return d.name }))
    .rangeRound([0,width])
    .paddingOuter(0.1)
    .paddingInner(0.1)

let chart = d3.select('.chart-2')
              .attr('width', width + margin.left + margin.right)
              .attr('height', height + margin.top + margin.bottom)

let barWidth = width / heviaFamily.length


let barGraph = chart.selectAll('g')
  .data(heviaFamily)
  .enter().append('g')
  .attr('transform', function(d, i) { return "translate(" + i * barWidth + ",0)"})

barGraph.append('rect')
    .attr('x', function(d) { return x(d.age) })
    .attr('y', function(d) { return y(d.age) })
    .attr('padding', 0.1)
    .attr('height', function(d) { return height - y(d.age)})
    .attr('width', x.bandwidth())
    .attr('fill', function(d) { return 'green'})


chart.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x))



// barGraph.append('text')
//     .attr('x', function(d) { return heviaFamily.indexOf(d) + 25})
//     .attr('y', function(d) { return height - 20})
//     .attr('dy', '.75em')
//     .text(function(d) { return d.name })
