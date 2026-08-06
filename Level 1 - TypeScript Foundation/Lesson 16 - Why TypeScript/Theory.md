# 📚 Level 1 – TypeScript Foundation

# Lesson 01 – Why TypeScript?

Đây là bài quan trọng nhất của toàn bộ phần TypeScript.

Nếu JavaScript trả lời:

> **"Làm sao viết chương trình?"**

thì TypeScript trả lời:

> **"Làm sao phát hiện lỗi trước khi chương trình chạy?"**

---

# 📖 Theory

## 🎯 Story

Khoảng năm 2010.

JavaScript đã trở thành ngôn ngữ phổ biến nhất để phát triển web.

Các dự án ngày càng lớn:

* Gmail
* Facebook
* Office Online
* Google Maps

Có những dự án chứa:

```text
100.000+
500.000+
1.000.000+
```

dòng JavaScript.

Lúc này Microsoft gặp một vấn đề rất lớn.

---

# 😭 Problem

Giả sử có đoạn code:

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}

const total = calculateTotal("100", 5);

console.log(total);
```

JavaScript vẫn chạy.

Kết quả:

```text
500
```

Vì JavaScript tự động ép kiểu.

Nhưng hãy xem ví dụ khác:

```javascript
function printName(user) {
    console.log(user.name);
}

printName(null);
```

Khi chạy:

```text
TypeError
Cannot read properties of null
```

Lỗi này chỉ xuất hiện khi chương trình đang chạy.

Nếu ứng dụng đã được deploy cho khách hàng, họ mới là người nhìn thấy lỗi.

Đối với các hệ thống lớn, điều này rất nguy hiểm.

---

# 💡 Solution

Microsoft không muốn thay thế JavaScript.

Họ chỉ muốn bổ sung khả năng kiểm tra kiểu dữ liệu.

Ví dụ:

```typescript
function calculateTotal(
    price: number,
    quantity: number
) {
    return price * quantity;
}
```

Nếu viết:

```typescript
calculateTotal("100", 5);
```

IDE sẽ báo lỗi ngay.

Bạn chưa cần chạy chương trình.

Mental model:

```text
JavaScript

↓

Viết code

↓

Chạy

↓

Mới biết lỗi
```

TypeScript:

```text
Viết code

↓

Type Checking

↓

Sửa lỗi

↓

Compile

↓

Chạy
```

---

# TypeScript là gì?

TypeScript là:

> **JavaScript + Type System.**

Điều này rất quan trọng.

TypeScript **không thay thế JavaScript**.

Nó mở rộng JavaScript.

Ví dụ:

JavaScript:

```javascript
const name = "Hieu";
```

TypeScript:

```typescript
const name: string = "Hieu";
```

JavaScript vẫn hợp lệ trong TypeScript.

---

# TypeScript có chạy trên Browser không?

Không.

Browser chỉ hiểu:

```text
HTML
CSS
JavaScript
```

Browser **không hiểu TypeScript**.

Vì vậy cần một bước nữa.

```text
TypeScript

↓

Compiler (tsc)

↓

JavaScript

↓

Browser
```

Đây gọi là:

> **Compile.**

---

# Vì sao Angular chọn TypeScript?

Angular được xây dựng cho các dự án lớn.

Một dự án Angular có thể có:

* Hàng nghìn Component.
* Hàng trăm Service.
* Hàng chục lập trình viên cùng làm việc.

Nếu chỉ dùng JavaScript:

* Khó phát hiện lỗi.
* Khó refactor.
* Khó đọc code.

TypeScript giúp:

* Phát hiện lỗi sớm.
* IDE gợi ý tốt hơn.
* Refactor an toàn.
* Code dễ bảo trì.

Đó là lý do Angular sử dụng TypeScript làm ngôn ngữ chính.

---

# Java Developer sẽ thấy quen

Trong Java:

```java
String name = "Hieu";
```

Trong TypeScript:

```typescript
const name: string = "Hieu";
```

Ý tưởng giống nhau:

> Biến có kiểu dữ liệu rõ ràng.

Tuy nhiên, TypeScript **không giống Java**.

Nó vẫn kế thừa tính linh hoạt của JavaScript.

Chúng ta sẽ học dần trong các bài sau.

---

# 🌱 Advanced Note

Hôm nay chúng ta **chưa học**:

* Type Inference
* any
* unknown
* interface
* type alias
* generic
* enum
* utility types
* decorator

Những kiến thức này sẽ được học đúng thời điểm trong lộ trình.

---

# 🎯 Tổng kết

```text
JavaScript

↓

Dynamic Typing

↓

Lỗi có thể xuất hiện khi chạy
```

↓

```text
TypeScript

↓

Type Checking

↓

Phát hiện lỗi trước khi chạy
```

Điều quan trọng nhất của Lesson hôm nay là:

> **TypeScript không phải là JavaScript phiên bản mới.**

Mà là:

> **JavaScript được bổ sung hệ thống kiểu dữ liệu (Type System).**

---

# 🙋 Phần 2 – Giải đáp

**Có phần nào trong bài hôm nay bạn chưa hiểu hoặc muốn tôi giải thích sâu hơn không?**
