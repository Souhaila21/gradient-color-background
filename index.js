
let color1=document.getElementById('color1');
let color2=document.getElementById('color2');
let body=document.querySelector('body');
function changeGradient(){
    body.style='background:Linear-gradient(to right,'+color1.value+','+color2.value+');'
        document.getElementById('result').innerText=body.style.background
}
color1.addEventListener('input', changeGradient);
color2.addEventListener('input', changeGradient);
