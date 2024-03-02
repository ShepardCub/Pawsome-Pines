function getMaxSkill(nameSkill){

    var max;
    switch (nameSkill) {
        case "Strength":
            max = 100;
            break;

        case "Intelligence":
            max = 100;
            break;

        case "Charisma":
            max = 100;
            break;

        case "Computer":
            max = 100;
            break;

        case "Crime":
            max = 100;
            break;

        case "Attitude":
            max = 150;
            break;
    }

    return max;
}


function getMinSkill(nameSkill){

    var min;
    switch (nameSkill) {
        case "Strength":
            min = -100;
            break;

        case "Intelligence":
            min = -100;
            break;

        case "Charisma":
            min = -100;
            break;

        case "Computer":
            min = -100;
            break;

        case "Crime":
            min = -100;
            break;

        case "Attitude":
            min = -150;
            break;
    }

    return min;
}

function updateStat(nameSkill,increase){
    var skills = getLocalStorageMap("user_skills");
    var skill_value = skills.get(nameSkill);
    skill_value += increase;

    var max = getMaxSkill(nameSkill);
    var min = getMinSkill(nameSkill)
    if(skill_value>max){
        skill_value=max;
    }

    if(skill_value<min){
        skill_value=min;
    }

    var mapGain = new Map();
    mapGain.set("name",nameSkill);

    mapGain.set("value",{number: increase, type:"skill"});

    addGain(mapGain);

    skills.set(nameSkill,skill_value);
    setLocalStorage("user_skills",JSON.stringify(Array.from(skills.entries())));
}

