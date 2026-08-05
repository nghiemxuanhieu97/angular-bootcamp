const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const employeeList = document.getElementById("employeeList");
const showActiveButton = document.getElementById("showActiveButton");
// Hiển thị tất cả nhân viên lúc đầu và lọc danh sách khi nhấn nút Show Active.

function renderEmployees(employeeData) {
    // TODO: Clear the current list and render employeeData.
    employeeList.innerHTML = '';
    employeeData.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `ID: ${employee.id}, name: ${employee.name}, active: ${employee.active === true? "yes":"No"}, salary: ${employee.salary}`
        employeeList.appendChild(li)
    })
}

// TODO: On button click, filter active employees and render them.
showActiveButton.addEventListener("click", () => {renderEmployees(employees.filter(e => e.active))})
// TODO: Initially render all employees.
renderEmployees(employees)
