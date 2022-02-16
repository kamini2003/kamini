
 var numberOfDrumButtons = document.querySelectorAll(".drum").length;
 for ( var i = 0; i<numberOfDrumButtons ; i++){ 
 document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 

  var buttonInnerHTML = this.innerHTML;

  switch (buttonInnerHTML) {
    case "W":
      var tom = new Audio("sounds/tom.wav");
       tom.play();
      break;

      case "A":
        var tink = new Audio("sounds/tink.wav");
        tink.play();
      break;

       case "S":
        var snare = new Audio("sounds/snare.wav");
        snare.play();

        break;

        case "D":

          var ride = new Audio("sounds/ride.wav");
          ride.play();
          break;

          case "J":
            var openhat = new Audio("sounds/openhat.wav");
            openhat.play();
           break;

           case "K":
            var kick = new Audio("sounds/kick.wav");
            kick.play();
            break;

            case "L":
              var hithat = new Audio("sounds/hihat.wav");
              hithat.play();
              break;


    default: console.log(buttonInnerHTML);
     
  }
  
  

 });
}










// function Housekeeper(yearOfExperience,name,cleaningRepertoire){
//   this.yearOfExperience = yearOfExperience;
//   this.name - name;
//   this.cleaningRepertoire = cleaningRepertoire;
//   this. clean = function(){
//    alert("cleaning in progress....");
//   }
//  }