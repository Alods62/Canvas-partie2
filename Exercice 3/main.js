var c = document.getElementById("mon_canvas"); // On récupère l'élément canvas de la page html
var ctx = c.getContext("2d"); //Définition du contexte 2D ou 3D

// EXERCICE 3

// Tête

ctx.beginPath();
// arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.arc( 200, 50, 50, 0, Math.PI*2,false );
ctx.fillStyle = "peru";
ctx.fill();

// Yeux

  // Gauche
ctx.beginPath();
ctx.arc(183, 45, 8, 0, Math.PI*2, false );
ctx.fillStyle = "white";
ctx.fill();

  // Droite
ctx.beginPath();
ctx.arc(217, 45, 8, 0, Math.PI*2, false );
ctx.fill();


// Sourcils

  // Gauche
ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(175,30);
// quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.quadraticCurveTo( 182,23,190,30);
ctx.strokeStyle = "white";
ctx.stroke();

  // Droite
ctx.beginPath();
ctx.moveTo(210,30);
ctx.quadraticCurveTo( 217,23,225,30);
ctx.stroke();

// Bouche

  // Supérieur
ctx.beginPath();
ctx.moveTo(180,65);
ctx.quadraticCurveTo( 200, 80, 220,65);
ctx.strokeStyle = "red";
ctx.stroke();

  // Inférieur
ctx.beginPath();
ctx.moveTo(180,65);
ctx.quadraticCurveTo( 200, 90, 220,65);
ctx.stroke();

// Bras
ctx.beginPath();
ctx.fillStyle = "peru";
ctx.fillRect(60,80,280,30);

// Mains

  // Gauche
ctx.beginPath();
ctx.moveTo(60,80);
ctx.quadraticCurveTo(30,95,60,110);
ctx.fill();


  // Droite
ctx.beginPath();
ctx.moveTo(340,80);
ctx.quadraticCurveTo(370,95,340,110);
ctx.fill();

// Torse
ctx.beginPath();
ctx.fillRect(155,80,90,180);

// Jambes

  // Gauche
ctx.beginPath();
ctx.fillRect(155,260,35,40);

  // Droite
ctx.beginPath();
ctx.fillRect(210,260,35,40);

// Entrejambe
ctx.beginPath();
ctx.moveTo(190,260);
ctx.quadraticCurveTo(200,235,210,260);
ctx.fillStyle="white";
ctx.fill();

// Pieds

  // Gauche
ctx.beginPath();
ctx.moveTo(155,300);
ctx.quadraticCurveTo(172,320,190,300);
ctx.fillStyle="peru";
ctx.fill();

  // Droite
ctx.beginPath();
ctx.moveTo(210,300);
ctx.quadraticCurveTo(227,320,245,300);
ctx.fill();

// Boutons
  // Supérieur
ctx.beginPath();
ctx.arc(200, 135, 10, 0, Math.PI*2, false );
ctx.fillStyle = "purple";
ctx.fill();

  // Inférieur
ctx.beginPath();
ctx.arc(200, 175, 10, 0, Math.PI*2, false );
ctx.fillStyle = "purple";
ctx.fill();
