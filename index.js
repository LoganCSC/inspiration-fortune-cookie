 function loadFortunes() {
     $(document).ready(function() {

          $.getJSON("index.json", function(json) {
             console.log("success" + JSON.stringify(json));
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