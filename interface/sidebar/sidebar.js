
function setMoneySidebar(){
    document.getElementById("sidebar_money").innerText="Money : "+getLocalStorageString("user_money");
}

function setDateSidebar(){
    let day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var date = new Date(parseInt(getLocalStorageString("date")));
    var daynumber = date.getDate();
    var day = day_names[date.getDay()];
    var month = month_names[date.getMonth()];
    var year = date.getFullYear();

    document.getElementById("sidebar_date").innerText=day+"\n"+month + " "+daynumber+" "+year ;
}

function writeSidebar() {
    document.write('\
    <div class="sidebar">\
        <div class="sidebar_info">\
            <p id="sidebar_date">\
            <p id="sidebar_money">\
            </p>\
        </div>\
    </div>\
    ');

    setDateSidebar();
    setMoneySidebar();
}