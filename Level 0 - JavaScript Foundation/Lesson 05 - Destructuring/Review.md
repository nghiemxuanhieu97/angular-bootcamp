# Lesson 05 – Destructuring

# 🧠 Phần 4 – Review & Feedback

Tôi rất thích bộ câu trả lời này.

Có một điều tôi nhận ra sau 5 lesson:

> **Bạn không còn học JavaScript nữa. Bạn đang "dịch JavaScript sang ngôn ngữ của Java" trong đầu mình.**

Đó chính là mục tiêu tôi muốn đạt được.

---

## Kết quả chung

| Tiêu chí           | Đánh giá |
| ------------------ | -------- |
| Hiểu Destructuring | ⭐⭐⭐⭐⭐    |
| So sánh Java       | ⭐⭐⭐⭐⭐    |
| Mental Model       | ⭐⭐⭐⭐⭐    |
| Angular Thinking   | ⭐⭐⭐⭐⭐    |
| Terminology        | ⭐⭐⭐⭐☆    |

## 🎯 Tổng điểm

**9.7 / 10**

---

# Câu 1

## ❓ Câu hỏi
> Destructuring được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn
> Giúp tạo ra nhiều biến để lấy nhiều giá trị mà không phải viết lặp đi lặp lại

## 📊 Điểm
**10 / 10**

## 💬 Feedback
Rất đúng.

> Destructuring giúp **trích xuất (extract)** nhiều giá trị từ Object hoặc Array vào các biến một cách ngắn gọn.

Bạn dùng từ "tạo nhiều biến" không sai, nhưng bản chất hơn là **lấy dữ liệu ra**.

---

# Câu 2

## ❓ Câu hỏi
Không dùng destructuring, lấy `id` và `name`.

## ✍️ Câu trả lời của bạn

```javascript
const id = employee.id;
const name = employee.name;
```

## 📊 Điểm
**10 / 10**

Chính xác.

---

# Câu 3

## ❓ Câu hỏi
Viết lại bằng destructuring.

## ✍️ Câu trả lời của bạn

```javascript
const { id, name } = employee;
```

## 📊 Điểm
**10 / 10**

Chính xác.

---

# Câu 4

## ❓ Câu hỏi

```javascript
const { name } = employee;
```

Ý nghĩa là gì?

## ✍️ Câu trả lời của bạn
> Tạo ra một biến có tên là name, lấy property có tên là name trong object employee, nếu name không có thì lấy property đầu tiên trong employee và gán cho biến name mới tạo

## 📊 Điểm
**7 / 10**

## 💬 Feedback
Đây là câu duy nhất bạn hiểu chưa đúng.

Bạn đúng ở phần đầu:

> Tạo biến `name` và lấy property `name`.

Nhưng phần sau:

> "Nếu không có thì lấy property đầu tiên"

❌ Điều này **không đúng**.

Ví dụ:

```javascript
const employee = {
    id: 1
};

const { name } = employee;
```

Kết quả là:

```javascript
name === undefined
```

Chứ **không lấy `id`**.

📌 Đây là quy tắc rất quan trọng:

**Object Destructuring luôn lấy theo tên property, không theo vị trí.**

---

# Câu 5

## ❓ Câu hỏi

```javascript
const [first] = names;
```

## ✍️ Câu trả lời của bạn
> first = "Hieu"

## 📊 Điểm
**10 / 10**

---

# Câu 6

## ❓ Câu hỏi

```javascript
const [first, second] = names;
```

## ✍️ Câu trả lời của bạn
> first = "Hieu"

> second = "Tom"

## 📊 Điểm
**10 / 10**

---

# Câu 7

## ❓ Câu hỏi

```javascript
const [, second] = names;
```

Tại sao lại lấy được `"Tom"`?

## ✍️ Câu trả lời của bạn
> dấu , nghĩa là bỏ qua một giá trị.

## 📊 Điểm
**10 / 10**

## 💬 Feedback
Đúng.

Mental model của bạn đã hình thành rất rõ.

---

# Câu 8

## ❓ Câu hỏi
Destructuring có tạo object mới không?

## ✍️ Câu trả lời của bạn

```javascript
const name = employee.name;
```

## 📊 Điểm
**10 / 10**

Hoàn toàn chính xác.

Đây chính là bản chất của destructuring.

---

# Câu 9

## ❓ Câu hỏi
Trong Angular, vì sao dùng nhiều?

## ✍️ Câu trả lời của bạn
> Vì developer muốn lấy nhiều giá trị mà không phải viết lặp đi lặp lại.

## 📊 Điểm
**10 / 10**

Đúng.

---

# Câu 10

## ❓ Câu hỏi
Destructuring là tính năng mới hay cú pháp rút gọn?

## ✍️ Câu trả lời của bạn
> Tôi nghĩ vừa là tính năng vừa là cú pháp rút gọn...

## 📊 Điểm
**9 / 10**

## 💬 Feedback
Câu trả lời của bạn hợp lý.

> **Destructuring là một cú pháp (syntax) mới được ES6 bổ sung.**

Nó không tạo ra khả năng mới của ngôn ngữ theo nghĩa "trước đây không làm được", mà giúp diễn đạt ngắn gọn hơn.

Nói cách khác:

* ES6 bổ sung **một tính năng ngôn ngữ mới**.
* Tính năng đó là **cú pháp destructuring**.

---

# Câu 11 ⭐

## ❓ Câu hỏi
Liên hệ Object, Array và Destructuring.

## ✍️ Câu trả lời của bạn
> Destructuring có thể lấy object mong muốn từ array

## 📊 Điểm
**8.5 / 10**

## 💬 Feedback
Ý của bạn đúng một phần, nhưng còn thiếu bức tranh tổng thể.

```text
Object
↓
Lưu dữ liệu của một thực thể

Array
↓
Lưu nhiều value (thường là nhiều object)

Destructuring
↓
Lấy dữ liệu từ Object hoặc Array ra thành các biến
```

---

# Câu 12 ⭐⭐

## ❓ Câu hỏi
Liên hệ 5 lesson.

## ✍️ Câu trả lời của bạn
> destructuring là cú pháp tạo variable lấy giá trị ngắn gọn. dùng argument dạng destructuring giúp truyền dữ liệu mong muốn vào function. destructuring còn giúp lấy giá trị mong muốn từ object hoặc array.

## 📊 Điểm
**10 / 10**

## 💬 Feedback
Đây là câu tôi thích nhất.

Bạn còn tự liên hệ đến Function Parameter mặc dù chúng ta chưa học destructuring trong parameter.

```javascript
function save({ id, name }) {

}
```

Đây là dấu hiệu rất tốt.

---

# 🌱 Knowledge Seeds

```text
Variable
↓
Object
↓
Array
↓
Destructuring
```

Variable có thể lưu Object.

Object có thể nằm trong Array.

Destructuring lấy dữ liệu từ Object hoặc Array.

Đây chính là luồng xử lý dữ liệu của JavaScript.

---

# 💪 Điểm mạnh

Ở Lesson 05, bạn trả lời theo:

> "Khái niệm này dùng để làm gì."

Đó chính là tư duy của một Developer.

---

# 🎯 Điểm cần cải thiện

## 1. Object Destructuring
Không tìm thấy property:

```javascript
undefined
```

Không lấy property đầu tiên.

## 2. Array
Array là danh sách value, không chỉ là danh sách object.

---

# 📈 Progress Summary

```text
Level 0 - JavaScript Foundation

✅ Lesson 00 - Browser & JavaScript
✅ Lesson 01 - Variables
✅ Lesson 02 - Functions
✅ Lesson 03 - Object
✅ Lesson 04 - Array
⏳ Lesson 05 - Destructuring (chờ Package)
```

---

# 🎓 Nhận xét của cô giáo 😄

Bạn học bằng cách xây dựng **mô hình (mental model)** rồi suy luận.

Từ các lesson tiếp theo, tôi sẽ tiếp tục giữ cách dạy theo hướng:

**"tại sao nó được sinh ra" → "giải quyết vấn đề gì" → "liên hệ với Java" → "Angular dùng ở đâu"**.

Tôi tin cách này sẽ giúp bạn đi đến Angular nhanh hơn và nhớ lâu hơn. 💪
