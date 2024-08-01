export default function cleanSet(set, startString) {
  if (startString === undefined || typeof (startString) !== 'string' || startString === '') return '';
  const newString = [...set]
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');

  return newString;
}
