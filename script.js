let min = 0, sec = 0, cs = 0;
let timer = null;
let lapCount = 0;


function start(){
    if(timer !== null) return;

    timer = setInterval(() => {
        cs++;

        if(cs === 100){
            cs = 0;
            sec++;
        }
        if(sec === 60){
            sec = 0;
            min++;
        }

        document.getElementById("min").innerText = format(min);
        document.getElementById("sec").innerText = format(sec);
        document.getElementById("cs").innerText = format(cs);
    }, 10);
}

function pause(){
    clearInterval(timer);
    timer = null;
}

function reset(){
    clearInterval(timer);
    timer = null;

    min = sec = cs = 0;
    lapCount = 0;

    document.getElementById("min").innerText = "00";
    document.getElementById("sec").innerText = "00";
    document.getElementById("cs").innerText = "00";

    document.getElementById("laps").innerHTML = "";
}


function format(num){
    return num < 10 ? "0" + num : num;
}

function lap(){
    if(timer === null) return;

    lapCount++;

    let lapTime = `${format(min)}:${format(sec)}:${format(cs)}`;

    let li = document.createElement("li");
    li.innerText = `Lap ${lapCount} : ${lapTime}`;

    document.getElementById("laps").appendChild(li);
}

