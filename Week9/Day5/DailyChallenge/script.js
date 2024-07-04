function areAnagrams(str1, str2) {
    function normalizeString(str) {
      return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    }
  
    const normalizedStr1 = normalizeString(str1);
    const normalizedStr2 = normalizeString(str2);
  
    return normalizedStr1 === normalizedStr2;
  }
  
  console.log(areAnagrams("Astronomer", "Moon starer")); // true
  console.log(areAnagrams("School master", "The classroom")); // true
  console.log(areAnagrams("The Morse Code", "Here come dots")); // true
  console.log(areAnagrams("Hello", "Olelh")); // true
  console.log(areAnagrams("Test", "Taste")); // false
  