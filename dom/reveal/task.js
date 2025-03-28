const reveals_arr = document.querySelectorAll('.reveal');
window.addEventListener('scroll', function() {
 
    for(let i = 0; i < reveals_arr.length; i++) {
        revealTop = reveals_arr[i].getBoundingClientRect().top;
        revealBottom = reveals_arr[i].getBoundingClientRect().bottom;
    if(revealTop >= 0 && revealBottom > 0) {
        reveals_arr[i].classList.add('reveal_active');
    } 
    else {
        reveals_arr[i].classList.remove('reveal_active'); 
    }
}
})

