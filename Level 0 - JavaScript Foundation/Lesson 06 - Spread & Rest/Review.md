# Lesson 06 – Spread & Rest

# 🧠 Review & Feedback

Rất hay. 👍 Và trước hết, tôi đồng ý với góp ý của bạn.

## 📌 Cập nhật Bootcamp

Từ **Lesson 07 trở đi**, tôi sẽ **bỏ kiểu câu 12 "gom toàn bộ các lesson trước"**.

Lý do bạn đưa ra hoàn toàn hợp lý:

- Sau mỗi lesson, số lượng kiến thức tăng lên.
- Câu 12 ngày càng dài.
- Mục tiêu của Bootcamp là **học nhanh Angular**, không phải kiểm tra trí nhớ.

Thay vào đó, tôi sẽ đổi thành:

> **Mental Model của chính lesson đó** hoặc **liên hệ với 1–2 lesson gần nhất**.

Ví dụ:

- Lesson 07 → liên hệ Destructuring ↔ Modules
- Lesson 08 → Promise ↔ Function
- Lesson 09 → Promise ↔ Async/Await

Như vậy vừa đủ để củng cố kiến thức mà không gây quá tải.

---

## Kết quả chung

| Tiêu chí | Đánh giá |
|----------|----------|
| Hiểu Spread | ⭐⭐⭐⭐⭐ |
| Hiểu Rest | ⭐⭐⭐⭐⭐ |
| So sánh Java | ⭐⭐⭐⭐⭐ |
| Mental Model | ⭐⭐⭐⭐☆ |
| Angular Thinking | ⭐⭐⭐⭐☆ |

## 🎯 Tổng điểm

**9.6 / 10**

---

# Câu 1

## ❓ Câu hỏi

Spread được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn

> thêm dữ liệu vào danh sách một cách nhanh chóng, không viết dài dòng.

## 📊 Điểm

**9.5 / 10**

## 💬 Feedback

Ý đúng nhưng hơi hẹp.

Spread không chỉ để **thêm dữ liệu**.

Nó là:

> **Trải (expand) các phần tử của Array hoặc Object ra.**

Việc thêm dữ liệu chỉ là một ứng dụng của nó.

---

# Câu 2

## ❓ Câu hỏi

Rest được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn

> lấy tất cả giá trị của một mảng mà không cần biết mảng đó có bao nhiêu giá trị

## 📊 Điểm

**8.5 / 10**

## 💬 Feedback

Có một điểm cần chỉnh.

Rest **không lấy giá trị từ một mảng**.

Ví dụ:

```javascript
sum(10, 20, 30);
```

Ở đây ban đầu **không hề có Array**.

Rest sẽ:

```text
10
20
30

↓

[10, 20, 30]
```

Nói cách khác:

> Rest **gom nhiều argument thành một Array**.

Đây là bản chất quan trọng nhất.

---

# Câu 3

## ❓ Câu hỏi

Dùng Spread để nối hai Array.

## ✍️ Câu trả lời của bạn

```javascript
const employees = [...backendEmployees, ...newEmployees];
```

## 📊 Điểm

**10 / 10**

Chính xác.

---

# Câu 4

## ❓ Câu hỏi

`copy` có giá trị gì?

## ✍️ Câu trả lời của bạn

> giống giá trị của numbers là mảng gồm số 1, 2 và 3

## 📊 Điểm

**10 / 10**

Đúng.

Hiện tại chúng ta chưa nói về shallow copy nên câu trả lời này là đủ.

---

# Câu 5

## ❓ Câu hỏi

```javascript
function sum(...numbers) {

}
```

Có ý nghĩa gì?

## ✍️ Câu trả lời của bạn

> Cộng tất cả các giá trị có trong danh sách numbers

## 📊 Điểm

**6.5 / 10**

## 💬 Feedback

Đây là câu bạn hiểu nhầm.

`sum` chỉ là **tên function**.

Rest không hề có chức năng cộng.

Đúng phải là:

> Function này có thể nhận **không giới hạn số lượng argument**, và Rest sẽ gom chúng thành một Array tên `numbers`.

Ví dụ:

```javascript
sum(1);
sum(1, 2);
sum(1, 2, 3, 4);
```

Đều hợp lệ.

---

# Câu 6

## ❓ Câu hỏi

`numbers` có giá trị gì?

## ✍️ Câu trả lời của bạn

> sẽ có 4 giá trị lần lượt là 10, 20, 30, 40

## 📊 Điểm

**9.5 / 10**

## 💬 Feedback

Đúng ý.

Nếu chính xác hơn:

```javascript
numbers = [10, 20, 30, 40]
```

Đây là một **Array**.

---

# Câu 7

## ❓ Câu hỏi

Phân biệt Spread và Rest.

## ✍️ Câu trả lời của bạn

> ...numbers đầu là spread còn ...numbers sau là rest

## 📊 Điểm

**10 / 10**

Chính xác.

---

# Câu 8

## ❓ Câu hỏi

Làm sao nhớ nhanh?

## ✍️ Câu trả lời của bạn

> spread xuất hiện bên phải dấu = còn rest ở phần parameter của function

## 📊 Điểm

**10 / 10**

Đây chính là mẹo tôi muốn bạn nhớ.

---

# Câu 9

## ❓ Câu hỏi

Vì sao Angular thích dùng Spread?

## ✍️ Câu trả lời của bạn

> viết theo kiểu dùng spread nó gọn hơn, sau này có thay đổi gì thì không phải viết thêm nhiều dòng giống nhau cho cùng một mục đích

## 📊 Điểm

**9 / 10**

## 💬 Feedback

Đúng ở giai đoạn hiện tại.

Sau này khi học **Signals** và **Change Detection**, bạn sẽ hiểu thêm một lý do rất quan trọng nữa. Tôi sẽ quay lại giải thích khi đến thời điểm thích hợp.

---

# Câu 10

## ❓ Câu hỏi

Java có gì giống Rest?

## ✍️ Câu trả lời của bạn

> Là varargs.

> Giống: lấy hết argument.

> Khác: syntax và kiểu dữ liệu.

## 📊 Điểm

**10 / 10**

Rất tốt.

Đây chính là cách liên hệ với Java mà tôi mong muốn.

---

# Câu 11 ⭐

## ❓ Câu hỏi

Liên hệ Array, Spread và Rest.

## ✍️ Câu trả lời của bạn

> Array: chứa danh sách các giá trị.

> Spread: trải các giá trị từ array.

> Rest: lấy các giá trị từ array.

## 📊 Điểm

**8.5 / 10**

## 💬 Feedback

Spread rất chính xác.

Rest cần sửa một chút.

Thay vì:

> lấy các giá trị từ array

Hãy nhớ:

```text
Nhiều argument

↓

Rest

↓

Một Array
```

Rest **tạo ra Array**, không lấy từ Array.

---

# 🌱 Knowledge Seeds

Sau Lesson 06, bạn đã có thêm một cặp khái niệm rất đẹp:

```text
Spread

Array
↓

Từng phần tử

----------------

Rest

Nhiều phần tử
↓

Một Array
```

Một cái **mở ra**.

Một cái **gom lại**.

Đây là hai chiều ngược nhau.

---

# 💪 Điểm mạnh

Tôi nhận thấy bạn đang bắt đầu học theo **ý nghĩa** thay vì **cú pháp**.

Ví dụ, ở Câu 10 bạn không chỉ nhớ "varargs", mà còn giải thích được vì sao hai khái niệm tương đồng. Đó là dấu hiệu của việc bạn đang xây dựng nền tảng rất tốt để chuyển sang TypeScript và Angular.

---

# 🎯 Điểm cần cải thiện

Chỉ có **hai điểm nhỏ**:

1. **Spread** không chỉ dùng để thêm phần tử, mà bản chất là **trải các phần tử**.
2. **Rest** không lấy dữ liệu từ Array, mà **gom nhiều argument thành một Array**.

---

## 📈 Progress Summary

```text
Level 0 - JavaScript Foundation

✅ Lesson 00 - Browser & JavaScript
✅ Lesson 01 - Variables
✅ Lesson 02 - Functions
✅ Lesson 03 - Object
✅ Lesson 04 - Array
✅ Lesson 05 - Destructuring
✅ Lesson 06 - Spread & Rest

➡️ Next: Lesson 07 - Modules (import / export)
```
