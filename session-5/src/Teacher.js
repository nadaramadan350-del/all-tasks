import { Person } from "./Person.js";

export class Teacher extends Person {
  constructor(name, email, id, subject) {
    super(name, email, id);
    if (typeof subject !== "string" || subject.trim() === "") {
      throw new Error("Subject must be a non-empty string.");
    }
    this.subject = subject.trim();
    this.#grades = new Map();
  }

  #grades;

  gradeStudent(studentName, grade) {
    if (typeof studentName !== "string" || studentName.trim() === "") {
      throw new Error("Student name must be a non-empty string.");
    }
    if (typeof grade !== "number" || grade < 0 || grade > 100) {
      throw new Error("Grade must be a number between 0 and 100.");
    }
    this.#grades.set(studentName.trim(), grade);
  }

  listGradedStudents() {
    return Object.fromEntries(this.#grades);
  }

  describeRole() {
    return `${this.name} teaches ${this.subject}.`;
  }
}
