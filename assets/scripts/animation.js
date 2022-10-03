let btn = document.querySelector(".btn")
var elem = document.getElementById("myAnimation");
const container = document.querySelector("#myContainer")
var pos = 0;
function myMove() {
    console.log(pos)
    if (pos < 350) {
        pos = pos + 10
        // pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';

    } else {
        setTimeout(() => {
            elem.style.display = "none"
        }, 5000);

    }

}

setInterval(() => {
    let date = Date()
    container.innerHTML = date
}, 2000)
btn.addEventListener("click", myMove)