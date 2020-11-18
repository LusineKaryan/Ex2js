let h = 0, mn = 0, s = 0, ms = 0;
let t;
let spArray = document.querySelectorAll("span")

let btn_start = document.getElementById("start");
let btn_stop = document.getElementById("stop");


//fonction start
function start() {
   t = setInterval(update_chrono,100); //1000ms = 1 second
}

//fonction update_chrono

function update_chrono() {
    ms += 1;

    if(ms == 10){
        s += 1;
        ms = 0;
    }
    if(s == 60){
        mn += 1;
        s = 0;
    }
    if(mn == 60){
        h += 1;
        mn = 0;
    }

    spArray[0].innerHTML = h + "h";
    spArray[1].innerHTML = mn + "min";
    spArray[2].innerHTML = s + "s";
    spArray[3].innerHTML = ms + "ms";

}

//fonction stop()
function stop() {
    clearInterval(t);  //Arrete le cadensement
    btn_start.disabled = false;
}

//fonction reset()

function reset() {
    clearInterval(t);  //Arrete le cadensement
    btn_start.disabled = false;
    ms=0, s=0,mn=0,h=0;

    spArray[0].innerHTML = h + "h";
    spArray[1].innerHTML = mn + "min";
    spArray[2].innerHTML = s + "s";
    spArray[3].innerHTML = ms + "ms";
}