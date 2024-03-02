setFace();

function setFace(){
    var nb_faces = 6;
    var select = document.getElementById("face_list");

    for (let index = 1; index <= nb_faces; index++) {

        var person_item_value = "face_"+index;
        var option = document.createElement("option");

        option.text = "Face "+index;
        option.value = person_item_value;

        select.appendChild(option)
    }

    select.onchange = function(){
        var index = this.selectedIndex;
        var image_path = "../../images/faces/main/main_face_"+index+".jpeg";

        document.getElementById("face_image").src=image_path;
    }
}



function save_creation(){
    localStorage.removeItem("current_save_pawsome" );

    var current_save_pawsome = new Map();

    var image_path =  document.getElementById('face_image').src;
    var firstName =  document.getElementById('fname').value;
    var lastName =  document.getElementById('lname').value;
    var background = document.querySelector('input[name="background_choice"]:checked').value;
    var date = new Date("03/27/2024 08:00");
    var parent = getParent(getParent(getParent(getParent(image_path))));

    current_save_pawsome.set("user_imagePath",image_path );
    current_save_pawsome.set("user_lastname",lastName );
    current_save_pawsome.set("user_firstname", firstName);
    current_save_pawsome.set("user_background", background);
    current_save_pawsome.set("date", date.getTime());
    current_save_pawsome.set("racine_path",parent);
    current_save_pawsome.set("current_place","home_home");

    current_save_pawsome = addSkillLocalStorage(background,current_save_pawsome);
    
    var job = new Map();
    job.set('id',0);
    job.set('name',"Jobless");
    current_save_pawsome = addMapLocalStorage("user_job",job,current_save_pawsome);

    var items = new Map();

    var clothes = new Map();
    items.set('clothes', JSON.stringify(Array.from(clothes)));
    
    var specials = new Map();
    items.set('specials',JSON.stringify(Array.from(specials)));
    
    var sextoys = new Map();
    items.set('sextoys',JSON.stringify(Array.from(sextoys)));

    current_save_pawsome = addMapLocalStorage("user_items",items,current_save_pawsome);

    var phone = new Map();
    var contact = new Map();
    phone.set("contact",JSON.stringify(Array.from(contact.entries())))
    current_save_pawsome = addMapLocalStorage("phone",phone,current_save_pawsome);

    
    var places = new Map();
    current_save_pawsome = addMapLocalStorage("places",places,current_save_pawsome);

    var saves = new Map();
    localStorage.setItem("saves_pawsome",JSON.stringify(Array.from(saves.entries())));
    localStorage.setItem("current_save_pawsome",JSON.stringify(Array.from(current_save_pawsome.entries())));

}

function addToCurrentSave(name, map, current_save_pawsome){
    current_save_pawsome.set(name,map );
    return current_save_pawsome;
}

function addSkillLocalStorage(background,current_save_pawsome){
    var strength = 10;
    var intelligence = 10;
    var charisma = 10;
    var computer = 10;
    var crime = 0;
    var money = 100;
    var cop_awerness = 0;
    var attitude = 0;

    switch (background) {

        case 'background_IT':
            computer += 30;
            intelligence += 10;
            charisma -= 10;
            strength -=10;
            break;

        case 'background_Thug':
            strength += 20;
            crime += 20;
            charisma -= 10;
            intelligence -=10;
            break;

        case 'background_Seller':
            charisma += 20;
            money += 50;
            intelligence -=10;
            break;

        case 'background_Party':
            crime +=10;
            charisma += 30;
            intelligence -=10
            money -= 80;
            break;
    
        default:
            break;
    }


    current_save_pawsome.set("user_money", money);
    current_save_pawsome.set("user_copawerness", cop_awerness);

    var skills = new Map();
    skills.set('Strength',strength);
    skills.set('Intelligence',intelligence);        
    skills.set('Charisma',charisma);
    skills.set('Computer',computer);
    skills.set('Crime',crime);
    skills.set('Attitude',attitude);
    current_save_pawsome = addMapLocalStorage("user_skills",skills,current_save_pawsome);

    return current_save_pawsome;
}

function addMapLocalStorage(name,map,current_save_pawsome){
    current_save_pawsome.set(name,JSON.stringify(Array.from(map.entries())));
    return current_save_pawsome;
}

function getParent(path){
    const parent = path.substring(0, path.lastIndexOf('/'));
    return parent;
}