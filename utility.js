function hideElement() {
    const element = document.getElementById('home-screen');
    element.classList.add('hidden');
}

function showElement() {
    const element = document.getElementById('play-ground');
    element.classList.remove('hidden');
};

function addBgColor(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
};



function continueGame(){
    const alphabetString = "qwertyuioplkjhgfdsazxcvbnm";
    const alphabets = alphabetString.split('');
   
    const randomNumber = Math.random() * 25; 
    const index = Math.round(randomNumber); 
    
    const alphabet = alphabets[index];
    
    
    const currentAlphaElement=document.getElementById('current-alphabet');
    currentAlphaElement.innerText=alphabet;
    return alphabet;
}
