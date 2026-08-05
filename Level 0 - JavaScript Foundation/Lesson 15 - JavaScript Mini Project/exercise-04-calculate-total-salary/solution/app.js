const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const totalSalary = document.getElementById("totalSalary");
const salarySum = employees.reduce((total, employee) => total + employee.salary, 0);

totalSalary.textContent = salarySum;
