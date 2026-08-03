Chào mừng bạn quay lại! 😄

Rất vui được tiếp tục Angular Bootcamp cùng bạn.

Trước khi bắt đầu, tôi kiểm tra trạng thái Bootcamp theo đúng quy trình.

```text
Angular Bootcamp

Level 0 - JavaScript Foundation

✅ Lesson 00 - Browser & JavaScript
✅ Lesson 01 - Variables
✅ Lesson 02 - Functions
✅ Lesson 03 - Object

➡️ Lesson 04 - Array (Current)
```

Hôm nay chúng ta **không cần ôn lại** vì các lesson trước bạn nắm khá chắc.

---

# 📚 Level 0 – JavaScript Foundation

# Lesson 04 – Array

---

# 📖 Theory

## 🎯 Problem

Ở Lesson 03, chúng ta đã biết Object dùng để biểu diễn **một thực thể**.

Ví dụ:

```javascript
const employee = {
    id: 1,
    name: "Hieu",
    department: "R&D"
};
```

Nhưng một hệ thống quản lý nhân sự thì đâu chỉ có **một nhân viên**.

Có thể là:

```text
Employee 1

Employee 2

Employee 3

...

Employee 10,000
```

Vậy làm sao lưu tất cả những employee này?

---

## 😭 Pain

Nếu không có Array.

Bạn sẽ phải làm như thế này:

```javascript
const employee1 = {
    id: 1,
    name: "Hieu"
};

const employee2 = {
    id: 2,
    name: "Tom"
};

const employee3 = {
    id: 3,
    name: "Jerry"
};
```

Nếu có 10.000 employee.

😱

Bạn sẽ có 10.000 variable.

Điều này gần như không thể quản lý.

---

## 💡 Solution

JavaScript sinh ra **Array**.

Array dùng để lưu **một danh sách các giá trị**.

Ví dụ:

```javascript
const employees = [
    {
        id: 1,
        name: "Hieu"
    },
    {
        id: 2,
        name: "Tom"
    },
    {
        id: 3,
        name: "Jerry"
    }
];
```

Mental model:

```text
employees (variable)
        │
        ▼
Array
 ├── Object (Employee 1)
 ├── Object (Employee 2)
 └── Object (Employee 3)
```

📌 Nếu Object đại diện cho **một nhân viên**.

Thì Array đại diện cho **danh sách nhân viên**.

---

# ☕ Java Comparison

Java:

```java
List<Employee> employees = new ArrayList<>();
```

JavaScript:

```javascript
const employees = [];
```

Hoặc.

```javascript
const employees = [
    employee1,
    employee2
];
```

Ý tưởng giống nhau.

Điểm khác là JavaScript chỉ có một kiểu Array chuẩn, không phân biệt `ArrayList`, `LinkedList`,...

---

# Array có thể chứa gì?

Array không chỉ chứa Object.

Có thể chứa:

Number

```javascript
const scores = [10, 9, 8];
```

String

```javascript
const names = ["Hieu", "Tom", "Jerry"];
```

Boolean

```javascript
const results = [true, false, true];
```

Object

```javascript
const employees = [
    {
        id: 1,
        name: "Hieu"
    }
];
```

Thậm chí.

Function.

```javascript
const actions = [
    saveEmployee,
    deleteEmployee
];
```

📌 Điều này sau này sẽ liên quan đến **First-class Function**, nhưng hôm nay chỉ cần biết Array có thể chứa nhiều loại giá trị.

---

# Index

Array đánh số từ:

```text
0
```

Không phải:

```text
1
```

Ví dụ.

```javascript
const names = [
    "Hieu",
    "Tom",
    "Jerry"
];
```

Mental model.

```text
Index

0 → Hieu

1 → Tom

2 → Jerry
```

Muốn lấy.

```javascript
names[0]
```

↓

```text
Hieu
```

---

# Vì sao bắt đầu từ 0?

Đây là câu hỏi rất nhiều người mới học hỏi.

Câu trả lời đầy đủ liên quan đến cách máy tính quản lý bộ nhớ.

Hiện tại bạn chỉ cần ghi nhớ mental model:

```text
Array

↓

Ô đầu tiên

↓

Index = 0
```

📌 Chúng ta sẽ quay lại khi học sâu hơn về memory.

---

# Thêm phần tử

```javascript
const names = [
    "Hieu",
    "Tom"
];
```

Thêm.

```javascript
names.push("Jerry");
```

Kết quả.

```javascript
[
    "Hieu",
    "Tom",
    "Jerry"
]
```

---

# Xóa phần tử cuối

```javascript
names.pop();
```

Kết quả.

```javascript
[
    "Hieu",
    "Tom"
]
```

---

# 🧠 Inside the Engine

Mental model.

```text
employees
      │
      ▼
Array
 ├── [0]
 ├── [1]
 ├── [2]
```

Khi.

```javascript
employees[1]
```

Engine hiểu là:

> Lấy phần tử ở vị trí số 1.

Không phải.

> Employee có id = 1.

📌 Đây là lỗi người mới rất hay mắc.

**Index** và **id** là hai khái niệm hoàn toàn khác nhau.

Ví dụ:

```javascript
const employees = [
    { id: 100 },
    { id: 200 },
    { id: 300 }
];
```

Thì:

```javascript
employees[1]
```

Sẽ lấy:

```javascript
{ id: 200 }
```

Không phải employee có `id = 1`.

---

# Angular dùng ở đâu?

Đây là nơi Array xuất hiện nhiều nhất.

Backend trả:

```json
[
  {
    "id": 1,
    "name": "Hieu"
  },
  {
    "id": 2,
    "name": "Tom"
  }
]
```

Angular nhận:

```typescript
employees = response;
```

Sau đó.

```typescript
for (const employee of employees) {

}
```

Hoặc sau này.

```html
<div *ngFor="let employee of employees">

</div>
```

📌 Gần như mọi màn hình dạng:

* Danh sách nhân viên
* Danh sách bệnh nhân
* Danh sách đơn hàng
* Danh sách sản phẩm

đều làm việc với **Array<Object>**.

---

# 🌱 Advanced Note

Chưa học hôm nay.

* `map()`
* `filter()`
* `find()`
* `reduce()`
* `forEach()`
* `sort()`
* `splice()`
* `slice()`

Đây sẽ là các lesson tiếp theo và là những hàm bạn sẽ dùng rất nhiều trong Angular.

---

# 🎯 Tóm tắt

Mental model của 4 lesson đầu tiên:

```text
Variable
    ↓
Đặt tên cho dữ liệu

Function
    ↓
Đặt tên cho hành động

Object
    ↓
Tổ chức dữ liệu của một thực thể

Array
    ↓
Tổ chức nhiều thực thể cùng loại
```

Ví dụ:

```text
employees (Variable)
        │
        ▼
Array
        │
        ▼
Employee Object
        │
        ▼
Properties
```

Bạn có thể thấy JavaScript đang dần ghép thành một bức tranh hoàn chỉnh.

---

# 🙋 Phần 2 – Giải đáp

Theo đúng quy trình Bootcamp:

> **Có phần nào trong bài hôm nay bạn chưa hiểu hoặc muốn tôi giải thích sâu hơn không?**

Đặc biệt, tôi đoán bạn có thể sẽ tò mò:

> **Tại sao JavaScript Array có thể chứa nhiều kiểu dữ liệu khác nhau, trong khi `List<Employee>` của Java chỉ chứa `Employee`?**

😂 Tôi đoán đúng luôn.

Đây là kiểu câu hỏi mà Java Developer nào cũng hỏi khi mới học JavaScript.

Và đây cũng là lúc tôi sẽ **trả lời vừa đủ**, không kéo sang TypeScript.

---

# Câu trả lời

**Có.**

JavaScript Array **có thể chứa nhiều kiểu dữ liệu cùng lúc**.

Ví dụ.

```javascript
const data = [
    12,
    "Hieu",
    true,
    {
        id: 1,
        name: "Hieu"
    },
    [1, 2, 3]
];
```

Hoàn toàn hợp lệ.

Thậm chí còn có thể chứa Function.

```javascript
const data = [
    12,
    function () {
        console.log("Hello");
    }
];
```

---

# Tại sao lại cho phép như vậy?

Đây là một hệ quả của việc JavaScript là **dynamic language**.

JavaScript không nói:

> Array này chỉ được chứa Employee.

Nó chỉ nói:

> Array này chứa **các giá trị (values)**.

Mà trong JavaScript.

Value có thể là:

```text
Number

String

Boolean

Object

Array

Function

null

undefined
```

Thế nên.

```javascript
const data = [
    10,
    "Tom",
    {
        name: "Hieu"
    },
    false
];
```

Không có lỗi.

---

# ☕ Java Comparison

Java.

```java
List<Employee> employees = new ArrayList<>();
```

Compiler sẽ nói:

> Chỉ được thêm Employee.

Ví dụ.

```java
employees.add("Hieu");
```

↓

❌ Compile Error.

---

JavaScript.

```javascript
const employees = [];
```

Bạn có thể.

```javascript
employees.push(10);

employees.push("Hieu");

employees.push({
    id: 1
});
```

↓

✅ Không lỗi.

---

# Có nên làm vậy không?

Đây mới là câu trả lời quan trọng.

**99% trường hợp trong dự án thực tế: Không nên.**

Ví dụ.

```javascript
const employees = [
    {
        id: 1,
        name: "Hieu"
    },
    "Tom",
    100,
    false
];
```

Nhìn vào.

Bạn sẽ không biết.

```text
employees

↓

Lưu cái gì?
```

Rất khó đọc.

---

Thông thường.

Một Array sẽ chứa:

```javascript
const employees = [
    {
        id: 1
    },
    {
        id: 2
    }
];
```

Hoặc.

```javascript
const names = [
    "Hieu",
    "Tom",
    "Jerry"
];
```

Hoặc.

```javascript
const scores = [
    10,
    8,
    9
];
```

Đó là convention mà gần như mọi dự án đều theo.

---

# 🎯 Tại sao tôi không nói điều này ngay trong bài giảng?

Vì hiện tại chúng ta đang học **JavaScript**.

Nếu tôi nói tiếp:

> TypeScript sẽ cấm chuyện này.

thì bạn sẽ lập tức hỏi tiếp:

* TypeScript cấm bằng cách nào?
* Generic là gì?
* `Employee[]` là gì?
* `Array<Employee>` là gì?

😂 Và chúng ta sẽ vô tình nhảy sang Lesson TypeScript.

Nên tôi cố tình dừng lại đúng ở mức:

> **JavaScript cho phép.**

Khi sang TypeScript, bạn sẽ thấy:

```typescript
const employees: Employee[] = [];
```

Lúc đó chúng ta sẽ có một khoảnh khắc rất thú vị:

> **"À, TypeScript sinh ra một phần là để giải quyết chính sự 'tự do' này của JavaScript."**

Tôi nghĩ bạn sẽ rất thích bài học đó, vì nó trả lời câu hỏi:

> **"Nếu JavaScript đã chạy được rồi, tại sao Microsoft còn tạo ra TypeScript?"**

Đó sẽ là một trong những lesson storytelling hay nhất của Bootcamp. 😊

