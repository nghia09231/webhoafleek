//slider----------------

let index = 0

const imgNumber = document.querySelectorAll('.slider-content-left-top img')
const rightbtn =  document.querySelector('.fa-chevron-right')
const leftbtn =  document.querySelector('.fa-chevron-left')
//console.log(imgNumber.length)


rightbtn.addEventListener("click", function(){
    index = index + 1
    if(index>imgNumber.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})



leftbtn.addEventListener("click", function(){
    index = index - 1
    if(index<=0){
        index=imgNumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})

//slider2--------------------------------
function imgAuto () {
    index = index + 1
    if(index>imgNumber.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    //console.log(index)
}
setInterval(imgAuto,3000)
