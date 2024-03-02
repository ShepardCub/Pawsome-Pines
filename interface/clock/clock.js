function writeClock(){
    document.write('\
    <div id="time" class="time"></div>\
    ');
    getClock();
}

function getClock(){
    var time = getTime();
    if(time.hours<10){
        time.hours = "0"+time.hours;
    }
    if(time.minutes<10){
        time.minutes = "0"+time.minutes;
    }

    document.getElementById("time").textContent=time.hours+":"+time.minutes;

}

function getTime(){
    var time = new Date(parseInt(getLocalStorageString("date")));
    var hours = time.getHours();
    var minutes = time.getMinutes();
    return { hours,minutes};
}

function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { hours, minutes };
}

function spendTime(hours){
    var time = new Date(parseInt(getLocalStorageString("date")));
    time.setHours(time.getHours() + hours);
    setLocalStorage("date",time.getTime());
}

function nextDay(){
    var date = new Date(parseInt(getLocalStorageString("date")));
    if(date.getHours()!=0){
        date.setDate(date.getDate()+1);
    }

    date.setHours(8);
    date.setMinutes(0);

    setLocalStorage("date",date.getTime());
}

function isSpendTimeValid(hours){
    var time = new Date(parseInt(getLocalStorageString("date")));
    if((time.getHours() + hours)>24 || time.getHours() == 0){
        return false;
    }
    return true;
}