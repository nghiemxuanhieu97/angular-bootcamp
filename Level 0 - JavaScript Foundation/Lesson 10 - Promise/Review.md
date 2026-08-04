# 📚 Lesson 10 – Promise

# 🧠 Phần 4 – Review & Feedback

Tuyệt vời. Đây là một trong những bài mà tôi thấy bạn **không chỉ nhớ kiến thức**, mà còn bắt đầu **suy luận được cách Promise hoạt động**. Điều đó rất quan trọng, vì Promise là nền tảng để học `async/await` và sau này là `Observable`.

Có một điểm tôi rất thích trong bài này.

Ở Lesson 09 bạn hiểu:

> **Callback là một Function được gọi sau đó.**

Đến Lesson 10, bạn đã tự suy luận:

> **Promise không thay thế Callback, mà sử dụng Callback.**

Đó là một mối liên hệ rất quan trọng mà nhiều người mới học thường bỏ qua.

---

# Kết quả chung

| Tiêu chí | Đánh giá |
|----------|----------|
| Hiểu Promise | ⭐⭐⭐⭐⭐ |
| Hiểu Promise States | ⭐⭐⭐⭐⭐ |
| Mental Model | ⭐⭐⭐⭐⭐ |
| Angular Thinking | ⭐⭐⭐⭐⭐ |
| Liên kết với Callback | ⭐⭐⭐⭐⭐ |

# 🎯 Tổng điểm

**9.8 / 10**

---

# Câu 1

## ❓ Câu hỏi

> Promise được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn

> Để hứa hẹn một kết quả sẽ trả về trong tương lai, làm cho hệ thống không phải chờ và bị đứng.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất đúng.

Bạn đã nêu được cả:

- Promise trả kết quả sau.
- Tránh block chương trình.

Đây chính là hai ý quan trọng nhất.

---

# Câu 2

## ❓ Câu hỏi

Promise là gì?

## ✍️ Câu trả lời của bạn

> Promise là một lời hứa hẹn rằng function sẽ trả về kết quả trong tương lai dù kết quả đó có là gì đi chăng nữa.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Diễn đạt rất tự nhiên.

Chỉ bổ sung một ý nhỏ:

Promise **không hứa chắc chắn thành công**.

Nó chỉ hứa rằng **sẽ có một kết quả cuối cùng**, có thể là:

- thành công (Fulfilled)
- hoặc thất bại (Rejected)

---

# Câu 3

## ❓ Câu hỏi

Vì sao JavaScript không thể chờ 5 giây?

## ✍️ Câu trả lời của bạn

- Hệ thống không đi tiếp bước tiếp theo.
- Những bước tiếp theo đều phải chờ.
- Nếu downloadUser bị đứng thì hệ thống bị treo.

## 📊 Điểm

**9.5 / 10**

## 💬 Feedback

Đúng.

Tuy nhiên còn một ý rất quan trọng:

> **UI sẽ bị block.**

Người dùng sẽ:

- không click được
- không nhập được
- không scroll được

Đó là lý do Promise tồn tại.

---

# Câu 4

## ❓ Câu hỏi

`promise` đang chứa gì?

## ✍️ Câu trả lời của bạn

> Promise chứa kết quả trả về trong tương lai của downloadUser.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Bạn không còn nhầm Promise với User nữa.

---

# Câu 5

## ❓ Câu hỏi

Ba trạng thái của Promise.

## ✍️ Câu trả lời của bạn

- Pending
- Fulfilled
- Rejected

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất tốt.

Định nghĩa ngắn gọn nhưng đúng bản chất.

---

# Câu 6

## ❓ Câu hỏi

Luồng của `then()`.

## ✍️ Câu trả lời của bạn

> downloadUser → Pending → Fulfilled → lấy user → in user.name.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Bạn đã mô tả đúng toàn bộ luồng.

---

# Câu 7

## ❓ Câu hỏi

Khi nào `catch()` được gọi?

## ✍️ Câu trả lời của bạn

> Pending → Rejected → gọi callback của catch.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Chỉ có một chi tiết nhỏ:

`catch()` nhận **đối tượng lỗi (error)**, không phải "lý do không có result". Trong thực tế, `error` thường là một Exception hoặc Error object.

---

# Câu 8

## ❓ Câu hỏi

Khác nhau giữa `then()` và `catch()`.

## ✍️ Câu trả lời của bạn

> then dùng khi Fulfilled, catch dùng khi Rejected.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Đây là cách nhớ nhanh và chính xác.

---

# Câu 9

## ❓ Câu hỏi

Promise có thay thế Callback không?

## ✍️ Câu trả lời của bạn

> Không, Promise dùng Callback để thực hiện Promise.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là câu tôi thích nhất.

Bạn đã nhìn thấy bản chất:

```text
Promise
        ↓
then(callback)
```

Promise không loại bỏ Callback.

Nó tổ chức Callback theo cách dễ đọc hơn.

---

# Câu 10

## ❓ Câu hỏi

Vì sao Angular dùng Promise khi gọi API?

## ✍️ Câu trả lời của bạn

> Vì gọi API có thời gian chờ, thành công thì có dữ liệu, thất bại thì có lỗi.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất đúng.

Bạn đã liên hệ được với thực tế.

---

# Câu 11 ⭐

## ❓ Câu hỏi

Liên hệ:

```text
Callback
        ↓
?

Promise
        ↓
?

then()
        ↓
?
```

## ✍️ Câu trả lời của bạn

> Callback được ứng dụng trong Promise như function then để lấy kết quả trả về.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là Mental Model rất đẹp.

Bạn không xem Promise là một khái niệm hoàn toàn mới, mà xem nó là bước phát triển tiếp theo của Callback.

---

# Câu 12 ⭐⭐

## ❓ Câu hỏi

Mô tả toàn bộ luồng Promise.

## ✍️ Câu trả lời của bạn

> Promise chờ xử lý kết quả từ downloadUser, thành công thì Fulfilled, lỗi thì Rejected.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất tốt.

Bạn đã mô tả đúng luồng hoạt động của Promise.

---

# 🌱 Knowledge Seeds

Sau Lesson 10, bạn đã xây dựng được một chuỗi kiến thức rất tự nhiên:

```text
Function
        ↓
First-class Function
        ↓
Callback
        ↓
Promise
        ↓
then() / catch()
```

Đây không phải là năm khái niệm rời rạc.

Đó là **một quá trình tiến hóa của cách JavaScript xử lý công việc sẽ hoàn thành trong tương lai**.

---

# 💪 Điểm mạnh

Tôi nhận thấy một thay đổi rất rõ.

Trước đây bạn thường trả lời:

> "Cú pháp này dùng để làm gì?"

Bây giờ bạn trả lời:

> "Vì sao JavaScript phải sinh ra nó."

Đó là cách học rất hiệu quả. Khi hiểu lý do tồn tại của một tính năng, bạn sẽ nhớ lâu hơn rất nhiều so với việc chỉ nhớ cú pháp.

---

# 🎯 Điểm cần cải thiện

Chỉ có hai điểm nhỏ:

1. Promise không hứa **thành công**, mà hứa sẽ **kết thúc** bằng một trong hai trạng thái:
   - Fulfilled
   - Rejected

2. Khi giải thích lý do Promise tồn tại, hãy luôn nhớ thêm yếu tố **UI không bị block**. Đây là động lực lớn nhất khiến Promise ra đời.

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

➡️ Next: Lesson 11 – Async / Await
```
