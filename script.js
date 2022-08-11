const changeDate = () => {
    var time = new Date();
    var d = time.getDate();
    var m = time.getMonth() + 1;
    var y = time.getFullYear();
    var w = time.getDay();
    var h = time.getHours();
    var i = time.getMinutes();
    var s = time.getSeconds();

    if (d < 10) d = '0' + d;
    if (m < 10) m = '0' + m;
    if (h < 10) h = '0' + h;
    if (i < 10) i = '0' + i;
    if (s < 10) s = '0' + s;

    var weekdays = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

    var text = weekdays[w] + ", " + d + "." + m + "." + y + "<br>" + h + ":" + i + ":" + s;

    document.querySelector("#header-date div").innerHTML = text;
}

const closePopups = () => {
    var popups = document.querySelectorAll(".popup");
    var popup_containers = document.querySelectorAll(".popup-container");

    for (let i = 0; i < popups.length; i++) {
        popups[i].style.transform = "scale(0)";
    }

    setTimeout(() => {
        for (let i = 0; i < popup_containers.length; i++) {
            popup_containers[i].style.display = "none";
        }
    }, 200);
    document.body.style.overflowY = "auto";

}

const openPopup = popup => {    
    var popup_containers = document.querySelectorAll(".popup-container");
    for (let i = 0; i < popup_containers.length; i++) {
        popup_containers[i].style.display = "block";
    }
    setTimeout(() => {
        document.querySelector("#" + popup).style.transform = "scale(1)";
    }, 200);
    document.body.style.overflowY = "hidden";
}


document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#_container").style.display = "block";
    setTimeout(() => {

        document.querySelector("#load-animation").style.display = "none";

    }, 1000);

    changeDate();
    setInterval(() => {
        changeDate();
    }, 1000);

    var closeButtons = document.querySelectorAll(".popup .popup-header span");

    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", () => {
            closePopups();
        })
    }

});
