console.log("hello world");
const canvas=document.getElementById("game");
const ctx = canvas.getContext("2d");


ctx.fillStyle ="grey";
ctx.fillRect(0,0,canvas.clientWidth, canvas.height);

ctx.fillStyle ="white";
ctx.fillRect(50,650,20,20);

function update(){
    ctx.fillStyle ="white";
    ctx.fillRect(50,650,20,20);
}
