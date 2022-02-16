
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if (matrix) {
      matrix.forEach((elem, i) => {
        if ( i % 2 === 0 ) {
          res.push(...elem); 
        } else {
          res.push(...elem.reverse());
        }
      });
  }
  return res;
};