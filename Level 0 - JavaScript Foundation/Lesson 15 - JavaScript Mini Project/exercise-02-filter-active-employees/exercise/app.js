const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const employeeList = document.getElementById("employeeList");

// Cách 1: Dùng forEach và if
// employees.forEach(employee => {
//     if(employee.active) {
//         const employeeNameElement = document.createElement("li")
//         employeeNameElement.textContent = employee.name;
//         employeeList.appendChild(employeeNameElement);
    
//     }
// })

// Cách 2: Dùng filter và forEach
employees.filter(employee => employee.active).forEach(employee => {
    const employeeNameElement = document.createElement("li")
    employeeNameElement.textContent = employee.name;
    employeeList.appendChild(employeeNameElement);
})