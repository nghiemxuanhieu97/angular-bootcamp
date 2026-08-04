# Lesson 08 – Review & Feedback

## Kết quả chung

| Tiêu chí | Đánh giá |
|---|---|
| Hiểu First-class Function | ⭐⭐⭐⭐⭐ |
| Hiểu Arrow Function | ⭐⭐⭐⭐⭐ |
| Mental Model | ⭐⭐⭐⭐⭐ |
| Angular Thinking | ⭐⭐⭐⭐⭐ |
| Terminology | ⭐⭐⭐⭐☆ |

## Tổng điểm

**9.8 / 10**

## Feedback chính

### Câu 1
**10/10**

Hiểu đúng bản chất: Function là value và có thể được dùng như các value khác.

### Câu 2
**8.5/10**

Câu trả lời hơi hẹp. JavaScript định nghĩa Function là value; việc gán, truyền, trả về và lưu trữ đều là hệ quả.

### Câu 3
**10/10**

`action` tham chiếu đến cùng Function mà `sayHello` tham chiếu tới.

### Câu 4
**10/10**

`action()` gọi đúng Function nên in ra `Hello`.

### Câu 5
**10/10**

- `sayHello`: Function reference.
- `sayHello()`: Function invocation và lấy return value.

### Câu 6
**10/10**

Hiểu đúng luồng Function được truyền như Argument rồi gọi qua Parameter.

### Câu 7
**10/10**

Arrow Function giúp cú pháp ngắn gọn.

### Câu 8
**10/10**

```javascript
const add = (a, b) => a + b;
```

### Câu 9
**10/10**

Arrow Function thường xuất hiện trong `map`, `filter`, `find`, `forEach`, `subscribe`.

### Câu 10
**10/10**

`employee => employee.name` là quy tắc lấy `name` từ mỗi employee.

### Câu 11
**9/10**

Mental model chính xác hơn:

```text
Function
    ↓
Khối hành động

First-class Function
    ↓
Function là value

Arrow Function
    ↓
Cú pháp ngắn gọn để tạo Function
```

### Câu 12
**10/10**

Bạn mô tả đúng dòng chảy của Function trong chương trình.

## Knowledge Seeds

```text
First-class Function
    ↓
Callback
    ↓
Promise
    ↓
Async / Await
    ↓
RxJS
```

## Điểm cần cải thiện

1. First-class Function là khái niệm.
2. Arrow Function là cú pháp.
3. Function là value vì JavaScript định nghĩa như vậy; các khả năng gán, truyền và trả về là hệ quả.

## Progress Summary

```text
Lesson 08 - First-class Functions & Arrow Functions ✅
Next: Lesson 09 - Callback
```
