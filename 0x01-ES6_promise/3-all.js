import { uploadPhoto, createUser } from './utils';

/*
 * Run "npm run dev testFolder/3-main.js" to test
*/

export default function handleProfileSignup () {
  let successText = '';
  uploadPhoto().then((result) => {
    successText += `${result.body} `;
  });

  createUser().then((result) => {
    successText += result.firstName;
    console.log(successText);
  });
}
