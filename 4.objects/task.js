function Student(name, gender, age) {
  this.name = name
  this.gender = gender
  this.age = age
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMark = function (mark) {
  if (mark === undefined || mark === null) {
    return
  }

  if(this.marks === undefined) { 
    this.marks = [mark]
  } else {
    this.marks.push(mark)
  }
}

Student.prototype.addMarks = function (mark1, mark2, ...marks ) {
  this.addMark(mark1)
  this.addMark(mark2)
  for (mark of marks) { 
    this.addMark(mark)
  }
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((sum, value) => sum + value, 0) / this.marks.length
}


Student.prototype.exclude = function (reason) {
  delete this.marks
  delete this.subject
  this.excluded = reason
}
