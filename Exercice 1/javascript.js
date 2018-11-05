var c = document.getElementById("mon_canvas"); // On récupère l'élément canvas de la page html
var ctx = c.getContext("2d"); //Définition du contexte 2D ou 3D


// EXERCICE 1

// Glace
ctx.beginPath();
ctx.moveTo(100,120);
// quadraticCurveTo( cp1x, cp1y, destx, desty ) point de controle et destination
ctx.quadraticCurveTo(250,-100,300,120);// La courbe quadratic se trace à partir du point courant (moveTo ...)
ctx.fillStyle="darkred"
ctx.fill();

// Cornet
ctx.beginPath();
ctx.moveTo(100,120);
ctx.lineTo(300,120);
ctx.lineTo(200,400);
ctx.fillStyle="peru"
ctx.fill();
