# 📚 Lesson 11 – Async / Await

# 🧠 Phần 4 – Review & Feedback

Đây là một lesson mà tôi thấy bạn tiếp thu rất nhanh.

Điều đáng chú ý là bạn **không còn xem `async/await` là một khái niệm mới**, mà đã xem nó như **một cách viết khác của Promise**. Đó chính là mục tiêu của bài học này.

---

# Kết quả chung

| Tiêu chí                     | Đánh giá |
| ---------------------------- | -------- |
| Hiểu Async / Await           | ⭐⭐⭐⭐⭐    |
| Hiểu mối quan hệ với Promise | ⭐⭐⭐⭐⭐    |
| Mental Model                 | ⭐⭐⭐⭐⭐    |
| Angular Thinking             | ⭐⭐⭐⭐⭐    |
| Terminology                  | ⭐⭐⭐⭐☆    |

# 🎯 Tổng điểm

**9.9 / 10**

---

# Câu 1

## ❓ Câu hỏi

> Async / Await được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn

> Để viết Promise gọn hơn, trông giống như code đồng bộ.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Hoàn toàn chính xác.

Đây chính là lý do ES2017 bổ sung `async/await`.

---

# Câu 2

## ❓ Câu hỏi

`async` có ý nghĩa gì?

## ✍️ Câu trả lời của bạn

> Thông báo developer biết function này có thể sử dụng await bên trong.

## 📊 Điểm

**9.5 / 10**

## 💬 Feedback

Ý đúng nhưng còn thiếu một ý rất quan trọng:

> **`async function` luôn trả về một Promise.**

Đó là đặc điểm cốt lõi của `async`.

---

# Câu 3

## ❓ Câu hỏi

`await` có ý nghĩa gì?

## ✍️ Câu trả lời của bạn

> Đợi function chạy và trả về kết quả sau đó lấy kết quả đưa cho async.

## 📊 Điểm

**9.5 / 10**

## 💬 Feedback

Bạn hiểu đúng ý.

Tôi chỉ chỉnh lại cách diễn đạt:

> `await` đợi **Promise hoàn thành** rồi trả về **giá trị bên trong Promise**.

Không phải "đưa cho async", mà là trả kết quả cho dòng lệnh đang chờ.

---

# Câu 4

## ❓ Câu hỏi

Mô tả luồng thực thi.

## ✍️ Câu trả lời của bạn

> Đợi downloadUser chạy xong trả về user rồi in user đó ra.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Bạn mô tả đúng trình tự thực thi.

---

# Câu 5

## ❓ Câu hỏi

`await` trong function không có `async`.

## ✍️ Câu trả lời của bạn

> Không hợp lệ vì await phải được dùng trong function có khai báo async.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Đây là quy tắc quan trọng nhất khi dùng `await`.

---

# Câu 6

## ❓ Câu hỏi

So sánh Promise và Async / Await.

## ✍️ Câu trả lời của bạn

> Giống nhau: đều là Promise.

> Khác nhau: async/await giúp viết Promise gọn hơn.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Bạn đã nhìn thấy bản chất thay vì chỉ nhìn cú pháp.

---

# Câu 7

## ❓ Câu hỏi

`async function getName()` trả về gì?

## ✍️ Câu trả lời của bạn

> `Promise.resolve("Hieu")` vì function được khai báo là async.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là câu tôi thích nhất.

Bạn đã nhớ được chi tiết:

> `async` ⇒ luôn trả về Promise.

Rất tốt.

---

# Câu 8

## ❓ Câu hỏi

`await` lấy gì?

## ✍️ Câu trả lời của bạn

> Lấy kết quả trong Promise.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Hoàn toàn chính xác.

Đây là điểm nhiều người mới học thường nhầm.

---

# Câu 9

## ❓ Câu hỏi

Vì sao Angular dùng `async/await` khi gọi API?

## ✍️ Câu trả lời của bạn

> Để đợi lấy kết quả từ API, kết quả có thể là dữ liệu hoặc lỗi.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Bạn đã liên hệ rất tốt với thực tế.

---

# Câu 10

## ❓ Câu hỏi

`async/await` có thay thế Promise không?

## ✍️ Câu trả lời của bạn

> Không, chỉ là cách viết gọn hơn, sạch hơn.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là ý quan trọng nhất của Lesson 11.

Bạn đã nắm rất chắc.

---

# Câu 11 ⭐

## ❓ Câu hỏi

Liên hệ:

```text
Promise
        ↓
?

async
        ↓
?

await
        ↓
?
```

## ✍️ Câu trả lời của bạn

> Promise hứa hẹn trả về kết quả tương lai.

> async trả về Promise.

> await trả về kết quả của Promise.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là Mental Model rất đẹp.

Ngắn gọn nhưng đúng bản chất.

---

# Câu 12 ⭐⭐

## ❓ Câu hỏi

Mô tả toàn bộ luồng.

## ✍️ Câu trả lời của bạn

> downloadUser trả về Promise, dùng async/await để lấy user.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất tốt.

Bạn đã hiểu đúng luồng hoạt động tổng thể.

---

# 🌱 Knowledge Seeds

Đến thời điểm này, bạn đã hoàn thành một chuỗi kiến thức rất logic:

```text
Function
        ↓
First-class Function
        ↓
Callback
        ↓
Promise
        ↓
Async / Await
```

Mỗi lesson đều là bước phát triển tự nhiên của lesson trước.

---

# 💪 Điểm mạnh

Điều tôi đánh giá cao nhất là:

Bạn không còn học theo kiểu:

> "Đây là cú pháp gì?"

Mà chuyển sang:

> "Đây là cách JavaScript cải tiến một ý tưởng cũ."

Đó là tư duy giúp bạn học nhanh và nhớ lâu.

---

# 🎯 Điểm cần cải thiện

Chỉ có hai điểm rất nhỏ:

1. Khi nói về `async`, hãy luôn nhớ thêm:

> **`async function` luôn trả về Promise.**

2. Khi nói về `await`, hãy dùng cách diễn đạt:

> **Đợi Promise hoàn thành rồi lấy giá trị bên trong Promise.**

Điều này sẽ chính xác hơn trong các bài sau.
