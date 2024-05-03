var footerTab = document.querySelectorAll(".footerTab");
footerTab[0].children[0].style.display = "none";
footerTab[0].children[1].style.display = "block";

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
    switch (action) {
        case "home":
            console.log(action);
            // window.location.href = "../page/yujie/yujie.html";
            break;
        case "radar":
            console.log(action);
            // window.location.href = "ranking.html";
            break;
        case "community":
            console.log(action);
            break;
        case "user":
            console.log(action);
            break;
    }
}
