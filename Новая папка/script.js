var angle=0;
function rotate(){
    pig.style.transform = 'rotate('+angle+'deg)';
    angle=angle+10;
}
var but=document.getElementById("but");
var pig=document.getElementById("first");
but.onclick = rotate;