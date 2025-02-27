var change=document.querySelector("h3");
var imgchange=document.querySelector("#image1");
var addmenu=document.querySelector("#add1");
var removemenu=document.querySelector("#remove1");
addmenu.addEventListener('click',function()
{
    change.innerHTML="cake"
    change.style.color='red'
    imgchange.src="ch1/image.png"
}
)
removemenu.addEventListener('click',function()
{
    change.innerHTML="rasamalai"
    change.style.color='red'  
    imgchange.src="ch1/ch2/image.png"
}
)