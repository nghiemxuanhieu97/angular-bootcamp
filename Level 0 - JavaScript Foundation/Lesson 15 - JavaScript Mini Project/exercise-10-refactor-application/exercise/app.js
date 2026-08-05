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
    employeeList.innerHTML = ''
    // TODO: Render employeeData, selection state, and click callbacks.
    employeeData.forEach(e => {
        const li = document.createElement('li');
        li.innerHTML = e.name;

        if (e.id === selectedEmployeeId)
            li.classList.add('selected')
        li.addEventListener("click", () => {
            showEmployeeDetail(e.id);
            selectedEmployeeId = e.id;
            renderEmployees(employeeData)
        })
        employeeList.append(li)
    })
}

function showEmployeeDetail(employeeId) {
    // TODO: Find and display an employee, or display the not-found message.
    const selectedEmployee = employees.find(e => e.id === employeeId);
    employeeDetail.innerHTML = `- ID: <b>${selectedEmployee.id}</b> <br>- Name: <b>${selectedEmployee.name}</b> <br>- Salary: <b>${selectedEmployee.salary}</b>`;
}

function calculateTotalSalary(employeeData) {
    // TODO: Return the total salary.
    return employeeData.reduce((total, employee) => total + employee.salary, 0);
}

function calculateActiveEmployeeCount(employeeData) {
    // TODO: Return the number of active employees.
    return employeeData.filter(e => e.active).length;
}

function showAllEmployees() {
    // TODO: Render all employees.
    renderEmployees(employees);
}

function showActiveEmployees() {
    // TODO: Filter and render active employees.
    const activeEmployees = employees.filter(e => e.active);
    renderEmployees(activeEmployees);

}

function renderSummary() {
    // TODO: Display both summary values.
    totalSalary.innerHTML = calculateTotalSalary(employees);
    activeEmployeeCount.innerHTML = calculateActiveEmployeeCount(employees);

}

// TODO: Register both button listeners.
showAllButton.addEventListener("click", () => showAllEmployees())
showActiveButton.addEventListener("click", () => showActiveEmployees())
// TODO: Initially render all employees and the summary.
showAllEmployees();
renderSummary();
