export default function hasValuesFromArray(set, array) {
  let bool = true;
  array.forEach((arrElement) => {
    if (!set.has(arrElement)) bool = false;
    return bool;
  });
  return bool;
}
