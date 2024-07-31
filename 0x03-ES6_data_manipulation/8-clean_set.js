export default function cleanSet(set, startString) {
  if (startString === '') return '';

  const storeEdit = [];
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      element.replace(startString, '');
      storeEdit.push(element.replace(startString, ''));
    }
  });

  return storeEdit.toString().split(',').join('-');
}
