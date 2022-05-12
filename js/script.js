function dashboard(){
    console.log("dashboard");
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("events").style.display = "none";
    document.getElementById("coupons").style.display = "none";
}
function events(){
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("events").style.display = "block";
    document.getElementById("coupons").style.display = "none";
}
function coupons(){
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("events").style.display = "none";
    document.getElementById("coupons").style.display = "block";
}

function openNav() {
document.getElementById("mySidenav").style.width = "300px";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}