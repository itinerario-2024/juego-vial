
let algomasserio
let img3 = document.querySelector("#img_03");
img3.addEventListener("touchstart",(e)=>{
    console.log("empieza");
    let touchme = e.targetTouches[0];
    const gay = img3.getBoundingClientRect();
    console.log(gay);

});
img3.addEventListener("touchend",(e)=>{

    img3.style.left = "150px";
});
img3.addEventListener("touchmove",(e)=>{
    console.log("moviendose");
    console.log (e.targetTouches);
    console.log("termina");
});
