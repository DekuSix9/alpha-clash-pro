

// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const groundSection=document.getElementById('play-ground ');
//     groundSection.classList.remove('hidden');

// }



function play() {
    hideElement();
    showElement();
    const alphabet = continueGame(); 
    addBgColor(alphabet); 
}
