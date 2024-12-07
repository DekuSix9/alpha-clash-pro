function hideElement(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElement(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
};

function addBgColor(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
};
function removeBgColor(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400');
};

 function getTextElementValueyId(elementID){
    const element=document.getElementById(elementID);
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText)
 }
function setTextElementById(elementID,value) {
   const element=document.getElementById(elementID);
   element.innerText=value; 
}

function elementTextById(elementID){
    const element =document.getElementById(elementID);
    const text=element.innerText;
    return text;
}

function continueGame(){
    const alphabetString = "qwertyuioplkjhgfdsazxcvbnm";
    const alphabets = alphabetString.split('');
   
    const randomNumber = Math.random() * 25; 
    const index = Math.round(randomNumber); 
    
    const alphabet = alphabets[index];
    
    
    const currentAlphaElement=document.getElementById('current-alphabet');
    currentAlphaElement.innerText=alphabet;
    addBgColor(alphabet)
    return alphabet;
}

let clickCount=0;
let  livesRemaining = 5;


function handlekeyupEvent(event) {
    const playerPressed = event.key;

    if (playerPressed === 'Escape') {
        gameOver();
        return;
    }

    const currentAlphaElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphaElement.innerText.toLowerCase();

    const scoreCount = document.getElementById('current-score');
    const decreaseLife = document.getElementById('current-life');

    if (playerPressed.toLowerCase() === currentAlphabet) {
        
        clickCount++;
        scoreCount.textContent = clickCount;

        removeBgColor(currentAlphabet);
        continueGame();
    } else {
        // Incorrect key press
        livesRemaining--;
        decreaseLife.textContent = livesRemaining;

        if (livesRemaining <= 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', handlekeyupEvent);
