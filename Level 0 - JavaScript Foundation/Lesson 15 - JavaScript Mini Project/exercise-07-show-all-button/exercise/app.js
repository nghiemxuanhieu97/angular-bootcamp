const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

const employeeList = document.getElementById("employeeList");
const showAllButton = document.getElementById("showAllButton");
const showActiveButton = document.getElementById("showActiveButton");

function renderEmployees(employeeData) {
    // TODO: Clear the current list and render employeeData.
    employeeList.innerHTML = '';
    const employeeText = document.createElement('p');
    const employeeListMap =  employeeData.map(e => `ID: ${e.id}, name: ${e.name}, active: ${e.active?'Yes':'No'}, salary: $${e.salary}`)
    employeeListMap.forEach(e => {
        employeeText.innerHTML += e + '<br>'
    });
    employeeList.innerHTML = employeeText.innerHTML;
}

// TODO: Use renderEmployees() in both button callbacks.
showAllButton.addEventListener("click", () => renderEmployees(employees))
showActiveButton.addEventListener("click", () => renderEmployees(employees.filter(e => e.active)))
// TODO: Initially render all employees.
renderEmployees(employees)
