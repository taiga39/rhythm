var lotate =  window.orientation
var sp
function isSmartPhone() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      sp = true;
    } else {
      sp = false;
    }
}
isSmartPhone()
var tate = '<p id="start" style="position:absolute;z-index:4;color:red;margin:0 auto;left:0;right:0;height:10vh;background:white;text-align:center;line-height:10vh;">画面を回転して下さい</p>'
var yoko = '<a href="/play" style="position:absolute;z-index:4;color:red;margin:0 auto;left:0;right:0;height:10vh;background:white;text-align:center;line-height:10vh;">Play</a>'

if(Math.abs(lotate) != 90 && sp == true){
    document.body.innerHTML = tate
}else{
    document.body.innerHTML = yoko
}

window.addEventListener("orientationchange", function() {
    if(window.orientation == 0 || window.orientation ==180){
        document.body.innerHTML = tate
    }else{
        document.body.innerHTML = yoko
    }
})