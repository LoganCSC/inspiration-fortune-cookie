var currentEmotion = '';
var emotionJSON;

$(document).ready(function() {
 
 $.getJSON("fortunes.json", function(json) {
  console.log("success" + JSON.stringify(json));
  for (var emotion in json) {
   console.log(json[emotion].length);
  }
  emotionJSON = json;
  generateEmotions(json);
 });
});

function generateEmotions(json) {
 var emotionName = $("ul.emotions");
 for (var emotion in json) {
  console.log(emotion + "\n");
  var el = $("<li onclick='emotionClicked(\"" + json[emotion].color+ "\",\"" + emotion + "\")'>" + emotion + "</li>");
  el.appendTo(emotionName);
  json[emotion].fortunes.forEach(function(fortune, i) {
   console.log(i + "" + fortune);
  })
 }
}
 
function emotionClicked(color, emotionName) {
  $("#content").css("background", color);
  currentEmotion = emotionName;
 }

function breakFortuneCookie() {
 if (currentEmotion) {
   $('#fortune-image-cookie').attr('src', "brokenfortune.png");
   var fortuneArray = emotionJSON[currentEmotion].fortunes;
   var randomNumber = Math.floor(Math.random()*fortuneArray.length);
   $('#fortuneBox').text(fortuneArray[randomNumber]);
 }
}

