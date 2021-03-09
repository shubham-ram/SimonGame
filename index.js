var color=["green", "red", "blue", "yellow"];
var colorSequence=[];
var userColorSequence=[];
var level = 0;

function genRandomColor(){ 
    level++; 
    // console.log(level);
    $("#level").html("level "+level);

    var randomNumber = Math.floor(Math.random()*4);
    var selectedColor = color[randomNumber]
    colorSequence.push(selectedColor);
    // console.log(colorSequence);
    $("#"+selectedColor).fadeIn(100).fadeOut(100).fadeIn(100);

    $(".btn").addClass("remove");

}

function start(colorId){
    userColorSequence.push(colorId);
    // console.log(userColorSequence);
    checkResult(userColorSequence.length-1); 

    animateBtnPress(colorId);
}

function checkResult(id){
    if(userColorSequence[id] === colorSequence[id]){
        if(userColorSequence.length === colorSequence.length){
            setTimeout(function(){
                userColorSequence=[];
                genRandomColor();
            },500);
        }
    } else {
        level =0;
        $("body").addClass("wrong");
        setTimeout(function(){
            $("body").removeClass("wrong");
        },150);
        setTimeout(function(){
            $("body").addClass("wrong");
        },300);
        setTimeout(function(){
            $("body").removeClass("wrong");
        },450);
        $("#level").html("Wrong! Wrong! Wrong! Start Again")
        console.log("wrong"); 

        $(".btn").removeClass("remove").html("Retry");
    }
}

function animateBtnPress(currentBtnColor){
    $("#"+currentBtnColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentBtnColor).removeClass("pressed");
    },100);
}