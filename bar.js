 url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"

var margin = {top: 50,bottom: 50,left: 50,  right: 50},
    h = 300 - margin.top - margin.bottom,
    w = 500 - margin.left - margin.right;


    var svg = d3.select("body").append("svg")
          .attr("height", h + margin.top + margin.bottom).attr("width", w + margin.left + margin.right)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top} ) `)


d3.json(url, function(data){  //Obtain Data from JSON url
data = data.data;



var timeParse = d3.timeParse("%Y-%m-%d");
var formatDate = d3.timeFormat("%m/%y");
console.log(timeParse(data[0][0]))




var minDate = d3.min(data, function(d){return d[0]})
var maxDate = d3.max(data, function(d){return d[0]})

var x = d3.scaleTime()
            .domain([minDate, maxDate])
            .range([0, w])



        //   .range([0, w])
        // .domain(data.map(function(d){return d[0]}))
        //        .padding(0.2)
        //  .domain(d3.extent(data, function(d){return d[0]}))

//“x.domain(d3.extent(data, function(d) { return d.date; }))



var y = d3.scaleLinear()
          .domain([0, d3.max(data, function(d){return d[1]}) ])
          .range([h, 0])

    svg.selectAll("rect").data(data).enter()
          .append("rect")
            .attr("height", function(d){return h - y(d[1])})
            .attr("y", function(d){return y(d[1])})
            .attr("x", function(d, i){return i})
            .attr("width", 10)

svg.append("g").call(d3.axisLeft(y))
svg.append("g").call(d3.axisBottom(x))
      .attr("transform", `translate(0, ${h})`)
      .tickFormat(timeParse)


})
