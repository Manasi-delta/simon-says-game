let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["red","green","yellow","purple"];

document.addEventListener("keypress",function(){
    if (started==false) {
        console.log("Game is started");
        started=true;
        levelup();
    }
})
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
    
}
function btnpress(){
    console.log("btn was pressed");
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score is <b>${level}<b>.<br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";  
        },150);
        reset();
    }
}
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}
