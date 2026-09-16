function calculateAverage(grades) {
  if (grades.length === 0) {
    return 0;
  }

  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

module.exports = calculateAverage;
