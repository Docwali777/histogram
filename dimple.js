
url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"

var margin = {top: 50,bottom: 50,left: 50,  right: 50},
   h = 1400 - margin.top - margin.bottom,
   w = 1200 - margin.left - margin.right;


  //  var svg = d3.select("body").append("svg")
  //        .attr("height", h + margin.top + margin.bottom).attr("width", w + margin.left + margin.right)
  //          .append("g")
  //          .attr("transform", `translate(${margin.left}, ${margin.top} ) `)

 var svg = dimple.newSvg("body", 800, 400);

d3.json(url, function(data){  //Obtain Data from JSON url
data = data.data;

var myChart = new dimple.chart(svg, data)
var x = myChart.addTimeAxis("x", 0)
myChart.addMeasureAxis("y", 1)
 x.addOrderRule("Date");
myChart.addSeries(null, dimple.plot.bar)
myChart.draw()


})
