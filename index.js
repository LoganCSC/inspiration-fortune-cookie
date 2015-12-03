 function loadFortunes() {
     $(document).ready(function() {

          $.getJSON("fortunes.json", function(json) {
             alert("asdasd");
             console.log("success" + JSON.stringify(json));
          });
         
     });
 }