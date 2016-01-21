 function loadFortunes() {
     $(document).ready(function() {

         $.getJSON("fortunes.json", function(json) {
             console.log("success" + JSON.stringify(json));
             for (var emotion in json) {
                 console.log(json[emotion].length);
             }
             printFortunes(json);
         });
        

     });
 }

function printFortunes(json) {
var emotionName = $("ul.emotions");
 for (var prop in json) {
     console.log(prop + "\n");
     var el = $("<li>" + prop + "</li>");
    el.appendTo(emotionName); 
 }
 for (var emotion in json) {
        json[emotion].forEach(function(fortune, i) {
        console.log(i + "" + fortune);
    }
 );
 
 
}}