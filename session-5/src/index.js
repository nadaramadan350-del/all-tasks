import { Principal } from "./Principal.js";
import { Student } from "./Student.js";
import { Teacher } from "./Teacher.js";

const principal = new Principal("Mona Hassan", "mona@school.edu", "P-001");
const teacher = new Teacher("Omar Adel", "omar@school.edu", "T-001", "Mathematics");
const student = new Student("Laila Samir", "laila@school.edu", "S-001");

principal.addMember(teacher);
principal.addMember(student);
teacher.gradeStudent(student.name, 95);
student.enroll("Mathematics");
student.enroll("Science");

console.log("School members:");
for (const member of [principal, ...principal.listMembers()]) {
  console.log(`- ${member.describeRole()}`);
}
console.log("\nGraded students:", teacher.listGradedStudents());
console.log("Enrolled subjects:", student.listEnrolledSubjects());
