# 📚 Lesson 12 – Event Loop

# 🧠 Phần 4 – Review & Feedback

Đây là lesson mà tôi thấy bạn có một bước tiến rất lớn.

Ở các lesson trước, bạn thường mô tả:

> "Cú pháp làm gì."

Đến Lesson 12, bạn bắt đầu mô tả:

> **"Ai làm việc gì."**

Đó chính là tư duy mà Event Loop yêu cầu.

---

# Kết quả chung

| Tiêu chí             | Đánh giá |
| -------------------- | -------- |
| Hiểu Event Loop      | ⭐⭐⭐⭐⭐    |
| Hiểu vai trò Browser | ⭐⭐⭐⭐⭐    |
| Mental Model         | ⭐⭐⭐⭐⭐    |
| Angular Thinking     | ⭐⭐⭐⭐⭐    |
| Terminology          | ⭐⭐⭐⭐☆    |

# 🎯 Tổng điểm

**9.8 / 10**

---

# Câu 1

## ❓ Câu hỏi

> Event Loop được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn

> Để JavaScript có thể thực hiện đoạn code tiếp theo mà không phải chờ Promise.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Tôi chỉ bổ sung một ý:

> Event Loop không chỉ phục vụ Promise, mà phục vụ **mọi tác vụ bất đồng bộ** (timer, click, network...).

Nhưng với kiến thức hiện tại, câu trả lời của bạn hoàn toàn đúng.

---

# Câu 2

## ❓ Câu hỏi

Event Loop là gì?

## ✍️ Câu trả lời của bạn

> Nó là thằng trung gian đi kiểm tra tiến độ Promise, kiểm tra JavaScript để quyết định khi nào nên đưa callback vào Call Stack.

## 📊 Điểm

**9.5 / 10**

## 💬 Feedback

Đây là câu trả lời rất tốt.

Chỉ có một điểm nhỏ:

Bạn nói:

> "kiểm tra tiến độ Promise"

Thực ra Event Loop **không theo dõi tiến độ download**.

Browser mới là nơi biết download đã xong hay chưa.

Event Loop chỉ quan tâm:

> "Có callback nào đã sẵn sàng chưa?"

Nếu có:

> "Call Stack rảnh chưa?"

Nếu rảnh thì đưa callback vào Call Stack.

Đó là vai trò chính xác hơn.

---

# Câu 3

## ❓ Câu hỏi

Vì sao JavaScript không thể đứng chờ API?

## ✍️ Câu trả lời của bạn

> * UI bị block
> * Những task tiếp theo bị chờ
> * Hệ thống có nguy cơ bị treo

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Đây chính là Problem mà Event Loop giải quyết.

---

# Câu 4

## ❓ Câu hỏi

Ai thực hiện download?

## ✍️ Câu trả lời của bạn

> Browser.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là câu tôi thích nhất.

Rất nhiều người mới học nghĩ JavaScript tự download.

Bạn đã phân biệt được:

```text
JavaScript

↓

Giao Browser

↓

Browser download
```

Rất tốt.

---

# Câu 5

## ❓ Câu hỏi

Call Stack có vai trò gì?

## ✍️ Câu trả lời của bạn

> Call Stack có vai trò gọi callback khi Promise xong.

## 📊 Điểm

**8 / 10**

## 💬 Feedback

Đây là câu bạn còn hơi nhầm.

Call Stack **không có nhiệm vụ gọi callback**.

Call Stack chỉ là:

> **Nơi chứa các function đang được thực thi.**

Ví dụ:

```javascript
a();

↓

b();

↓

console.log();
```

Đều nằm trong Call Stack.

Callback cũng chạy trong Call Stack, nhưng **Call Stack không chủ động gọi callback**.

Event Loop mới là bên đưa callback vào Call Stack khi thích hợp.

---

# Câu 6

## ❓ Câu hỏi

Thứ tự in.

## ✍️ Câu trả lời của bạn

> Done trước rồi đến tên user.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất tốt.

Điều tôi thích là bạn đã mô tả được toàn bộ luồng:

* Browser download.
* JavaScript tiếp tục chạy.
* Event Loop chờ.
* Callback vào Call Stack.

Không chỉ trả lời kết quả.

---

# Câu 7

## ❓ Câu hỏi

Event Loop làm gì?

## ✍️ Câu trả lời của bạn

> Kiểm tra Promise khi nào xong, kiểm tra JavaScript có rảnh để đưa callback vào Call Stack.

## 📊 Điểm

**9.5 / 10**

## 💬 Feedback

Giống Câu 2.

Chỉ cần sửa:

> Không phải "kiểm tra Promise".

Mà là:

> Kiểm tra **callback đã sẵn sàng** và **Call Stack có rảnh không**.

---

# Câu 8

## ❓ Câu hỏi

`await` có dừng toàn bộ JavaScript không?

## ✍️ Câu trả lời của bạn

> Không vì đã có Event Loop xử lý việc sắp xếp và nhắc nhở.

## 📊 Điểm

**9 / 10**

## 💬 Feedback

Ý đúng.

Nhưng bản chất hơn sẽ là:

> `await` chỉ tạm dừng **function hiện tại**.

Không dừng toàn bộ JavaScript.

Đây là điều quan trọng cần nhớ.

---

# Câu 9

## ❓ Câu hỏi

Vì sao Angular vẫn click, scroll được?

## ✍️ Câu trả lời của bạn

> Vì JavaScript giao Browser xử lý API và tiếp tục xử lý việc người dùng.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Bạn đã hiểu được ý nghĩa thực tế của Event Loop trong ứng dụng web.

---

# Câu 10

## ❓ Câu hỏi

Phân biệt vai trò.

## ✍️ Câu trả lời của bạn

* JavaScript → xử lý công việc không phải đợi.
* Browser → xử lý công việc tốn thời gian.
* Event Loop → sắp xếp để công việc diễn ra suôn sẻ.
* Callback → công việc được thực hiện sau.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là câu trả lời tôi thích nhất của Lesson 12.

Bạn đã không còn nghĩ theo "định nghĩa", mà nghĩ theo:

> **Ai chịu trách nhiệm việc gì.**

Đó là Mental Model rất tốt.

---

# 🌱 Knowledge Seeds

Bạn vừa hoàn thành chuỗi kiến thức:

```text
Callback

↓

Promise

↓

Async / Await

↓

Event Loop
```

Mối liên hệ là:

* Callback là công việc sẽ được làm sau.
* Promise là lời hứa sẽ có kết quả sau.
* Async / Await là cách viết Promise dễ đọc hơn.
* Event Loop là cơ chế giúp callback được thực thi đúng thời điểm mà không làm JavaScript bị block.

---

# 💪 Điểm mạnh

Tôi nhận thấy bạn đã chuyển từ:

> "JavaScript làm gì?"

sang:

> "JavaScript, Browser, Event Loop mỗi thành phần chịu trách nhiệm gì?"

Đây là một bước tiến rất lớn.

---

# 🎯 Điểm cần cải thiện

Chỉ có hai điểm nhỏ:

### 1.

Event Loop **không theo dõi tiến độ Promise**.

Browser mới biết khi nào network hoàn thành.

Event Loop chỉ xử lý các callback đã sẵn sàng.

---

### 2.

Call Stack không gọi callback.

Call Stack chỉ là nơi thực thi function.

Event Loop mới là bên quyết định khi nào callback được đưa vào Call Stack.

---
