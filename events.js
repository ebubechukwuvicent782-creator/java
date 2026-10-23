const button=document.getElementById('btn')
const div=document.getElementById('one')

button.addEventListener('click',function(){
    if (div.classList.contains('one')) {
        div.setAttribute('class','two')
    } else{
        div.setAttribute('class','one')
    }
})