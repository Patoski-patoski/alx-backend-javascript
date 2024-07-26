/*
 * Run "npm run dev testFolder/8-main.js" to test
*/
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) throw new Error('cannot divide by 0');
  return Number(numerator / denominator);
}
