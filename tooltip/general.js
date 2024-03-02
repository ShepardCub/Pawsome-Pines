function emptyGainSave(){
    removeLocalStorage("user_gain");
}

function saveGain(map){
    var gainMap = new Map();
    map.forEach((gain) => {
        gainMap.set(gain.getItem("name"),gain.getItem("value"));
    });

    setLocalStorage("user_gain",JSON.stringify(Array.from(gainMap.entries())));
}

function addGain(gain){

    if(getLocalStorageMap("user_gain") !== null){
        var gainMap = getLocalStorageMap("user_gain");
        gainMap.set(gain.getItem("name"),gain.getItem("value"));
    }else{
        var gainMap = new Map();
        gainMap.set(gain.get("name"),gain.get("value"));
    }

    setLocalStorage("user_gain",JSON.stringify(Array.from(gainMap.entries())));
}



function getRandomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}

function emptyRandomSave(){
    removeLocalStorage("user_random");
}

function addRandomSave(name,max){

    var random = getRandomInt(max);

    var randomMap;

    if(getLocalStorageMap("user_random") !== null){
        randomMap = getLocalStorageMap("user_random");
        randomMap.set(name,random);
    }else{
        randomMap = new Map();
        randomMap.set(name,random);
    }

    setLocalStorage("user_random",JSON.stringify(Array.from(randomMap.entries())));

}

function getRandom(name){
    if(getLocalStorageMap("user_random") !== null){
        var randomMap = new getLocalStorageMap("user_random");
        return randomMap.get(name);
    }
    return -1;
}

/**************************************** Local storage gestion ****************************************/

function getLocalStorageMap(name){
    var current_save_pawsome = new Map(JSON.parse(localStorage.getItem("current_save_pawsome")));
    if(current_save_pawsome.has(name)){
        return new Map(JSON.parse(current_save_pawsome.get(name)));
    }
    return null;
}

function getLocalStorageString(name){
    var current_save_pawsome = new Map(JSON.parse(localStorage.getItem("current_save_pawsome")));
    if(current_save_pawsome.has(name)){
        return current_save_pawsome.get(name);
    }
    return null;
}

function setLocalStorage(name,value){
    var current_save_pawsome = new Map(JSON.parse(localStorage.getItem("current_save_pawsome")));
    current_save_pawsome.set(name,value);
    localStorage.setItem("current_save_pawsome",JSON.stringify(Array.from(current_save_pawsome.entries())));
}

function removeLocalStorage(name){
    var current_save_pawsome = new Map(JSON.parse(localStorage.getItem("current_save_pawsome")));
    current_save_pawsome.delete(name);
    localStorage.setItem("current_save_pawsome",JSON.stringify(Array.from(current_save_pawsome.entries())));
}

/**************************************** Save gestion ****************************************/

function getSave(number) {
    var save_pawsome = new Map(JSON.parse(localStorage.getItem("saves_pawsome")));
    if(save_pawsome.has(number)){
        return new Map(JSON.parse(save_pawsome.get(number)));
    }

    return null;
}

function setSave(number,value) {
    var save_pawsome = new Map(JSON.parse(localStorage.getItem("saves_pawsome")));
    save_pawsome.set(number,value);
    localStorage.setItem("saves_pawsome",JSON.stringify(Array.from(save_pawsome.entries())));
}

function emptySave(number){
    var save_pawsome = new Map(JSON.parse(localStorage.getItem("saves_pawsome")));
    save_pawsome.delete(number);
    localStorage.setItem("saves_pawsome",JSON.stringify(Array.from(save_pawsome.entries())));
}

function setCurrentSave(save){

    localStorage.setItem("current_save_pawsome",JSON.stringify(Array.from(save.entries())));
}