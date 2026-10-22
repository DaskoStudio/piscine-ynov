export function generateLetters() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  for (let i = 0; i < 120; i++) {
    const letterDiv = document.createElement('div');
    
    // Pick a random uppercase letter
    letterDiv.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    // Increase font size from 11px to 130px
    letterDiv.style.fontSize = `${11 + i}px`;
    
    if (i < 40) {
      letterDiv.style.fontWeight = '300'; // First third
    } else if (i < 80) {
      letterDiv.style.fontWeight = '400'; // Second third
    } else {
      letterDiv.style.fontWeight = '600'; // Last third
    }
    
    document.body.append(letterDiv);
  }
}