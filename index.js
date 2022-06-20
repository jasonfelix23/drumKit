for(var i =0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){

      var buttonClicked = this.innerHTML;
      checkingSwitchButton(buttonClicked);
      buttonAnimation(buttonClicked);

    });
}

document.addEventListener("keydown",function(event){
  var keyPressed = event.key;
  checkingSwitchButton(keyPressed);
  buttonAnimation(keyPressed);
})



function checkingSwitchButton(buttonClicked){
  switch(buttonClicked){
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case 'a':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case 's':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    case 'd':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case 'j':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case 'k':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case 'l':
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
    break;
    default:
      console.log(buttonClicked);
  }

}


function buttonAnimation(buttonSelected){
  var activeButton = document.querySelector("."+buttonSelected);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
