 function loadFortunes() {
     $(document).ready(function() {

          $.getJSON("fortunes.json", function(json) {
             console.log("success" + JSON.stringify(json));
             for(var emotion in json) {
                 console.log(json.open[emotion].length)
             }
          });
          //.done(function(json) {
          //   console.log("second success" + JSON.stringify(json));
          //})
          //.fail(function(e) {
          //    console.log("error: " + JSON.stringify(e));
          //});
           
          //jqxhr.complete(function() {
          //    console.log("second complete");
          //});
     });
 }
 
 for (prop in json)
    console.log(prop+"\n");
    $("ul.emotions").append("<li>"+prop+"</li>");

_.each(json["mean"], function(fortune,i) {
    console.log(i+""+fortune);
});
 
