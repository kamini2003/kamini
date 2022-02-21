var numberOfButtons = $(".btn").length;
 for ( var i = 0; i<numberOfButtons ;  i++){
    $(".btn")[i].addEventListener("click", function(){
     var buttonInnerHTML = this.innerHTML;
    switch(buttonInnerHTML){
      case "a":
         var flute = new Audio("sounds/flute.mp3");
          flute.play();
         break;
       
      case "b":
         var lovely = new Audio("sounds/lovely.mp3");
          lovely.play();
         break;

      case "c":
         var ring = new Audio("sounds/ring.mp3");
          ring.play();
         break;

      case "d":
         var shay = new Audio("sounds/shay.mp3");
          shay.play();
         break;


         default: console.log(buttonInnerHTML);
    }
    }) ;                   
 }
 
 $("btn-blue").click(function(){
   $(body).css("color","purple");
 });


 $(".btn-green").click(function(){
   $("#title").text("Press Any Key To restart");
 });

 $(".btn-red").click(function(){
    $("#title").text("level 1");
 });

  $(".btn-yellow").click(function(){
     $("#title").text("level 3");
  });


  $(".btn").ready(function(){
   $(body).css("back-ground","red");
});

