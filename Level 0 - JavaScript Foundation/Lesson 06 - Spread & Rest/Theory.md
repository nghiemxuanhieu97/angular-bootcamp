# 📚 Level 0 – JavaScript Foundation

# Lesson 06 – Spread & Rest

---

# 📖 Theory

## 🎯 Story

Năm 2015, cùng với **Arrow Function**, **Destructuring**, **let/const**, JavaScript còn nhận thêm một "siêu năng lực" khác.

Tên của nó là:

> **... (ba dấu chấm)**

```javascript
...
```

Lúc mới nhìn.

Hầu hết Java Developer đều hỏi:

> "Ba dấu chấm này là cái gì?"

😂

Thực ra.

Nó có **hai vai trò khác nhau**.

```text
...
↓

Spread

hoặc

Rest
```

Nhìn giống hệt nhau.

Nhưng làm hai việc hoàn toàn khác nhau.

Đây là lý do rất nhiều người mới học bị nhầm.

---

# 😭 Problem 1

Giả sử.

Bạn có.

```javascript
const backendEmployees = [
    "Hieu",
    "Tom"
];
```

Và.

```javascript
const newEmployees = [
    "Jerry",
    "Anna"
];
```

Bạn muốn tạo.

```text
[
"Hieu",
"Tom",
"Jerry",
"Anna"
]
```

---

Nếu chưa có Spread.

Bạn phải.

```javascript
const employees = [];

employees.push("Hieu");
employees.push("Tom");
employees.push("Jerry");
employees.push("Anna");
```

Hoặc.

```javascript
concat()
```

Khá dài.

---

# 💡 Solution 1 — Spread

```javascript
const employees = [
    ...backendEmployees,
    ...newEmployees
];
```

Mental model.

```text
backendEmployees

↓

"Hieu"

"Tom"

newEmployees

↓

"Jerry"

"Anna"

Spread

↓

"Hieu"

"Tom"

"Jerry"

"Anna"
```

Spread nghĩa là:

> **Trải các phần tử ra.**

---

## Ví dụ khác

```javascript
const numbers = [
    1,
    2,
    3
];
```

```javascript
const copy = [
    ...numbers
];
```

Mental model.

```text
numbers

↓

1

2

3

↓

Spread

↓

1

2

3

↓

copy
```

---

# 😭 Problem 2

Có lúc.

Bạn không biết function sẽ nhận bao nhiêu parameter.

Ví dụ.

```javascript
function sum() {

}
```

Có thể gọi.

```javascript
sum(1);
```

Hoặc.

```javascript
sum(1,2);
```

Hoặc.

```javascript
sum(1,2,3,4,5);
```

Làm sao nhận tất cả?

---

# 💡 Solution 2 — Rest

```javascript
function sum(...numbers) {

}
```

Mental model.

```text
1

2

3

4

↓

Rest

↓

Array
```

Sau đó.

```javascript
numbers
```

sẽ là.

```javascript
[
    1,
    2,
    3,
    4
]
```

---

# ☕ Java Comparison

Java.

```java
public void print(String... names)
```

Có thấy quen không? 😄

Đúng.

Java cũng có.

```java
...
```

được gọi là **Varargs**.

JavaScript Rest rất giống ý tưởng này.

Khác ở chỗ.

JavaScript tạo ra.

```javascript
Array
```

---

# Làm sao phân biệt Spread và Rest?

Đây là mẹo tôi luôn dùng.

## Nếu ở bên phải dấu =

```javascript
const copy = [
    ...numbers
];
```

↓

Spread

↓

Trải ra.

---

## Nếu ở parameter

```javascript
function sum(...numbers) {

}
```

↓

Rest

↓

Gom lại.

---

Mental model.

```text
Spread

Array

↓

Từng phần tử



Rest

Nhiều phần tử

↓

Một Array
```

---

# Angular dùng ở đâu?

Ví dụ.

Backend trả.

```typescript
employees
```

Bạn muốn thêm.

```typescript
newEmployee
```

Thay vì.

```typescript
employees.push(newEmployee);
```

Angular thường viết.

```typescript
employees = [
    ...employees,
    newEmployee
];
```

Hoặc.

```typescript
const request = {
    ...employee,
    department: "IT"
};
```

Đây là cú pháp bạn sẽ gặp **hàng ngày** khi làm Angular.

---

# 🌱 Advanced Note

Hôm nay chúng ta **chưa học**:

- Spread với Object (sâu hơn)
- Shallow Copy
- Deep Copy
- Reference
- Clone
- Rest trong Object Destructuring

Những phần này sẽ học khi cần.

---

# 🎯 Tổng kết

Spread.

```text
Array

↓

Trải phần tử ra
```

Rest.

```text
Nhiều giá trị

↓

Gom thành Array
```

Một câu rất dễ nhớ:

> **Spread trải ra. Rest gom lại.**

---

# 🙋 Phần 2 – Giải đáp

Theo đúng quy trình Bootcamp:

**Có phần nào trong bài hôm nay bạn chưa hiểu hoặc muốn tôi giải thích sâu hơn không?**

Tôi đoán có hai câu hỏi mà bạn có thể sẽ nghĩ tới:

1. **"Spread có phải tạo ra một Array mới không?"**
2. **"Spread với Object có giống Spread với Array không?"**

Đây đều là những câu hỏi rất hay, nhưng chúng liên quan đến **reference**, **shallow copy** và **object cloning**. Chúng ta sẽ ghi chú lại và học ở đúng thời điểm, vì hiện tại mục tiêu của bạn là **đi nhanh đến Angular**.

📌 **Ghi chú Bootcamp:** *Spread với Object, shallow copy và deep copy sẽ được học sau.*
