var c = document.getElementById("mon_canvas"); // On récupère l'élément canvas de la page html
var ctx = c.getContext("2d"); //Définition du contexte 2D ou 3D
c.style.background = 'blue';

// EXERCICE 2

// Dessus du chapeau

ctx.beginPath();
ctx.moveTo(125,200);
ctx.quadraticCurveTo(195,-20,275,200);
ctx.fillStyle = "white";
ctx.fill();


// Base du chapeau
ctx.beginPath();
ctx.moveTo(50,200);
// quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.quadraticCurveTo(195, 80, 350, 200);
ctx.fillStyle = "lightgray";
ctx.fill();


ctx.beginPath();
ctx.moveTo(50,200);
ctx.quadraticCurveTo(195, 310, 350, 200);
ctx.fill();
