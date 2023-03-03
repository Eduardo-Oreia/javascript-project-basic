let startBtn = document.getElementById("start-btn")
let sec = 0
let min = 0
let hor = 0
let interval

function twoDigits(digit){
    if(digit < 10){
        return "0" + digit
    }
    else{
        return digit 
    }
}

function start(){
    interval = setInterval(add, 100)
    if(sec >= 0){
        startBtn.disabled = true
    }
}

function pause(){
    clearInterval(interval)
    startBtn.disabled = false
}

function reset(){
    clearInterval(interval)
    sec = 0
    min = 0
    hor = 0
    document.getElementById("watch").innerHTML = "00:00:00"
    startBtn.disabled = false
}

function add(){
    sec++
    if(sec == 60){
        min++
        sec = 0
        if(min == 60){
            hor++
            min = 0
            sec = 0
        }
    }
    document.getElementById("watch").innerHTML = twoDigits(hor) +":"+ twoDigits(min) +":"+ twoDigits(sec)
    // console.log(sec)
}