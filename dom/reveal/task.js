const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', function() {
    const rect = reveal.getBoundingClientRect();

    for(reveal of reveals) {

    if(rect.top >= 0 && rect.bottom > 0) {
        reveal.classList.add('reveal_active');
    } 
    else {
        reveal.classList.remove('reveal_active'); 
    }
}
})