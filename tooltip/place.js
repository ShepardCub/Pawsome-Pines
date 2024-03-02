function increaseFamiliarityPlace(name){
    var places = getLocalStorageMap("places");
    
    if(places.has(name)){
        var place = places.get(name);
        var place_info = new Map(JSON.parse(place));

        var place_familiarity = place_info.get("familiarity");

        place_info.set("familiarity",place_familiarity+1);
    }
    else
    {
        var place_info = new Map();
        place_info.set('familiarity', 0);
        var gym_specials = new Map();
        place_info.set('specials', JSON.stringify(Array.from(gym_specials.entries())));
    }

    places.set(name,JSON.stringify(Array.from(place_info.entries())))
    
    setLocalStorage("places",JSON.stringify(Array.from(places.entries())));
}

function getPlaceFamiliarity(name){
    var places = getLocalStorageMap("places");
    
    if(places.has(name)){
        var place = places.get(name);

        var place_info = new Map(JSON.parse(place));
        var place_familiarity = place_info.get("familiarity");

        return place_familiarity;
    }

    return -1;
}

function setPlaceFamiliarity(name,value){
    var places = getLocalStorageMap("places");
    
    if(places.has(name)){
        var place = places.get(name);
        var place_info = new Map(JSON.parse(place));
        place_info.set("familiarity",value);
    }
    else
    {
        var place_info = new Map();
        place_info.set('familiarity', value);
        var gym_specials = new Map();
        place_info.set('specials', JSON.stringify(Array.from(gym_specials.entries())));
    }

    places.set(name,JSON.stringify(Array.from(place_info.entries())))
    
    setLocalStorage("places",JSON.stringify(Array.from(places.entries())));
}

function getPlace(name){
    var places = getLocalStorageMap("places");
    
    if(places.has(name)){
        var place = places.get(name);
        var place_info = new Map(JSON.parse(place));
        return place_info;
    }
    else
    {
        return -1;
    }
}

function setCurrentPlace(name){
    setLocalStorage("current_place",name);  
}