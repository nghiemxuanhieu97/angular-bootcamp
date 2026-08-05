const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const employeeList = document.getElementById("employeeList");
const employeeDetail = document.getElementById("employeeDetail");
//Hiển thị thông tin chi tiết khi người dùng chọn một nhân viên.
// TODO: Render one clickable li for each employee.
employees.forEach(employee => {
    const li = document.createElement("li");
    li.textContent = employee.name;
    li.addEventListener("click", () => findAndShowEmployeeDetails(employee.id));
    employeeList.appendChild(li);
})


// TODO: In the click callback, use find() to get the employee by ID.
function findAndShowEmployeeDetails(employeeId) {
    // employeeDetail.removeChild(employeeDetail.firstChild);
    const employee=employees.find(employee => employee.id === employeeId);
    showEmployeeDetails(employee)
}
// TODO: Display the employee's ID, name, and salary in employeeDetail.
function showEmployeeDetails(employee) {
    const p = document.createElement("p");
    p.textContent = `- <b>ID:</b> ${employee.id} <br>- <b>Name:</b> ${employee.name} <br>- <b>Salary:</b> ${employee.salary}`;
    employeeDetail.innerHTML = p.textContent;
}
