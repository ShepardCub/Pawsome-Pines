function add_text_user(text_chat,id){
    var user_chat = document.getElementById(id);
    var text = document.createElement("p");
    text.innerText = text_chat;
    var face = document.createElement("img");
    face.src = localStorage.user_imagePath;
    user_chat.appendChild(face);
    user_chat.appendChild(text);
}


function add_text_other(text_chat,id,img){
    var other_chat = document.getElementById(id);
    var text = document.createElement("p");
    text.innerText = text_chat;
    var face = document.createElement("img");
    face.src = img;
    other_chat.appendChild(face);
    other_chat.appendChild(text);
    other_chat.classList.add("other_chat");
}