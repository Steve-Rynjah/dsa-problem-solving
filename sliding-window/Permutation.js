function main(s1, s2) {
  if (s1.length > s2.length) return false;

  function getFreq(str) {
    const str1Freq = new Array(26).fill(0);

    for (const char of str) {
      str1Freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    return str1Freq;
  }

  const str1 = getFreq(s1);
  const str2 = new Array(26).fill(0);

  for (let i = 0; i < s2.length; i++) {
    //For Adding
    str2[s2[i].charCodeAt(0) - "a".charCodeAt(0)]++;

    if (i >= s1.length) {
      //FOr Removing
      str2[s2[i - s1.length].charCodeAt(0) - "a".charCodeAt(0)]--;
    }

    if (isMatch(str1, str2)) return true;
  }
  return false;

  function isMatch(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) return false;
    }
    return true;
  }
}

console.log(main("ab", "lecabee"));
