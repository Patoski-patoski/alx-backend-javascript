/*
 * Run "npm run dev testFolder/2-main.js" to test
*/
export default function handleResponseFromAPI (promise) {
  promise.then(() => {
    console.log('{status: 200, body: success}');
  }).catch(() => {
    console.log(Error);
  }).finally(() => {
    console.log('Got a response from the API');
  });
}
