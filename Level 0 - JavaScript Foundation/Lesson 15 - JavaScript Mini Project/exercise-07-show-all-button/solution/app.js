const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const employeeList = document.getElementById("employeeList");
const showAllButton = document.getElementById("showAllButton");
const showActiveButton = document.getElementById("showActiveButton");

function renderEmployees(employeeData) {
    employeeList.innerHTML = "";

    employeeData.forEach(employee => {
        const employeeItem = document.createElement("li");
        employeeItem.textContent = employee.name;
        employeeList.appendChild(employeeItem);
    });
}

showAllButton.addEventListener("click", () => renderEmployees(employees));

showActiveButton.addEventListener("click", () => {
    const activeEmployees = employees.filter(employee => employee.active);
    renderEmployees(activeEmployees);
});

renderEmployees(employees);
