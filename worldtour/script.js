var miles = [12,1233];
var dayscycled= miles.length;
    
      var numarray;
      var output;
      var i;


function getText(){

      output = "<h2>Total Days:</h2><h1>"
      output += miles.length;
      output += "</h1><h2><br>Total Miles Done: </h2><h1>"
  
 const totalmiles = miles.reduce((partialSum, a) => partialSum + a, 0);
     output += totalmiles; 
    output += "</h1><h2><br>Miles Left: </h2><h1>"
  output += 24000 - totalmiles;
      output += "</h1><h2><br>Avg. Distance per day: </h2><h1>"
      output += totalmiles / miles.length; 
     output += "</h1><h2><br>% Of world done: </h2><h1>"
       output += Math.round(((totalmiles / 24000) *100)*100 )  / 100;
  output += "</h1><h2><br>Last Day: </h2><h1>"
  output += miles[dayscycled - 1];
 output += "</h1><h2><br>Projected Days Left: </h2><h1>"
  output += Math.round((24000 - totalmiles) / (totalmiles / miles.length));
  output += "</h1>"
      document.getElementById("stats").innerHTML = output;
  
 
}



         
         
         
         
         
         
   
         