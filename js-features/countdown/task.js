const addText = function () {
        
    const timer = document.getElementById('timer');
    timer.textContent --;
    if (timer.textContent < 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(intervalId);
    }
}
    let intervalId = setInterval(addText, 1000);