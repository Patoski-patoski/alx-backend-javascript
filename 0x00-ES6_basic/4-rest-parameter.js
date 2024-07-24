/*
 * Run "npm run dev maintest/4-main.js" to test
*/

export default function returnHowManyArguments(...args) {
  let total = 0;
  for (let index = 0; index < args.length; index += 1) {
    total += 1;
  }
  return total;
}
