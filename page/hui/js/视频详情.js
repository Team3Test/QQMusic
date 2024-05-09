const video=document.querySelector('video')
const image=document.querySelector('.image')
let bol=true
const pl=()=>{ 
    if(bol){
    image.setAttribute('src','./image/播放.png')
    video.play();
}else{
    image.setAttribute('src','./image/暂停.png')
    video.pause();
}
bol=!bol 
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