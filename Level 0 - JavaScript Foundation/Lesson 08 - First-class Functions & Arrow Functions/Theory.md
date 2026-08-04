# 📚 Level 0 – JavaScript Foundation

# Lesson 08 – First-class Functions & Arrow Functions

---

# 📖 Theory

## 🎯 Story

Hãy tưởng tượng bạn đang lập trình bằng Java.

Bạn có một method.

```java
public void sayHello() {
    System.out.println("Hello");
}
```

Bạn có thể:

* Gọi method.
* Truyền tham số vào method.

Nhưng bạn **không thể** làm như sau:

```java
Employee employee = sayHello;
```

Hay:

```java
List.add(sayHello);
```

Hay:

```java
return sayHello;
```

Method trong Java **không được xem là một giá trị (value)**.

---

JavaScript lại nghĩ khác.

Brendan Eich đặt ra một câu hỏi:

> **"Nếu Number, String và Object đều là giá trị, tại sao Function lại không thể là một giá trị?"**

Đó là lúc JavaScript đưa ra một ý tưởng rất táo bạo.

---

# 😭 Problem

Giả sử bạn có function:

```javascript
function sayHello() {
    console.log("Hello");
}
```

Nếu function **chỉ có thể gọi**, thì bạn không thể:

* Lưu function vào biến.
* Truyền function cho function khác.
* Trả về function.
* Lưu function vào object.
* Lưu function vào array.

Điều đó làm JavaScript kém linh hoạt.

---

# 💡 Solution

JavaScript coi **Function cũng là một giá trị (value)**.

Giống như:

```javascript
const age = 29;
```

Hay:

```javascript
const name = "Hieu";
```

Bạn cũng có thể:

```javascript
const action = sayHello;
```

📌 Lưu ý:

```javascript
const action = sayHello;
```

≠

```javascript
const action = sayHello();
```

Đây là điểm cực kỳ quan trọng.

---

# Function là một value

Ví dụ.

```javascript
function sayHello() {
    console.log("Hello");
}

const action = sayHello;
```

Mental model:

```text
sayHello
        │
        ▼

Function

        │
        ▼

action
```

Hai biến cùng tham chiếu đến **cùng một function**.

---

Muốn chạy.

```javascript
action();
```

↓

```text
Hello
```

---

Nếu viết:

```javascript
const action = sayHello();
```

Thì chuyện gì xảy ra?

Engine sẽ:

```text
Gọi sayHello()

↓

In Hello

↓

Lấy giá trị return

↓

Gán cho action
```

Nếu `sayHello()` không có `return`.

↓

```javascript
action === undefined
```

---

# Function truyền vào Function

Vì function là value.

Nó có thể truyền vào function khác.

Ví dụ.

```javascript
function execute(task) {
    task();
}

function sayHello() {
    console.log("Hello");
}

execute(sayHello);
```

Mental model:

```text
sayHello

↓

Parameter task

↓

task()

↓

Hello
```

📌 Đây chính là nền tảng của **Callback** mà chúng ta sẽ học ở lesson tiếp theo.

---

# Function trả về Function

JavaScript còn cho phép:

```javascript
function createGreeting() {

    return function () {
        console.log("Hello");
    };

}
```

Dù nhìn hơi lạ, nhưng hoàn toàn hợp lệ.

Chúng ta **chưa đi sâu** vào trường hợp này.

Chỉ cần biết rằng:

> Function có thể được trả về như bất kỳ giá trị nào khác.

---

# Arrow Function

Trước ES6.

Viết function.

```javascript
function add(a, b) {
    return a + b;
}
```

ES6 giới thiệu cú pháp ngắn hơn.

```javascript
const add = (a, b) => {
    return a + b;
};
```

Nếu chỉ có một biểu thức.

Có thể viết.

```javascript
const add = (a, b) => a + b;
```

Đây là cú pháp bạn sẽ gặp **hàng ngày trong Angular**.

---

# So sánh

Function Declaration

```javascript
function add(a, b) {
    return a + b;
}
```

Arrow Function

```javascript
const add = (a, b) => a + b;
```

Ở mức hiện tại.

Hai cách này đều tạo ra function.

Chúng ta **chưa học** sự khác biệt về `this`.

---

# Angular dùng ở đâu?

Khắp mọi nơi.

Ví dụ.

```typescript
employees.forEach(employee => {
    console.log(employee.name);
});
```

Hoặc.

```typescript
const names = employees.map(employee => employee.name);
```

Hoặc.

```typescript
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

Bạn sẽ thấy dấu:

```text
=>
```

Ở gần như mọi file Angular.

---

# 🌱 Advanced Note

Hôm nay chúng ta **chưa học**:

* `this` trong Arrow Function
* Lexical `this`
* Closure
* Higher-order Function
* Callback chi tiết
* Function Expression

Những chủ đề này sẽ được học sau khi thật sự cần.

---

# 🎯 Tổng kết

First-class Function nghĩa là:

> Function là một giá trị.

Do đó function có thể:

* Gán vào biến.
* Truyền vào function khác.
* Trả về từ function.
* Lưu trong object.
* Lưu trong array.

Arrow Function là:

> Một cú pháp ngắn gọn để tạo function.

Mental model:

```text
Function

↓

Value

↓

Variable

↓

Parameter

↓

Return Value
```

Arrow Function:

```text
function () {}

↓

() => {}
```

---

# 🙋 Phần 2 – Giải đáp

Theo đúng quy trình Bootcamp:

> **Có phần nào trong bài hôm nay bạn chưa hiểu hoặc muốn tôi giải thích sâu hơn không?**

Tôi đoán có một câu hỏi mà bạn có thể sẽ sắp hỏi:

> **"Nếu function là một value, vậy nó được lưu trong biến giống Number hay Object như thế nào?"**

Đây là một câu hỏi rất hay, nhưng nó liên quan đến **reference value** và cách JavaScript quản lý bộ nhớ. Vì chúng ta đã thống nhất sẽ chỉ đào sâu khi thật sự cần cho Angular, nên hiện tại chưa cần đi vào phần đó.

Hãy đọc lại bài một lần. Nếu có điểm nào chưa rõ, tôi sẽ giải thích trước khi chúng ta chuyển sang phần Questions.
