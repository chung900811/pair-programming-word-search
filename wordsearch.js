const wordSearch = (letters, word) => {
  if (typeof letters !== 'object' || letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  let newMatrix = [];
  for (let j = 0; j < letters[0].length; j++) {
    newMatrix.push([]);
  }
  for (let i = 0; i < letters.length; i++) {
    if (horizontalJoin[i].includes(word)) return true;
    for (let n = 0; n < letters[i].length; n++) {
      newMatrix[n].push(letters[i][n]);
    }
  }
  if (newMatrix.map(ls => ls.join('')).includes(word)) return true;
  return false;
};

module.exports = wordSearch;
