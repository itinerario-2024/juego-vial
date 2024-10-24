
let offsetX;
let offsetY;

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

function touchend(e){
    const cont = document.getElementById("img_03_drop");
    isInside(img3,cont)
}

function touchmove(e){
    console.log("moviendose");

    img3.style.top = (e.targetTouches[0].clientY-offsetY)+"px";
    img3.style.left = (e.targetTouches[0].clientX-offsetX)+"px";

}
function isInside (contenido,contenedor){
    const dim1=contenido.getBoundingClientRect();
    console.log(dim1)
    const dim2=contenedor.getBoundingClientRect();
    console.log(dim2)
    if(
        dim1.left>dim2.left &&
        dim1.top>dim2.top &&
        dim1.bottom<dim2.bottom &&
        dim1.right<dim2.right
   ){
        alert("bien");
        contenido.removeEventListener("touchstar",touchstart);
        contenido.removeEventListener("touchmove",touchmove);
        contenido.removeEventListener("touchend",touchend);

    }
    else alert("lugar incorrecto")
};
let img3 = document.querySelector("#img_03");
 img3.addEventListener("touchstart",touchstart);
img3.addEventListener("touchstart",touchstart);
img3.addEventListener("touchmove",touchmove);

let img2 = document.querySelector("#img_02");
 img2.addEventListener("touchstart",touchstart2);
img2.addEventListener("touchstart",touchstart2);
img2.addEventListener("touchmove",touchmove2);

let img4 = document.querySelector("#img_04");
 img4.addEventListener("touchstart",touchstart3);
img4.addEventListener("touchstart",touchstart3);
img4.addEventListener("touchmove",touchmove3);

let offsetX2;
let offsetY2;

function touchstart2(e){
    console.log("empieza");
    let touch = e.targetTouches[0];
    const dim = img2.getBoundingClientRect();
    console.log(dim);
    offsetX2=(touch.clientX - dim.left);
    console.log(offsetX)
    offsetY2=(touch.clientY - dim.top);
    console.log(offsetY)

}

function touchend2(e){
    const cont = document.getElementById("img_02_drop");
    isInside(img2,cont)
}

function touchmove2(e){
    console.log("moviendose");

    img2.style.top = (e.targetTouches[0].clientY-offsetY)+"px";
    img2.style.left = (e.targetTouches[0].clientX-offsetX)+"px";

}
function isInside2 (contenido,contenedor){
    const dim1=contenido.getBoundingClientRect();
    console.log(dim1)
    const dim2=contenedor.getBoundingClientRect();
    console.log(dim2)
    if(
        dim1.left>dim2.left &&
        dim1.top>dim2.top &&
        dim1.bottom<dim2.bottom &&
        dim1.right<dim2.right
   ){
        alert("bien");
        contenido.removeEventListener("touchstar",touchstart2);
        contenido.removeEventListener("touchmove",touchmove2);
        contenido.removeEventListener("touchend",touchend2);

    }
    else alert("lugar incorrecto")
};

let offsetX3;
let offsetY3;

function touchstart3(e){
    console.log("empieza");
    let touch = e.targetTouches[0];
    const dim = img4.getBoundingClientRect();
    console.log(dim);
    offsetX3=(touch.clientX - dim.left);
    console.log(offsetX)
    offsetY3=(touch.clientY - dim.top);
    console.log(offsetY)

}

function touchend3(e){
    const cont = document.getElementById("img_04_drop");
    isInside(img4,cont)
}

function touchmove3(e){
    console.log("moviendose");

    img4.style.top = (e.targetTouches[0].clientY-offsetY)+"px";
    img4.style.left = (e.targetTouches[0].clientX-offsetX)+"px";

}
function isInside3 (contenido,contenedor){
    const dim1=contenido.getBoundingClientRect();
    console.log(dim1)
    const dim2=contenedor.getBoundingClientRect();
    console.log(dim2)
    if(
        dim1.left>dim2.left &&
        dim1.top>dim2.top &&
        dim1.bottom<dim2.bottom &&
        dim1.right<dim2.right
   ){
        alert("bien");
        contenido.removeEventListener("touchstar",touchstart3);
        contenido.removeEventListener("touchmove",touchmove3);
        contenido.removeEventListener("touchend",touchend3);

    }
    else alert("lugar incorrecto")
};
