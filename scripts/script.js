
window.onscroll = function() {myFunction()};

var header = document.getElementById("myheader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky1");
  } else {
    header.classList.remove("sticky1");
  }
}


let stickysections = [...document.querySelectorAll('.sticky')];
function animate(){
    for(let i=0;i<stickysections.length;i++){
        let {top} = stickysections[i].parentElement.getBoundingClientRect();
        let transtop=top > 0 ? 0 : top*-1;
        if(transtop>=1000) transtop = 1000;
        
        if(top<=0 && i!==stickysections.length -1){
             stickysections[i].style.filter=`blur(${0 + (transtop * .05)}px)`;
             stickysections[i].style.transform=`scale3d(${1 - (transtop*0.001)},${1-(transtop*0.001)}, 1)`;
             stickysections[i].style.opacity = 1 - (transtop*0.0015)  
        }
    }
    requestAnimationFrame(animate)
}

animate()

function scrollWin() {

  window.scrollTo(0,1400);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior:"smooth"
    });
  });
});


