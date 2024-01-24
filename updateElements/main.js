var CountDown=document.getElementById('countdown');
var BacgrdColor=document.getElementById('background');
var initialvalue=CountDown.innerHTML;

setInterval (function(){
    initialvalue-=1;
    initialvalue>0 ? CountDown.innerHTML=initialvalue : CountDown.innerHTML="Start"

    initialvalue % 2==0 ? BacgrdColor.style='background: linear-gradient(283deg, rgba(12,23,99,1) 36%, rgba(87,99,11,1) 59%);'  : BacgrdColor.style='background: linear-gradient(283deg, rgba(240,73,110,1) 36%, rgba(73,93,240,1) 52%);'
},1000);