const clock=document.getElementById('clock');
// let date=new Date();
setInterval(function(){
    date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);