# 📖 Theory

## 🎯 Problem

Ở Lesson 01, chúng ta đã học Variable.

Variable có thể lưu:

```javascript
const name = "Hieu";
const age = 29;
const company = "TMA";
```

Nhưng bây giờ hãy tưởng tượng bạn cần quản lý **một nhân viên**.

Nếu chỉ dùng variable.

```javascript
const employeeName = "Hieu";
const employeeAge = 29;
const employeeCompany = "TMA";
const employeeDepartment = "R&D";
const employeeEmail = "hieu@tma.com";
const employeePhone = "0909123456";
```

Nhìn có vẻ vẫn ổn.

Nhưng nếu có:

```text
100 nhân viên
```

Bạn sẽ có hàng trăm biến.

Mọi thứ bắt đầu hỗn loạn.

---

## 😭 Pain

Bạn muốn lưu nhân viên.

```javascript
saveEmployee(
    employeeName,
    employeeAge,
    employeeCompany,
    employeeDepartment,
    employeeEmail,
    employeePhone
);
```

Ba tháng sau.

Business thêm:

* Address
* Birthday
* Position

Bạn phải sửa:

* Function
* Parameter
* Chỗ gọi Function

ở rất nhiều nơi.

Đây là dấu hiệu:

> **Các dữ liệu liên quan đang bị tách rời.**

---

## 💡 Solution

Thay vì tạo nhiều biến.

Ta gom chúng thành **một Object**.

```javascript
const employee = {
    name: "Hieu",
    age: 29,
    company: "TMA",
    department: "R&D",
    email: "hieu@tma.com"
};
```

Lúc này.

```javascript
saveEmployee(employee);
```

Mọi thông tin của nhân viên đi cùng nhau.

---

# ☕ Java Comparison

Đây là điểm đầu tiên bạn cần chú ý.

Java.

```java
public class Employee {

    private String name;
    private int age;

}
```

Muốn tạo object.

Bạn phải có class.

```java
Employee employee = new Employee();
```

---

JavaScript.

Bạn có thể tạo object ngay.

```javascript
const employee = {
    name: "Hieu",
    age: 29
};
```

📌 **Không cần tạo class trước.**

Đây là khác biệt đầu tiên giữa Java và JavaScript.

---

# Object gồm những gì?

```javascript
const employee = {
    name: "Hieu",
    age: 29
};
```

Mental model.

```text
employee
    │
    ▼
Object
 ├── name → "Hieu"
 └── age  → 29
```

Ở đây.

* `employee` là variable.
* Object là giá trị mà variable đang tham chiếu tới.
* `name`, `age` gọi là **property**.

📌 Từ hôm nay chúng ta sẽ dùng đúng thuật ngữ:

> **Property**

Không gọi là field.

Vì trong JavaScript, **field** thường dùng khi nói đến class (đặc biệt là TypeScript), còn dữ liệu bên trong object được gọi là **property**.

---

# Truy cập Property

Có hai cách.

## Cách 1 (phổ biến nhất)

```javascript
employee.name
```

Đọc là:

> Lấy property `name` của object `employee`.

---

## Cách 2

```javascript
employee["name"]
```

Hai cách đều đúng.

Trong Angular, khoảng **99%** trường hợp bạn sẽ gặp:

```javascript
employee.name
```

---

# Thêm Property

Ban đầu.

```javascript
const employee = {
    name: "Hieu"
};
```

Sau đó.

```javascript
employee.age = 29;
```

Kết quả.

```javascript
{
    name: "Hieu",
    age: 29
}
```

Bạn không cần sửa class như Java.

---

# Xóa Property

```javascript
delete employee.age;
```

Kết quả.

```javascript
{
    name: "Hieu"
}
```

---

# 🧠 Inside the Engine

Khi viết.

```javascript
const employee = {
    name: "Hieu"
};
```

Mental model.

```text
employee
    │
    ▼
Object
 └── name → "Hieu"
```

Sau đó.

```javascript
employee.age = 29;
```

Engine không tạo object mới.

Nó bổ sung thêm một property vào object hiện tại.

Mental model.

```text
employee
    │
    ▼
Object
 ├── name → "Hieu"
 └── age  → 29
```

📌 Đây là lý do đoạn code sau hợp lệ:

```javascript
const employee = {
    name: "Hieu"
};

employee.age = 29;
```

Mặc dù `employee` được khai báo bằng `const`.

Bạn có nhớ Lesson 01 không?

`const` **không khóa object**.

Nó chỉ không cho biến `employee` trỏ sang object khác.

---

# Angular dùng ở đâu?

Giả sử Backend Java của bạn trả về:

```json
{
  "id": 1,
  "name": "Hieu",
  "department": "R&D"
}
```

Trong Angular.

```typescript
const employee = response;

console.log(employee.name);
```

Hoặc.

```typescript
this.selectedEmployee = employee;
```

Hay.

```typescript
if (employee.department === "R&D") {
    ...
}
```

👉 Mỗi ngày bạn sẽ thao tác với hàng trăm object như thế này.

---

# 🌱 Advanced Note

Chưa học hôm nay.

* Object Reference
* Deep Copy
* Shallow Copy
* Spread Object
* Object Destructuring
* Prototype
* `this`

Đây đều là những chủ đề sẽ học sau.

---

# 🎯 Tóm tắt

Object giúp:

* Gom nhiều dữ liệu liên quan lại với nhau.
* Truyền dữ liệu dễ hơn.
* Đọc code dễ hơn.
* Quản lý dữ liệu tốt hơn.

Điểm khác Java quan trọng nhất hôm nay:

> **JavaScript có thể tạo object trực tiếp mà không cần class.**
