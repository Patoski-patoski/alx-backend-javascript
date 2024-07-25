import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/*
 * Run "npm run dev testFolder/5-main.js" to test
*/

export default async function handleProfileSignup (firstName, lastName, filename) {
  try {
    const userPromise = await signUpUser(firstName, lastName);
    const photoPromise = await uploadPhoto(filename);
    const [userResult, photoResult] = await Promise.all(([userPromise, photoPromise]));

    return [
      { status: userResult.status, value: userResult.value },
      { status: photoResult.status, value: photoResult.value }
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error }
    ];
  }
}
