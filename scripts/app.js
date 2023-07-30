const text=document.querySelector(".home_head1");
const strtext=text.textContent;

const splitext=strtext.split("");

text.textContent="";
for(let i=0;i<splitext.length;i++){
    if(i===19  || i===32 || i===46 || i===65)
    {text.innerHTML+="<br>";}
    text.innerHTML+="<span>"+splitext[i] + "</span>";
}

let char =0;
let timer=setInterval(onTick,50);

function onTick(){
    const span =text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if(char=== splitext.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer=null;
}


