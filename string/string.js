// function camelCase(x) {
//   let cou = 1;

//   for (let i = 0; i < x.length; i++) {
//     if (x[i] === x[i].toUpperCase()) {
//       cou++;
//     }
//   }
//   return cou;
// }

const s = "#HackerRank";
const n = 11;

function minimumNumber(n, s) {
  const upperCase = s.match(/[A-Z]/ || []).length > 0;
  const loweCase = s.match(/[a-z]/ || []).length > 0;
  const number = s.match(/[0-9]/ || []).length > 0;
  const spacialCh = s.match(/[!@#$%^&*()-+]/ || []).length > 0;

  const temp = !upperCase + !loweCase + !number + !spacialCh;
  const temp2 = Math.max(0, 6 - s.length);
  return Math.max(0, temp2, temp);
}

// console.log(minimumNumber(n, s));
