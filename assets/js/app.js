// selectors
// section 1
let shape_1 = document.querySelector("#named-colors .shap"); 
let inputNamed = document.querySelector("#named-colors input");

let shape_2 = document.querySelector("#hex-colors .shap"); 
let inputHex = document.querySelector("#hex-colors input");

let shape_3 = document.querySelector("#rgb-colors .shap"); 
let inputRed = document.querySelector("#rgb-colors .input-red"); 
let inputGreen = document.querySelector("#rgb-colors .input-green"); 
let inputBlue = document.querySelector("#rgb-colors .input-blue"); 
let inputAlpha = document.querySelector("#rgb-colors .input-a"); 
let rNum = document.querySelector("#rgb-colors .r-num");
let gNum = document.querySelector("#rgb-colors .g-num");
let bNum = document.querySelector("#rgb-colors .b-num");
let aNum = document.querySelector("#rgb-colors .a-num");


let shape_4 = document.querySelector("#hsl-colors .shap"); 
let inputHue = document.querySelector("#hsl-colors .input-h"); 
let inputSaturation = document.querySelector("#hsl-colors .input-s"); 
let inputLightness = document.querySelector("#hsl-colors .input-l"); 
let hNum = document.querySelector("#hsl-colors .h-num");
let sNum = document.querySelector("#hsl-colors .s-num");
let lNum = document.querySelector("#hsl-colors .l-num");


inputNamed.addEventListener("input",(e)=>{
    shape_1.style.backgroundColor = e.target.value

})

inputHex.addEventListener("input",(e)=>{
    if(e.target.value == ""){
        shape_2.style.backgroundColor = `#ffffff`

    }else{
        shape_2.style.backgroundColor = `#${e.target.value}`
    }



})

inputRed.addEventListener("input",(e)=>{
    rNum.innerHTML=e.target.value
    console.log(bNum.innerHTML)
    shape_3.style.backgroundColor =`rgb(${rNum.innerHTML},${gNum.innerHTML},${bNum.innerHTML},${aNum.innerHTML})`

})

inputRed.addEventListener("input",(e)=>{
    rNum.innerHTML=e.target.value

    shape_3.style.backgroundColor =`rgb(${rNum.innerHTML},${gNum.innerHTML},${bNum.innerHTML},${aNum.innerHTML})`

})

inputGreen.addEventListener("input",(e)=>{
    gNum.innerHTML=e.target.value
    shape_3.style.backgroundColor =`rgb(${rNum.innerHTML},${gNum.innerHTML},${bNum.innerHTML},${aNum.innerHTML})`

})

inputBlue.addEventListener("input",(e)=>{
    bNum.innerHTML=e.target.value
    shape_3.style.backgroundColor =`rgb(${rNum.innerHTML},${gNum.innerHTML},${bNum.innerHTML},${aNum.innerHTML})`

})

inputAlpha.addEventListener("input",(e)=>{
    aNum.innerHTML=e.target.value
    shape_3.style.backgroundColor =`rgb(${rNum.innerHTML},${gNum.innerHTML},${bNum.innerHTML},${aNum.innerHTML})`

})


inputHue.addEventListener("input",(e)=>{
    hNum.innerHTML=e.target.value
    console.log(`hsl(${hNum.innerHTML},${sNum.innerHTML}%,${lNum.innerHTML}%)`)
    shape_4.style.backgroundColor =`hsl(${hNum.innerHTML},${sNum.innerHTML}%,${lNum.innerHTML}%)`

})
inputSaturation.addEventListener("input",(e)=>{
    sNum.innerHTML=e.target.value
    shape_4.style.backgroundColor =`hsl(${hNum.innerHTML},${sNum.innerHTML}%,${lNum.innerHTML}%)`

})
inputLightness.addEventListener("input",(e)=>{
    lNum.innerHTML=e.target.value
    shape_4.style.backgroundColor =`hsl(${hNum.innerHTML},${sNum.innerHTML}%,${lNum.innerHTML}%)`

})