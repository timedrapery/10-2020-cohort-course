function closeSplash() {
  document.querySelector("button").style.visibility = "hidden";
  document.querySelector("#splashPage").style.visibility = "hidden";
  document.querySelector("#tableOfContent").style.visibility = "visible";
}

 var buttonClick = function() {
  console.log('button clicks');
}
var doubleButtonClick = function() {
  console.log('you double click me! mean');
}
var onmouseoverEvent = function(context) {
  console.log('on mouse over', context);
  context.style.background = 'blue';
}

var onmouseupEvent = function(context) {
  console.log('on mouse out', context);
  context.style.background = 'black';
}

var myKeysPressed = function() {
  console.log('You pressed a key, weird!')
}

var myKeyReleased = function() {
  console.log('you sunk my battleship')
}

var blastAway = function() {
  console.log('do do do, pew pew pew')
}

var giveFocus = function(context) {
  console.log('focus before', document.activeElement)
    context.focus()
    console.log('focus given', context)
    console.log('focus after', document.activeElement)

}