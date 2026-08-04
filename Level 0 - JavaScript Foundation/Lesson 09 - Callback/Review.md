# 📚 Lesson 09 – Callback

# 🧠 Phần 4 – Review & Feedback

Đây là một lesson mà tôi đặc biệt thích phần trả lời của bạn.

Ở Lesson 08 bạn hiểu:

> **Function là một value.**

Đến Lesson 09 bạn đã tự suy luận được:

> **Callback chỉ là một Function đang đóng một vai trò đặc biệt.**

Đó chính là mục tiêu của hai lesson này.

---

# Kết quả chung

| Tiêu chí               | Đánh giá |
| ---------------------- | -------- |
| Hiểu Callback          | ⭐⭐⭐⭐⭐    |
| Mental Model           | ⭐⭐⭐⭐⭐    |
| Angular Thinking       | ⭐⭐⭐⭐⭐    |
| Terminology            | ⭐⭐⭐⭐☆    |
| Liên kết với Lesson 08 | ⭐⭐⭐⭐⭐    |

# 🎯 Tổng điểm

**9.8 / 10**

---

# Câu 1

## ❓ Câu hỏi

> Callback được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn

> Dùng để truyền vào một function khác và function khác có thể gọi callback function sau đó.

## 📊 Điểm

**9.5 / 10**

## 💬 Feedback

Ý của bạn đúng.

Tôi chỉ muốn diễn đạt bản chất hơn:

> Callback giúp **người gọi quyết định hành động sẽ xảy ra sau khi function chính hoàn thành**, thay vì function chính tự quyết định.

Đó mới là lý do Callback được sinh ra.

---

# Câu 2

## ❓ Câu hỏi

> Callback là gì?

## ✍️ Câu trả lời của bạn

> Là một function được gọi lại sau một function nào đó.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là cách giải thích rất tự nhiên.

Nếu viết theo định nghĩa:

> Callback là một Function được truyền vào một Function khác để được gọi sau đó.

Hai cách hiểu tương đương nhau.

---

# Câu 3

## ❓ Câu hỏi

Callback là Function nào?

## ✍️ Câu trả lời của bạn

> `sayHello()` là callback vì được truyền vào `execute()` và được gọi bên trong.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Điều đáng mừng là bạn đã phân biệt được:

* Function bình thường.
* Function đang đóng vai trò Callback.

---

# Câu 4

## ❓ Câu hỏi

Mô tả luồng thực thi.

## ✍️ Câu trả lời của bạn

> Cooking...

> Eating...

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Bạn đã mô tả đúng thứ tự thực thi.

---

# Câu 5

## ❓ Câu hỏi

Anonymous Callback.

## ✍️ Câu trả lời của bạn

> Downloading...

> Finished

và callback được viết bằng Arrow Function.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất tốt.

Bạn đã bắt đầu nhận ra:

```javascript
() => {

}
```

không phải vì Arrow Function "đặc biệt".

Mà vì người ta cần một Callback ngắn gọn.

---

# Câu 6

## ❓ Câu hỏi

Anonymous Callback là gì?

## ✍️ Câu trả lời của bạn

> Anonymous function là function không có parameter.

## 📊 Điểm

**7 / 10**

## 💬 Feedback

Đây là câu duy nhất bạn hiểu chưa đúng.

Anonymous Function nghĩa là:

> **Function không có tên (name).**

Ví dụ:

```javascript
function () {

}
```

hay:

```javascript
() => {

}
```

đều là Anonymous Function.

Nó **vẫn có thể có parameter**.

Ví dụ:

```javascript
employee => employee.name
```

Đây vẫn là Anonymous Function.

Nó chỉ không có tên.

---

# Câu 7

## ❓ Câu hỏi

Phân biệt:

```javascript
downloadFile(openFile);
```

và

```javascript
downloadFile(openFile());
```

## ✍️ Câu trả lời của bạn

Hoàn toàn chính xác.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là lỗi phổ biến nhất khi mới học Callback.

Bạn không mắc lỗi này.

---

# Câu 8

## ❓ Câu hỏi

Callback có phải Function mới không?

## ✍️ Câu trả lời của bạn

> Không.

> Callback chỉ là Function đóng vai trò Parameter.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là câu trả lời tôi thích nhất.

Bạn đã liên kết rất tốt với Lesson 08.

---

# Câu 9

## ❓ Câu hỏi

Vì sao Angular dùng Callback nhiều?

## ✍️ Câu trả lời của bạn

> Hành động A hoàn thành rồi gọi hành động B.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Đó là tư duy của Callback.

---

# Câu 10

## ❓ Câu hỏi

Trong `forEach()`.

Callback là gì?

## ✍️ Câu trả lời của bạn

> Là callback function.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Sau này:

* `map`
* `filter`
* `reduce`
* `find`

đều dùng Callback.

---

# Câu 11 ⭐

## ❓ Câu hỏi

Liên hệ:

Function

↓

First-class Function

↓

Callback

## ✍️ Câu trả lời của bạn

> Function là hành động.

> First-class Function xem Function là value.

> Truyền Function vào Function khác gọi là Callback.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là Mental Model rất đẹp.

Bạn đang xây kiến thức theo đúng thứ tự.

---

# Câu 12 ⭐⭐

## ❓ Câu hỏi

Mô tả luồng:

```text
Function

↓

Truyền vào Function khác

↓

Chờ được gọi

↓

Thực thi
```

## ✍️ Câu trả lời của bạn

> Callback xảy ra trong luồng này vì Function được truyền vào Function khác để chờ Function đó gọi và thực thi.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất chính xác.

Đây là bản chất của Callback.

---

# 🌱 Knowledge Seeds

Bạn vừa hoàn thành chuỗi kiến thức đầu tiên của JavaScript:

```text
Function
        ↓
First-class Function
        ↓
Callback
```

Đây không phải ba khái niệm độc lập.

Đó là ba bước phát triển của cùng một ý tưởng.

---

# 💪 Điểm mạnh

Tôi nhận thấy bạn đã không còn học theo kiểu:

> "Callback là định nghĩa gì."

Mà chuyển sang:

> "Callback xuất hiện vì Function là value."

Đây là tư duy mà một lập trình viên JavaScript lâu năm thường có.

---

# 🎯 Điểm cần cải thiện

Chỉ có **một điểm nhỏ**:

Anonymous Function ≠ Function không có parameter.

Anonymous Function = Function không có **tên**.

Ví dụ:

```javascript
employee => employee.name
```

vẫn là Anonymous Function.

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

➡️ Next: Lesson 10 – Promise
```
