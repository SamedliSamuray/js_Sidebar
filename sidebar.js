let menu=document.getElementById('menu');
let i=document.getElementById('icon');
let change=true;
let ul=document.getElementById('open');

//Metod 1 : transition olmadan |  if-else ve icon class change  | ul display:none ile ac-bagla
// menu.addEventListener('click',()=>
// {


//    if(change) {
//     i.classList="fa-solid fa-chevron-up"
//     change=false;
//     ul.style.display='flex';
// }

//     else{
//     i.classList="fa-solid fa-chevron-down"
//     change=true;
//     ul.style.display='none';
// }
// })


//Metod 2 : transition ile | Ternary - Scale | ul scaleY ile ac-bagla
menu.addEventListener('click',()=>{
    i.style.transform=change?'scaleY(-1)':'scaleY(1)';
    ul.style.transform=change?'scaleY(1)':'scaleY(0)';
    ul.style.opacity=change?'1':'0';
    change=!change;
})