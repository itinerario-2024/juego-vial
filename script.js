
let offsetX;
let offsetY;
let img3 = document.querySelector("#img_03");
let img2 = document.querySelector("#img_02");


function touchstart(e){
    console.log("empieza");
    let touch = e.targetTouches[0];
    const dim = img3.getBoundingClientRect();
    console.log(dim);
    offsetX=(touch.clientX - dim.left);
    console.log(offsetX)
    offsetY=(touch.clientY - dim.top);
    console.log(offsetY)

}
img3.addEventListener("touchstart",touchstart);
img2.addEventListener("touchstart",touchstart);
function touchend(e){
    const cont = document.getElementById("img_03_drop");
    // const cont = document.getElementById("img_02_drop");
    isInside(img3,cont)
    isInside(img2,cont)}

img3.addEventListener("touchend",touchend);
img2.addEventListener("touchend",touchend);
function touchmove(e){
    console.log("moviendose");

    e.targetTouches[0].style.top = (e.targetTouches[0].clientY-offsetY)+"px";
    e.targetTouches[0].style.left = (e.targetTouches[0].clientX-offsetX)+"px";

}
img3.addEventListener("touchmove",touchmove);
img2.addEventListener("touchmove",touchmove);
function isInside (contenido,contenedor){
    const dim1=contenido.getBoundingClientRect();
    console.log(dim1)
    const dim2=contenedor.getBoundingClientRect();
    console.log(dim2)
    if(dim1.left>dim2.left &&
        dim1.top>dim2.top &&
        dim1.bottom<dim2.bottom &&
        dim1.right<dim2.right){
            mensaje("bien", true);
            contenido.removeEventListener("touchstar",touchstart);
            contenido.removeEventListener("touchmove",touchmove);
            contenido.removeEventListener("touchend",touchend);

        }
        else mensaje("lugar incorrecto", false);
    };
function mensaje(MSJ, bien){
    const p=document.querySelector(".cartel__p")
    p.innerText=MSJ;
    if(bien){
        p.classList.add("cartel-bien");
        p.classList.remove("cartel-mal");
    }else{
        p.classList.add("cartel-mal");
        p.classList.remove("cartel-bien");
    }
    setTimeout(quitarCartel,3*1000);
}
function quitarCartel(){
    const p=document.querySelector(".cartel__p")
    p.innerText="";
    p.classList.remove("cartel-bien");
    p.classList.remove("cartel-mal");
}
    mensaje("correcto", true);

