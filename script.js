
let offsetX;
let offsetY;
let img3 = document.querySelector("#img_03");

img3.addEventListener("touchstart",(e)=>{
    console.log("empieza");
    let touch = e.targetTouches[0];
    const dim = img3.getBoundingClientRect();
    console.log(dim);
    offsetX=(touch.clientX - dim.left);
    console.log(offsetX)
    offsetY=(touch.clientY - dim.top);
    console.log(offsetY)

});
img3.addEventListener("touchend",(e)=>{
});
img3.addEventListener("touchmove",(e)=>{
    console.log("moviendose");
    console.log (e.targetTouches);
    console.log("termina");
    img3.style.top = (e.targetTouches[0].clientY-offsetY)+"px";
    img3.style.left = (e.targetTouches[0].clientX-offsetX)+"px";

    console.log(e.targetTouches[0].clientY);
    console.log((e.targetTouches[0].clientX-offsetX)+"px");
    console.log(e.targetTouches[0].clientX);
    console.log(offsetX);
    console.log(e.targetTouches[0].clientX)

});
