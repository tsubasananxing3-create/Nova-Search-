const data=[


{
title:"飛行機 - Wikipedia",

text:"空を飛ぶ乗り物。航空機の歴史や仕組み",

url:"https://ja.wikipedia.org/wiki/%E9%A3%9B%E8%A1%8C%E6%A9%9F"

},


{
title:"Roblox",

text:"ゲームを作ったり遊んだりできるサービス",

url:"https://www.roblox.com/"

},


{
title:"Minecraft",

text:"ブロックで世界を作るゲーム",

url:"https://www.minecraft.net/"

}


];

let savedSites =
JSON.parse(localStorage.getItem("sites"))
||
[];


data.push(...savedSites);




function normalize(text){

return text
.toLowerCase()
.replace(/[ぁ-ん]/g,function(s){

return String.fromCharCode(
s.charCodeAt(0)+0x60
);

});

}






// ホーム画面の検索ボタン

function search(){

let word =
document.getElementById("searchBox").value;


if(word==""){
    return;
}


location.href =
"search.html?q="+word;


}






// My Searchを押したらホームへ

function home(){

location.href="index.html";

}







// 検索ページ表示

function loadSearch(){


let word =
new URLSearchParams(location.search)
.get("q");



let box =
document.getElementById("searchBox");


if(box){

    box.value = word;

}



let result =
document.getElementById("result");



result.innerHTML="";



data.forEach(function(item){


if(

normalize(item.title).includes(normalize(word))

||

normalize(item.text).includes(normalize(word))

){


result.innerHTML +=

`

<h2>

<a href="${item.url}" target="_blank">

${item.title}

</a>

</h2>


<p>

${item.text}

</p>


`;

}


});



if(result.innerHTML==""){

result.innerHTML=
"検索結果がありません";

}


}





// search.htmlの時だけ実行

if(location.pathname.includes("search.html")){

loadSearch();

}
// サイト登録

function registerSite(){


let site={

title:
document.getElementById("siteTitle").value,


text:
document.getElementById("siteText").value,


url:
document.getElementById("siteURL").value


};



let sites =
JSON.parse(localStorage.getItem("sites"))
||
[];



sites.push(site);



localStorage.setItem(
"sites",
JSON.stringify(sites)
);



document.getElementById("message")
.innerHTML=
"✅ 登録しました！";


}
function deleteAllSites(){

localStorage.removeItem("sites");

alert("登録サイトを全部削除しました");

}
