// Gere um número aleatório como índice para a matriz quickDrawDataset
const randomNumber = Math.floor(Math.random() * quickDrawDataset.length);

// Imprima o nome do esboço aleatório no console
console.log(quickDrawDataset[randomNumber]);

// Armazene o nome do esboço aleatório na variável sketch
const sketch = quickDrawDataset[randomNumber];

// Atualize o texto da tag span com id "drawnSketchText"
document.getElementById("drawnSketchText").textContent =
  "Esboço a Ser Desenhado: " + sketch;

// Variáveis adicionais
let timerCounter = 0;
let timerCheck = "";
let drawSketch = "";
let answerHolder = "";
let score = 0;
