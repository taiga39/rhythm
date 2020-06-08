var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
 
var cnt;
 
var x = canvas.width/2;
var dx = 0;
var moji1 = 0
var moji2 = 0
var moji3 = 0
var moji4 = 0
var cases
var trueball1 = new Array
var trueball2 = new Array
var trueball3 = new Array
var trueball4 = new Array

var datas

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
	constructor(y,casen) {
        var xy = 0
        this.cases = casen
        this.delete = false
        context.beginPath();
        this.xz = y
        context.rect(xy, this.xz, 50, 10);
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();
    }
    move(x) {
        this.xz = this.xz + x;
    }
    draw(){
        this.xz += 7.5

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
        // if(this.xz > trueball1 && this.xz < 600 && this.cases == 1){
        //     trueball1 = this.xz
        // }else if(this.xz > 600 && this.cases == 1){
        //     // notes = notes.filter(n => n !== this);
        //     trueball1 = 0
        // }
        if(this.xz > 0 && this.xz <= 510 && this.cases == 2){
            trueball2.push(this)
        }
        // if(this.xz > trueball3 && this.xz < 600 && this.cases == 3){
        //     trueball3 = this.xz
        // }else if(this.xz > 600 && this.cases == 3){
        //     // notes = notes.filter(n => n !== this);
        //     trueball3 = 0
        // }
        // if(this.xz > trueball4 && this.xz < 600 && this.cases == 4){
        //     trueball4 = this.xz
        // }else if(this.xz > 750 && this.cases == 4){
        //     // notes = notes.filter(n => n !== this);
        //     trueball4 = 0
        // }
        if((this.xz < 750 || this.xz > -50)&& this.delete == false){
        context.beginPath();
        context.arc(xy, this.xz, 25, 0, 2 * Math.PI);
        context.fillStyle = color
        context.fill();
        context.closePath();
        }
    }
}
var ya
var can
var notes = Array(500);
function make(){
    for(var i = 0;i < datas.length;i++) {
        ya = datas[i]["y"]
        can = datas[i]["cases"]

        this.notes[i] = new Note(ya,can);
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

// console.log((50*750/540))
function drawdaikei(){
    // context.beginPath();
    // context.moveTo(445,0);
    // context.lineTo(515,0);
    // context.lineTo(885,540); 
    // context.lineTo(75,540);
    // context.closePath();
    // context.strokeStyle = "rgb(0,0,0)";
    // context.stroke();
    // context.fillStyle="rgba(0,0,255,0.4)";
    // context.fill();
}
function mojidraw() {
    if(moji1 >= -200 && moji1 <= -170){
        context.fillStyle = "blue";
        context.fillText('Exelent', 20, 50);
    }
    // else if(moji1 >= -150 && moji1 <= -120){
    //     context.fillStyle = "blue";
    //     context.fillText('Good', 20, 50);
    // }
}
var nami1 = 0
function nami(){
    context.beginPath();
    // context.globalAlpha = 0.5;
    context.rect((75+810/5*1)-25, 400,50 ,60);
    context.fill();
    context.closePath();
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.rect(0, 480, 960,10);
    context.fillStyle = "yellow";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect(0, 480, 960,10);
    context.fillStyle = "yellow";
    context.fill();
    context.closePath();
    
    context.beginPath();
    context.rect((75+810/5*1)-30, 480, 60,10);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect((75+810/5*2)-30, 480, 60,10);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect((75+810/5*3)-30, 480, 60,10);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect((75+810/5*4)-30, 480, 60,10);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();

    // context.beginPath();
    // context.arc(50, 475, 25, 0, 2 * Math.PI);
    // context.fillStyle = "red"
    // context.fill();
    // context.closePath();

    // context.beginPath();
    // context.arc(150, 485, 25, 0, 2 * Math.PI);
    // context.fillStyle = "red"
    // context.fill();
    // context.closePath();

    // context.beginPath();
    // context.arc(150, 495, 25, 0, 2 * Math.PI);
    // context.fillStyle = "red"
    // context.fill();
    // context.closePath();


    context.beginPath();
    context.arc(200, 510, 25, 0, 2 * Math.PI);
    context.fillStyle = "red"
    context.fill();
    context.closePath();
    // mojidraw()

}
function main() {
    trueball2 = new Array
    draw()
    raka()
    drawdaikei()
    if(nami1 < 90 && nami1 > 0){
        nami1 = nami1 + 3
        nami()
    }else{
        nami1 = 0

    }
    cnt++
    moji1++
    moji2++
    moji3++
    moji4++

}
document.onkeydown = pressFunction;
var keyStatus = {};
function pressFunction(e)
{
  if(e.keyCode == 68)
  {
    console.log(trueball1)
    nami()
    // if(trueball1[0].xz < 600 && 500 < trueball1[0].xz){
    //     moji1 = -200
    // }
    
  }
  if (e.keyCode == 70) 
  {
    trueball2[0].delete = true 
    console.log(trueball2[0].xz)
    // console.log(notes[0].xz)

  }
  if (e.keyCode == 74)
  {
    console.log(trueball3)

  }
  if (e.keyCode == 75)
  {
    console.log(trueball4)

  }

}

// init();
// setInterval(main,1000/60)

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '540',
    width: '960',
    videoId: 'okukS-aW_60',
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