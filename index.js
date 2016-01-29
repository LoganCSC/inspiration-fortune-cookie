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
   var el = $("<li onclick='changeBackground()'>" + prop + "</li>");
   el.appendTo(emotionName);
  }
  for (var emotion in json) {
   json[emotion].forEach(function(fortune, i) {
    console.log(i + "" + fortune);
   });


  }
 }

 function changeBackground() {
  $('ul').on('click', 'li', function() {
   $(this).parent().find('.site-wrap').css('background', 'url(background.jpg)');
   $('.site-wrap').css('background', '#fff000');
  });
 }   
 
 function breakFortuneCookie() {
   $('.fortune-image-cookie').attr('src',"http://s27.postimg.org/mwvpg6b8h/oie_transparent_1.png");
 }
 