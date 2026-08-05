const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const employeeList = document.getElementById("employeeList");
const employeeDetail = document.getElementById("employeeDetail");
const totalSalary = document.getElementById("totalSalary");
const activeEmployeeCount = document.getElementById("activeEmployeeCount");
const showAllButton = document.getElementById("showAllButton");
const showActiveButton = document.getElementById("showActiveButton");
let selectedEmployeeId = null;

function renderEmployees(employeeData) {
    employeeList.innerHTML = "";

    employeeData.forEach(employee => {
        const employeeItem = document.createElement("li");
        employeeItem.textContent = employee.name;

        if (employee.id === selectedEmployeeId) {
            employeeItem.classList.add("selected");
        }

        employeeItem.addEventListener("click", () => {
            selectedEmployeeId = employee.id;
            showEmployeeDetail(employee.id);
            renderEmployees(employeeData);
        });

        employeeList.appendChild(employeeItem);
    });
}

function showEmployeeDetail(employeeId) {
    const employee = employees.find(item => item.id === employeeId);

    if (!employee) {
        employeeDetail.textContent = "Employee not found.";
        return;
    }

    employeeDetail.textContent = `ID: ${employee.id}\nName: ${employee.name}\nSalary: ${employee.salary}`;
}

function calculateTotalSalary(employeeData) {
    return employeeData.reduce((total, employee) => total + employee.salary, 0);
}

function calculateActiveEmployeeCount(employeeData) {
    return employeeData.filter(employee => employee.active).length;
}

function showAllEmployees() {
    renderEmployees(employees);
}

function showActiveEmployees() {
    const activeEmployees = employees.filter(employee => employee.active);
    renderEmployees(activeEmployees);
}

function renderSummary() {
    totalSalary.textContent = calculateTotalSalary(employees);
    activeEmployeeCount.textContent = calculateActiveEmployeeCount(employees);
}

showAllButton.addEventListener("click", showAllEmployees);
showActiveButton.addEventListener("click", showActiveEmployees);

showAllEmployees();
renderSummary();
