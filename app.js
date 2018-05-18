var name = prompt("Ingresa tu nombre");
var firstname = ("Bienvenida  " + name);
document.write("<center><h1>"+firstname+"</h1></center>");
var answ = confirm("Quieres empezar la trivia");
if (answ==true) {
var answer= confirm("¿Crees que tienes muy buena ortografía");
if (answer==true)
  alert("Demuestralo!!");
  else
     alert("No te preocupes, con esto aprenderas un poco")
    var answerOne= prompt("Escoge el dinimutivo de Lápiz: \na)Lapicito \nb)Lapisito \nc)Lapizito");
    switch(answerOne) {
      case "a":
      alert("¿Estas segura?");
      break;
      case "b":
      alert("¿Estas segura?");
      break;
      case "c":
      alert("¿Estas segura?");
      break;
      default:
      alert("Tienes que contestar");
    }
  if( answerOne == 'a')
  var correctOne = 1 ;
  else
  var correctOne = 0 ;
  if( answerOne !== 'a')
  var inCorrectOne = 1 ;
  else
  var inCorrectOne= 0 ;
    var answerTwo= prompt("Las palabras que comienzan con lla, lle, llo, llu, se escriben con: \na)b \nb)v \nc)cualquiera de las dos ");
    switch (answerTwo) {
      case "a":
      alert("¿Estas segura?");
      break;
      case "b":
      alert("¿Estas segura?");
      case "c":
      alert("¿Estas segura?");
      break;
      default:
      alert ("contesta");
     }
   if( answerTwo == 'b')
   var correctTwo= 1 ;
   else
   var correctTwo= 0 ;
   if( answerTwo !== 'b')
   var inCorrectTwo= 1 ;
   else
   var inCorrectTwo= 0 ;
      var answerThree= prompt("Las palabras que se acenúan en la antepenúltima sílaba son: \na)Esdrújulas \nb)Graves \nc)Agudas ");
      switch (answerThree) {
      case "a":
      alert("¿Estas segura?");
      break;
      case "b":
      alert("¿Estas segura?");
      break;
      case "c":
      alert("¿Estas segura?");
      break;
      default:
      alert("NO TE DESANIMES, INTENTÁLO");
      }
    if( answerThree== 'a')
    var correctThree= 1 ;
    else
    var correctThree= 0 ;
    if( answerThree !== 'a')
    var inCorrectThree= 1 ;
    else
    var inCorrectThree= 0 ;
    document.write("<center><p1></p1></center>") ;
  var resP= ("Tu escribiste en la pregunta 1: " +answerOne+ "\nTu escribiste en la pregunta 2: " +answerTwo+ "\nTu escribiste en la pregunta 3: " +answerThree);
    document.write("<center><pre><p>"+ resP+"</p></pre></center>");
    function verrespu(){
  var totCorrect = (+correctOne + correctTwo + correctThree);
   alert('El total de respuestas correctas que obtuviste es: ' + totCorrect );
  var totInCorrect = (+inCorrectOne + inCorrectTwo + inCorrectThree);
   alert('El total de respuestas incorrectas que obtuviste es: ' + totInCorrect );
     }
     } else {
    window.location.href = "bad.html";
     }
