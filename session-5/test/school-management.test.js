import test from "node:test";
import assert from "node:assert/strict";
import { Principal } from "../src/Principal.js";
import { Student } from "../src/Student.js";
import { Teacher } from "../src/Teacher.js";

 test("manages members, grades, and enrollments", () => {
  const principal = new Principal("Principal", "principal@school.edu", "P-1");
  const teacher = new Teacher("Teacher", "teacher@school.edu", "T-1", "English");
  const student = new Student("Student", "student@school.edu", "S-1");

  principal.addMember(teacher);
  principal.addMember(student);
  teacher.gradeStudent(student.name, 88);
  student.enroll("English");

  assert.deepEqual(principal.listMembers(), [teacher, student]);
  assert.deepEqual(teacher.listGradedStudents(), { Student: 88 });
  assert.deepEqual(student.listEnrolledSubjects(), ["English"]);
  assert.equal(principal.removeMember(student.id), true);
  assert.equal(principal.listMembers().length, 1);
});

test("validates private email and ID fields", () => {
  assert.throws(() => new Student("Student", "invalid-email", "S-1"), /valid email/);
  assert.throws(() => new Student("Student", "student@school.edu", ""), /non-empty/);

  const student = new Student("Student", "Student@School.edu", 42);
  assert.equal(student.email, "student@school.edu");
  assert.equal(student.id, "42");
  assert.equal(student["#email"], undefined);
  assert.equal(student["#id"], undefined);
});
