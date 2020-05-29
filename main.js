let interval;
let ms = 0;


function start(){
    let startButton = document.getElementById("start");
    interval = setInterval(timing,15);
    startButton.innerHTML = "停止";
    startButton.onclick = stop;
    startButton.className = "main-buttom btn btn-danger"
}

function stop(){
    let startButton = document.getElementById("start");
    clearInterval(interval);
    startButton.innerHTML = "开始";
    startButton.onclick = start;
    console.log(startButton.classList)
    startButton.className = "main-buttom btn btn-primary"
}

function clearTime(){
    console.log("Cke")
    ms = 0;
    stop();
    document.getElementById("time").innerHTML = "00"+ ":" + "00" + "." + "00";
}

function timing(){
    ms = ms+1;
    let s = parseInt(ms/100);
    let min = parseInt(s/60);
    let sString = (s%60 < 10)?"0"+s%60:s%60;
    let minString = (min%60 < 10) ? "0" + min%60 : min%60;
    let msSting = (ms%100 < 10) ? "0" + ms%100 : ms%100;
    document.getElementById("time").innerHTML = minString + ":" + sString + "." + msSting;
}