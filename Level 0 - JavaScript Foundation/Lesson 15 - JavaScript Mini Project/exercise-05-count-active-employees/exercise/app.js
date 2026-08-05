const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const activeEmployeeCount = document.getElementById("activeEmployeeCount");
// Đếm và hiển thị số nhân viên đang active.
// TODO: Filter the active employees and get the result's length.
// TODO: Display the count in activeEmployeeCount.
activeEmployeeCount.textContent = employees.filter(employee => employee.active).length;

