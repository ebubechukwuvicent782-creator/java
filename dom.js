//selecting elements
 const p=document.getElementById('e')
 console.log(p);

 document.querySelector('#e')

 const para2=document.querySelector('.play')
 console.log(para2);

 //changing the content of html elements
 para2.innerHTML='my name is vem'

 //styling elements
 p.style.color='red'
 p.style.backgroundColor='green'
 p.style.padding='10px 20px'
 p.style.width='fit-content'

 //creating of element
 const newpara=document.createElement('p')

 //adding content
 newpara.innerHTML='this paragraph was created by java script'
 console.log(newpara); 

 //appending elements
 const container=document.getElementById('container')
 container.appendChild(newpara)
 
 //changing elements attributes
 const box=document.querySelector('#one')
 box.setAttribute('class','two')
