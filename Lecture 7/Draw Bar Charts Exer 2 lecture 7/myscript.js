//Data Array

var xArray =["Indonesia","Taiwan","China","USA","Argentina"];
var yArray =[55,49,44,24,15];

//Define Data
var data = [{
    x:xArray,
    y:yArray,
    type:"bar"}];


//Define layout
var layout = {title:"World Wine Production"};


//Display using plotly
Plotly.newPlot("myPlot", data, layout)