export function getRandomLightColor() {
  var letters = 'BCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

export function colorHeader(textNode) {
  setInterval(() => {
    const color = getRandomLightColor();
    textNode.style.color = color;
  }, 1200);
}
