# 📚 Lesson 13 – Array Methods

# 🧠 Phần 4 – Review & Feedback

Đây là một lesson tôi rất thích.

Ở các lesson trước, bạn học về:

* Function
* Callback
* Promise
* Event Loop

Hôm nay, bạn bắt đầu **áp dụng tất cả những kiến thức đó** vào một bài toán thực tế nhất của Frontend:

> **Xử lý danh sách dữ liệu.**

Điều tôi thấy rõ là bạn không còn nhớ từng method một cách rời rạc, mà đã hiểu **mỗi method sinh ra để giải quyết một mục tiêu khác nhau**.

---

# Kết quả chung

| Tiêu chí                        | Đánh giá |
| ------------------------------- | -------- |
| Hiểu mục đích từng Array Method | ⭐⭐⭐⭐⭐    |
| Mental Model                    | ⭐⭐⭐⭐⭐    |
| Callback Thinking               | ⭐⭐⭐⭐⭐    |
| Angular Thinking                | ⭐⭐⭐⭐⭐    |
| Terminology                     | ⭐⭐⭐⭐⭐    |

# 🎯 Tổng điểm

**10 / 10**

---

# Câu 1

## ❓ Câu hỏi

> Array Methods được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn

> Giúp thao tác, xử lý dữ liệu trong array một cách gọn gàng, dễ dàng.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất đúng.

Đây chính là Problem của lesson.

Nếu không có Array Methods, chúng ta sẽ phải tự viết rất nhiều vòng lặp `for`.

---

# Câu 2

## ❓ Câu hỏi

`forEach()` dùng để làm gì?

## ✍️ Câu trả lời của bạn

> Lặp qua các phần tử có trong danh sách.

## 📊 Điểm

**9.5 / 10**

## 💬 Feedback

Đúng.

Nếu diễn đạt đầy đủ hơn:

> `forEach()` dùng để **thực hiện một hành động** với từng phần tử trong mảng.

Điểm nhấn không nằm ở việc "lặp", mà ở việc **thực hiện một hành động** (in log, gọi function, cập nhật dữ liệu ngoài...).

---

# Câu 3

## ❓ Câu hỏi

`map()` được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn

> Biến đổi từ danh sách này sang danh sách khác.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là cách diễn đạt rất hay.

Ví dụ:

```text
Array<Employee>

↓

map()

↓

Array<String>
```

Đúng bản chất của `map()`.

---

# Câu 4

## ❓ Câu hỏi

Callback là gì?

`names` chứa gì?

## ✍️ Câu trả lời của bạn

> Callback là:

```javascript
employee => employee.name
```

> `names` là danh sách tên nhân viên.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Hoàn toàn chính xác.

Điều đáng mừng là bạn vẫn nhận ra Callback dù đang học một chủ đề mới.

Bạn không quên kiến thức cũ.

---

# Câu 5

## ❓ Câu hỏi

`filter()` dùng để làm gì?

## ✍️ Câu trả lời của bạn

> Lọc danh sách theo điều kiện.

> Trả về danh sách mới.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Bạn cũng lưu ý được:

> Có thể trả về mảng rỗng.

Đây là chi tiết nhiều người mới học thường bỏ qua.

---

# Câu 6

## ❓ Câu hỏi

Nếu callback trả về `true` hoặc `false` thì điều gì xảy ra?

## ✍️ Câu trả lời của bạn

> `true` → đưa vào danh sách mới.

> `false` → bỏ qua.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây chính là Mental Model của `filter()`.

Không cần nhớ cú pháp dài dòng.

Chỉ cần nhớ:

```text
true

↓

Giữ

false

↓

Loại
```

---

# Câu 7

## ❓ Câu hỏi

`find()` và `filter()` khác nhau ở điểm nào?

## ✍️ Câu trả lời của bạn

> `find()` trả về phần tử đầu tiên hoặc `undefined`.

> `filter()` trả về tất cả phần tử thỏa điều kiện.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là câu trả lời đầy đủ nhất có thể.

Bạn còn bổ sung thêm:

> `find()` không cần duyệt hết mảng nếu đã tìm thấy.

Đó là một điểm rất tốt.

---

# Câu 8

## ❓ Câu hỏi

`reduce()`

## ✍️ Câu trả lời của bạn

* `sum` là giá trị tích lũy.
* `number` là từng phần tử.
* `0` là giá trị ban đầu.

## 📊 Điểm

**9.5 / 10**

## 💬 Feedback

Ý của bạn đúng.

Chỉ chỉnh một chút về cách diễn đạt:

`sum` **không phải** là "tổng của cả mảng" ngay từ đầu.

Nó là:

> **Giá trị tích lũy sau mỗi lần lặp.**

Ví dụ:

```text
0

↓

10

↓

30

↓

60
```

Sau mỗi bước, `sum` thay đổi.

---

# Câu 9

## ❓ Câu hỏi

Vì sao Angular dùng nhiều `map()`, `filter()`, `find()`?

## ✍️ Câu trả lời của bạn

> Vì cần xử lý nhiều logic với mảng như lọc, chuyển đổi, tìm kiếm.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Hầu hết dữ liệu từ API đều là:

```text
Array<Object>
```

Do đó các method này xuất hiện liên tục trong Angular.

---

# Câu 10

## ❓ Câu hỏi

Phân biệt:

* `forEach()`
* `map()`
* `filter()`
* `find()`
* `reduce()`

## ✍️ Câu trả lời của bạn

* `forEach()` → lặp từng phần tử.
* `map()` → chuyển đổi từng phần tử.
* `filter()` → lọc phần tử.
* `find()` → tìm phần tử đầu tiên.
* `reduce()` → tính toán một giá trị từ các phần tử.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất tốt.

Đây là câu trả lời mà tôi mong đợi nhất.

Bạn đã hiểu **mục đích sinh ra** của từng method, thay vì chỉ nhớ tên.

---

# 💪 Điểm mạnh

Qua Lesson 13, tôi nhận thấy bạn có một thay đổi rất tích cực.

Trước đây, khi học một method mới, bạn thường ghi nhớ:

> "Method này dùng như thế nào?"

Bây giờ, bạn bắt đầu suy nghĩ theo hướng:

> "Method này được sinh ra để giải quyết bài toán gì?"

Đó là cách học giúp bạn nhớ rất lâu và cũng là cách các lập trình viên giàu kinh nghiệm thường tiếp cận API của một ngôn ngữ.

---

# 🎯 Điểm cần cải thiện

Chỉ có hai điểm rất nhỏ:

### 1.

Khi nói về `forEach()`, hãy ưu tiên nghĩ:

> **"Thực hiện một hành động với từng phần tử."**

Thay vì chỉ nghĩ là "lặp".

---

### 2.

Khi nói về `reduce()`:

Hãy nhớ:

```text
sum

↓

Giá trị tích lũy sau mỗi lần lặp
```

Không phải ngay từ đầu đã là tổng cuối cùng.

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

➡️ Next: Lesson 14 – DOM & Events
```

---

🎉 Chúc mừng! Lesson 13 của bạn gần như hoàn hảo.

Đây cũng là một cột mốc quan trọng vì từ bây giờ, các ví dụ trong Angular sẽ bắt đầu sử dụng `map()`, `filter()`, `find()` và `reduce()` rất thường xuyên. Với nền tảng hiện tại, bạn sẽ không còn phải học các method này song song với Angular nữa mà chỉ cần tập trung vào cách Angular ứng dụng chúng.
