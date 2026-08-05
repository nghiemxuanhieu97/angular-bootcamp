# 📚 Level 0 – JavaScript Foundation

# Lesson 14 – DOM & Events

Nếu Lesson 13 trả lời:

> **"Làm sao xử lý dữ liệu trong JavaScript?"**

thì Lesson 14 sẽ trả lời:

> **"Làm sao JavaScript tương tác với giao diện HTML?"**

Đây là bài học cực kỳ quan trọng vì:

> **Angular được xây dựng trên nền tảng DOM.**

Nếu không hiểu DOM thì rất khó hiểu Angular sau này.

---

# 📖 Theory

## 🎯 Story

Quay lại năm 1995.

Brendan Eich tạo ra JavaScript.

Nhưng lúc đó JavaScript chỉ biết:

* Biến
* Function
* Object
* Array

Nó **không biết** trên trang web có gì.

Ví dụ:

```html
<h1>Hello</h1>

<button>Save</button>

<input>
```

JavaScript hoàn toàn không biết các thành phần này tồn tại.

---

Một câu hỏi xuất hiện:

> **Làm sao JavaScript biết trên trang web đang có những gì?**

Browser nghĩ ra một ý tưởng.

---

# 😭 Problem

Giả sử có HTML:

```html
<h1 id="title">
    Hello
</h1>

<button id="saveButton">
    Save
</button>
```

Nếu JavaScript muốn:

* đổi chữ

hoặc

* đổi màu

hoặc

* ẩn button

thì JavaScript phải biết:

> Nút Save đang ở đâu?

> Thẻ h1 đang ở đâu?

Nhưng HTML chỉ là một file text.

JavaScript không thể đi đọc từng dòng HTML mỗi lần muốn sửa.

---

# 💡 Solution

Browser sẽ đọc HTML trước.

Sau đó xây thành một cây đối tượng.

Tên là:

```text
DOM

(Document Object Model)
```

Mental model:

```text
HTML

↓

Browser đọc

↓

DOM Tree

↓

JavaScript thao tác
```

Đây là lý do JavaScript **không thao tác trực tiếp lên HTML**.

Nó thao tác lên:

```text
DOM
```

---

# DOM là gì?

DOM là:

> **Một cây Object đại diện cho toàn bộ HTML của trang web.**

Ví dụ:

HTML:

```html
<html>

    <body>

        <h1>Hello</h1>

        <button>Save</button>

    </body>

</html>
```

Browser tạo thành:

```text
Document

↓

html

↓

body

├── h1

└── button
```

Mỗi thẻ HTML trở thành:

```text
Object
```

Điều này rất quan trọng.

Bạn đã học:

```text
Object
```

ở Lesson 03.

Bây giờ Browser tạo ra rất nhiều Object.

Đó chính là DOM.

---

# JavaScript lấy DOM như thế nào?

Ví dụ:

```html
<h1 id="title">
    Hello
</h1>
```

JavaScript:

```javascript
const title = document.getElementById("title");
```

Mental model:

```text
DOM Tree

↓

Tìm Object có id = title

↓

Trả về Object
```

`title` bây giờ **không phải String**.

Nó là:

```text
HTMLHeadingElement Object
```

---

# Thay đổi nội dung

Ví dụ:

```javascript
const title = document.getElementById("title");

title.textContent = "Angular Bootcamp";
```

Browser sẽ cập nhật giao diện:

Trước:

```text
Hello
```

Sau:

```text
Angular Bootcamp
```

Điều quan trọng:

JavaScript **không sửa file HTML**.

Nó sửa:

```text
DOM Object
```

Browser nhìn DOM thay đổi.

↓

Browser vẽ lại giao diện.

---

# Event là gì?

Giả sử có Button:

```html
<button id="saveButton">

    Save

</button>
```

Người dùng click.

Ai biết?

JavaScript?

Không.

Browser biết.

Browser phát hiện:

```text
Click
```

Đó gọi là:

```text
Event
```

Ví dụ Event:

* Click
* Double Click
* Input
* Change
* Keydown
* Mouse Move

---

# JavaScript lắng nghe Event

Ví dụ:

```javascript
const button = document.getElementById("saveButton");

button.addEventListener("click", () => {

    console.log("Save");

});
```

Mental model:

```text
Browser

↓

User Click

↓

Browser tạo Event

↓

JavaScript Callback chạy
```

Bạn thấy quen không?

Đây chính là:

```text
Callback
```

Chúng ta học ở Lesson 09.

---

# Luồng hoạt động

Ví dụ:

```javascript
button.addEventListener("click", () => {

    console.log("Clicked");

});
```

Luồng:

```text
JavaScript

↓

Đăng ký Callback

↓

Người dùng Click

↓

Browser phát hiện

↓

Event

↓

Event Loop

↓

Callback

↓

console.log()
```

Bạn thấy:

* Callback
* Event Loop

đều quay trở lại.

Đây là lý do chúng ta học các lesson theo đúng thứ tự.

---

# Angular dùng ở đâu?

Trong JavaScript:

```javascript
button.addEventListener("click", () => {

    save();

});
```

Trong Angular:

```html
<button (click)="save()">

    Save

</button>
```

Angular chỉ viết ngắn hơn.

Bản chất vẫn là:

```text
Browser

↓

Click Event

↓

Callback

↓

save()
```

---

Ví dụ Input.

JavaScript:

```javascript
input.addEventListener("input", event => {

    console.log(event.target.value);

});
```

Angular:

```html
<input

    (input)="onInput($event)">

```

Đều là Event.

---

# 🌱 Advanced Note

Hôm nay chúng ta **chưa học**:

* querySelector()
* querySelectorAll()
* Event Bubbling
* Event Capturing
* Event Delegation
* DOM Rendering
* Virtual DOM
* Angular Change Detection

Chúng ta sẽ học sau khi cần.

---

# 🎯 Tổng kết

Browser đọc:

```text
HTML

↓

DOM Tree
```

JavaScript:

```text
DOM

↓

Thao tác Object
```

Người dùng:

```text
Click

↓

Browser

↓

Event

↓

Event Loop

↓

Callback
```

Angular:

```text
(click)

↓

Event

↓

Callback

↓

Component Method
```

Điều quan trọng nhất của Lesson hôm nay là:

> **JavaScript không thao tác trực tiếp với HTML.**

Mà:

> **JavaScript thao tác với DOM.**

Và:

> **Browser là nơi tạo ra DOM cũng như phát hiện các Event.**

---
