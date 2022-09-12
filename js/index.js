let menu = document.querySelector('.sidebar')
let toggleTheme = document.querySelector('.theme-toggler');
const open = document.getElementById('menu-btn'); 
const close = document.getElementById('close');
let links = document.querySelectorAll('.links a');

open.onclick =()=> menu.style.display="block";
close.onclick =()=> menu.style.display="none";

toggleTheme.addEventListener('click', ()=>
{
    document.body.classList.toggle('dark-theme');
    toggleTheme.querySelector('span:nth-child(1)').classList.toggle('active-theme');
    toggleTheme.querySelector('span:nth-child(2)').classList.toggle('active-theme');
})
links.forEach((link)=>
{
    link.addEventListener('click',(ele)=>
    {
links.forEach((link)=>
{
link.classList.remove('active-link');
});
ele.currentTarget.classList.add("active-link");
    });
});
