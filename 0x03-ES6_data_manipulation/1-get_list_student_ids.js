export default function getListStudentIds(array) {
  if (!Array.isArray(array)) return [];

  const idArray = [];
  for (const id of array) {
    idArray.push(id.id);
  }
  return idArray;
}
