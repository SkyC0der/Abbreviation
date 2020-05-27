
// const parse = (str) => {
//   // split sentence into single word arrays
//     let phrase = str.split(/[\s\-\_]/).filter(words => {
//       return words.length > 0;
//     });

//     // Map out the first index of each array and capitalize
//     let abbreviation = phrase.map(abbr => {
//       return abbr[0].toUpperCase()
//     }).join('');

//     return abbreviation
// };

function parse(phrase){
  let arr_phrase = phrase.split(/[\s\-\_]/).filter(element => {
      return element.length > 0;
  });
  
  let acronym = arr_phrase.map(element => {
      return element[0].toUpperCase();
  }).join('');
  
  return acronym;
}


module.exports = parse;
