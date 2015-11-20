 function loadFortunes() {
     $(document).ready(function() {
                 /*
                     {
                         $.getJSON('fortunes.json', function(json) {
                             alert("hi");
                             console.log(json);
                         });
                     });
                 } */

                 var jqxhr = $.getJSON("fortunes.json", function(json) {
                         console.log("success" + json);
                     })
                     .done(function(json) {
                         console.log("second success" + json);
                     })
                     .fail(function(e) {
                         console.log("error: " + JSON.stringify(e));
                     })
                     .always(function() {
                         console.log("complete");
                     });

                 jqxhr.complete(function() {
                     console.log("second complete");
                 });

             });
 }