function add_text_user(text_chat,id){
    var chat = document.createElement("div");
    var text = document.createElement("p");
    text.innerText = text_chat;
    var face = document.createElement("img");
    face.src = getLocalStorageString("user_imagePath");

    chat.appendChild(face);
    chat.appendChild(text);
    
    
    chat.classList.add("user_chat");

    var chat_container = document.getElementById(id);

    chat_container.appendChild(chat);
}


function add_text_other(text_chat,id,img){
    var chat = document.createElement("div");

    var text = document.createElement("p");
    text.innerText = text_chat;
    var face = document.createElement("img");
    face.src = img;
    chat.appendChild(face);
    chat.appendChild(text);

    chat.classList.add("other_chat");
    chat.classList.add("user_chat");

    var chat_container = document.getElementById(id);
    chat_container.appendChild(chat);
}

function add_commentary(text_chat,id){
    var text = document.createElement("p");
    text.innerText = text_chat;
    var chat_container = document.getElementById(id);
    chat_container.appendChild(text);
}

function addChoices(array,id){
    var choices_container = document.createElement("div");
    choices_container.classList.add("player_choice");

    array.forEach((choice) => {
        var choice_link = document.createElement("a");
        var choice_button = document.createElement("button");

        choice_link.setAttribute("id",choice.id);

        var timeSpent;
        if(!choice.hasOwnProperty('time')){
            timeSpent=0;
        }
        else{
            timeSpent=choice.time;
        }

        if(isSpendTimeValid(timeSpent) || timeSpent==0){
            choice_link.setAttribute("href",choice.url);
            choice_link.onclick = function(){ 
                spendTime(timeSpent);
                if(choice.hasOwnProperty('function')){
                    window[choice.function]();
                } 
            };
        }else{
            choice_link.classList.add("button_disabled");
        }

        choice_button.innerText = choice.text;
        choice_link.appendChild(choice_button);

        choices_container.appendChild(choice_link);
    });

    var chat_container = document.getElementById(id);
    chat_container.appendChild(choices_container);
}

function addLastGain(id){

    var gain_container = document.getElementById(id);

    var gainMap = getLocalStorageMap("user_gain");

    var player_gain_container = document.createElement("div");
    player_gain_container.classList.add("player_gain");

    gainMap.forEach((gain,key)=>{

        if(gain.number !=0 ){
            var player_current_gain = document.createElement("p");

            var text="";
            if(gain.number > 0){
                text += "+";
                player_current_gain.classList.add("positif_gain");
            }
            else if(gain.number < 0){
                player_current_gain.classList.add("negatif_gain");
            }

            text += gain.number+" "+key;
            player_current_gain.innerText = text

            
            player_gain_container.appendChild(player_current_gain);
        }

    });
    gain_container.appendChild(player_gain_container);
}