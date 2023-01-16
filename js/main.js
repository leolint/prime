//OPEN MOBILE MENU 

function openMobileMenu() {
    var element = document.getElementById("header")
    element.classList.toggle("openMobileMenu")
}


//ADRESS DROPDOWN MENU       
        
function openAdressMenu() {
    var element = document.getElementById("adress");
    element.classList.add("openAdress");
}

function closeAdressMenu() {
    var element = document.getElementById("adress");
    element.classList.remove("openAdress");
}

//KITCHEN DROPDOWN MENU    

function openKitchenMenu() {
    var element = document.getElementById("kitchen");
    element.classList.add("open");
}

function closeKitchenMenu() {
    var element = document.getElementById("kitchen");
    element.classList.remove("open");
}

//HOOKAS DROPDOWN MENU    

function openHookasMenu() {
    var element = document.getElementById("hookas");
    element.classList.add("openHookas");
}

function closeHookasMenu() {
    var element = document.getElementById("hookas");
    element.classList.remove("openHookas");
}

//BAR DROPDOWN MENU   

function openBarMenu() {
    var element = document.getElementById("bar");
    element.classList.add("open");
}

function closeBarMenu() {
    var element = document.getElementById("bar");
    element.classList.remove("open");
}


//CHANGE PATH 

function changeFirstImg() {
    document.getElementById("changingImg").src = "/img/sliderLoungeOne.jpeg";
}

function changeSecondImg() {
    document.getElementById("changingImg").src = "/img/sliderLoungeTwo.jpeg";
}

function changeThirdImg() {
    document.getElementById("changingImg").src = "/img/oneMoreSofa.jpeg";
}

function changeForthImg() {
    document.getElementById("changingImg").src = "/img/sliderLoungeFour.jpeg";
}


//CHANGE PATH MENU

function changeFirstImgMenuMobile() {
    document.getElementById("menuOne").src = "/img/menu.jpg";
}
function changeSecondImgMenuMobile() {
    document.getElementById("menuOne").src = "/img/menuTwo.jpg";
}
//CHANGE PATH CINEMA ROOM 

function changeсCinemaOne() {
    document.getElementById("cinemaChangePath").src = "/img/cinemaOne.jpeg";
    document.getElementById("cinemaChangePath").style.display = 'block';
    document.getElementById("cinemaRoomVideo").style.display = 'none';
}

function changeсCinemaTwo() {
    document.getElementById("cinemaChangePath").src = "/img/cinemaTwo.jpeg";
    document.getElementById("cinemaChangePath").style.display = 'block';
    document.getElementById("cinemaRoomVideo").style.display = 'none';
}

function changeсCinemaThree() {
    document.getElementById("cinemaChangePath").style.display = 'none';
    document.getElementById("cinemaRoomVideo").style.display = 'block';
}


//CHANGE LOUNGE PHOTOS IN TARRIFS 

function changeLoungePhotoOne () {
    document.getElementById("xboxPhoto").src = "/img/xbox.jpeg";
}

function changeLoungePhotoTwo () {
    document.getElementById("xboxPhoto").src = "/img/xboxTwo.jpeg";
}

function changeLoungePhotoThree () {
    document.getElementById("sonyPhoto").src = "/img/sonyPlayStationFour.jpeg";
}

function changeLoungePhotoFour () {
    document.getElementById("sonyPhoto").src = "/img/ps4pro.jpeg";
}

function changeLoungePhotoFive () {
    document.getElementById("vipRoom").src = "/img/vipLounge.jpg";
}

function changeLoungePhotoSix () {
    document.getElementById("vipRoom").src = "/img/loungeVipSecondImg.jpg";
}


//CHANGE COMPUTER PHOTOS IN TARRIFS 

function changeComputersPhotoOne () {
    document.getElementById("cyberRoom").src = "/img/cyberRoom.jpeg";
}

function changeComputersPhotoTwo () {
    document.getElementById("cyberRoom").src = "/img/cyberRoomTwo.jpeg";
}

function changeComputersPhotoThree () {
    document.getElementById("pcVip").src = "/img/pcVipOne.jpeg";
}

function changeComputersPhotoFour () {
    document.getElementById("pcVip").src = "/img/vipPcTwo.jpeg";
}

function changeComputersPhotoFive () {
    document.getElementById("vipPlus").src = "/img/vipPlus.jpeg";
}

function changeComputersPhotoSix () {
    document.getElementById("vipPlus").src = "/img/vipPlusTwo.jpeg";
}
