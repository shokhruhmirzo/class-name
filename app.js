// var elArr = [
//     {
//         title : 'shoxa',
//         text : 'lorem inpun sal lore',
//         img : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D8k%2Bwallpaper&psig=AOvVaw0YWwNqco2EPbSvSi-PZQtp&ust=1707876444123000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCmztedp4QDFQAAAAAdAAAAABAE'
//     },
//     {
//         title : 'abu',
//         text : 'pubg oi saoida ',
//         img : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3D8k&psig=AOvVaw0YWwNqco2EPbSvSi-PZQtp&ust=1707876444123000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCmztedp4QDFQAAAAAdAAAAABAR'
//     },
//     {
//         title : 'shoxa',
//         text : 'pubg oi saoida ',
//         img : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3D8k&psig=AOvVaw0YWwNqco2EPbSvSi-PZQtp&ust=1707876444123000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCmztedp4QDFQAAAAAdAAAAABAR'
//     }
// ]

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

// document.addEventListener('contextmenu', function (p) {
//     p.preventDefault();
//     alert("Kod ni ko'chirish mumkinmas !!!");
// });
