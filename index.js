var element  = document.querySelectorAll('.btn');
var time = document.querySelectorAll('#time');

     var s=00
     var m=00
     var tt=0;
     var score = 0;
     //=============================================================================================
    function startTimer(){
      score = 0;
      var start_time = document.getElementById('game-time').value
      s=start_time
      if(s+m==0)s=00,m=00;//старт времени
      tt=setInterval(function(){
        s-=1;
        m = s / 60;
        if(s<0) s=59,m-=1;
        if(s+m==0)T2()
        s = s+"";
        m = m+"";
        if (s.length<2) s = "0"+s;
        if (m.length<2) m = "0"+m;
        time[0].innerHTML= Math.floor(m % 60)+":"+Math.floor(s % 60);
      },1000)
      document.getElementById("start").style.visibility = 'hidden';
      document.getElementById("result-header").style.display = "none";
      Clickblock();
      document.getElementById("result-header").style.display = "";
    }
    function func(){
      clearInterval(tt)
      document.getElementById("start").style.visibility = 'visible';
      document.getElementById("Figura").remove();
      document.getElementById("result").innerHTML = score.toString();
      document.getElementById("result-header").style.display = "block";
      }
      //=============================================================================================
function Clickblock(){
  var Objec = document.createElement("div");

  var Blocksize = getRandomInt(50,100);
  Objec.style.width = Blocksize.toString() + "px";
  Objec.style.height =Blocksize.toString() + "px";

  var Position = 300 - Blocksize;
  Objec.style.position = "absolute";
  Objec.style.left = getRandomInt(0,Position) + "px";
  Objec.style.top = getRandomInt(0,Position) + "px";

  Objec.style.background = getRandomColor()

  Objec.id = "Figura";
  Objec.onclick = function(){

    document.getElementById("Figura").remove();
    Clickblock();
    score += 1;
  }

  var element = document.getElementById("game");
  element.appendChild(Objec);
}

function getRandomColor() {
  var color = 'black';
  return color;

}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
