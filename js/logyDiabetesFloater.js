document.body.innerHTML+=`<a href="https://logy.ai/" target='_blank'>
<div 
style="
position: absolute;
top: 50vh;
left: 4px;
height: 100px;
width: 100px;
">
<div id="scan"></div>
<img style="position: absolute;left:26px;top: 52px;width: 45px" src="https://github.com/Debaprasad-dez/logyFloater/blob/main/body.png?raw=true" alt="">
<img src="https://raw.githubusercontent.com/Debaprasad-dez/logyFloater/074ef0651edafdd9ea4b1dba68f4a71616718a68/floater4.svg" alt="">
<style>
#scan{
    position: absolute;
    background: linear-gradient(180deg, rgba(0,255,235,0) 0%, rgba(0,224,255,0.4822303921568627) 100%);
    height: 40px;
    width: 96px;
    top: 22px;
    left: 1px;
    z-index: 100;
    border-bottom: solid 2px #1B8796;
    animation: animate 4s infinite;
}
@keyframes animate {
    0%{
        height: 1px;
    }
    50%{
        height: 78px;
    }
    100%{
        height: 0;
    }
}
@media screen and (max-width: 600px) {
#floaterInstructions{
    display: none;
}
}
</style>
</div>
</a>
<div id="floaterInstructions" style="position:absolute;height:100px;width:250px;top:50vh;left: 108px;">
<img src="https://raw.githubusercontent.com/Debaprasad-dez/logyFloater/c15c1666a5a4532a346f22b9b704bc6f50035796/instructions.svg" alt="">
<button id="btnCross" style="position: absolute;background: none;border: none;cursor: pointer;">
    <img  src="https://raw.githubusercontent.com/Debaprasad-dez/logyFloater/c15c1666a5a4532a346f22b9b704bc6f50035796/cross.svg" alt="">
</button>
</div>
`

const btnCross=document.getElementById('btnCross');
const floaterInstructions=document.getElementById('floaterInstructions');
btnCross.addEventListener('click',function () {
    floaterInstructions.style.display='none'
})

