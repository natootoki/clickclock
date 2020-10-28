function set2fig(num) {
  // 桁数が1桁だったら先頭に0を加えて2桁に調整する
  var ret;
  if( num < 10 ) { ret = "0" + num; }
  else { ret = num; }
  return ret;
}
function showClock2() {
  var nowTime = new Date();
  var nowHour = set2fig( nowTime.getHours() );
  var nowMin  = set2fig( nowTime.getMinutes() );
  var nowSec  = set2fig( nowTime.getSeconds() );
  var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
  document.getElementById("clock").innerHTML = msg;
}
setInterval('showClock2()',1000);

var s_time = null;
var raps=false;
var green=0;
var blue=0;
var orange=0;
var rec = document.getElementById("record");
rec.innerHTML = 'green:'+green+' blue:'+blue+' gold:'+orange;

function start() {
  s_time = new Date();
  if(raps){
  var rap = document.getElementById("test");
  rap.innerHTML = '';
  }
  raps=false;
  green=0;
  blue=0;
  orange=0;
  var rec = document.getElementById("record");
  rec.innerHTML = 'green:'+green+' blue:'+blue+' gold:'+orange;
}

function stop() {
  raps=true;
  var e_time = new Date();
  if(s_time == null) {
    console.log("開始 -> 終了の順に押してください");
  } else {
    if((e_time.getTime() - s_time.getTime())%1000==0)
    {
      var diff = '<font color="orange" id="rap"><br>"経過時間(秒):", '+ (e_time.getTime() - s_time.getTime())/1000+'</font>';
      orange+=1;
    }
    else if((e_time.getTime() - s_time.getTime())%1000<10||(e_time.getTime() - s_time.getTime())%1000>990)
    {
      var diff = '<font color="blue" id="rap"><br>"経過時間(秒):", '+ (e_time.getTime() - s_time.getTime())/1000+'</font>';
      blue+=1;
    }
    else {
      var diff = '<font color="gleen" id="rap"><br>"経過時間(秒):", '+ (e_time.getTime() - s_time.getTime())/1000+'</font>';
      green+=1;
    }
    var test = document.getElementById('test');
test.insertAdjacentHTML('afterbegin',diff);
var rec = document.getElementById("record");
  rec.innerHTML = 'green:'+green+' blue:'+blue+' gold:'+orange;
  }
}

var music = new Audio();
music.load();
music.src = "decision17.mp3";

function play() {
  music.currentTime=0;
  music.play();
}
