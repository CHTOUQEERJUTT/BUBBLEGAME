let newscore=0;
let newtime = "60";
let hitrn = "";
function decreasingtime(){
    setInterval(function(){
        if(newtime>0){
            newtime--;
            document.querySelector("#timeval").textContent=newtime;
        }else{
            clearInterval(newtime);
            document.querySelector("#pannelbottom").innerHTML = "<h1 id = gameover>GAMEOVER</h1>"
        }
    
        
    
    },1000)
}
function createbubbles(){
    let clutter ="";
for(let i=1;i<=160;i++){
    let rn =Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
    document.querySelector("#pannelbottom").innerHTML = clutter;


}
}

function getnewhit(){
    hitrn = Math.floor(Math.random()*10)
document.querySelector("#hitval").innerHTML=hitrn;
}
function increasescore(){
    
        
        document.querySelector("#scoreval").textContent=newscore;
        newscore+=10;

}
document.querySelector("#pannelbottom")
.addEventListener("click",function(details){
    let clickednumber = Number(details.target.textContent);
    if(clickednumber===hitrn){
        increasescore();
        getnewhit();
        createbubbles();
    }else{
       
        
    }
})



createbubbles();
getnewhit();
decreasingtime();
increasescore();