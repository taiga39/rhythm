var sp
var lotate =  window.orientation
var content = document.getElementById("content");

// var playerframe = document.getElementById("player");

function isSmartPhone() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      sp = true;
      var goFS = document.getElementById("start");
      goFS.addEventListener("click", function() {
          content.requestFullscreen();
      }, false);
    } else {
      sp = false;
    }
}
isSmartPhone()
if(Math.abs(lotate) != 90 && sp == true){
    window.location.href = "/"
}
var canvas = document.getElementById("canvas");

if(sp === false){
    canvas.width = 960;
    canvas.height = 540;
}else if(sp === true){
    canvas.width = screen.height/9*16
    canvas.height = screen.height;
}
content.style.height = canvas.height;

window.addEventListener("orientationchange", function() {
})

var pos1 = (canvas.width*75/960)+(canvas.width*810/960/5*1)
var pos2 = (canvas.width*75/960)+(canvas.width*810/960/5*2)
var pos3 = (canvas.width*75/960)+(canvas.width*810/960/5*3)
var pos4 = (canvas.width*75/960)+(canvas.width*810/960/5*4)
var context = canvas.getContext("2d");
var cnt;
var x = canvas.width/2;
var dx = 0;
var cases
var speed = 8
var trueball1 = new Array
var trueball2 = new Array
var trueball3 = new Array
var trueball4 = new Array

var datas
var miss = 0
var combo = false
function getJSON() {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(req.readyState == 4 && req.status == 200){
            datas = JSON.parse(req.responseText);
		}
	};
	req.open("GET", "/json/main.json", false);				// HTTPメソッドとアクセスするサーバーのURLを指定
	req.send(null);										// 実際にサーバーへリクエストを送信
}
getJSON()

class Note {
	constructor(sec,casen) {
        var xy = 0
        this.cases = casen
        this.delete = false
        this.end = false
        context.beginPath();
        this.xz = (canvas.height*490/540) - (sec * speed * 60)
        context.rect(xy, this.xz, (canvas.width*5/96), (canvas.width*1/54));
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();
    }
    move(x) {
        this.xz = this.xz + x;
    }
    draw(){
        if(this.xz < canvas.width+1 ){
            this.xz += speed
            var xy
            if(this.cases == 1){
                xy = pos1
            }
            if(this.cases == 2){
                xy = pos2
            }
            if(this.cases == 3){
                xy = pos3
            }
            if(this.cases == 4){
                xy = pos4
            }
            var color = "#0095DD";
            if(this.xz > 0 && this.xz <= (canvas.height*505/540) && this.cases == 1){
                trueball1.push(this)
            }
            if(this.xz > 0 && this.xz <= (canvas.height*505/540) && this.cases == 2){
                trueball2.push(this)
            }
            if(this.xz > 0 && this.xz <= (canvas.height*505/540) && this.cases == 3){
                trueball3.push(this)
            }
            if(this.xz > 0 && this.xz <= (canvas.height*505/540) && this.cases == 4){
                trueball4.push(this)
            }
            if((this.xz < (canvas.height*750/540) || this.xz > -(canvas.height*50/540))&& this.delete == false){
            context.beginPath();
            context.rect(xy-(canvas.width*30/960), this.xz,(canvas.width*60/960) ,(canvas.height*20/540));
            context.fillStyle = "#00ff00"
            context.fill();
            context.closePath();
            }
            if(this.delete == true){
                this.end =true
            }
        }else if(this.xz > canvas.height+1 && this.end == false){
            miss++
            combo = 0
            this.end = true
        }
    }
}
var ya
var can
var notes = Array();
function make(){
    for(var i = 0;i < datas.length;i++) {
        ya = datas[i]["second"]
        can = datas[i]["cases"]

        this.notes[i] = new Note(ya,can);
    }
}

function drawmoji() {
    if(combo  === 0){
        let text = "Miss"
        let size = (canvas.width*100/960)
        let textWidth = context.measureText( text ).width ;
        context.font = size+"px serif";
        context.globalAlpha = 0.4;
        context.fillStyle = "white";
        context.fillText(text,(canvas.width - textWidth)/2 , (canvas.height*300/540));
    }else if(combo > 0){
        let text = "combo"+combo
        let size = (canvas.width*100/960)
        let textWidth = context.measureText( text ).width ;
        context.font = size+"px serif";
        context.globalAlpha = 0.4;
        context.fillStyle = "white";
        context.fillText(text,(canvas.width - textWidth)/2 , (canvas.height*300/540));
    }
}


function raka(){
    if(notes.length != 0){
        for(var i = 0;i < datas.length;i++) {
            this.notes[i].draw()
        }
    }   

}
function init() {
    cnt = 0;
    by = 0;
    make()
    draw()
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.globalAlpha = 0.5;
    context.rect(0, (canvas.height*490/540), canvas.width,(canvas.height*20/540));
    context.fillStyle = "#00ff00";
    context.fill();
    context.closePath();
    
    context.beginPath();
    context.globalAlpha = 1;
    context.rect((pos1)-(canvas.width*30/960), (canvas.height*490/540), (canvas.width*60/960),(canvas.height*20/540));
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect((pos2)-(canvas.width*30/960), (canvas.height*490/540), (canvas.width*60/960),(canvas.height*20/540));
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect((pos3)-(canvas.width*30/960), (canvas.height*490/540), (canvas.width*60/960),(canvas.height*20/540));
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect((pos4)-(canvas.width*30/960), (canvas.height*490/540), (canvas.width*60/960),(canvas.height*20/540));
    context.fillStyle = "white";
    context.fill();
    context.closePath();
}

var moji1 = false
var moji2 = false
var moji3 = false
var moji4 = false
var good1 = false
var good2 = false
var good3 = false
var good4 = false
var goodn = 0

function mojidraw(n) {
    var mx 
    if(n == 1){
        mx = (pos1)-(canvas.width*30/960)
    }else if(n == 2){
        mx = (pos2)-(canvas.width*30/960)
    }else if(n == 3){
        mx = (pos3)-(canvas.width*30/960)
    }else if(n ==4){
        mx = (pos4)-(canvas.width*30/960)
    }

    if(good1 == true){
        context.beginPath();
        context.globalAlpha = 0.4;
        context.rect(mx, canvas.height, (canvas.width*60/960),-(canvas.height));
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
        context.beginPath();
        context.globalAlpha = 1;
        context.rect(mx,(canvas.height*490/540), (canvas.width*60/960),canvas.height*20/540);
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
    }
    else if(good2 == true){
        context.beginPath();
        context.globalAlpha = 0.4;
        context.rect(mx, canvas.height, (canvas.width*60/960),-(canvas.height));
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
        context.beginPath();
        context.globalAlpha = 1;
        context.rect(mx,(canvas.height*490/540), (canvas.width*60/960),canvas.height*20/540);
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
    }
    else if(good3 == true){
        context.beginPath();
        context.globalAlpha = 0.4;
        context.rect(mx, canvas.height, (canvas.width*60/960),-(canvas.height));
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
        context.beginPath();
        context.globalAlpha = 1;
        context.rect(mx,(canvas.height*490/540), (canvas.width*60/960),canvas.height*20/540);
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
    }
    else if(good4 == true){
        context.beginPath();
        context.globalAlpha = 0.4;
        context.rect(mx, canvas.height, (canvas.width*60/960),-(canvas.height));
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
        context.beginPath();
        context.globalAlpha = 1;
        context.rect(mx,(canvas.height*490/540), (canvas.width*60/960),canvas.height*20/540);
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
    }
    else{
        context.beginPath();
        context.globalAlpha = 0.4;
        context.rect(mx, canvas.height, (canvas.width*60/960),-(canvas.height));
        context.fillStyle = "white";
        context.fill();
        context.closePath();
        context.beginPath();
        context.globalAlpha = 1;
        context.rect(mx,(canvas.height*490/540), (canvas.width*60/960),canvas.height*20/540);
        context.fillStyle = "black";
        context.fill();
        context.closePath();
    }
}

function main() {
    trueball1 = new Array
    trueball2 = new Array
    trueball3 = new Array
    trueball4 = new Array
    draw()
    if(moji1 == true){
        mojidraw(1)
    }

    if(moji2 == true){
        mojidraw(2)
    }

    if(moji3 == true){
        mojidraw(3)
    }

    if(moji4 == true){
        mojidraw(4)
    }
    raka()
    cnt++
    drawmoji()
}

var keytrue1 = false
var keytrue2 = false
var keytrue3 = false
var keytrue4 = false

startb = document.getElementById("start")
startb.style.bottom = canvas.height/2 + "px"
startb.addEventListener("click", function() {
    startb.style.display  = "none"
})
document.onkeydown = pressFunction;
function pressFunction(e){
  if(e.keyCode == 68)
  {
    if(trueball1.length != 0 && keytrue1 != true){
        if(trueball1[0].xz > canvas.height/2 && trueball1[0].xz < canvas.height ){
            trueball1[0].delete = true
            good1 = true
            combo = combo+1
        }
    }
    keytrue1 = true
    moji1 = true
  }
  if (e.keyCode == 70) 
  {
    if(trueball2.length != 0 && keytrue2 != true){
        if(trueball2[0].xz > canvas.height/2 && trueball2[0].xz < canvas.height ){
            trueball2[0].delete = true
            good2 = true
            combo = combo+1
        }
    }
    keytrue2 = true
    moji2 = true
  }

  if (e.keyCode == 74)
  {
    if(trueball3.length != 0 && keytrue3 != true){
        if(trueball3[0].xz > canvas.height/2 && trueball3[0].xz < canvas.height ){
            trueball3[0].delete = true
            good3 = true
            combo = combo+1
        }
    }
    keytrue3 = true
    moji3 = true
  }

  if (e.keyCode == 75)
  {
    if(trueball4.length != 0 && keytrue4 != true){
        if(trueball4[0].xz > canvas.height/2 && trueball4[0].xz < canvas.height ){
            trueball4[0].delete = true
            good4 = true
            combo = combo+1
        }
    }
    keytrue4 = true
    moji4 = true
  }
}
document.onkeyup = upFunction;

function upFunction(e){
    if(e.keyCode == 68){
        moji1 = false
        good1 = false
        keytrue1 = false
    }

    if(e.keyCode == 70){
        moji2 = false
        good2 = false
        keytrue2 = false
    }
    if (e.keyCode == 74)
    {
        moji3 = false
        good3 = false
        keytrue3 = false

    }
    if (e.keyCode == 75)
    {
        moji4 = false
        good4 = false
        keytrue4 = false

    }
}
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: canvas.height,
    width: canvas.width,
    videoId: 'okukS-aW_60',
    // videoId: 'iHGk-l0lu1M',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars:{
        // start:10,
        end:26
    }
  });
}
function onPlayerReady(event) {
    init();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    if(sp == true){
        document.exitFullscreen();
    }

  }
  if (event.data == YT.PlayerState.PLAYING) {
    setInterval(main,1000/60)

  }
}

// スマホ時
if(sp === true){
    // 207 60 102 60 102 60 102 60 207
    butwidth = canvas.width*150/960 + "px"
    butheight = canvas.height*120/540 + "px"
    var buttons = 		`<div id="but1" style="width:${butwidth};height:${butheight};" ontouchstart="butfunc(1)" ontouchend="butup(1)"></div>`+
                        `<div id="but2" style="width:${butwidth};height:${butheight};" ontouchstart="butfunc(2)" ontouchend="butup(2)"></div>`+
                        `<div id="but3" style="width:${butwidth};height:${butheight};" ontouchstart="butfunc(3)" ontouchend="butup(3)"></div>`+
                        `<div id="but4" style="width:${butwidth};height:${butheight};" ontouchstart="butfunc(4)" ontouchend="butup(4)"></div>`
    var buttonsdiv = document.getElementById("buttons");

    buttonsdiv.style.width = canvas.width*636/960
    buttonsdiv.innerHTML = buttons
    function butfunc(n){
        if(n == 1)
        {
          if(trueball1.length != 0 && keytrue1 != true){
              if(trueball1[0].xz > canvas.height/2 && trueball1[0].xz < canvas.height ){
                  trueball1[0].delete = true
                  good1 = true
                  combo = combo+1
              }
          }
          keytrue1 = true
          moji1 = true
        }
        if (n == 2) 
        {
          if(trueball2.length != 0 && keytrue2 != true){
              if(trueball2[0].xz > canvas.height/2 && trueball2[0].xz < canvas.height ){
                  trueball2[0].delete = true
                  good2 = true
                  combo = combo+1
              }
          }
          keytrue2 = true
          moji2 = true
        }
      
        if (n == 3)
        {
          if(trueball3.length != 0 && keytrue3 != true){
              if(trueball3[0].xz > canvas.height/2 && trueball3[0].xz < canvas.height ){
                  trueball3[0].delete = true
                  good3 = true
                  combo = combo+1
              }
          }
          keytrue3 = true
          moji3 = true
        }
      
        if (n == 4)
        {
          if(trueball4.length != 0 && keytrue4 != true){
              if(trueball4[0].xz > canvas.height/2 && trueball4[0].xz < canvas.height ){
                  trueball4[0].delete = true
                  good4 = true
                  combo = combo+1
              }
          }
          keytrue4 = true
          moji4 = true
        }
    }
    function butup(n){
        if(n == 1){
            moji1 = false
            good1 = false
            keytrue1 = false
        }
        if(n == 2){
            moji2 = false
            good2 = false
            keytrue2 = false
        }

        if(n ==3){
            moji3 = false
            good3 = false
            keytrue3 = false
        }
        if(n ==4){
            moji4 = false
            good4 = false
            keytrue4 = false
        }
    } 
}

function start(event){
    player.playVideo();
}
