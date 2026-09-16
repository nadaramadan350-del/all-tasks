export class Person {
  #email;
  #id;

  constructor(name, email, id) {
    this.name = this.#validateName(name);
    this.email = email;
    this.id = id;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    if (typeof value !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
      throw new Error("Email must be a valid email address.");
    }
    this.#email = value.trim().toLowerCase();
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    if ((typeof value !== "string" && typeof value !== "number") || String(value).trim() === "") {
      throw new Error("ID must be a non-empty string or number.");
    }
    this.#id = String(value).trim();
  }

  describeRole() {
    throw new Error("Each school role must implement describeRole().");
  }

  #validateName(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Name must be a non-empty string.");
    }
    return value.trim();
  }
}
