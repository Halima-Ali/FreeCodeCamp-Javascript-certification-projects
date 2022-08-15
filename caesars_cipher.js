function rot13(str) {
  return str.replace(/[A-Z]/g,(letter)=>{
    let asciiCode= letter.charCodeAt(0)+13;
    if(asciiCode>90){
      asciiCode= asciiCode % 90+ 64;
    }
    return String.fromCharCode(asciiCode);
  });
}

console.log(rot13("SERR PBQR PNZC"));