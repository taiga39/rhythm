var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
 
var cnt;
 
var x = canvas.width/2;
var dx = 0;
var cases
var speed = 7.5
var trueball1 = new Array
var trueball2 = new Array
var trueball3 = new Array
var trueball4 = new Array

var datas
var miss = 0
function getJSON() {
	var req = new XMLHttpRequest();						// XMLHttpRequest オブジェクトを生成する
	req.onreadystatechange = function() {				// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
		if(req.readyState == 4 && req.status == 200){	// サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
            datas = JSON.parse(req.responseText);	// 取得した JSON ファイルの中身を変数へ格納
		}
	};
	req.open("GET", "main.json", false);				// HTTPメソッドとアクセスするサーバーのURLを指定
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
        this.xz = 490 - (sec * speed * 60)
        context.rect(xy, this.xz, 50, 10);
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();
    }
    move(x) {
        this.xz = this.xz + x;
    }
    draw(){
        if(this.xz < 541 ){
            this.xz += speed
            var xy
            if(this.cases == 1){
                xy = 75+810/5*1
            }
            if(this.cases == 2){
                xy = 75+810/5*2
            }
            if(this.cases == 3){
                xy = 75+810/5*3
            }
            if(this.cases == 4){
                xy = 75+810/5*4
            }
            var color = "#0095DD";
            if(this.xz > 0 && this.xz <= 505 && this.cases == 1){
                trueball1.push(this)
            }
            if(this.xz > 0 && this.xz <= 505 && this.cases == 2){
                trueball2.push(this)
            }
            if(this.xz > 0 && this.xz <= 505 && this.cases == 3){
                trueball3.push(this)
            }
            if(this.xz > 0 && this.xz <= 505 && this.cases == 4){
                trueball4.push(this)
            }
            if((this.xz < 750 || this.xz > -50)&& this.delete == false){
            context.beginPath();
            context.rect(xy-30, this.xz,60 ,20);
            context.fillStyle = "#00ff00"
            context.fill();
            context.closePath();
            }
            if(this.delete == true){
                this.end =true
            }
        }else if(this.xz > 541 && this.end == false){
            miss++
            this.end = true
            misstype()
        }
    }
}
var ya
var can
var notes = Array(2);
function make(){
    for(var i = 0;i < datas.length;i++) {
        ya = datas[i]["second"]
        can = datas[i]["cases"]

        this.notes[i] = new Note(ya,can);
    }
}

function drawmoji() {
    if(cnt % 10 == 0){
        context.font = "48px serif";
        context.fillText("Hello world", 10, 50);
    }else{
    context.font = "22px serif";
    context.fillText("Hello world", 10, 50);
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
    context.rect(0, 490, 960,20);
    context.fillStyle = "#00ff00";
    context.fill();
    context.closePath();
    
    context.beginPath();
    context.globalAlpha = 1;
    context.rect((75+810/5*1)-30, 490, 60,20);
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect((75+810/5*2)-30, 490, 60,20);
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect((75+810/5*3)-30, 490, 60,20);
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect((75+810/5*4)-30, 490, 60,20);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
}

function misstype(){
    context.beginPath();
    context.globalAlpha = 0.8;
    context.rect(0,0,960,540);
    context.fillStyle = "red";
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
        mx = (75+810/5*1)-30
    }else if(n == 2){
        mx = (75+810/5*2)-30
    }else if(n == 3){
        mx = (75+810/5*3)-30
    }else if(n ==4){
        mx = (75+810/5*4)-30
    }

    if(good1 == true){
        context.beginPath();
        context.globalAlpha = 0.4;
        context.rect(mx, 540, 60,-540);
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
        context.beginPath();
        context.globalAlpha = 1;
        context.rect(mx, 490, 60,20);
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
    }
    else if(good2 == true){
        context.beginPath();
        context.globalAlpha = 0.4;
        context.rect(mx, 540, 60,-540);
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
        context.beginPath();
        context.globalAlpha = 1;
        context.rect(mx, 490, 60,20);
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
    }
    else if(good3 == true){
        context.beginPath();
        context.globalAlpha = 0.4;
        context.rect(mx, 540, 60,-540);
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
        context.beginPath();
        context.globalAlpha = 1;
        context.rect(mx, 490, 60,20);
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
    }
    else if(good4 == true){
        context.beginPath();
        context.globalAlpha = 0.4;
        context.rect(mx, 540, 60,-540);
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
        context.beginPath();
        context.globalAlpha = 1;
        context.rect(mx, 490, 60,20);
        context.fillStyle = "#00ff00";
        context.fill();
        context.closePath();
    }
    else{
        context.beginPath();
        context.globalAlpha = 0.4;
        context.rect(mx, 540, 60,-540);
        context.fillStyle = "white";
        context.fill();
        context.closePath();

        context.beginPath();
        context.globalAlpha = 1;
        context.rect(mx, 490, 60,20);
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
    // drawmoji()
}

var keytrue1 = false
var keytrue2 = false
var keytrue3 = false
var keytrue4 = false

document.onkeydown = pressFunction;
function pressFunction(e){
  if(e.keyCode == 68)
  {
    if(trueball1.length != 0 && keytrue1 != true){
        if(trueball1[0].xz > 210 && trueball1[0].xz < 550 ){
            trueball1[0].delete = true
            good1 = true
        }
    }
    keytrue1 = true
    moji1 = true
  }
  if (e.keyCode == 70) 
  {
    if(trueball2.length != 0 && keytrue2 != true){
        if(trueball2[0].xz > 210 && trueball2[0].xz < 550 ){
            trueball2[0].delete = true
            good2 = true
            drawmoji()
        }
    }
    keytrue2 = true
    moji2 = true
  }

  if (e.keyCode == 74)
  {
    if(trueball3.length != 0 && keytrue3 != true){
        if(trueball3[0].xz > 210 && trueball3[0].xz < 550 ){
            trueball3[0].delete = true
            good3 = true
        }
    }
    keytrue3 = true
    moji3 = true
  }

  if (e.keyCode == 75)
  {
    if(trueball4.length != 0 && keytrue4 != true){
        if(trueball4[0].xz > 210 && trueball4[0].xz < 550 ){
            trueball4[0].delete = true
            good4 = true
        }
        console.log(trueball4[0])
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
        console.log(good1 )
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
    height: '540',
    width: '960',
    // videoId: 'okukS-aW_60',
    videoId: 'iHGk-l0lu1M',
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
    alert('ready');
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    alert('finish');
  }
  if (event.data == YT.PlayerState.PLAYING) {
    console.log('palying')
    setInterval(main,1000/60)

  }
}

function start(event){
    player.playVideo();
}