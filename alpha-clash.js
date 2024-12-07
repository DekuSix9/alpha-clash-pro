function gameOver() {
    hideElement('play-ground');
    showElement('final-score');
    
   
    const currentScoreElement = document.getElementById('current-score');
    const lastScore = currentScoreElement.textContent;
    
   
    setTextElementById('last-score', lastScore);
    const presentAlphabet=elementTextById('current-alphabet');
    removeBgColor(presentAlphabet);
}


function play() {
    
    hideElement('home-screen');
    showElement('play-ground');
    hideElement('final-score');

 
    livesRemaining = 5;  
    clickCount = 0;      

    setTextElementById('current-life', livesRemaining);
    setTextElementById('current-score', clickCount);

   
    const keys = document.querySelectorAll('.kbd');
    keys.forEach(key => {
        key.classList.remove('bg-orange-400');
    });

    
    continueGame();
}


