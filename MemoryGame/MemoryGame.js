var titleImages = [];
var tileArray = [];
var tileFlipOver = [];
var cardFlip = -1;
var playLockout = false;
var timer = '';
var startButton = document.getElementById("start");
var gameBoard = document.getElementById("gameboard");
var message = document.getElementById("message");
var score = document.getElementById("score");
var gamePlay = false;

// Event listeners
startButton.addEventListener('click', startGame);

function cardFlip(t, ti){
    t.src = 'images/' +  tileArray[ti];
    tileFlipOver.push(t.id);
}

function isInArray(v, array){
    //array[index]
    return(array.indexOf(v) > -1);
}

function checkSrc(v){
    var v = document.getElementById(v).src;
    return(v);
}

function hideCard(){
    for(var index = 0;index < 2; index++){
        var varId = tileFlipOver.pop();
        document.getElementById(varId).src = "images/back.jpg";
    }

    clearInterval(timer);
    playLockout = false;
    cardFlip = -1;
    message.innerHTML = "Click any tile.";
}



function startGame(){
    playLockout = false;
    cardFlip = -1;
    startButton.style.display = 'none';
    if(!gamePlay){
        gamePlay = true;
        buildArray();
        tileArray = titleImages.concat(titleImages);
        shuffleArray(tileArray);
        buildBoard();
        message.innerHTML = 'Click any tile.';
    }
}

function buildArray(){
    for(var x = 1; x < 7; x++){
        titleImages.push(x+'.jpg');
        // 1.jpg
    }
}

 //Shuffling image in array
function shuffleArray(array){
    // largest to smallest array.
    // 1-4
    //4-1
    for(var index = array.length - 1; index > 0; index--){
        var holder = Math.floor(Math.random()*(index + 1));
        var itemValue = array[index];
        array[index] = array[holder]; // passs the randomize number to new array
        array[holder] = itemValue; // pass the current value to a new index value
    }
    return(array);
}
 //buliding the board for the game
function buildBoard(){
    var html = "";
    for(var index = 0; index <= tileArray.length - 1; index++){
        html += '<div class="gameTile"> </div>';
        html += '<img id = "cardz'+x+'" src="images/back.jpg" onclick="pickCard('+x+',this)" class="flipImage"></div>';
    }

    gameBoard.innerHTML = html;
    
}