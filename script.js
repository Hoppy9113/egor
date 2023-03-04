let rez = document.querySelector('.rez');
window.addEventListener('keydown', function(event){
    rez.innerHTML += ' keydown';
})
window.addEventListener('keyup', function(event){
    rez.innerHTML += ' keyup';
})
