var arr = ['shoxrux', 'nasibullo', 'abdulboriy','abdullox', 'ahror', 'muxammadali','azim', 'ilmidin', 'ali','suxrob','sirojiddin','aziz']
var elWrapper = document.querySelector('.wrapper')
for (var i = 0; i < arr.length; i++) {
    var newBox = document.createElement('div')
    newBox.innerHTML = `
    <div class="box">
    <img src="./img/cat 8k.png" alt="">
    <h2>${arr[i]}</h2>
    <p>Lorem ipsum dolor <br> sit amet.</p>
    <button class="remove" onclick="rm()">say hello</button>
</div>
    `
    elWrapper.appendChild(newBox)
}

document.addEventListener('contextmenu', function (p) {
    p.preventDefault();
    alert("Kod ni ko'chirish mumkinmas !!!");
});
