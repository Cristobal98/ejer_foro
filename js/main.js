
let panel = ['Laura: Buenos dias, he creado un foro para que expongais vuestras dudas, un saludo.',
  'Lucas: Hola Laura, me parece una estupenda idea.',
'Laura: Gracias, espero que os sea de ayuda.', 'Laura: Me gustaria que os fuerais presentando'];


function crearArray(){
  let usuario = document.getElementById('usuario').value;
  let comentario = document.getElementById('comentario').value;
  panel.push(usuario + ':' + comentario);
  mostrar();
}
mostrar();
function mostrar(){
  let foro = "";
  for(let i=0; i<panel.length;i++){
    foro = foro + panel[i] + "</br>";
  }
  document.getElementById('foro').innerHTML = foro;
}


document.getElementById('enviar').addEventListener("click",crearArray);



