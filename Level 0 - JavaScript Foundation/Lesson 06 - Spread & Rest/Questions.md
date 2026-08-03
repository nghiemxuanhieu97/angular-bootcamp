# Lesson 06 – Spread & Rest

# 📝 Questions

## Câu 1

Spread được sinh ra để giải quyết vấn đề gì?

---

## Câu 2

Rest được sinh ra để giải quyết vấn đề gì?

---

## Câu 3

Cho hai Array:

```javascript
const backendEmployees = [
    "Hieu",
    "Tom"
];

const newEmployees = [
    "Jerry",
    "Anna"
];
```

Hãy dùng **Spread** để tạo Array mới có kết quả:

```javascript
[
    "Hieu",
    "Tom",
    "Jerry",
    "Anna"
]
```

---

## Câu 4

Đoạn code sau có kết quả gì?

```javascript
const numbers = [
    1,
    2,
    3
];

const copy = [
    ...numbers
];
```

Giá trị của `copy` là gì?

---

## Câu 5

Đoạn code sau có ý nghĩa gì?

```javascript
function sum(...numbers) {

}
```

Hãy giải thích bằng ngôn ngữ của bạn.

---

## Câu 6

Nếu gọi:

```javascript
sum(10, 20, 30, 40);
```

thì bên trong function:

```javascript
numbers
```

sẽ có giá trị là gì?

---

## Câu 7

Hãy phân biệt:

```javascript
...numbers
```

trong hai trường hợp sau:

```javascript
const copy = [
    ...numbers
];
```

và

```javascript
function sum(...numbers) {

}
```

Chúng khác nhau ở điểm nào?

---

## Câu 8

Làm sao để nhớ nhanh khi nào là **Spread**, khi nào là **Rest**?

---

## Câu 9

Trong Angular, vì sao người ta thường viết:

```typescript
employees = [
    ...employees,
    newEmployee
];
```

thay vì:

```typescript
employees.push(newEmployee);
```

Theo cách hiểu hiện tại của bạn.

📌 Chưa cần nói về Change Detection hay Signals.

---

## Câu 10

Java có khái niệm nào gần giống Rest không?

Giống ở điểm nào?

Khác ở điểm nào?

---

## Câu 11 ⭐ (Tư duy)

Hãy liên hệ:

```text
Array
        ↓
?

Spread
        ↓
?

Rest
        ↓
?
```

bằng ngôn ngữ của bạn.

---

## Câu 12 ⭐⭐ (Mental Model)

Hiện tại bạn đã học:

- Variable
- Function
- Object
- Array
- Destructuring
- Spread
- Rest

Theo cách hiểu của riêng bạn, hãy mô tả **luồng dữ liệu** trong JavaScript.

Gợi ý:

```text
Variable
        ↓

Object
        ↓

Array
        ↓

Destructuring
        ↓

Spread
        ↓

Rest
```

Không cần đúng theo sách. Tôi muốn xem **mô hình trong đầu bạn** sau 6 lesson đầu tiên. Đây sẽ là câu quan trọng nhất của bài.
