
var numberOfButton = document.querySelectorAll(".drum").length;

for (i=0; i<numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
     
        var buttonInnerHTML = this.innerHTML;

        drumSound(buttonInnerHTML);

        addAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    drumSound(event.key);
    addAnimation(event.key);

})

function drumSound (bunyi) {
    switch(bunyi){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        default: "haah";
    }

}

function addAnimation (currentKey) {
    var locate = document.querySelector("."+currentKey);
    locate.classList.add("pressed");
    setTimeout( function(){
        locate.classList.remove("pressed");
    }, 100);
}