// selecting buttons
const redbtn=document.getElementById('one')
const bluebtn=document.getElementById('two')
const purplebtn=document.getElementById('three')
const yellowbtn=document.getElementById('four')
const greenbtn=document.getElementById('five')

const div=document.getElementById('container')

bluebtn.addEventListener('click',function(){
    div.style.backgroundColor='blue'
})
redbtn.addEventListener('click',function(){
    div.style.backgroundColor='red'
})
purplebtn.addEventListener('click',function(){
    div.style.backgroundColor='purple'
})
greenbtn.addEventListener('click',function(){
    div.style.backgroundColor='green'
})
yellowbtn.addEventListener('click',function(){
    div.style.backgroundColor='yellow'
})