selectChat();
setCurrentPlace("gym_entrance_entrance");

function selectChat(){
    var places = getLocalStorageMap("places");

    if(!places.has("gym")){
        firstChat();

        increaseFamiliarityPlace("gym");
    }else{
        secondChat();
    }
}

function firstChat(){
    var recptionist_img = getLocalStorageString("racine_path")+"/interface/chat/unknown_man_1.jpg";

    var id = "chat";

    var text_chat = "Couldn't hurt to train those gain, or at least make sure everything still works. Plus there might be some nice eye candy in here";
    add_commentary(text_chat,id);

    var text_chat = "Hello sweety. You're in luck ! Today our payment system are broken, so the gym decided to let everyone have free acces to the equipment. Hopefully it'll help bring some newby here. God knows we need it. Enjoy !";
    add_text_other(text_chat,id,recptionist_img);
    
    var text_chat = "That's awsome, thanks. I'll make sure to, and who knows, might signup when the system is back up";
    add_text_user(text_chat,id);

    var text_chat = "And we'd welcome you with pleasure. Still no pressure, for today focus on enjoying the facility";
    add_text_other(text_chat,id,recptionist_img);

    var list = getListAction();
    
    addChoices(list,id);
}

function getListAction(){
    var racine = getLocalStorageString("racine_path");
    var choice1 = {id:"workout",text:"Workout alone",url:racine+"/pages/gym/workout/workout.html",time:3,function:"regularMuscleIncrease"};
    var choice2 = {id:"path_map",text:"Leave the gym",url:racine+"/pages/map/map.html"};

    var list = [choice1,choice2];
    return list;
}

function secondChat(){
    var id = "chat";

    var text_chat = "Back to the gym, let's see what I'll get to today";
    add_commentary(text_chat,id);

    var list = getListAction();
    
    addChoices(list,id);
}

function regularMuscleIncrease(){

    emptyGainSave();
    var gain = getRandomInt(4);

    addRandomSave("gym",8);

    updateStat("Strength",gain);

}

