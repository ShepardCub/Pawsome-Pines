var sidenav,openBtn,closeBtn,phoneSpan,closeBtnPhone,phone,contact_list;
var infoSpan,closeBtnInfo,info;
var inventorySpan,closeBtnInventory,inventory;
var saveSpan,closeBtnSave,save;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

function showInfo() {
  info.style.display = "block";
}

function showcontact_list(){
  contact_list.style.display= "block";
  contact_phone_menu.style.display = "none";

  var phone = getLocalStorageMap("phone");
  var contact = new Map(JSON.parse(phone.get('contact')));

  if(contact.size == 0){
    contact_list.innerText = "No contact listed";
  }
}

function hideInfo(e) {
  if(e.target==info || e.target==closeBtnInfo){
    info.style.display = "none";
    closeNav();
  }
}

function showInventory() {
  inventory.style.display = "block";
}

function showSave() {
  save.style.display = "block";
}

function hideSave(e) {
  if(e.target==save || e.target==closeBtnSave){
    save.style.display = "none";
    closeNav();
  }
}

function addElementsSave(){
  
  var save_list = document.getElementById("save_list");
  
  for (let index = 0; index < 8; index++) {
    
    var elementSave = setElementSave(index);
    save_list.appendChild(elementSave);
  }
}

function setElementSave(index){
  var elementSave = document.createElement("div");
    
  elementSave.classList.add("save_element");
  elementSave.setAttribute("id","save_"+index)

  var saveText = document.createElement("p");
  saveText.classList.add("save_text")
  saveText.innerText = "Save "+index;

  elementSave.appendChild(saveText);

  var saveLabel = document.createElement("p");
  saveLabel.classList.add("save_label")
  if(getSave(index) != null){
    
    var buttonLoad = document.createElement("button");
    buttonLoad.innerText = "Load";
    buttonLoad.classList.add("load_button");
    buttonLoad.onclick =  function(){
      loadSaveElement(index);
    };
  
    elementSave.appendChild(buttonLoad);

    saveLabel.innerText = "filled"
  }
  else{

    var buttonSave = document.createElement("button");
    buttonSave.innerText = "Save";
    buttonSave.classList.add("save_button");
    buttonSave.onclick =  function(){
      saveElement(index);
    };
  
    elementSave.appendChild(buttonSave);

    saveLabel.innerText = "---- empty ----"
  }

  elementSave.appendChild(saveLabel);

  var buttonDelete = document.createElement("button");
  buttonDelete.innerText = "Delete";
  buttonDelete.classList.add("delete_button");
  buttonDelete.addEventListener("click", function(){
    console.log("click")
    deleteSaveElement(index)
  })
  elementSave.appendChild(buttonDelete);

  return elementSave;
}

function loadSaveElement(number){
  var save = getSave(number);
  setCurrentSave(save);

  var page = getLocalStorageString("current_place");
  var racine = getLocalStorageString("racine_path");

  var paths = page.split("_");

  var link = racine +"/pages" ;
  paths.forEach(element => {
    link+="/"+element;
  });

  link+=".html";
  window.location.href = link;

}

function saveElement(number){
  setSave(number,localStorage.current_save_pawsome);
  refreshSaveElement(number);
}

function deleteSaveElement(number){
  emptySave(number);
  refreshSaveElement(number);
}

function refreshSaveElement(index){
  var divElement = setElementSave(index);
  document.getElementById("save_list").replaceChild(divElement,document.getElementById("save_"+index) );

}

function addElementsInventory(){
  var items = getLocalStorageMap("user_items");

  elementInventory(items,'clothes')
  elementInventory(items,'sextoys')
  elementInventory(items,'specials')

}

function elementInventory(items,name){
  var element = new Map(JSON.parse(items.get(name)));
  
  var divClothes = document.createElement("div");
  var divClothes_title = document.createElement("h1");
 
  divClothes_title.innerText = name[0].toUpperCase() + name.slice(1);
  divClothes.classList.add("inventory_"+name);
  divClothes.classList.add("inventory_element");

  divClothes.appendChild(divClothes_title);

  var enumeration = document.createElement("p");
  if(element.size == 0){
    enumeration.innerText = "No "+name+" in inventory";
  }
  divClothes.appendChild(enumeration);

  document.getElementById('inventory_list').appendChild(divClothes);
}


function hideInventory(e) {
  if(e.target==inventory || e.target==closeBtnInventory){
    inventory.style.display = "none";
    closeNav();
  }
}

function fillInfo(){
  
  var skills = getLocalStorageMap("user_skills");

  var face = getLocalStorageString("user_imagePath");
  addFaceUserSkill(face);
  addbackgroundInfo();
  skills.forEach(addSkill);
}

function addbackgroundInfo(){
  var user_background = getLocalStorageString("user_background");
  var background = "Background : "+user_background.replace("background_","");
  addInfo(background);
}

function addFaceUserSkill(face){
  var div = document.createElement("div");
  var img = document.createElement("img");
  img.src = face;
  div.classList.add("skill_user_img");
  div.appendChild(img);

  var skill_list = document.getElementById("skill_list");
  skill_list.appendChild(div);
}

function addSkill(value, key, map){
  var text_skill = key+" : "+value;
  addInfo(text_skill);
}

function addInfo(info){
  var div = document.createElement("div");
  div.innerText = info;
  var skill_list = document.getElementById("skill_list");
  skill_list.appendChild(div);
}

function showPhone(){
  phone.style.display = "block";
  contact_phone_menu.style.display = "block";
}

function hidePhone(e){
  if(e.target==phone || e.target==closeBtnPhone){
    phone.style.display = "none";
    contact_list.style.display= "none";
    closeNav();
  }
}

function writeBurgerMenu() {
  var racine_path = getLocalStorageString("racine_path");

  document.write('\
    <div class="menu_parent">\
      <div id="mySidenav" class="sidenav">\
        <a id="closeBtn" href="#" class="close">x</a>\
        <ul>\
            <li><a href="#" id="phoneSpan">Phone</a></li>\
            <li><a href="#" id="infoSpan">Info</a></li>\
            <li><a href="#" id="inventorySpan">Inventory</a></li>\
            <li><a href="#" id="saveSpan">Save</a></li>\
            <li><a href="'+racine_path+'/pages/character_creation/creation_background.html">Restart</a></li>\
          </ul>\
      </div>\
      \
      <a href="#" id="openBtn">\
        <span class="burger-icon">\
            <span></span>\
            <span></span>\
            <span></span>\
        </span>\
      </a>\
      \
      <div id="info" class="burger_menu_item">\
        <div id="skill_list" class="menu_list">\
          <a id="closeBtnInfo" href="#" class="close">x</a>\
        </div>\
      </div>\
      \
      <div id="phone" class="burger_menu_item">\
        <div id="phone_list" class="phone_list">\
          <a id="closeBtnPhone" href="#" class="close">x</a>\
          <div class="phone_container">\
            <img src="'+racine_path+'/interface/burger_menu/phone/phone.png" class="phone_img">\
            <div class="phone_content">\
              <div class="contact_phone">\
                \
                <div id="contact_phone_menu" class="contact_phone_menu">\
                  <img src="'+racine_path+'/interface/burger_menu/phone/contact.png">\
                  <p>Contact</p>\
                </div>\
                \
                <div id="contact_list" class="contact_list">\
                </div>\
                \
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
      \
      <div id="save" class="burger_menu_item">\
        <div id="save_list" class="menu_list">\
          <a id="closeBtnSave" href="#" class="close">x</a>\
        </div>\
      </div>\
      \
      <div id="inventory" class="burger_menu_item">\
        <div id="inventory_list" class="menu_list">\
          <a id="closeBtnInventory" href="#" class="close">x</a>\
        </div>\
      </div>\
      \
    </div>\
  ');


  sidenav = document.getElementById("mySidenav");
  openBtn = document.getElementById("openBtn");
  closeBtn = document.getElementById("closeBtn");

  closeBtnPhone = document.getElementById("closeBtnPhone");
  phoneSpan = document.getElementById("phoneSpan");
  phone = document.getElementById("phone");

  contact_phone_menu = document.getElementById("contact_phone_menu");
  contact_list = document.getElementById("contact_list");

  closeBtnInfo = document.getElementById("closeBtnInfo");
  infoSpan = document.getElementById("infoSpan");
  info = document.getElementById("info");

  closeBtnInventory = document.getElementById("closeBtnInventory");
  inventorySpan = document.getElementById("inventorySpan");
  inventory = document.getElementById("inventory");

  closeBtnSave = document.getElementById("closeBtnSave");
  saveSpan = document.getElementById("saveSpan");
  save = document.getElementById("save");

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;

  phoneSpan.onclick = showPhone;
  closeBtnPhone.onclick = hidePhone;
  phone.onclick = hidePhone;

  contact_phone_menu.onclick = showcontact_list;

  infoSpan.onclick = showInfo;
  closeBtnInfo.onclick = hideInfo;
  info.onclick = hideInfo;

  inventorySpan.onclick = showInventory;
  closeBtnInventory.onclick = hideInventory;
  inventory.onclick = hideInventory;

  saveSpan.onclick = showSave;
  closeBtnSave.onclick = hideSave;
  save.onclick = hideSave;

  fillInfo();
  addElementsInventory();
  addElementsSave();

}
