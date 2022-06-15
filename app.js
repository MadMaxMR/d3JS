var data = [1,2,3,5,8,13,21,34,55,89,144]


function AddData(){
    var nuevo = parseInt(document.getElementById("nuevo").value);
    
    if (nuevo > 0){
        data.push(nuevo); 
        d3.select("svg")
            .remove();
        document.getElementById("nuevo").value = "";
        graficar();
    } else {
        alert("El número debe ser mayor que 0");
    }
}


function graficar(){
    var h = 300;
    var w = data.length*21+28;

    var svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
    
    svg.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("width","20px")
        .attr("height", function(d){
            return d ;
        })
        .attr("x", function(d,i){
            return i*21+14;
        })
        .attr("y",function(d){
            return h - d - 20;
        });

    svg.selectAll("text")
        .data(data)
        .enter().append("text")
        .text(function(d){
            return d;
        })
        .attr("x", function(d,i){
            return i*21+24;
        })
        .attr("y",function(d){
            return h-10;
        })
        .attr("class","text-svg");
    
    svg.append("text")
        .text("Grafico de barras")
        .attr("x",w/2)
        .attr("y",20);
}

