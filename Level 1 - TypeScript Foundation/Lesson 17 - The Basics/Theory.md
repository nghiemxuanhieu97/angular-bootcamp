Đồng ý. Chúng ta sẽ **đánh số liên tục** để phản ánh đúng tiến độ Bootcamp.

* Level 0: JavaScript Foundation

  * ✅ Lesson 00 → Lesson 15
* Level 1: TypeScript Foundation

  * ✅ Lesson 16 – Why TypeScript
  * 🚀 **Lesson 17 – The Basics**

Điều này sẽ giúp toàn bộ Bootcamp có một timeline thống nhất.

---

# 📚 Level 1 – TypeScript Foundation

# Lesson 17 – The Basics

Nếu Lesson 16 trả lời:

> **"Tại sao phải dùng TypeScript?"**

thì Lesson 17 sẽ trả lời:

> **"Làm sao khai báo kiểu dữ liệu trong TypeScript?"**

Đây là bài học đầu tiên bạn sẽ thực sự **viết TypeScript**.

---

# 📖 Theory

## 🎯 Story

Bạn còn nhớ JavaScript chứ?

Chúng ta có thể viết:

```javascript
let name = "Hieu";

let age = 30;

let active = true;
```

JavaScript không cần khai báo kiểu dữ liệu.

Nó sẽ tự đoán (infer) kiểu tại runtime.

Điều này rất linh hoạt.

Nhưng cũng dẫn đến vấn đề.

---

# 😭 Problem

Giả sử có đoạn code:

```javascript
let age = 30;

age = "Thirty";
```

JavaScript hoàn toàn chấp nhận.

Lúc này:

```text
age

↓

30

↓

"Thirty"
```

Biến `age` đã đổi từ Number sang String.

Trong một dự án lớn, điều này rất dễ gây lỗi.

---

# 💡 Solution

TypeScript cho phép khai báo kiểu dữ liệu ngay từ đầu.

```typescript
let age: number = 30;
```

Nếu sau đó viết:

```typescript
age = "Thirty";
```

IDE sẽ báo lỗi ngay.

Mental Model:

```text
Variable

↓

Type

↓

Value
```

Một biến có **một kiểu dữ liệu rõ ràng**.

---

# Các kiểu dữ liệu cơ bản

## 1. string

```typescript
let name: string = "Hieu";
```

Dùng để lưu chuỗi ký tự.

Ví dụ:

* Tên
* Email
* Địa chỉ

---

## 2. number

```typescript
let age: number = 30;
```

Dùng để lưu:

* Số nguyên
* Số thực

TypeScript chỉ có một kiểu:

```text
number
```

Không phân biệt:

* int
* long
* double
* float

như Java.

---

## 3. boolean

```typescript
let active: boolean = true;
```

Chỉ có:

```text
true

false
```

---

## 4. array

Có hai cách viết.

Cách 1:

```typescript
let scores: number[] = [10, 20, 30];
```

Cách 2:

```typescript
let scores: Array<number> = [10, 20, 30];
```

Trong Angular, bạn sẽ gặp cả hai.

Nhưng cách thứ nhất phổ biến hơn.

---

## 5. object

```typescript
let employee: object = {
    id: 1,
    name: "Hieu"
};
```

Hiện tại chỉ cần hiểu:

> object dùng để lưu một đối tượng.

Sau này chúng ta sẽ học Interface và Type.

---

## Type Annotation

Phần này:

```typescript
: string
```

được gọi là:

> **Type Annotation**

Ví dụ:

```typescript
let name: string = "Hieu";
```

Mental Model:

```text
name

↓

:string

↓

"Hieu"
```

Hay:

```typescript
let active: boolean = true;
```

```text
active

↓

:boolean

↓

true
```

---

# Type Inference

TypeScript rất thông minh.

Ví dụ:

```typescript
let name = "Hieu";
```

Bạn không khai báo:

```typescript
:string
```

Nhưng TypeScript vẫn hiểu:

```text
name

↓

string
```

Đó gọi là:

> **Type Inference**

Hay:

```typescript
let age = 30;
```

↓

TypeScript tự hiểu:

```text
number
```

Trong thực tế, đây là cách được sử dụng nhiều nhất.

---

# Có nên luôn viết Type Annotation?

Không.

Ví dụ:

```typescript
let age = 30;
```

Đẹp hơn:

```typescript
let age: number = 30;
```

vì TypeScript đã tự suy luận được.

Chỉ nên viết Type Annotation khi:

* Hàm trả về giá trị.
* Tham số của hàm.
* Kiểu dữ liệu không rõ ràng.
* Cần tăng khả năng đọc code.

Đây cũng là coding style của hầu hết dự án Angular hiện đại.

---

# Angular dùng ở đâu?

Ví dụ:

```typescript
export class UserComponent {

    name = "Hieu";

    age = 30;

    active = true;

}
```

TypeScript tự suy luận:

```text
name

↓

string
```

```text
age

↓

number
```

```text
active

↓

boolean
```

Bạn sẽ gặp cách viết này rất thường xuyên trong Angular.

---

# 🌱 Advanced Note

Hôm nay chúng ta **chưa học**:

* any
* unknown
* union type
* literal type
* tuple
* enum
* interface
* type alias
* generic

Chúng sẽ được học ở các lesson tiếp theo.

---

# 🎯 Tổng kết

```text
Variable

↓

Type Annotation (tùy chọn)

↓

Type Inference

↓

Type Checking
```

Các kiểu dữ liệu cơ bản hôm nay:

* `string`
* `number`
* `boolean`
* `array`
* `object`

Điều quan trọng nhất của Lesson hôm nay là:

> **TypeScript có thể tự suy luận kiểu dữ liệu (Type Inference).**

Vì vậy:

> **Không phải lúc nào cũng cần viết Type Annotation.**

---

