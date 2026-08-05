const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const employeeList = document.getElementById("employeeList");
const employeeDetail = document.getElementById("employeeDetail");
let selectedEmployeeId = null;
// Hiển thị chi tiết và highlight nhân viên được chọn.
function renderEmployees() {
    // TODO: Rebuild the list and add selected when an ID matches selectedEmployeeId.
    employeeList.innerHTML = ''
    employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = employee.name;
        if (employee.id === selectedEmployeeId)
            li.classList.add("selected");
        employeeList.append(li);
        li.addEventListener("click", () => {
            selectedEmployeeId = employee.id;
            showEmployeeDetail(employee);
            renderEmployees();
        })

    })
    // TODO: On click, update the state, show details, and re-render.
}

function showEmployeeDetail(employee) {
    // TODO: Display the employee's ID, name, and salary.
    employeeDetail.innerHTML = `- <b>ID:</b> ${employee.id} <br>- <b>Name:</b> ${employee.name} <br>- <b>Salary:</b> ${employee.salary}`;
}

// TODO: Render the initial list.
renderEmployees();