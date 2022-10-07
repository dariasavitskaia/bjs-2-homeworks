function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;

  // Ваш код
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
  //ваш код
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark]; // добавить первую оценку
  } else {
    this.marks.push(mark); // добавить вторую и последующие оценки в массив
  }
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = marks;
  } else {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if (this.marks !== undefined) {
    return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
  }
};

Student.prototype.exclude = function (reason) {
  if (this.marks !== undefined && this.subject !== undefined) {
    delete this.mark;
    delete this.subject;
    this.excluded = reason;
  }
};
// student1.getAverage();

// console.log(student1.getAverage());
// //console.log(student1);
