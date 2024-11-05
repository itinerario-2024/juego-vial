
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
    // const cont = document.getElementById("img_02_drop");
    isInside(img3,cont)
}

function touchmove(e){
    console.log("moviendose");

    img3.style.top = (e.targetTouches[0].clientY-offsetY)+"px";
    img3.style.left = (e.targetTouches[0].clientX-offsetX)+"px";

}
function isInside (contenido,contenedor){
    const dim1=contenido.getBoundingClientRect();
    console.log("dim1",dim1)
    const dim2=contenedor.getBoundingClientRect();
    console.log("dim2",dim2)
    if(
        dim1.left>dim2.left &&
        dim1.top>dim2.top &&
        dim1.bottom<dim2.bottom &&
        dim1.right<dim2.right){
            mensaje("Bien", true);
            contenido.removeEventListener("touchstar",touchstart);
            contenido.removeEventListener("touchmove",touchmove);
            contenido.removeEventListener("touchend",touchend);


        }
        else mensaje("Lugar incorrecto", false);
    };
    let img3 = document.querySelector("#img_03");
 img3.addEventListener("touchstart",touchstart);
 img3.addEventListener("touchmove",touchmove);
img3.addEventListener("touchend",touchend);

let img2 = document.querySelector("#img_02");
 img2.addEventListener("touchstart",touchstart2);
 img2.addEventListener("touchmove",touchmove2);
img2.addEventListener("touchend",touchend2);

let img4 = document.querySelector("#img_04");
 img4.addEventListener("touchstart",touchstart3);
 img4.addEventListener("touchmove",touchmove3);
img4.addEventListener("touchend",touchend3);

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

    img2.style.top = (e.targetTouches[0].clientY-offsetY2)+"px";
    img2.style.left = (e.targetTouches[0].clientX-offsetX2)+"px";

}

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

    img4.style.top = (e.targetTouches[0].clientY-offsetY3)+"px";
    img4.style.left = (e.targetTouches[0].clientX-offsetX3)+"px";

}
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

