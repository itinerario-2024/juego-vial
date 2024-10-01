
let offsetX;
let offsetY;
let img3 = document.querySelector("#img_03");

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

function touchend(e){
    const cont = document.getElementById("img_03_drop");
    isInside(img3,cont)
}
img3.addEventListener("touchend",touchend);

function touchmove(e){
    console.log("moviendose");

    img3.style.top = (e.targetTouches[0].clientY-offsetY)+"px";
    img3.style.left = (e.targetTouches[0].clientX-offsetX)+"px";

}
img3.addEventListener("touchmove",touchmove);
function isInside (contenido,contenedor){
    const dim1=contenido.getBoundingClientRect();
    console.log(dim1)
    const dim2=contenedor.getBoundingClientRect();
    console.log(dim2)
    if(dim1.left>dim2.left &&
        dim1.top>dim2.top &&
        dim1.bottom<dim2.bottom &&
        dim1.right<dim2.right){
            alert("bien");
            contenido.removeEventListener("touchstar",touchstart);
            contenido.removeEventListener("touchmove",touchmove);
            contenido.removeEventListener("touchend",touchend);

        }
        else alert("lugar incorrecto")
    };
