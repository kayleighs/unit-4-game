//write out functions that need to be assigned for the game

var gemTotal = 0;
var totalGemNeeded;
var wins = 0;
var losses = 0;

//make random number generated for game
$( document ).ready(function(){
    console.log("ready");
    totalGemNeeded = Math.floor((Math.random() * 120) + 19);
//write that number on page
    $("#totalNeeded").text(totalGemNeeded);
});
//random number for buttons
emerald = Math.floor((Math.random() * 12) + 1);
diamond = Math.floor((Math.random() * 12) + 1);
ruby = Math.floor((Math.random() * 12) + 1);
sapphire = Math.floor((Math.random() * 12) + 1);

/* buttonarr= [emerald, diamond, ruby, sapphire]
buttonarr= Math.floor((Math.random() * 12) + 1) */

//on-click for each button
$("#emerald").on("click", function(){
    gemTotal = gemTotal + emerald;
    console.log("Your emerald worth is" + emerald);
    clickTotal();
})
$("#diamond").on("click", function(){
    gemTotal = gemTotal + diamond;
    console.log("Your emerald worth is" + diamond);
    clickTotal();
})
$("#ruby").on("click", function(){
    gemTotal = gemTotal + ruby;
    console.log("Your emerald worth is" + ruby);
    clickTotal();
})
$("#sapphire").on("click", function(){
    gemTotal = gemTotal + sapphire;
    console.log("Your emerald worth is" + sapphire);
    clickTotal();
})


//functions

function clickTotal () {
    $("#gemTotal").text(gemTotal);
    winLose();
};
//win/lose function
function winLose() {
    if (totalGemNeeded === gemTotal) {
        wins +=1;
        alert('You won!');
        $('#wins').text(wins);
        restart();
    }
    else if (totalGemNeeded < gemTotal){
        losses +=1;
        alert('You lost!');
        $('#losses').text(losses);
        restart();
    }
};
function restart(){
    totalGemNeeded = Math.floor((Math.random() * 120) + 19);
    $("#totalNeeded").text(totalGemNeeded);
    emerald = Math.floor((Math.random() * 12) + 1);
    diamond = Math.floor((Math.random() * 12) + 1);
    ruby = Math.floor((Math.random() * 12) + 1);
    sapphire = Math.floor((Math.random() * 12) + 1);
    gemTotal=0;
    $("gemTotal").text(gemTotal);
};


