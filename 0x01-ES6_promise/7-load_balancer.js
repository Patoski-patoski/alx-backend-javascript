/*
 * Run "npm run dev testFolder/7-main.js" to test
*/
export default async function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
