# 📚 Level 1 – TypeScript Foundation

# Lesson 17 – The Basics

# 🧠 Phần 4 – Review & Feedback

Đây là một lesson rất thành công.

Điều tôi nhận thấy rõ nhất là bạn **không còn học TypeScript như học cú pháp**, mà bắt đầu suy nghĩ:

> **"Tại sao TypeScript lại thiết kế như vậy?"**

Đó là một bước tiến rất lớn.

---

# Kết quả chung

| Tiêu chí             | Đánh giá |
| -------------------- | -------- |
| Hiểu Type Annotation | ⭐⭐⭐⭐⭐    |
| Hiểu Type Inference  | ⭐⭐⭐⭐⭐    |
| Mental Model         | ⭐⭐⭐⭐⭐    |
| Angular Thinking     | ⭐⭐⭐⭐⭐    |
| Terminology          | ⭐⭐⭐⭐☆    |

# 🎯 Tổng điểm

**9.9 / 10**

---

# Câu 1

## ❓ Câu hỏi

> Type Annotation được sinh ra để giải quyết vấn đề gì?

## ✍️ Câu trả lời của bạn

> Để bổ sung ý nghĩa cho biến, để nhìn vào là biết biến khai báo có kiểu dữ liệu gì.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất hay.

Bạn không trả lời theo kiểu:

> "Để khai báo kiểu dữ liệu."

Mà trả lời theo góc nhìn của người đọc code.

Đó chính là mục đích của Type Annotation:

* Giúp Compiler kiểm tra type.
* Giúp Developer đọc code dễ hơn.

---

# Câu 2

## ❓ Câu hỏi

> Type Annotation là gì?

## ✍️ Câu trả lời của bạn

> Là cú pháp `: kiểu dữ liệu` được viết sau tên biến.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Hoàn toàn chính xác.

Ví dụ:

```typescript
let age: number = 30;
```

Trong đó:

```text
age

↓

:number

↓

30
```

---

# Câu 3

## ❓ Câu hỏi

```typescript
let age: number = 30;
```

## ✍️ Câu trả lời của bạn

* `age` → biến.
* `number` → kiểu dữ liệu.
* `30` → giá trị.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đúng.

Đây là Mental Model quan trọng nhất của bài hôm nay.

---

# Câu 4

## ❓ Câu hỏi

Điều gì xảy ra?

```typescript
let age: number = 30;

age = "Thirty";
```

## ✍️ Câu trả lời của bạn

> Báo lỗi vì `age` có kiểu `number` nhưng lại gán `string`.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Đây là ví dụ điển hình cho Type Checking.

---

# Câu 5

## ❓ Câu hỏi

Type Inference là gì?

## ✍️ Câu trả lời của bạn

> Khi không khai báo kiểu dữ liệu thì TypeScript xác định kiểu dữ liệu thông qua giá trị.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất tốt.

Đây là cách giải thích dễ hiểu và đúng bản chất.

---

# Câu 6

## ❓ Câu hỏi

So sánh:

```typescript
let name: string = "Hieu";
```

và

```typescript
let name = "Hieu";
```

## ✍️ Câu trả lời của bạn

> Giống nhau: đều tạo biến có giá trị `"Hieu"`.

> Khác nhau: một cái có Type Annotation, một cái không.

## 📊 Điểm

**9.5 / 10**

## 💬 Feedback

Đúng.

Có thể bổ sung thêm một ý:

Sau khi TypeScript suy luận, **cả hai biến đều có kiểu `string`**.

Khác nhau chỉ ở cách khai báo, không phải kiểu cuối cùng của biến.

---

# Câu 7

## ❓ Câu hỏi

Khi nào không cần viết Type Annotation?

## ✍️ Câu trả lời của bạn

* Khi code đơn giản.
* Khi nhìn vào giá trị đã biết kiểu dữ liệu.
* Khi muốn code gọn hơn.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất tốt.

Đây cũng là coding style phổ biến trong Angular.

---

# Câu 8

## ❓ Câu hỏi

Vì sao TypeScript vẫn hỗ trợ Type Inference?

## ✍️ Câu trả lời của bạn

> Để duy trì tính linh hoạt vốn là bản chất của JavaScript, TypeScript chỉ thêm ý nghĩa về type.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Đây là câu trả lời tôi thích nhất.

Bạn đã nhìn được triết lý thiết kế của TypeScript:

> **Không thay đổi JavaScript, chỉ làm JavaScript an toàn hơn.**

---

# Câu 9

## ❓ Câu hỏi

Vì sao Angular thường viết:

```typescript
name = "Hieu";
```

thay vì:

```typescript
name: string = "Hieu";
```

## ✍️ Câu trả lời của bạn

> Vì nhìn vào tên biến và giá trị là biết được kiểu dữ liệu nên không cần Type Annotation.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Chính xác.

Thực tế, Angular tận dụng Type Inference rất nhiều để code ngắn gọn và dễ đọc.

---

# Câu 10

## ❓ Câu hỏi

Phân biệt:

* Variable
* Type Annotation
* Type Inference
* Type Checking

## ✍️ Câu trả lời của bạn

* Variable → tên ánh xạ tới vùng nhớ dữ liệu.
* Type Annotation → cú pháp giúp developer biết kiểu dữ liệu.
* Type Inference → TypeScript tự suy luận kiểu dữ liệu.
* Type Checking → kiểm tra kiểu dữ liệu trong quá trình compile.

## 📊 Điểm

**10 / 10**

## 💬 Feedback

Rất đầy đủ.

Đặc biệt, bạn nhớ được:

> **Type Checking diễn ra trong quá trình compile.**

Bạn đã sửa được điểm mình góp ý ở Lesson 16.

---

# 💪 Điểm mạnh

Điểm mạnh lớn nhất của bạn ở Lesson này là bạn đã phân biệt được bốn khái niệm khác nhau:

```text
Variable

↓

Type Annotation

↓

Type Inference

↓

Type Checking
```

Rất nhiều người mới học TypeScript thường nhầm lẫn bốn khái niệm này, nhưng bạn đã tách bạch được vai trò của từng khái niệm.

---

# 🎯 Điểm cần cải thiện

Chỉ có một điểm rất nhỏ.

Ở Câu 6, hãy nhớ:

```typescript
let name: string = "Hieu";
```

và

```typescript
let name = "Hieu";
```

**Đều có kiểu cuối cùng là `string`.**

Điểm khác nhau không nằm ở kiểu dữ liệu, mà nằm ở:

* Có ghi rõ Type Annotation.
* Hay để TypeScript tự suy luận.

---
