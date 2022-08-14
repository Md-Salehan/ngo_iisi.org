let triggerPopup = document.querySelectorAll(".trigger-popup")
let cancel = document.querySelector(".cancel")
let popUp = document.querySelector(".popUp")
let popUP_wrapper = document.querySelector(".popUP-wrapper")
let popUp_bg = document.querySelector(".popUp-bg")
let c0 = document.querySelector(".content0")
let c1 = document.querySelector(".content1")
let c2 = document.querySelector(".content2")
let c3 = document.querySelector(".content3")

console.log(triggerPopup);

//seting eventListener team div
for(let i=0; i < triggerPopup.length; i++){
    console.log(i);
    triggerPopup[i].addEventListener("click", ()=>{
        openPopUp(i);
    })
    console.log(i);
}


cancel.addEventListener("click", closePopUp);
function closePopUp(){
    console.log("okk")
    popUp_bg.style.display = "none"
    popUP_wrapper.style.display = "none"
    popUp.style.display = "none"

    popUp_bg.style.width = "0"
    popUP_wrapper.style.width = "0"
    popUp.style.width = "0"

    popUp_bg.style.height = "0"
    popUP_wrapper.style.height = "0"
    popUp.style.height = "0"

    c0.style.display ="none"
    c1.style.display ="none"
    c2.style.display ="none"
    c3.style.display ="none"
}
function openPopUp(i){
    popUp_bg.style.display = "inline-block"
    popUP_wrapper.style.display = "flex"
    popUp.style.display = "grid"

    popUp_bg.style.width = "100vw"
    popUP_wrapper.style.width = "100vw"
    popUp.style.width = "80vw"

    popUp_bg.style.height = "100vh"
    popUP_wrapper.style.height = "100vh"
    popUp.style.height = "85vh"

    document.querySelector(".content"+i).style.display = "inline-block"

}