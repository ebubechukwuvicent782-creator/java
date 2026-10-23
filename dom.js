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

 const image=document.getElementById('img')
 image.setAttribute('src','https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT-H4-wIuUkjZNcJyw6t8M8G7L_jsJ86bMnUrH80fLXYv_GMUQkb2QszuDLWHXnF-lkOC9_ypAEM5fM4XyM4t_YHudH1GxrJfYsbwT2SutTlud0dFS7ILzrRQ&usqp=CAc')