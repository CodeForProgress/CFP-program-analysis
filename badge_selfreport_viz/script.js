var draw_data = function(data){
    var svg = d3.select("svg");
    var circle = svg.selectAll("circle").data(data);
    
    circle.enter().append("circle")
      .attr("cx", function(d,i){return 40*(i+1);})
      .attr("cy", function(d,i){return 30*(i+1);})
      .attr("r", 0);
       
    circle.transition()
      .duration(750)
      .attr("cx", function(d,i){return 200*(i+1);})
      .attr("cy", function(d,i){return 100;})
      .attr("r", function(d) { return 80;});
    
    circle.exit()
        .transition()
        .duration(750)
        .attr("r", 0)
        .remove();
};

 setTimeout(function(){draw_data([1000,2000]);},100);
 setTimeout(function(){draw_data([1000,2000,3000]);},200);
