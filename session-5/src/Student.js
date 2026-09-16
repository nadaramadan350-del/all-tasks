import { Person } from "./Person.js";

export class Student extends Person {
  constructor(name, email, id) {
    super(name, email, id);
    this.#subjects = new Set();
  }

  #subjects;

  enroll(subject) {
    if (typeof subject !== "string" || subject.trim() === "") {
      throw new Error("Subject must be a non-empty string.");
    }
    this.#subjects.add(subject.trim());
  }

  listEnrolledSubjects() {
    return [...this.#subjects];
  }

  describeRole() {
    return `${this.name} is learning ${this.#subjects.size} subject(s).`;
  }
}
