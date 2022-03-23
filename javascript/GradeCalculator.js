// let AddressBook = {
//   book: [],
//   add: function(address) {
//     this.book.push(address);
//   },
//   remove: function(index) {
//     this.book.splice(index, 1);
//   },
//   print: function() {
//     for(const address of this.book) {
//       console.log(address);
//     }
//   },
//   search: function(keyword) {
//     let keyword_lower = keyword.toLowerCase();
//     for(let address of this.book) {
//       address_lower = address.toLowerCase();
//       if (address_lower.includes(keyword_lower)) {
//         console.log(address);

let gradecalculator = {
  grades: [],
  addGrade: function (grade) {
    if (isNaN(grade)) {
      console.log("Bad Value: " + grade);
    } else {
      this.grades.push(grade);
    }
  },
  showGrade: function () {
    console.log("Class Average: " + this.calculateGrade());
  },
  calculateGrade: function () {
    let average = this.calculateAverage();
    if (average == null) return "No Grades";
    if (average < 60) return "F";
    if (average < 70) return "D";
    if (average < 80) return "C";
    if (average < 90) return "B";
    if (average <= 100) return "A";
  },
  calculateAverage: function () {
    let gradebook = this.grades;
    // If student has no grades, return null
    if (gradebook.length == 0) return null;
    // calculate average for student since he has grades
    let sum = 0;
    for (let value of gradebook) {
      sum += value;
    }
    return sum / gradebook.length;
  },
};

gradecalculator.addGrade("A");
gradecalculator.addGrade(10);
gradecalculator.addGrade(56);
gradecalculator.addGrade(99);
gradecalculator.addGrade(105);

gradecalculator.showGrade();
