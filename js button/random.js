var Change=document.querySelector('#change')
var Btn1=document.querySelector('#btn2')
 Btn1.addEventListener('click',function()
 {
 var num=Math.random()
var num1=num*1000000
var num2=Math.floor(num1)
console.log(num2)
change.style.backgroundColor=`#${num2}`
 }
 )