var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// base de la maison

ctx.beginPath();   // Début du chemin
ctx.moveTo(300,300);
ctx.lineTo(300,100);
ctx.lineTo(100,100);
ctx.lineTo(100,300);
ctx.closePath();    //fin du chemin
ctx.fillStyle = "lightblue";
ctx.fill();
ctx.stroke();

//toit
ctx.beginPath();   // Début du chemin
ctx.moveTo(100,100);
ctx.lineTo(200,10);
ctx.lineTo(300,100);
ctx.closePath();
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

ctx.beginPath();   // Début du chemin
ctx.moveTo(150,120);
ctx.lineTo(150,160);
ctx.lineTo(120,160);
ctx.lineTo(120,120);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();
ctx.stroke();

ctx.beginPath();   // Début du chemin
ctx.moveTo(280,120);
ctx.lineTo(280,160);
ctx.lineTo(250,160);
ctx.lineTo(250,120);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();
ctx.stroke();

ctx.beginPath();   // Début du chemin
ctx.moveTo(210,300);
ctx.lineTo(210,260);
ctx.lineTo(180,260);
ctx.lineTo(180,300);
ctx.fillStyle = "";
ctx.fill();
ctx.closePath();
ctx.stroke();
