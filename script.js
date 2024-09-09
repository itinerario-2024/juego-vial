
let algomasserio;
let img3 = document.querySelector("#img_03");
img3.addEventListener("touchstart",(e)=>{
    console.log("empieza");
    let touchme = e.targetTouches[0];
    const gay = img3.getBoundingClientRect();
    console.log(gay);
    algomasserio=touchme.clientX-gay.left;
    console.log (algomasserio)

});
img3.addEventListener("touchend",(e)=>{
    const cont = document.getElementById("img_03_drop");
    cura(img3,cont)
});
img3.addEventListener("touchmove",(e)=>{
    console.log("moviendose");
    console.log (e.targetTouches);
    console.log("termina");
    img3.style.left = (e.targetTouches[0].clientX)+"px";
    img3.style.top = e.targetTouches[0].clientY+"px";

    console.log(e.targetTouches[0].clientY);
    console.log (algomasserio)
    console.log (e.targetTouches[0].clientX)
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
        else console.log("no la sintio")
};
