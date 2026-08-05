const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const employeeList = document.getElementById("employeeList");
const employeeDetail = document.getElementById("employeeDetail");

employees.forEach(employee => {
    const employeeItem = document.createElement("li");
    employeeItem.textContent = employee.name;

    employeeItem.addEventListener("click", () => {
        const selectedEmployee = employees.find(item => item.id === employee.id);
        employeeDetail.textContent = `ID: ${selectedEmployee.id}\nName: ${selectedEmployee.name}\nSalary: ${selectedEmployee.salary}`;
    });

    employeeList.appendChild(employeeItem);
});
