/*
 * Run "npm run dev testFolder/5-main.js" to test
*/

export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
