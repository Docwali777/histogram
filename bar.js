var url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"

var margin = {top: 50,bottom: 50,left: 50,  right: 50},
    h = 300 - margin.top - margin.bottom,
    w = 500 - margin.left - margin.right;


    var svg = d3.select("body").append("svg")
          .attr("height", h + margin.top + margin.bottom).attr("width", w + margin.left + margin.right)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top} ) `)


d3.json(url, function(data){  //Obtain Data from JSON url
data = data.data;

var minDate = d3.min(data, function(d){return d[0]})
var maxDate = d3.max(data, function(d){return d[0]})

var x = d3.scaleBand()
          .range([0, w])
          .domain([minDate, maxDate])
          .padding(0.2)


console.log(minDate + " : "  + maxDate)

var y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d){return d[1]}) ])
          .range([h, 0])


    svg.selectAll("rect").data(data).enter()
          .append("rect")
            .attr("height", function(d){return h - y(d[1])})
            .attr("y", function(d){return y(d[1])})
            .attr("x", function(d){return x(d[0])})
            .attr("width", data.length )

svg.append("g").call(d3.axisLeft(y))
svg.append("g").call(d3.axisBottom(x).ticks(5))
      .attr("transform", `translate(0, ${h})`)

  console.log(data)
})
