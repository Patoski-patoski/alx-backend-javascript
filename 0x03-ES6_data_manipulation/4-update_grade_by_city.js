export default function updateStudentGradeByCity(array, city, newGrades) {
  if (!Array.isArray(array) || !Array.isArray(newGrades)) return [];

  const getCity = array.filter((item) => item.location === city);
  const newGradeCity = getCity.map((item) => {
    const foundCity = newGrades.find((g) => g.studentId === item.id);
    return {
      ...item,
      grade: foundCity ? foundCity.grade : 'N/A',
    };
  });

  return newGradeCity;
}
