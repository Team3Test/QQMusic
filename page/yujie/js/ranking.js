var data = {
    list: [
        {
            id: 1,
            name: "Last Night",
            singer: "刘耀文",
            change: 252,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 2,
            name: "离别开出花",
            singer: "就是南方凯",
            change: 249,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 3,
            name: "五月天",
            singer: "S.H.E",
            change: 230,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 4,
            name: "做自己的光，不需要太亮",
            singer: "善宇",
            change: 220,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 5,
            name: "最炫民族风",
            singer: "凤凰传奇",
            change: 219,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 6,
            name: "根本你不懂得爱我",
            singer: "音毫",
            change: 203,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 7,
            name: "晴天",
            singer: "周杰伦",
            change: 198,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 8,
            name: "下雨的时候更想你",
            singer: "杨婷",
            change: 170,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 9,
            name: "奢香夫人",
            singer: "凤凰传奇",
            change: 160,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 10,
            name: "有形的翅膀",
            singer: "张韶涵",
            change: 154,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 11,
            name: "小美满",
            singer: "周琛",
            change: 151,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 12,
            name: "稻香",
            singer: "周杰伦",
            change: 138,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 13,
            name: "反方向的钟",
            singer: "周杰伦",
            change: 123,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 14,
            name: "一路向北",
            singer: "周杰伦",
            change: 107,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 15,
            name: "兰亭序",
            singer: "周杰伦",
            change: 98,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 16,
            name: "青花瓷",
            singer: "周杰伦",
            change: 96,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 17,
            name: "等爱的玫瑰",
            singer: "凤凰传奇",
            change: 89,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 18,
            name: "花海",
            singer: "周杰伦",
            change: 86,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 19,
            name: "我想念",
            singer: "汪苏泷",
            change: 84,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 20,
            name: "指纹",
            singer: "杜宣达",
            change: 81,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 21,
            name: "夜曲",
            singer: "周杰伦",
            change: 79,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 22,
            name: "告白气球",
            singer: "周杰伦",
            change: 78,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 23,
            name: "山河图",
            singer: "凤凰传奇",
            change: 77,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 24,
            name: "地美地",
            singer: "郭顶",
            change: 64,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 25,
            name: "身骑白马",
            singer: "徐佳莹",
            change: 37,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 26,
            name: "特别的人",
            singer: "方大同",
            change: 34,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 27,
            name: "明明就",
            singer: "周杰伦",
            change: 27,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 28,
            name: "慢冷",
            singer: "梁静茹",
            change: 24,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 29,
            name: "枫",
            singer: "周杰伦",
            change: 20,
            hrefUrl: "../yanrong/2.html",
        },
        {
            id: 30,
            name: "你是我的风景",
            singer: "何洁",
            change: 18,
            hrefUrl: "../yanrong/2.html",
        },
    ],
};

var musicList = document.querySelector(".musicList");
var counts = document.querySelector(".count span");
var time = document.querySelector(".time span");
var growDay = document.querySelector(".growDay span");
var date = new Date();
var startDay = new Date("2024/1/1");

growDay.innerHTML = Math.ceil((new Date().getTime() - startDay) / 1000 / 60 / 60 / 24);
time.innerHTML = date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth()) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
counts.innerHTML = data.list.length;

for (k = 0; k < data.list.length; k++) {
    musicList.innerHTML += `
        <a href="${data.list[k].hrefUrl}">
            <li class="item">
                <div class="number">
                    <p class="id">${data.list[k].id}</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg>
                        <span class="grow">${data.list[k].change}%</span>
                    </p>
                </div>
                <div class="info">
                    <p>${data.list[k].name}</p>
                    <p>${data.list[k].singer}</p>
                </div>
                <div class="download">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                    </svg>
                </div>
            </li>
        </a>
    `;
}

var ids = document.querySelectorAll(".id");
for (i = 0; i < 3; i++) {
    ids[i].style.color = "#f56273";
}
