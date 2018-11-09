var c = document.getElementById("mon_canvas"); // On récupère l'élément canvas de la page html
var ctx = c.getContext("2d"); //Définition du contexte 2D ou 3D

// BONUS

// arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
// quadraticCurveTo( cp1x, cp1y, destx, desty )
// bezierCurveTo( cp1x, cp1y, cp2x, cp2y, destx, desty )
// fillRect(startx, starty, hauteur, largeur)


// E
ctx.beginPath();
ctx.lineWidth="3";
ctx.strokeStyle="black";
ctx.moveTo(50,100);
ctx.lineTo(50,300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,100);
ctx.lineTo(120,100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,200);
ctx.lineTo(120,200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,300);
ctx.lineTo(120,300);
ctx.stroke();

// 2
  // partie supérieur
ctx.beginPath();
ctx.lineWidth="10";
ctx.strokeStyle="darkorange";
ctx.moveTo(120,100);
ctx.quadraticCurveTo( 450, -150, 100, 350 );
//ctx.bezierCurveTo( 450, -100, -150, 550, 240, 350 );
ctx.stroke();

  // partie inférieur
ctx.beginPath();
ctx.moveTo(98,352);
ctx.quadraticCurveTo(110, 340, 200, 320);
ctx.stroke();


// N
ctx.beginPath();
ctx.lineWidth="3";
ctx.strokeStyle="black";
ctx.moveTo(265,100);
ctx.lineTo(265,300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(265,100);
ctx.lineTo(405,300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(405,300);
ctx.lineTo(405,100);
ctx.stroke();

// Petits cubes de la mort

  // 1
ctx.beginPath();
ctx.moveTo(460,100);
ctx.lineTo(470,110);
ctx.lineTo(470,120);
ctx.lineTo(460,130);
ctx.lineTo(450,120);
ctx.lineTo(450,110);
ctx.lineTo(460,100);
ctx.fillStyle ="lightgray";
ctx.fill();

  // 2
ctx.beginPath();
ctx.moveTo(450,125);
ctx.lineTo(460,135);
ctx.lineTo(460,145);
ctx.lineTo(450,155);
ctx.lineTo(440,145);
ctx.lineTo(440,135);
ctx.lineTo(450,125);
ctx.fillStyle ="lightgray";
ctx.fill();

  // 3
ctx.beginPath();
ctx.moveTo(475,125);
ctx.lineTo(485,135);
ctx.lineTo(485,145);
ctx.lineTo(475,155);
ctx.lineTo(465,145);
ctx.lineTo(465,135);
ctx.lineTo(475,125);
ctx.fillStyle ="gray";
ctx.fill();

  // 4
ctx.beginPath();
ctx.moveTo(460, 150);
ctx.lineTo(470, 160);
ctx.lineTo(470, 170);
ctx.lineTo(460, 180);
ctx.lineTo(450, 170);
ctx.lineTo(450, 160);
ctx.lineTo(460, 150);
ctx.fillStyle="darkorange";
ctx.fill();

  // 5
ctx.beginPath();
ctx.moveTo(450, 175);
ctx.lineTo(460, 185);
ctx.lineTo(460, 195);
ctx.lineTo(450, 205);
ctx.lineTo(440, 195);
ctx.lineTo(440, 185);
ctx.lineTo(450, 175);
ctx.fillStyle="darkgray";
ctx.fill();

  // 6
ctx.beginPath();
ctx.moveTo(475,175);
ctx.lineTo(485,185);
ctx.lineTo(485,195);
ctx.lineTo(475,205);
ctx.lineTo(465,195);
ctx.lineTo(465,185);
ctx.lineTo(475,175);
ctx.fillStyle ="gray";
ctx.fill();


// Plus petits cubes de la mort

  // 1
ctx.beginPath();
ctx.moveTo(490,136);
ctx.lineTo(493,138);
ctx.lineTo(493,143);
ctx.lineTo(490,145);
ctx.lineTo(487,143);
ctx.lineTo(487,138);
ctx.lineTo(490,136);
ctx.fillStyle="lightgray";
ctx.fill();

  // 2
ctx.beginPath();
ctx.moveTo(493, 145);
ctx.lineTo(495, 147);
ctx.lineTo(495, 150);
ctx.lineTo(493, 152);
ctx.lineTo(491, 150);
ctx.lineTo(491, 147);
ctx.lineTo(493, 145);
ctx.fillStyle="gray";
ctx.fill();

  // 3
ctx.beginPath();
ctx.moveTo(504, 140);
ctx.lineTo(507, 142);
ctx.lineTo(504, 145);
ctx.lineTo(500, 142);
ctx.fillStyle="darkorange";
ctx.fill();

// Texte
ctx.beginPath();
ctx.font = "18pt Verdana";
ctx.fillStyle="gray";
ctx.fillText("École du Numérique", 255, 335);
ctx.fillText("du Noyonnais", 245,360);
