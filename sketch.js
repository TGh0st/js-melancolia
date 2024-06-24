let palavra;

function setup() {
  createCanvas(600, 600);
  
  palavra = palavraAleatoria();
  
}
function palavraAleatoria() {
  let palavras = ["melancolia","melancolico","tristeza","apatia","deprimido","emocionado",];
  return random(palavras);
}

function inicializaCores() {
  background("#D0E3F1");
  fill("#2C7CBB");
  textSize(65);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 0, palavra.length);
  console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();


  // mouseX, 0, width ==> 0,palavra.length

  
  let texto = palavraParcial(0, width);
  text(texto, 300, 300);
}