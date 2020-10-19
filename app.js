let count = 0;
let key = 0;
let timerRunnning = false;

function start (){
    count++;
    let minutes = Math.floor((count/100)/60);
    let seconds = Math.floor((count/100) - (minutes * 60));
    let milliSeconds = Math.floor(count- (seconds * 100) - (minutes * 6000));
    
    
    document.querySelector('#min').innerText = zeroAdd(minutes);
    document.querySelector('#sec').innerText = zeroAdd(seconds);
    document.querySelector('#mili').innerText = zeroAdd(milliSeconds);
}


let startBtn = document.querySelector('#start');
startBtn.addEventListener('click',function(){
    if(!timerRunnning){
        key = setInterval(start,10);
        timerRunnning = true;
    }
});

let stopBtn = document.querySelector('#stop');
stopBtn.addEventListener('click',function(){
    clearInterval(key);
});

let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',function(){
    clearInterval(key);
    minutes =0;
    milliSeconds = 0;
    seconds = 0;
    timerRunnning = false;
    count =0;
    key = 0;

    document.querySelector('#min').innerText = "00";
    document.querySelector('#sec').innerText = "00";
    document.querySelector('#mili').innerText = "00";

});


function zeroAdd (time){
    if(time<=9){
        return "0"+time;
    }
    else{
        return time;
    }
}

