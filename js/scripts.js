console.log("hello world")
var escapedText1 = "He said: \"Yes!\", that's for sure";
var escapedText2 = 'He said: "Yes!", that\'s for sure';
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
  x.className += ' responsive';
} else {
  x.className = 'navtoggle';
}
}
