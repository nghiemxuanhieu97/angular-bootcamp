# 📚 Level 0 – JavaScript Foundation

# Lesson 13 – Array Methods

Nếu các lesson trước giúp bạn hiểu:

* Array là danh sách dữ liệu.
* Callback là function được truyền vào function khác.
* Arrow Function là cách viết function ngắn gọn.

thì Lesson 13 sẽ trả lời:

> **Làm sao xử lý một danh sách dữ liệu mà không phải tự viết vòng lặp dài dòng?**

Đó chính là **Array Methods**.

---

# 📖 Theory

## 🎯 Story

Giả sử backend trả về danh sách nhân viên:

```javascript
const employees = [
    {
        id: 1,
        name: "Hieu",
        active: true
    },
    {
        id: 2,
        name: "Tom",
        active: false
    },
    {
        id: 3,
        name: "Jerry",
        active: true
    }
];
```

Frontend thường xuyên phải làm những việc như:

* Lấy tên của tất cả nhân viên.
* Lọc nhân viên đang active.
* Tìm nhân viên có `id = 2`.
* Tính tổng dữ liệu.
* Chạy một hành động cho từng nhân viên.

Nếu chưa có Array Methods, bạn sẽ phải tự viết vòng lặp cho từng trường hợp.

---

# 😭 Problem

Ví dụ bạn muốn lấy danh sách tên:

```javascript
const names = [];

for (let index = 0; index < employees.length; index++) {
    names.push(employees[index].name);
}
```

Đoạn code này hoạt động.

Nhưng bạn phải tự quản lý:

* Biến `index`.
* Điều kiện `index < employees.length`.
* Tăng `index`.
* Lấy phần tử theo `employees[index]`.
* Thêm kết quả vào Array mới.

Trong một dự án Angular, các thao tác xử lý danh sách xuất hiện rất nhiều.

Nếu thao tác nào cũng viết vòng lặp thủ công, code sẽ dài và khó đọc.

---

# 💡 Solution

JavaScript cung cấp sẵn các Array Methods.

Hôm nay chúng ta tập trung vào 5 method quan trọng nhất:

```text
forEach()

map()

filter()

find()

reduce()
```

Mental model tổng quát:

```text
Array

↓

Chọn method phù hợp với mục tiêu

↓

Truyền Callback

↓

Method gọi Callback cho từng phần tử

↓

Nhận kết quả
```

---

# 1. `forEach()` – Làm một việc với từng phần tử

Ví dụ:

```javascript
employees.forEach(employee => {
    console.log(employee.name);
});
```

Mental model:

```text
employees

↓

Lấy từng employee

↓

Gọi callback

↓

console.log(employee.name)
```

Kết quả:

```text
Hieu
Tom
Jerry
```

`forEach()` phù hợp khi bạn muốn:

> **Thực hiện một hành động cho từng phần tử.**

Ví dụ:

* In dữ liệu.
* Gửi notification.
* Gọi một function.
* Cập nhật một thành phần bên ngoài.

📌 `forEach()` không được dùng chủ yếu để tạo Array mới.

---

# 2. `map()` – Biến đổi mỗi phần tử thành giá trị mới

Bạn muốn lấy danh sách tên:

```javascript
const names = employees.map(employee => {
    return employee.name;
});
```

Có thể viết ngắn hơn:

```javascript
const names = employees.map(employee => employee.name);
```

Kết quả:

```javascript
[
    "Hieu",
    "Tom",
    "Jerry"
]
```

Mental model:

```text
Employee Object

↓

Callback biến đổi

↓

Employee Name
```

Toàn bộ Array:

```text
Array<Employee>

↓

map()

↓

Array<String>
```

Điểm quan trọng:

> `map()` luôn tạo ra một Array mới.

Số phần tử của Array mới thường bằng số phần tử của Array ban đầu.

```text
3 employees

↓

map()

↓

3 names
```

---

# 3. `filter()` – Giữ lại các phần tử thỏa điều kiện

Bạn muốn lấy nhân viên đang active:

```javascript
const activeEmployees = employees.filter(employee => {
    return employee.active;
});
```

Viết ngắn:

```javascript
const activeEmployees = employees.filter(
    employee => employee.active
);
```

Kết quả:

```javascript
[
    {
        id: 1,
        name: "Hieu",
        active: true
    },
    {
        id: 3,
        name: "Jerry",
        active: true
    }
]
```

Mental model:

```text
Mỗi employee

↓

Kiểm tra điều kiện

↓

true  → giữ lại

false → loại bỏ
```

Điểm quan trọng:

> Callback của `filter()` phải trả về giá trị được hiểu là `true` hoặc `false`.

`filter()` cũng tạo ra Array mới.

Nhưng số lượng phần tử có thể:

* Ít hơn Array cũ.
* Bằng Array cũ.
* Bằng `0`.

---

# 4. `find()` – Tìm một phần tử đầu tiên

Bạn muốn tìm employee có `id = 2`:

```javascript
const employee = employees.find(item => item.id === 2);
```

Kết quả:

```javascript
{
    id: 2,
    name: "Tom",
    active: false
}
```

Mental model:

```text
Kiểm tra phần tử đầu tiên

↓

Không đúng

↓

Kiểm tra phần tử tiếp theo

↓

Đúng

↓

Trả về ngay và dừng
```

Điểm quan trọng:

> `find()` trả về một phần tử, không trả về Array.

Nếu không tìm thấy:

```javascript
undefined
```

Ví dụ:

```javascript
const employee = employees.find(item => item.id === 100);
```

Kết quả:

```javascript
undefined
```

---

# 5. `reduce()` – Gom nhiều phần tử thành một kết quả

`reduce()` là method khó nhất trong bài hôm nay.

Giả sử có:

```javascript
const numbers = [
    10,
    20,
    30
];
```

Bạn muốn tính tổng:

```javascript
const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

Kết quả:

```javascript
60
```

Mental model:

```text
Giá trị ban đầu

0

↓

0 + 10 = 10

↓

10 + 20 = 30

↓

30 + 30 = 60
```

Trong đoạn code:

```javascript
numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

* `sum` là giá trị được tích lũy.
* `number` là phần tử hiện tại.
* `0` là giá trị ban đầu.

`reduce()` có thể biến:

```text
Array

↓

Một giá trị duy nhất
```

Giá trị đó có thể là:

* Number.
* String.
* Object.
* Array.

Nhưng hôm nay chỉ cần hiểu ví dụ tính tổng.

---

# So sánh nhanh

## `forEach()`

```text
Làm một hành động với từng phần tử
```

## `map()`

```text
Biến đổi từng phần tử

↓

Array mới
```

## `filter()`

```text
Lọc theo điều kiện

↓

Array mới
```

## `find()`

```text
Tìm phần tử đầu tiên

↓

Một phần tử hoặc undefined
```

## `reduce()`

```text
Gom cả Array

↓

Một kết quả
```

---

# Callback xuất hiện ở đâu?

Hãy nhìn:

```javascript
employees.map(employee => employee.name);
```

Phần này:

```javascript
employee => employee.name
```

là Callback.

Array Method sẽ gọi Callback cho từng phần tử.

Mental model:

```text
map()

↓

Lấy employee

↓

Gọi callback(employee)

↓

Nhận kết quả

↓

Đưa vào Array mới
```

Đây là lý do chúng ta phải học trước:

```text
Function

↓

First-class Function

↓

Arrow Function

↓

Callback

↓

Array Methods
```

---

# Có thay đổi Array ban đầu không?

Các method như:

```text
map()

filter()
```

thường được dùng để tạo Array mới.

Ví dụ:

```javascript
const activeEmployees = employees.filter(
    employee => employee.active
);
```

`employees` vẫn giữ nguyên.

`activeEmployees` là Array mới.

Mental model:

```text
employees

↓

Không bị thay đổi

+

activeEmployees

↓

Array mới
```

Điều này rất quan trọng trong Angular vì developer thường muốn tạo state mới thay vì sửa trực tiếp dữ liệu cũ.

Chúng ta chưa đi sâu vào Change Detection hoặc Signals ở đây.

---

# Angular dùng ở đâu?

Giả sử API trả về:

```typescript
employees
```

## Hiển thị tên

```typescript
const names = employees.map(employee => employee.name);
```

## Lấy nhân viên active

```typescript
const activeEmployees = employees.filter(
    employee => employee.active
);
```

## Tìm nhân viên đang được chọn

```typescript
const selectedEmployee = employees.find(
    employee => employee.id === selectedId
);
```

## Tính tổng lương

```typescript
const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);
```

Đây là những thao tác bạn sẽ gặp hằng ngày khi viết Angular.

---

# 🌱 Advanced Note

Hôm nay chúng ta chưa học sâu:

* `some()`
* `every()`
* `includes()`
* `sort()`
* Method chaining.
* Hiệu suất khi chạy nhiều Array Methods.
* Mutation và immutability.
* Callback có thêm `index` và toàn bộ `array`.

Chúng ta sẽ học khi cần.

---

# 🎯 Tổng kết

Array Methods giúp xử lý danh sách theo đúng mục tiêu:

```text
Muốn chạy một hành động?

↓

forEach()
```

```text
Muốn biến đổi dữ liệu?

↓

map()
```

```text
Muốn lọc dữ liệu?

↓

filter()
```

```text
Muốn tìm một phần tử?

↓

find()
```

```text
Muốn gom thành một kết quả?

↓

reduce()
```

Điểm quan trọng nhất:

> **Array Method nhận Callback và tự gọi Callback cho từng phần tử.**

Bạn không cần tự quản lý vòng lặp, `index` và việc thêm kết quả thủ công.

---
