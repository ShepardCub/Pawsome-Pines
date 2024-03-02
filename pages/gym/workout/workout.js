selectChat();
setCurrentPlace("gym_workout_workout");

function selectChat(){
    var id_chat = "chat";
    switch (getPlaceFamiliarity("gym")) {
        case 0:
            firstChat(id_chat);
            increaseFamiliarityPlace("gym");
            break;
    
        case 1:
            var alea = getRandom("gym");
            if(alea == 1){
                meetJake(id_chat);
            }else{
                chatLevel1(id_chat);
            }

            break;
        default:
            break;
    }
}

function getListAction(){
    var choice1 = {id:"leave",text:"Shower and head out",url:getLocalStorageString("racine_path")+"/pages/gym/entrance/entrance.html"};

    var list = [choice1];
    return list;
}

function firstChat(id_chat){

    var text_chat = "A few hours pass by, and you feel every second of them";
    add_commentary(text_chat,id_chat);

    var text_chat = "Fuck me, why the heck have I kept on going ? I'm never setting foot on a treadmill ever again !!";
    add_text_user(text_chat,id_chat)

    var text_chat = "Looking down, your sweaty love handles remind you why you put yourself through this torture.";
    add_commentary(text_chat,id_chat);

    addLastGain(id_chat);

    var text_chat = "Fiinnneee, maybe I'll come back if I'm desperate or sprought a masochist side...";
    add_text_user(text_chat,id_chat)

    var list = getListAction();    
    addChoices(list,id_chat);
}

function chatLevel1(id_chat){
    var text_chat = "A few hours pass by, and you feel like you might survive this gym thing";
    add_commentary(text_chat,id_chat);

    var list = getListAction();    
    addChoices(list,id_chat);
}

function meetJake(id_chat){

}