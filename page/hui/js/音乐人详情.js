const tarch=()=>{
    console.log(event.target.nextElementSibling.innerHTML);
    event.target.nextElementSibling.innerHTML++
}


var li=document.querySelectorAll('.title0 li')
console.log(li);
var ul=document.querySelectorAll('.item0')
console.log(ul);
function run(){
    for(var i=0;i<li.length;i++){
        li[i].setAttribute('class','title')
        ul[i].style.display='none'

    }
    event.target.setAttribute('class','')
    ul[event.target.dataset.in].style.display='block'
}



    // 移动端自适应代码
    (function (doc, win) {
        var docEL = document.documentElement,
            resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
            recalc = function () {
            // 获取当前设备的宽度
            var clientWidth = docEL.clientWidth;
            if (!clientWidth) return;
            docEL.style.fontSize = (clientWidth / 750) * 40 + "px";
            };
        if (!doc.addEventListener) return;
        //添加窗口变动监听
        win.addEventListener(resizeEvt, recalc, false);
        //dom加载的时候执行一次
        doc.addEventListener("DOMContentLoaded", recalc, false);
    })(document, window);