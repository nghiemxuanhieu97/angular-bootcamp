# Theory

# Lesson 02 — Functions

## Story & Problem
Nếu một chương trình có hàng nghìn dòng code, việc copy-paste cùng một đoạn xử lý sẽ khiến thay đổi nhỏ phải sửa ở nhiều nơi và rất dễ bỏ sót.

Ở Lesson 01:

```text
Variable → đặt tên cho dữ liệu
```

Ở Lesson 02:

```text
Function → đặt tên cho một chuỗi hành động
```

Ví dụ:

```javascript
function sayHello() {
  console.log("Hello");
}
```

Mental model:

```text
sayHello
   ↓
Định nghĩa hành động
```

## Khai báo và gọi function

```javascript
function sayHello() {
  console.log("Hello");
}
```

Khai báo function chưa làm code chạy. Chỉ khi gọi:

```javascript
sayHello();
```

engine mới thực thi phần thân function.

## Parameter và Argument

```javascript
function deleteEmployee(id) {
  return id;
}
```

`id` là parameter — placeholder được định nghĩa cùng function.

```javascript
deleteEmployee(15);
```

`15` là argument — giá trị thật truyền vào lúc gọi.

## Return Value

```javascript
function add(a, b) {
  return a + b;
}

const result = add(10, 20);
```

Mental model:

```text
10 → a
20 → b
return 30
result = 30
```

Nếu function không có `return`, JavaScript trả về `undefined`.

## `console.log()` và `return`

```text
console.log() → hiển thị cho con người/debug
return        → trả dữ liệu cho caller
```

Ví dụ:

```javascript
function add(a, b) {
  console.log(a + b);
}

const result = add(10, 20);
```

Console in `30`, nhưng `result` là `undefined`.

## Function Decomposition
Một function không chỉ giúp tránh duplication mà còn giúp chia bài toán lớn thành bài toán nhỏ.

```javascript
function createOrder() {
  validateOrder();
  calculateTotalPrice();
  saveOrder();
  sendConfirmationEmail();
}
```

Mental model:

```text
Create Order
  ↓
Validate
  ↓
Calculate
  ↓
Save
  ↓
Send Email
```

Một function tốt thường làm một việc rõ ràng và có tên thể hiện đúng trách nhiệm.

## Inside the Engine — Knowledge Seed
Khi function A gọi function B:

```text
A chạy
 ↓
B được gọi
 ↓
B kết thúc
 ↓
Quay lại A
```

Đây là hạt giống của Call Stack và Execution Context.

## Java Comparison
Java:

```java
public int add(int a, int b) {
  return a + b;
}
```

JavaScript:

```javascript
function add(a, b) {
  return a + b;
}
```

Giống nhau ở parameter, argument, return, invocation và decomposition.

## Điểm khác Java quan trọng
JavaScript function là một giá trị:

```javascript
const action = function () {
  console.log("Save");
};
```

Function có thể được gán vào biến, truyền vào function khác, trả về từ function khác hoặc lưu trong object/array. Đây là khái niệm first-class function, sẽ học sâu sau.

## Angular Application

```typescript
saveEmployee() {
  this.validateEmployee();
  const employee = this.buildEmployee();
  this.employeeService.save(employee);
  this.showSuccessMessage();
}
```

Functions/methods xuất hiện hầu như ở mọi component và service Angular.

## Advanced Notes
- Function Expression
- Arrow Function
- Callback
- First-class Function
- Higher-order Function
- Closure
- Execution Context
- Call Stack
- Pure Function
- Side Effect
