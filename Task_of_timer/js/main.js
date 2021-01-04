let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
let miliSecondes = currentTime.getMilliseconds();

//                                                 content-top

// get - date - month - year
function getDateMonthYear() {
    let divGetDateMonthYear = document.querySelector(".content-current_date-month-year");
    divGetDateMonthYear.innerHTML = getNumberToString(currentTime.getDate()) + "." + getNumberToString(currentTime.getMonth()) + "." + getNumberToString(currentTime.getFullYear());
}
getDateMonthYear();
setInterval(getDateMonthYear, 1000);

// get - hour - minute - seconde
function getHourMinuteSecond() {
    let divGetHourMinuteSecond = document.querySelector(".content-current_hour-minute-seconde");
    divGetHourMinuteSecond.innerHTML = getNumberToString(hours) + ":" + getNumberToString(minutes) + ":" + getNumberToString(seconds);
    if (seconds >= 59) {
        minutes += 1;
        seconds = 0;
    } else if (minutes >= 59) {
        hours += 1;
        minutes = 0;
    } else if (hours >= 24) {
        hours = 0;
    } else {
        seconds++;
    }
}
getHourMinuteSecond();
setInterval(getHourMinuteSecond, 1000);

//                                                  content-center

let stopwatch = new Date();
stopwatch.setHours(0);
stopwatch.setMinutes(0);
stopwatch.setSeconds(0);
stopwatch.setMilliseconds(0);

let stopwatchHours = stopwatch.getHours();
let stopwatchMinutes = stopwatch.getMinutes();
let stopwatchSecondes = stopwatch.getSeconds();
let stopwatchMilisecondes = "00" + stopwatch.getMilliseconds();
let timer;

//        gettime stopwatch
function stopwatchFunc() {
    document.querySelector(".stopwatch__timer").innerHTML = getNumberToString(stopwatchHours) + ":" + getNumberToString(stopwatchMinutes) + ":" + getNumberToString(stopwatchSecondes) + ":" + stopwatchMilisecondes;
    if (stopwatchMilisecondes > 999) {
        stopwatchMilisecondes = 0;
        stopwatchSecondes += 1;
    } else if (stopwatchSecondes > 59) {
        stopwatchSecondes = 0;
        stopwatchMinutes += 1;
    } else if (stopwatchMinutes > 59) {
        stopwatchMinutes = 0;
        stopwatchHours += 1;
    } else {
        stopwatchMilisecondes++;
    }
}
stopwatchFunc();

// button start stopwatch
document.querySelector(".stopwatch__button-start").addEventListener("click", function(event) {
    if (!timer) {
        timer = setInterval(stopwatchFunc, 0);
    }
});

// button loop stopwatch
document.querySelector(".stopwatch__button-loop").addEventListener("click", function(event) {
    document.querySelector(".content__text").innerHTML += "<div>" + stopwatchHours + ":" + stopwatchMinutes + ":" + stopwatchSecondes + ":" + (stopwatchMilisecondes - 1) + "</div>";
});

// button stop stopwatch
document.querySelector(".stopwatch__button-stop").addEventListener("click", function(event) {
    clearInterval(timer);
    timer = null;
});

// button reset stopwatch
document.querySelector(".stopwatch__button-reset").addEventListener("click", function(event) {
    stopwatch.setHours(0);
    stopwatch.setMinutes(0);
    stopwatch.setSeconds(0);
    stopwatch.setMilliseconds(0);

    stopwatchHours = stopwatch.getHours();
    stopwatchMinutes = stopwatch.getMinutes();
    stopwatchSecondes = stopwatch.getSeconds();
    stopwatchMilisecondes = stopwatch.getMilliseconds();

    document.querySelector(".stopwatch__timer").innerHTML = "00:00:00:000";
    document.querySelector(".content__text").innerHTML = "";
});

//                                                  content-bottom

let setTimeN = 25;

// takeOut in HTML setTimeN(25)
function setTimeFunc() {
    document.querySelector(".set-time__number").innerHTML = setTimeN;
}
setTimeFunc();

// button-plus 1 set-time__number 
document.querySelector(".set-time__button-plus").addEventListener("click", function(event) {
    document.querySelector(".set-time__number").innerHTML = ++setTimeN;
});

// button-minus 1 set-time__number 
document.querySelector(".set-time__button-minus").addEventListener("click", function(event) {
    if (setTimeN <= 1) {
        alert("Налаштувати таймер менше 1 хвилини не можна!");
    } else {
        document.querySelector(".set-time__number").innerHTML = --setTimeN;
    }
});

//       backTimer
let backTimer = new Date();
backTimer.setMinutes(setTimeN - 1);
backTimer.setSeconds(59);
let backTimerMinutes = backTimer.getMinutes();
let backTimerSecondes = backTimer.getSeconds();
let backTimerN;

// takeOut in HTML backTimer
function backTime(init) {
    if (init == true) {
        document.querySelector(".back-time__number").innerHTML = getNumberToString(0) + ":" + getNumberToString(0);
    } else {
        if (backTimerMinutes === 0 && backTimerSecondes === 0) {
            alert("Таймер пройшов!");
            clearInterval(backTimerN);
        } else {
            if (backTimerSecondes <= 0) {
                backTimerMinutes -= 1;
                backTimerSecondes = 59;
            } else {
                backTimerSecondes--;
            }
        }
        document.querySelector(".back-time__number").innerHTML = getNumberToString(backTimerMinutes) + ":" + getNumberToString(backTimerSecondes);
    }
}
backTime(true);

// backTimer button-start
document.querySelector(".back-time__button-start").addEventListener("click", function(event) {
    backTimer.setMinutes(setTimeN - 1);
    backTimer.setSeconds(backTimerSecondes);
    backTimerMinutes = backTimer.getMinutes();
    backTimerSecondes = backTimer.getSeconds();

    document.querySelector(".back-time__number").innerHTML = getNumberToString(backTimerMinutes) + ":" + getNumberToString(backTimerSecondes);
    if (!backTimerN) {
        backTimerN = setInterval(backTime, 1000);
    }
});

// backTimer button-stop
document.querySelector(".back-time__button-stop").addEventListener("click", function(event) {
    clearInterval(backTimerN);
    backTimerN = null;
});

// backTimer button-reset
document.querySelector(".back-time__button-reset").addEventListener("click", function(event) {
    backTimer.setMinutes(setTimeN - 1);
    backTimer.setSeconds(59);
    backTimerMinutes = backTimer.getMinutes();
    backTimerSecondes = backTimer.getSeconds();

    document.querySelector(".back-time__number").innerHTML = document.querySelector(".back-time__number").innerHTML = getNumberToString(0) + ":" + getNumberToString(0);
});


/* 
            add 0 to numbers
*/
function getNumberToString(number) {
    if (number >= 0 && number < 10) {
        return `0${number}`;
    } else {
        return String(number);
    }
}