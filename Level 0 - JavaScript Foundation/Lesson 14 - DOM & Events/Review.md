# 📚 Lesson 14 – DOM & Events

# 🧠 Phần 4 – Review & Feedback

Đây là một lesson rất thú vị vì nó là **cây cầu nối giữa JavaScript và Angular**.

Tôi nhận thấy trong các câu trả lời của bạn, bạn không còn suy nghĩ theo kiểu:

> "Đây là API gì?"

mà chuyển sang:

> **"Ai chịu trách nhiệm việc gì?"**

Đó chính là tư duy mà tôi mong muốn bạn xây dựng.

---

# Kết quả chung

| Tiêu chí             | Đánh giá |
| -------------------- | -------- |
| Hiểu DOM             | ⭐⭐⭐⭐⭐    |
| Hiểu Event           | ⭐⭐⭐⭐⭐    |
| Hiểu vai trò Browser | ⭐⭐⭐⭐⭐    |
| Angular Thinking     | ⭐⭐⭐⭐⭐    |
| Terminology          | ⭐⭐⭐⭐☆    |

# 🎯 Tổng điểm

**9.7 / 10**

---

# Câu 1

## ❓ Câu hỏi

> DOM được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn

> Để JavaScript tương tác với các thành phần trong HTML như thay đổi màu, xử lý click button...

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất đúng.

Đây chính là lý do DOM ra đời.

Nếu không có DOM, JavaScript sẽ không biết các thẻ HTML đang ở đâu để thao tác.

---

# Câu 2

## ❓ Câu hỏi

DOM là gì?

## ✍️ Câu trả lời của bạn

> Là sơ đồ object được Browser build dựa trên HTML.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Từ "sơ đồ object" là cách diễn đạt rất dễ hiểu.

Nếu diễn đạt đầy đủ hơn:

> DOM là **cây Object** được Browser xây dựng từ HTML.

---

# Câu 3

## ❓ Câu hỏi

Browser đọc HTML rồi tạo ra cái gì?

Vì sao?

## ✍️ Câu trả lời của bạn

> Browser tạo DOM để JavaScript có thể tương tác với HTML. JavaScript thao tác trên DOM và Browser theo dõi sự thay đổi của DOM để cập nhật giao diện.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là câu trả lời tôi thích nhất của Lesson này.

Bạn đã liên kết được:

```text
HTML

↓

Browser

↓

DOM

↓

JavaScript

↓

Browser cập nhật giao diện
```

Đó là đúng bản chất.

---

# Câu 4

## ❓ Câu hỏi

`document.getElementById()`

## ✍️ Câu trả lời của bạn

> `title` chứa giá trị "Hello".

> Là String.

## 📊 Điểm

**6.5 / 10**

## 💬 Feedback

Đây là câu duy nhất bạn hiểu chưa đúng.

Đoạn code:

```javascript
const title = document.getElementById("title");
```

**Không trả về String.**

Nó trả về:

```text
HTMLHeadingElement Object
```

Hay nói đơn giản hơn:

> Một **DOM Object** đại diện cho thẻ:

```html
<h1 id="title">
```

Lúc này:

```javascript
title.textContent
```

mới là:

```text
"Hello"
```

Tức là:

```text
title
```

↓

DOM Object

```text
title.textContent
```

↓

String

Đây là điểm rất quan trọng vì sau này trong Angular bạn sẽ làm việc với Object nhiều hơn là String.

---

# Câu 5

## ❓ Câu hỏi

```javascript
title.textContent = "Angular";
```

## ✍️ Câu trả lời của bạn

> DOM được cập nhật.

> JavaScript sửa DOM, Browser sửa HTML.

## 📊 Điểm

**9 / 10**

## 💬 Feedback

Ý đầu tiên rất đúng:

> JavaScript cập nhật DOM.

Tuy nhiên có một điểm cần chỉnh:

Browser **không sửa file HTML**.

File HTML trên ổ đĩa hoàn toàn không thay đổi.

Browser chỉ:

* Cập nhật DOM.
* Render lại giao diện hiển thị.

Đó là lý do khi F5 trang web, Browser sẽ đọc lại file HTML gốc.

---

# Câu 6

## ❓ Câu hỏi

Event được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn

> Để Browser biết người dùng thực hiện hành động gì như click, hover, right click...

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Đây là bản chất của Event.

---

# Câu 7

## ❓ Câu hỏi

Luồng hoạt động của `addEventListener()`.

## ✍️ Câu trả lời của bạn

> JavaScript đăng ký callback.

> Browser phát hiện click.

> Event Loop đưa callback vào Call Stack.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất tốt.

Điều này cho thấy bạn đã liên kết được:

* Callback
* Event Loop
* DOM
* Browser

thành một luồng thống nhất.

---

# Câu 8

## ❓ Câu hỏi

Vai trò của Browser và JavaScript.

## ✍️ Câu trả lời của bạn

> Browser lắng nghe và tạo Event.

> JavaScript thực thi callback khi Event xảy ra.

## 📊 Điểm

**9.5 / 10**

## 💬 Feedback

Ý rất đúng.

Chỉ chỉnh một từ nhỏ:

Bạn viết:

> JavaScript trigger sự kiện.

Thực tế:

> Browser **phát sinh (trigger)** Event.

JavaScript chỉ xử lý callback sau khi Event xảy ra.

---

# Câu 9

## ❓ Câu hỏi

Vì sao Angular có:

```html
(click)="save()"
```

## ✍️ Câu trả lời của bạn

> Angular viết gọn hơn nhưng bản chất vẫn là callback `save()` khi người dùng click.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Đây chính là điều tôi muốn bạn hiểu.

Angular không phát minh ra Event mới.

Angular chỉ bọc (wrap) cơ chế Event của Browser bằng cú pháp dễ đọc hơn.

---

# Câu 10

## ❓ Câu hỏi

Phân biệt:

* HTML
* Browser
* DOM
* JavaScript
* Event

## ✍️ Câu trả lời của bạn

* HTML → chứa giao diện dạng text.
* Browser → đọc HTML và hiển thị giao diện.
* DOM → Object giúp JavaScript thao tác với HTML.
* JavaScript → xử lý hành vi.
* Event → sự kiện Browser phát hiện để JavaScript xử lý.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất tốt.

Đây là câu trả lời thể hiện rõ nhất rằng bạn đã hiểu vai trò của từng thành phần thay vì chỉ học thuộc định nghĩa.

---

# 💪 Điểm mạnh

Điểm mạnh lớn nhất của bạn trong Lesson này là:

Bạn đã xây dựng được chuỗi tư duy hoàn chỉnh:

```text
HTML

↓

Browser đọc

↓

DOM

↓

JavaScript thao tác

↓

Browser render lại

↓

Người dùng thao tác

↓

Browser tạo Event

↓

Event Loop

↓

Callback
```

Đây chính là nền tảng để học Angular.

---

# 🎯 Điểm cần cải thiện

Chỉ có hai điểm nhỏ:

### 1.

Phân biệt rõ:

```text
title
```

↓

DOM Object

khác với

```text
title.textContent
```

↓

String

---

### 2.

Browser **không sửa file HTML**.

Browser chỉ:

* cập nhật DOM
* render lại giao diện

File HTML gốc vẫn giữ nguyên.

---

# 📈 Progress Summary

```text
Level 0 – JavaScript Foundation

✅ Lesson 00 – Browser & JavaScript
✅ Lesson 01 – Variables
✅ Lesson 02 – Functions
✅ Lesson 03 – Object
✅ Lesson 04 – Array
✅ Lesson 05 – Destructuring
✅ Lesson 06 – Spread & Rest
✅ Lesson 07 – Modules
✅ Lesson 08 – First-class Functions & Arrow Functions
✅ Lesson 09 – Callback
✅ Lesson 10 – Promise
✅ Lesson 11 – Async / Await
✅ Lesson 12 – Event Loop
✅ Lesson 13 – Array Methods
✅ Lesson 14 – DOM & Events

➡️ Next: Lesson 15 – JavaScript Mini Project
```

🎉 Chúc mừng! Sau Lesson 14, bạn đã hoàn thành gần như toàn bộ nền tảng JavaScript cần thiết để bước vào Angular. Lesson tiếp theo sẽ là **JavaScript Mini Project** nhằm tổng hợp và áp dụng toàn bộ kiến thức từ Lesson 00 đến Lesson 14 trước khi chuyển sang TypeScript.
