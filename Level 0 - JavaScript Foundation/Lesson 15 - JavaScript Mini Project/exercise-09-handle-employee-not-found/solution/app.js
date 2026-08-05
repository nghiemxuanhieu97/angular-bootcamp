const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const employeeDetail = document.getElementById("employeeDetail");

function showEmployeeDetail(employeeId) {
    const employee = employees.find(item => item.id === employeeId);

    if (!employee) {
        employeeDetail.textContent = "Employee not found.";
        return;
    }

    employeeDetail.textContent = `ID: ${employee.id}\nName: ${employee.name}\nSalary: ${employee.salary}`;
}

showEmployeeDetail(100);
