# 📚 Level 1 – TypeScript Foundation

# Lesson 01 – Why TypeScript

# 🧠 Phần 4 – Review & Feedback

Đây là một khởi đầu rất tốt cho phần TypeScript.

Điều tôi thích nhất là bạn **không coi TypeScript là một ngôn ngữ mới**, mà đã hiểu được mối quan hệ:

```text
JavaScript

↓

TypeScript

↓

Type System
```

Đây là tư duy đúng ngay từ Lesson đầu tiên.

---

# Kết quả chung

| Tiêu chí                 | Đánh giá |
| ------------------------ | -------- |
| Hiểu mục đích TypeScript | ⭐⭐⭐⭐⭐    |
| Mental Model             | ⭐⭐⭐⭐⭐    |
| JavaScript vs TypeScript | ⭐⭐⭐⭐⭐    |
| Angular Thinking         | ⭐⭐⭐⭐⭐    |
| Terminology              | ⭐⭐⭐⭐☆    |

# 🎯 Tổng điểm

**9.8 / 10**

---

# Câu 1

## ❓ Câu hỏi

> TypeScript được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn

> Để chương trình phát hiện lỗi sớm hơn thông qua type check.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Đây là mục tiêu lớn nhất của TypeScript.

---

# Câu 2

## ❓ Câu hỏi

> TypeScript là gì?

## ✍️ Câu trả lời của bạn

> JavaScript + Type System.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là câu trả lời ngắn gọn và đúng nhất.

Từ hôm nay trở đi, hãy luôn nhớ:

```text
TypeScript

=

JavaScript

+

Type System
```

---

# Câu 3

## ❓ Câu hỏi

> TypeScript có thay thế JavaScript không?

## ✍️ Câu trả lời của bạn

> Không, vì nó chính là JavaScript và có thêm Type System.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất tốt.

Chỉ chỉnh một cách diễn đạt nhỏ:

TypeScript **không phải chính là JavaScript**, mà là:

> **Một ngôn ngữ mở rộng (superset) của JavaScript.**

Điều này có nghĩa là:

* Mọi JavaScript hợp lệ đều là TypeScript hợp lệ.
* Nhưng TypeScript còn có thêm các tính năng mà JavaScript không có, ví dụ như type annotations.

---

# Câu 4

## ❓ Câu hỏi

Đoạn code sẽ xảy ra điều gì?

## ✍️ Câu trả lời của bạn

> Báo lỗi vì truyền `"100"` (string) vào tham số `price` có kiểu `number`.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Đây là ví dụ điển hình cho việc TypeScript phát hiện lỗi trước khi chương trình chạy.

---

# Câu 5

## ❓ Câu hỏi

Browser có chạy trực tiếp được TypeScript không?

## ✍️ Câu trả lời của bạn

> Không.

> Phải compile sang JavaScript.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Hoàn toàn chính xác.

Đây là kiến thức nền rất quan trọng cho Angular.

---

# Câu 6

## ❓ Câu hỏi

Mô tả luồng:

```text
TypeScript

↓

Compile

↓

JavaScript

↓

Browser
```

## ✍️ Câu trả lời của bạn

> TypeScript sau khi compile sẽ biến thành JavaScript, từ đó Browser có thể đọc và hiểu được.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Mental Model của bạn đã rất rõ ràng.

---

# Câu 7

## ❓ Câu hỏi

TypeScript phát hiện lỗi khi nào?

## ✍️ Câu trả lời của bạn

> Trước khi compile.

> JavaScript phát hiện khi runtime.

## 📊 Điểm

**8.5 / 10**

## 💬 Feedback

Ý của bạn gần đúng, nhưng có một điểm cần chỉnh.

TypeScript thực hiện **type checking trong quá trình biên dịch (compile time)**.

Mental model chính xác hơn là:

```text
Viết code

↓

Compile (Type Checking)

↓

Có lỗi?

├── Có
│   ↓
│   Sửa
│
└── Không
    ↓
    Sinh JavaScript
```

Vì vậy, thay vì nói:

> "Trước khi compile"

hãy hiểu là:

> **"Trong compile time."**

---

# Câu 8

## ❓ Câu hỏi

Vì sao Angular chọn TypeScript?

## ✍️ Câu trả lời của bạn

> Vì Angular có nhiều Component, cần type rõ ràng và hạn chế lỗi runtime.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất tốt.

Bạn đã trả lời đúng theo góc nhìn của một dự án lớn.

---

# Câu 9

## ❓ Câu hỏi

So sánh JavaScript và TypeScript.

## ✍️ Câu trả lời của bạn

> Giống nhau: đều tạo biến và gán giá trị.

> Khác nhau: TypeScript có type, JavaScript thì không.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Đây là điểm khác biệt đầu tiên mà chúng ta sẽ khai thác trong các lesson tiếp theo.

---

# Câu 10

## ❓ Câu hỏi

Phân biệt vai trò của:

* JavaScript
* TypeScript
* Compiler
* Browser

## ✍️ Câu trả lời của bạn

* JavaScript → xử lý hành vi trên Browser.
* TypeScript → thêm lớp bảo vệ bằng Type System.
* Compiler → chuyển TypeScript sang JavaScript.
* Browser → hiển thị giao diện, tạo DOM, phát Event, xử lý request...

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là câu trả lời rất tốt.

Bạn không chỉ nhớ định nghĩa mà còn liên kết được với các bài JavaScript trước.

---

# 💪 Điểm mạnh

Bạn đã có một tư duy rất quan trọng:

```text
JavaScript

↓

TypeScript

↓

Angular
```

Bạn không xem TypeScript là thứ tách biệt, mà là một bước tiến hóa của JavaScript.

Điều này sẽ giúp bạn học các lesson tiếp theo rất nhanh.

---

# 🎯 Điểm cần cải thiện

Chỉ có một điểm nhỏ:

Phân biệt rõ:

```text
Compile Time

↓

Type Checking xảy ra ở đây
```

khác với:

```text
Runtime

↓

JavaScript đang chạy trên Browser
```

Đừng nói:

> "TypeScript kiểm tra trước khi compile."

Hãy nói:

> **"TypeScript kiểm tra trong quá trình compile."**

---
