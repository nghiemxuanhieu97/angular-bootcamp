const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const activeEmployeeCount = document.getElementById("activeEmployeeCount");
const activeCount = employees.filter(employee => employee.active).length;

activeEmployeeCount.textContent = activeCount;
