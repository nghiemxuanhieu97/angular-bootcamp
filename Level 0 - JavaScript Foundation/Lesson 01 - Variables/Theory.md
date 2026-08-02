# Theory

# Lesson 01 — Variables (`var`, `let`, `const`)

## Problem

> Làm sao máy tính có thể “nhớ” dữ liệu?

Ví dụ:
- Tên người dùng
- Tuổi
- Điểm số
- Danh sách nhân viên
- Trạng thái loading
- Trang hiện tại

Nếu máy tính không thể lưu và truy cập dữ liệu, lập trình gần như không thể tồn tại.

---

# 1. Story — Quay lại thời kỳ máy tính đầu tiên

Hãy quay lại khoảng những năm 1940–1950.

Khi đó, lập trình viên chưa viết code dễ đọc như:

```javascript
const name = "Hieu";
```

Họ phải làm việc gần như trực tiếp với các ô nhớ:

```text
Ô nhớ 100 chứa 15
Ô nhớ 101 chứa 20
```

Muốn lấy lại dữ liệu, lập trình viên phải nhớ:
- Giá trị nào nằm ở ô nào
- Ô nào phục vụ mục đích gì
- Ô nào còn đang được sử dụng

Với vài giá trị thì còn có thể nhớ. Với hàng nghìn giá trị thì gần như không thể.

---

# 2. Pain — Nếu chỉ dùng địa chỉ vùng nhớ

Hãy tưởng tượng code Java được viết như sau:

```text
100 = "Hieu"
101 = 28
102 = "TMA"
```

Sau ba tháng, bạn mở lại code và tự hỏi:
- `100` là gì?
- `101` là gì?
- `102` là gì?

Con người không giỏi ghi nhớ hàng nghìn địa chỉ bộ nhớ.

---

# 3. Solution — Đặt tên cho dữ liệu

Thay vì nhớ `Ô nhớ 100`, ta đặt tên `name`.
Thay vì nhớ `Ô nhớ 101`, ta đặt tên `age`.

Đó là ý tưởng của **variable**.

> Biến là một cái tên hoặc label giúp chương trình tham chiếu đến dữ liệu trong bộ nhớ.

Ví dụ:

```javascript
const age = 28;
```

```text
age
 │
 ▼
+------+
|  28  |
+------+
```

Mental model này sẽ rất quan trọng khi học Object, Array, Reference, Closure, Signal và State Management.

---

# 4. Liên hệ với Java

```java
String name = "Hieu";
int age = 28;
```

Bạn đã dùng biến nhiều năm. JavaScript cũng có biến, nhưng cách khai báo linh hoạt hơn.

---

# 5. JavaScript có ba từ khóa khai báo biến

```javascript
var name = "Hieu";
let age = 28;
const company = "TMA";
```

Nếu cả ba đều khai báo biến, vì sao JavaScript cần ba từ khóa?

---

# 6. Story — JavaScript ban đầu chỉ có `var`

Năm 1995, JavaScript chỉ có `var`.

```javascript
var name = "Tom";
```

Không có `let`, không có `const`.

Website lúc đó nhỏ, code thường chỉ vài chục dòng, nên `var` có vẻ đủ dùng. Khi ứng dụng web lớn dần, các điểm yếu của `var` bắt đầu gây nhiều bug.

---

# 7. Vấn đề thứ nhất của `var`: khai báo lại

```javascript
var score = 10;
var score = 100;
```

JavaScript không báo lỗi. Giá trị cuối cùng là `100`.

Trong dự án lớn, một developer có thể vô tình khai báo lại biến của người khác:

```javascript
var currentUser = "Hieu";
```

500 dòng sau:

```javascript
var currentUser = "Admin";
```

Ứng dụng không cảnh báo rõ ràng.

---

# 8. `let` và `const` ra đời

Năm 2015, ECMAScript 2015 (ES6) giới thiệu `let` và `const` để:
- Giảm bug
- Quản lý scope rõ hơn
- Hạn chế khai báo lại
- Làm code dễ đọc và dễ bảo trì

```javascript
let score = 10;
let score = 100;
```

JavaScript báo lỗi:

```text
Identifier 'score' has already been declared
```

---

# 9. Block là gì?

Block là vùng code được bao bởi `{}`.

```javascript
if (true) {
  // block
}
```

```javascript
for (...) {
  // block
}
```

---

# 10. Vấn đề thứ hai của `var`: không có block scope

```javascript
if (true) {
  var message = "Hello";
}

console.log(message);
```

Kết quả:

```text
Hello
```

Mặc dù `message` được khai báo trong block `if`, nó vẫn tồn tại bên ngoài.

---

# 11. `let` và `const` có block scope

```javascript
if (true) {
  let message = "Hello";
}

console.log(message);
```

Kết quả:

```text
ReferenceError: message is not defined
```

Vì `message` chỉ tồn tại trong block `if`.

## Liên hệ Java

```java
if (true) {
    String message = "Hello";
}

System.out.println(message);
```

Java cũng báo lỗi. Vì vậy, `let` và `const` gần với tư duy scope trong Java hơn.

---

# 12. Vì sao block scope quan trọng?

```javascript
if (user.isAdmin) {
  let permission = "FULL_ACCESS";
}
```

Block scope giúp:
- Giảm phạm vi sống của biến
- Tránh ghi đè
- Giảm side effect
- Dễ đọc code
- Dễ debug

> Biến nên tồn tại trong phạm vi nhỏ nhất có thể.

---

# 13. `let` — dùng khi cần gán lại

```javascript
let currentPage = 1;
currentPage = 2;
currentPage = 3;
```

Dùng `let` khi giá trị cần thay đổi trong quá trình chạy.

---

# 14. `const` — không được gán lại

```javascript
const apiUrl = "/api/employees";
```

```javascript
apiUrl = "/api/users";
```

JavaScript báo lỗi.

`const` giúp người đọc hiểu biến này không có ý định được gán lại.

---

# 15. Vì sao ưu tiên `const`?

```javascript
const employeeName = "Hieu";
```

Với `const`, người đọc biết ngay:
- Biến không bị reassignment
- Luồng dữ liệu dễ dự đoán hơn
- Ít khả năng bị thay đổi ngoài ý muốn

```text
Mặc định dùng const
        ↓
Nếu cần gán lại thì dùng let
        ↓
Tránh var
```

---

# 16. `const` không làm object bất biến

```javascript
const employee = {
  name: "Hieu",
  age: 28
};
```

Không thể:

```javascript
employee = {
  name: "Tom",
  age: 30
};
```

Nhưng có thể:

```javascript
employee.age = 29;
```

Vì `const` ngăn biến `employee` trỏ sang object khác. Nó không khóa dữ liệu bên trong object.

```text
employee
   │
   ▼
Object A
{
  name: "Hieu"
}
```

---

# 17. Liên hệ `const` với `final` trong Java

```java
final Employee employee = new Employee();
employee.setName("Hieu"); // hợp lệ
```

```java
employee = new Employee(); // lỗi
```

Tư duy này khá gần với `const` trong JavaScript.

---

# 18. Declaration, assignment, initialization, reassignment

```javascript
let age;       // declaration
age = 28;      // assignment
let score = 10; // declaration + initialization
age = 29;      // reassignment
```

Nếu chỉ khai báo:

```javascript
let age;
```

thì giá trị là:

```javascript
undefined
```

---

# 19. Nếu bỏ `let`, `const`, `var` thì sao?

```javascript
name = "Hieu";
```

## Non-strict mode

JavaScript đời cũ có thể âm thầm tạo biến global.

Điều này nguy hiểm vì:
- Không biết biến được tạo ở đâu
- Có thể ghi đè dữ liệu global
- Khó debug
- Khó bảo trì

## Strict mode

```javascript
"use strict";
name = "Hieu";
```

Sẽ báo:

```text
ReferenceError: name is not defined
```

Các project hiện đại như Angular, TypeScript và ES Modules hoạt động nghiêm ngặt hơn, nên phải khai báo biến rõ ràng.

---

# 20. `let`, `const`, `var` không phải kiểu dữ liệu

```javascript
let name = "Hieu";
```

- `let`: từ khóa khai báo biến
- `name`: tên biến
- `"Hieu"`: giá trị kiểu `string`

Kiểu dữ liệu là `string`, `number`, `boolean`, `object`, v.v.

---

# 21. Angular dùng ở đâu?

Trong method Angular:

```typescript
loadEmployees() {
  const apiUrl = "/api/employees";
  let retryCount = 0;
}
```

Trong class:

```typescript
export class EmployeeListComponent {
  currentPage = 1;
  isLoading = false;
}
```

Không viết `let` hoặc `const` vì đây là **class field**, không phải local variable.

Có thể dùng:

```typescript
readonly pageSize = 20;
```

---

# 22. Tổng kết

## `var`
- Cách cũ
- Có thể khai báo lại
- Không có block scope
- Dễ tạo bug
- Tránh dùng trong code hiện đại

## `let`
- Có block scope
- Có thể gán lại
- Dùng khi dữ liệu cần thay đổi

## `const`
- Có block scope
- Không thể gán lại reference
- Ưu tiên sử dụng
- Object bên trong vẫn có thể thay đổi

```text
const trước, let khi cần, var tránh dùng
```

---

# Advanced Notes

Chưa cần học sâu:
- Hoisting
- Function scope
- Temporal Dead Zone
- Execution Context
- Stack và Heap
- Closure
- `Object.freeze`
- Immutable data
