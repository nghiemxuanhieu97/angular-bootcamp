const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const totalSalary = document.getElementById("totalSalary");
//Tính và hiển thị tổng lương của tất cả nhân viên.
// TODO: Use reduce() with an initial value of 0 to calculate the total salary.
const total = employees.reduce((sum, employee) => sum + employee.salary, 0);
// TODO: Display the result in totalSalary.
totalSalary.textContent = `$${total}`;
