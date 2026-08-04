# 📚 Level 0 – JavaScript Foundation

# Lesson 09 – Callback

Đây là một trong những bài học quan trọng nhất của JavaScript.

Nếu Lesson 08 trả lời câu hỏi:

> **"Function có thể được truyền đi như một giá trị."**

thì Lesson 09 sẽ trả lời:

> **"Vậy khi truyền Function đi rồi, người ta dùng nó để làm gì?"**

Đó chính là Callback.

---

# 📖 Theory

## 🎯 Story

Giả sử bạn có một robot.

Bạn nói với robot:

> "Đi pha cà phê."

Robot đi pha.

Sau khi pha xong, robot hỏi:

> "Tiếp theo tôi phải làm gì?"

Nếu mỗi lần đều phải sửa code của robot:

```javascript
makeCoffee();

// sửa code robot

serveCoffee();
```

thì robot rất cứng nhắc.

Brendan Eich nghĩ khác.

Ông đặt câu hỏi:

> **"Tại sao không đưa luôn hành động tiếp theo cho robot?"**

Ví dụ:

```javascript
makeCoffee(serveCoffee);
```

Robot sẽ:

```text
Pha cà phê

↓

Pha xong

↓

Tự gọi serveCoffee()
```

Đó chính là ý tưởng của **Callback**.

---

# 😭 Problem

Giả sử có function:

```javascript
function downloadFile() {
    console.log("Downloading...");
}
```

Sau khi tải xong.

Có lúc bạn muốn:

```text
Open File
```

Có lúc:

```text
Send Email
```

Có lúc:

```text
Show Notification
```

Nếu viết:

```javascript
function downloadFile() {

    console.log("Downloading...");

    openFile();

}
```

Thì lần sau muốn gửi email.

Bạn lại sửa:

```javascript
function downloadFile() {

    console.log("Downloading...");

    sendEmail();

}
```

Function bắt đầu phải biết quá nhiều việc.

Khó mở rộng.

---

# 💡 Solution

Đừng để `downloadFile()` quyết định.

Hãy để người gọi quyết định.

```javascript
function downloadFile(callback) {

    console.log("Downloading...");

    callback();

}
```

Muốn mở file.

```javascript
downloadFile(openFile);
```

Muốn gửi email.

```javascript
downloadFile(sendEmail);
```

Mental model:

```text
downloadFile()

↓

Làm việc chính

↓

callback()

↓

Người gọi quyết định việc tiếp theo
```

---

# Callback là gì?

Một Callback chỉ đơn giản là:

> **Một Function được truyền vào một Function khác để được gọi sau đó.**

Ví dụ:

```javascript
function sayHello() {
    console.log("Hello");
}

function execute(task) {
    task();
}

execute(sayHello);
```

Lesson 08 chúng ta đã học đoạn code này.

Hôm nay chỉ đổi tên:

```text
sayHello

↓

Callback
```

Bạn sẽ nhận ra:

> **Callback không phải một loại Function mới.**

Nó chỉ là:

> **Function đóng vai trò Callback.**

---

# Ví dụ đời thực

```javascript
function cookFood(callback) {

    console.log("Cooking...");

    callback();

}

function eatFood() {

    console.log("Eating...");

}

cookFood(eatFood);
```

Luồng:

```text
cookFood()

↓

Cooking...

↓

eatFood()

↓

Eating...
```

---

# Anonymous Callback

Không nhất thiết phải khai báo riêng.

Ví dụ.

```javascript
downloadFile(function () {

    console.log("Download Finished");

});
```

Sau này.

ES6.

Người ta viết.

```javascript
downloadFile(() => {

    console.log("Download Finished");

});
```

Bạn sẽ gặp cách viết này **rất thường xuyên**.

---

# Angular dùng ở đâu?

Ví dụ:

```typescript
employees.forEach(employee => {
    console.log(employee.name);
});
```

Ở đây:

```typescript
employee => {
    console.log(employee.name);
}
```

chính là Callback.

Hay:

```typescript
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

Callback sẽ được gọi khi người dùng click.

Hay:

```typescript
setTimeout(() => {

    console.log("Done");

}, 1000);
```

Sau 1 giây.

Callback được gọi.

---

# 🌱 Advanced Note

Hôm nay chúng ta **chưa học**:

* Synchronous Callback
* Asynchronous Callback
* Callback Hell
* Event Loop
* Promise
* Async/Await

Những bài này sẽ đến ngay sau.

---

# 🎯 Tổng kết

Callback là:

> **Một Function được truyền vào Function khác để được gọi sau đó.**

Mental model:

```text
Function

↓

First-class Function

↓

Function truyền vào Function khác

↓

Callback
```

Điều rất quan trọng là:

> Callback **không phải cú pháp mới**.

Nó chỉ là **vai trò của một Function**.

---

# 🙋 Phần 2 – Giải đáp

Theo đúng quy trình Bootcamp:

> **Có phần nào trong bài hôm nay bạn chưa hiểu hoặc muốn tôi giải thích sâu hơn không?**

Tôi đoán bạn có thể sẽ thắc mắc:

> **"Callback luôn được gọi ngay sau khi function chính chạy xong hay có thể được gọi sau vài giây, vài phút?"**

Đó là một câu hỏi rất hay. Câu trả lời là **đều có thể**, và chính điều đó sẽ dẫn chúng ta đến các bài về **Asynchronous JavaScript, Event Loop và Promise**. Nhưng ở Lesson 09, chúng ta mới tập trung vào bản chất của Callback: **một Function được truyền vào để được gọi sau đó**, chưa đi sâu vào *khi nào* và *bởi ai* gọi nó.
