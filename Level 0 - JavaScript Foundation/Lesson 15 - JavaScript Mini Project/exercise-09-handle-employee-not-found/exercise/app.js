const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const employeeDetail = document.getElementById("employeeDetail");

function showEmployeeDetail(employeeId) {
    // TODO: Find the employee by ID.
    const existEmployee = employees.find(e => e.id === employeeId);
    // TODO: If no employee exists, show "Employee not found." and return.
    if (!existEmployee)
        employeeDetail.innerHTML = "Employee not found."
    // TODO: Otherwise display the employee's ID, name, and salary.
    else
        employeeDetail.innerHTML = `- <b>ID:</b> ${existEmployee.id} <br>- <b>Name:</b> ${existEmployee.name} <br>- <b>Salary:</b> ${existEmployee.salary}`;
    
}

showEmployeeDetail(10);
