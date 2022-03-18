


const marks = [100,90,40];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let average = calculateAverage(marks);

  if (average == null) return 'No Grades';
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  if (average <= 100) return 'A';
}

function calculateAverage(array) {
  // If student has no grades, return null
  if (array.length == 0) return null;

  // calculate average for student since he has grades
  let sum = 0;
  for (let value of array) {
    sum += value;
  }

  return sum / array.length;
}
