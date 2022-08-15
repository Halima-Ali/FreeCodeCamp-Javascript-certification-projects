// we need to store the roman symbols in an object for easy retrieval

const romanSymbols= {
  M:1000,
  CM:900,
  D:500,
  CD:400,
  C:100,
  XC: 90,
  L:50,
  XL:40,
  X:10,
  IX:9,
  V:5,
  IV:4,
  I:1
}

function convertToRoman(num) {
let romanNumeral='';


  for(let key in romanSymbols){
    while(num >= romanSymbols[key]){
         num-=romanSymbols[key];
        romanNumeral += key ;
     }
  }

  // eg 83-50 = L , 33-10= X, 23-10=X, 13-10=X, 3-1=I, 2-1=I, 1-1=I === LXXXIII

 return romanNumeral;
}

console.log(convertToRoman(36));