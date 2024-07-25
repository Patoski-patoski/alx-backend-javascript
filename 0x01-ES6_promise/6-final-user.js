import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/*
 * Run "npm run dev testFolder/5-main.js" to test
*/

export default async function handleProfileSignup (firstName, lastName, filename) {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename)
  ]);

  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : String(result.reason)
  }));
}
