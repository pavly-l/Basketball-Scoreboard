let sumhome=0
let sumguest=0
home =document.getElementById("home-1")
away =document.getElementById("away-1")
function add1_home(){
    sumhome +=1
    home.textContent=sumhome
}
function add2_home(){
    sumhome +=2
    home.textContent=sumhome
}
function add3_home(){
    sumhome +=3
    home.textContent=sumhome
}
function add1_GUEST(){
    sumguest +=1
    away.textContent=sumguest
}
function add2_GUEST(){
    sumguest +=2
    away.textContent=sumguest
}
function add3_GUEST(){
    sumguest +=3
    away.textContent=sumguest
}
function Reset_GUEST(){
    sumguest=0
    away.textContent=sumguest
}
function Reset_home(){
    sumhome=0
    home.textContent=sumhome
}
