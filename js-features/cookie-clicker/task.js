const image = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");
function addText () {
clicker__counter.textContent ++;
if(clicker__counter.textContent % 2 == 1) {
    image.width = 220;
} else {
    image.width = 200;
}
};
image.onclick = addText;


