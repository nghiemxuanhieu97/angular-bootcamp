const employees = [
    { id: 1, name: "Hieu", active: true, salary: 1000 },
    { id: 2, name: "Tom", active: false, salary: 2000 },
    { id: 3, name: "Jerry", active: true, salary: 1500 }
];

//Thinking
// Vì có employees là một mảng nhân viên, yêu cầu đề bài là hiển thị danh sách tên nhân viên thôi
// sẽ loop danh sách = forEach, sau đó với mỗi nhân viên tạo biến lấy tên nhân viên rồi tạo thẻ li
// thêm vào ul employeeList 

const employeeList = document.getElementById("employeeList");

employees.forEach(employee => {
       const employeeNameElement = document.createElement("li")
       employeeNameElement.textContent = employee.name;
       employeeList.appendChild(employeeNameElement);
    }
)

