
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
    const cont = document.getElementById("img_03_drop");
    cura(img3,cont)
});
img3.addEventListener("touchmove",(e)=>{
    console.log("moviendose");
    img3.style.top = (e.targetTouches[0].clientY-offsetY)+"px";
    img3.style.left = (e.targetTouches[0].clientX-offsetX)+"px";

});
function cura (elm1,elm2){
    const dim1=elm1.getBoundingClientRect();
    console.log(dim1)
    const dim2=elm2.getBoundingClientRect();
    console.log(dim2)
    if(dim1.left>dim2.left &&
        dim1.top>dim2.top &&
        dim1.bottom<dim2.bottom &&
        dim1.right<dim2.right){
            console.log("esta dentro")
        }
        else console.log("lugar erroneo")
    };
