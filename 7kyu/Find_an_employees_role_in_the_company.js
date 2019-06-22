function findEmployeesRole(name) {
  let x = name.split(' ');
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].firstName === x[0] && employees[i].lastName === x[1]) {
      return employees[i].role;
    }
  }
  return 'Does not work here!';
}
