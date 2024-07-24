/*
 * Run "npm run dev maintest/10-main.js" to test
*/

export default function appendToEachArrayValue (array, appendString) {
  const newArray = [];
  for (const item of array) {
    newArray.push(appendString + item);
  }

  return newArray;
}
