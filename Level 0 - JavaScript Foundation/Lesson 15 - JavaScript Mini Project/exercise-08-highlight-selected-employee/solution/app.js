const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const employeeList = document.getElementById("employeeList");
const employeeDetail = document.getElementById("employeeDetail");
let selectedEmployeeId = null;

function renderEmployees() {
    employeeList.innerHTML = "";

    employees.forEach(employee => {
        const employeeItem = document.createElement("li");
        employeeItem.textContent = employee.name;

        if (employee.id === selectedEmployeeId) {
            employeeItem.classList.add("selected");
        }

        employeeItem.addEventListener("click", () => {
            selectedEmployeeId = employee.id;
            showEmployeeDetail(employee);
            renderEmployees();
        });

        employeeList.appendChild(employeeItem);
    });
}

function showEmployeeDetail(employee) {
    employeeDetail.textContent = `ID: ${employee.id}\nName: ${employee.name}\nSalary: ${employee.salary}`;
}

renderEmployees();
