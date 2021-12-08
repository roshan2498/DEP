// Composite pattern lets clients to treat the individual objects in a uniform manner.

/*
Employee interface :
constructor(name, salary)
getName()
setSalary()
getSalary()
getRoles()
*/

class Developer {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  getRoles() {
    return this.roles;
  }

  develop() {
    return "Junior developer.";
  }
}

class Designer {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  getRoles() {
    return this.roles;
  }

  design() {
    return "UX/UI Designer";
  }
}

class Organization {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  getNetSalaries() {
    let netSalary = 0;

    this.employees.forEach((employee) => {
      netSalary += employee.getSalary();
    });

    return netSalary;
  }
}

// employees
const john = new Developer("John", 12000);
const jane = new Designer("Jane", 10000);

// add them to organization
const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log("Net Salaries: ", organization.getNetSalaries());
