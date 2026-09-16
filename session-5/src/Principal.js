import { Person } from "./Person.js";

export class Principal extends Person {
  constructor(name, email, id) {
    super(name, email, id);
    this.#members = [];
  }

  #members;

  addMember(member) {
    if (!(member instanceof Person)) {
      throw new Error("Only Person instances can be added as members.");
    }
    if (this.#members.some((existingMember) => existingMember.id === member.id)) {
      throw new Error(`A member with ID ${member.id} already exists.`);
    }
    this.#members.push(member);
  }

  removeMember(memberId) {
    const originalLength = this.#members.length;
    this.#members = this.#members.filter((member) => member.id !== String(memberId).trim());
    return this.#members.length < originalLength;
  }

  listMembers() {
    return [...this.#members];
  }

  describeRole() {
    return `${this.name} leads the school and manages ${this.#members.length} member(s).`;
  }
}
