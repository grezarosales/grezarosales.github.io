var words = ['你找不到幸福的生活.你做到了.', 'No encuentras la vida feliz. Tú la haces.', 'आपको सुखी जीवन नहीं मिलता है। आप इसे बनाओ।', "You do not find the happy life. You make it."];
var wordstwo = ['favicon/favicon.ico', 'favicon/favicon2.ico', 'favicon/favicon.ico', 'favicon/favicon2.ico' ]
var counter = 0;
var t = setInterval(function() {
  $('#changing').html( words[ counter ] );
  $('#favicon').attr( "href", wordstwo[ counter ] );
  counter++;
  if (counter > text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}, 2000);

var text = ["Welcome", "Hi", "Sup dude"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}