var footerTab = document.querySelectorAll(".footerTab");

for (let i = 0; i < footerTab.length; i++) {
    footerTab[i].addEventListener("click", function () {
        var fillNone = this.children[0];
        var fillAll = this.children[1];
        hiddenOthers();
        fillNone.style.display = "none";
        fillAll.style.display = "block";
        jump(this.dataset.action);
    });
}

function hiddenOthers() {
    var fillNones = document.querySelectorAll("#fillNone");
    var fillAlls = document.querySelectorAll("#fillAll");
    for (k = 0; k < fillAlls.length; k++) {
        fillAlls[k].style.display = "none";
        fillNones[k].style.display = "block";
    }
}

function jump(action) {
    const urlName = window.location.pathname.split("/").slice(-1)[0].split(".")[0];
    switch (action) {
        case "index":
            if (action !== urlName) {
                window.location.href = "../../index.html";
            }
            break;
        case "radar":
            if (action !== urlName) {
                window.location.href = "../../";
            }
            break;
        case "community":
            if (action !== urlName) {
                window.location.href = "page/hui/community.html";
            }
            break;
        case "user":
            if (action !== urlName) {
                window.location.href = "page/yujie/user.html";
            }
            break;
    }
}
