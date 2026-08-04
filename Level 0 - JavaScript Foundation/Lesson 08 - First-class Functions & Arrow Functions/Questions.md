# 📚 Lesson 08 – First-class Functions & Arrow Functions

# 📝 Questions

## Câu 1

First-class Function được sinh ra để giải quyết vấn đề gì?

---

## Câu 2

Theo JavaScript, vì sao Function được xem là một **value**?

Hãy giải thích bằng ngôn ngữ của bạn.

---

## Câu 3

Đoạn code sau có ý nghĩa gì?

```javascript
function sayHello() {
    console.log("Hello");
}

const action = sayHello;
```

Biến `action` đang chứa gì?

---

## Câu 4

Đoạn code sau có kết quả gì?

```javascript
function sayHello() {
    console.log("Hello");
}

const action = sayHello;

action();
```

Giải thích vì sao.

---

## Câu 5

Hai đoạn code sau khác nhau ở điểm nào?

### Đoạn 1

```javascript
const action = sayHello;
```

### Đoạn 2

```javascript
const action = sayHello();
```

---

## Câu 6

Cho đoạn code:

```javascript
function execute(task) {
    task();
}

function sayHello() {
    console.log("Hello");
}

execute(sayHello);
```

Hãy mô tả luồng thực thi của chương trình.

---

## Câu 7

Arrow Function được sinh ra để giải quyết vấn đề gì?

---

## Câu 8

Viết lại function sau bằng Arrow Function.

```javascript
function add(a, b) {
    return a + b;
}
```

---

## Câu 9

Trong Angular, vì sao Arrow Function xuất hiện rất nhiều?

Theo cách hiểu hiện tại của bạn.

📌 Chưa cần nói về `this`, Closure hay RxJS.

---

## Câu 10

Đoạn code sau:

```javascript
const employees = [
    { name: "Hieu" },
    { name: "Tom" }
];

const names = employees.map(employee => employee.name);
```

Theo bạn:

`employee => employee.name`

đang đại diện cho điều gì?

---

## Câu 11 ⭐ (Tư duy)

Hãy liên hệ:

```text
Function
        ↓
?

First-class Function
        ↓
?

Arrow Function
        ↓
?
```

bằng ngôn ngữ của bạn.

---

## Câu 12 ⭐⭐ (Mental Model)

Hãy mô tả luồng hoạt động sau theo cách hiểu của bạn:

```text
Function

↓

Variable

↓

Function Parameter

↓

Function Execution
```

Điều gì đang xảy ra trong luồng này? Hãy giải thích bằng ngôn ngữ của riêng bạn.
