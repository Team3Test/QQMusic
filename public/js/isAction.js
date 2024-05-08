var url = window.location.pathname;
var footerNav = document.getElementById("footerNav");

var actionPage = url.split("/")[url.split("/").length - 1];
var action = actionPage.split(".")[0];
console.log(action);

if (action !== "yujie") {
    footerNav.style.display = "none";
}
