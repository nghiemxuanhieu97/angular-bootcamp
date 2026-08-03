# 📚 Level 0 – JavaScript Foundation

# Lesson 05 – Destructuring

---

# 📖 Theory

## 🎯 Story

Năm 2015, JavaScript ra mắt **ES6 (ECMAScript 2015)**.

Đây là một trong những bản cập nhật lớn nhất lịch sử JavaScript.

Trước ES6, lập trình viên JavaScript thường phải viết rất nhiều đoạn code lặp lại chỉ để lấy dữ liệu từ Object hoặc Array.

Ví dụ.

```javascript
const employee = {
    id: 1,
    name: "Hieu",
    department: "R&D"
};

const id = employee.id;
const name = employee.name;
const department = employee.department;
```

Ba dòng.

Không nhiều.

Nhưng nếu object có:

* 15 property
* 20 property
* 30 property

thì sao?

Code bắt đầu dài và lặp lại.

ES6 sinh ra **Destructuring** để giải quyết đúng vấn đề này.

---

# 😭 Problem

Bạn có Object.

```javascript
const employee = {
    id: 1,
    name: "Hieu",
    department: "R&D"
};
```

Bạn muốn lấy:

* id
* name

Cách cũ.

```javascript
const id = employee.id;
const name = employee.name;
```

Nếu lấy 15 property.

Bạn phải viết 15 dòng.

---

# 💡 Solution

Destructuring.

```javascript
const { id, name } = employee;
```

Chỉ một dòng.

Mental model.

```text
employee
        │
        ▼
Object
 ├── id
 ├── name
 └── department

↓

const { id, name }

↓

id = 1
name = "Hieu"
```

---

# ☕ Java Comparison

Trong Java.

```java
Employee employee = getEmployee();

String name = employee.getName();
int id = employee.getId();
```

Java không có cú pháp destructuring như JavaScript.

JavaScript viết:

```javascript
const { id, name } = employee;
```

Đây là khác biệt đầu tiên.

---

# Destructuring với Array

Object.

```javascript
const employee = {
    id: 1,
    name: "Hieu"
};

const { id, name } = employee;
```

Array.

```javascript
const names = [
    "Hieu",
    "Tom",
    "Jerry"
];
```

Lấy phần tử đầu.

```javascript
const [first] = names;
```

↓

```text
first

↓

"Hieu"
```

---

Lấy hai phần tử.

```javascript
const [first, second] = names;
```

↓

```text
first = "Hieu"

second = "Tom"
```

---

# Có bắt buộc lấy hết không?

Không.

```javascript
const employee = {
    id: 1,
    name: "Hieu",
    department: "R&D"
};

const { name } = employee;
```

Chỉ lấy:

```text
name
```

Không cần lấy:

* id
* department

---

Array cũng vậy.

```javascript
const names = [
    "Hieu",
    "Tom",
    "Jerry"
];
```

```javascript
const [, second] = names;
```

Mental model.

```text
Index

0

↓

Bỏ qua

1

↓

second
```

Kết quả.

```text
second = "Tom"
```

---

# 🧠 Inside the Engine

Destructuring **không tạo Object mới**.

Ví dụ.

```javascript
const { name } = employee;
```

Engine hiểu như:

```javascript
const name = employee.name;
```

Đây chỉ là **cú pháp rút gọn**.

Tương tự.

```javascript
const [first] = names;
```

Engine có thể hiểu như:

```javascript
const first = names[0];
```

📌 Không có phép màu nào xảy ra cả.

Chỉ là cú pháp giúp code ngắn hơn.

---

# Angular dùng ở đâu?

Ví dụ.

```typescript
const employee = this.selectedEmployee;
```

Thay vì.

```typescript
const id = employee.id;
const name = employee.name;
```

Angular Developer thường viết.

```typescript
const { id, name } = employee;
```

Hoặc.

```typescript
const { patientId, visitDate } = response;
```

Đây là cú pháp bạn sẽ gặp **rất thường xuyên** trong Angular.

---

# 🌱 Advanced Note

Hôm nay chúng ta **chưa học**:

* Rename khi destructuring
* Default value
* Nested destructuring
* Destructuring trong function parameter
* Destructuring kết hợp Rest

Chúng ta sẽ học sau.

---

# 🎯 Tổng kết

Destructuring giúp:

* Lấy dữ liệu từ Object nhanh hơn.
* Lấy dữ liệu từ Array nhanh hơn.
* Giảm code lặp.
* Code ngắn và dễ đọc hơn.

Mental model:

```text
Object

↓

const { property }

↓

Biến mới
```

```text
Array

↓

const [index]

↓

Biến mới
```

---

# 🙋 Phần 2 – Giải đáp

Theo đúng quy trình Bootcamp:

> **Có phần nào trong bài hôm nay bạn chưa hiểu hoặc muốn tôi giải thích sâu hơn không?**

Tôi đoán có một câu hỏi mà bạn có thể sắp hỏi:

> **"Nếu viết `const { id } = employee;` thì biến `id` có liên kết với `employee.id` không, hay chỉ là một bản sao giá trị?"**

Đây là một câu hỏi rất hay, nhưng nó liên quan đến **primitive vs reference value** và sẽ được giải thích đúng thời điểm để không làm bạn quá tải. Chúng ta sẽ chỉ đào sâu nếu bạn thực sự muốn trước khi chuyển sang phần câu hỏi.
