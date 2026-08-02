# Review & Feedback

## Kết quả chung

| Tiêu chí | Đánh giá |
|---|---|
| Hiểu bản chất Variable | ⭐⭐⭐⭐⭐ |
| Tư duy Memory | ⭐⭐⭐⭐⭐ |
| Phân biệt var / let / const | ⭐⭐⭐⭐⭐ |
| Thuật ngữ | ⭐⭐⭐⭐☆ |
| Liên hệ Java | ⭐⭐⭐⭐⭐ |

## Tổng điểm

**9.6 / 10**

---

## Câu 1

### Câu hỏi
> Biến là gì? Hãy giải thích bằng ngôn ngữ của bạn.

### Câu trả lời của bạn
> Biến là cách hệ thống lưu trữ giá trị

### Điểm
**8.5 / 10**

### Feedback
Bạn hiểu biến liên quan đến việc lưu trữ dữ liệu, nhưng cách diễn đạt chưa đủ chính xác.

Biến là một cái tên hoặc label dùng để tham chiếu tới dữ liệu trong bộ nhớ.

### Senior Answer
> A variable is a named reference that allows code to access and manipulate data stored in memory.

---

## Câu 2

### Câu hỏi
> `var`, `let`, `const` là kiểu dữ liệu hay từ khóa khai báo biến?

### Câu trả lời của bạn
> là từ khóa khai báo biến. var là cách khai báo kiểu cũ, còn let vs const là cách khai báo kiểu mới

### Điểm
**10 / 10**

### Feedback
Chính xác. `var`, `let`, `const` là từ khóa khai báo biến, không phải kiểu dữ liệu.

### Senior Answer
> `var`, `let`, and `const` are variable declaration keywords. `let` and `const` were introduced in ES2015 to provide block scope and safer semantics than `var`.

---

## Câu 3

### Câu hỏi
> Khai báo biến, gán giá trị và khởi tạo khác nhau thế nào?

### Câu trả lời của bạn
> Khái báo biến là tạo label gán cho một vùng nhớ cố định nhưng chưa có giá trị nên giá trị mặc định là undefined. Gán giá trị là cách gán giá trị cho vùng nhớ thông qua biến. Khởi tạo là kết hợp việc khai báo và gán giá trị.

### Điểm
**10 / 10**

### Feedback
Bạn đã phân biệt đúng declaration, assignment và initialization. Chỉ cần tránh gọi đó là “vùng nhớ cố định”.

### Senior Answer
```javascript
let age;       // declaration
age = 28;      // assignment
let score = 10; // declaration + initialization
```

---

## Câu 4

### Câu hỏi
> Vì sao JavaScript hiện đại hạn chế dùng `var`?

### Câu trả lời của bạn
> Vì var là cách javascript cho phép khai báo biến kiểu dễ dãi, khó xác định được ý tưởng ban đầu của biến, dẫn tới khó debug, khó hiểu và dễ gây lỗi vì ứng dụng không báo error.

### Điểm
**9.5 / 10**

### Feedback
Bạn hiểu đúng hậu quả. Nguyên nhân gốc là `var` không có block scope, cho phép redeclaration và có hành vi khó dự đoán hơn.

### Senior Answer
> `var` is function-scoped, allows redeclaration, and has hoisting behavior that can make code harder to reason about. Modern JavaScript prefers `let` and `const`.

---

## Câu 5

### Câu hỏi
> Block scope là gì?

### Câu trả lời của bạn
> là phạm vi trong dấu { }

### Điểm
**9 / 10**

### Feedback
Đúng ý chính. Đầy đủ hơn: block scope là phạm vi mà biến chỉ tồn tại bên trong block được bao bởi `{}`.

### Senior Answer
> Block scope limits a variable's visibility to the nearest enclosing block.

---

## Câu 6

### Câu hỏi
> Đoạn code dùng `var` in ra gì? Vì sao?

### Câu trả lời của bạn
> In ra chữ Hello vì biến khai báo bằng var không bị ràng buộc trong block scope

### Điểm
**10 / 10**

### Feedback
Chính xác.

### Senior Answer
> It prints `Hello` because `var` is not block-scoped.

---

## Câu 7

### Câu hỏi
> Đoạn code dùng `let` xảy ra chuyện gì? Vì sao?

### Câu trả lời của bạn
> Sẽ bị lỗi là message chưa được khai báo hoặc không tìm thấy do biến message được khai báo qua let mà let có phạm vi trong block scope if, còn console.log.. là gọi ở ngoài if (tức là ngoài block scope)

### Điểm
**10 / 10**

### Feedback
Chính xác và giải thích đủ nguyên nhân.

### Senior Answer
> It throws `ReferenceError` because `message` is scoped to the `if` block.

---

## Câu 8

### Câu hỏi
> Khi nào nên dùng `let`?

### Câu trả lời của bạn
> Khi cảm thấy có thể thay đổi dữ liệu biến trong một quá trình nào đó

### Điểm
**10 / 10**

### Feedback
Đúng mindset. Từ chính xác hơn là dùng `let` khi binding cần được reassignment.

### Senior Answer
> Use `let` when the binding must be reassigned.

---

## Câu 9

### Câu hỏi
> Vì sao nên ưu tiên `const`?

### Câu trả lời của bạn
> Khi cảm thấy biến tạo ra được phép thay đổi trong tương lai

### Điểm
**6 / 10**

### Feedback
Bạn đã mô tả `let`, không phải `const`.

`const` được ưu tiên khi không có ý định gán lại biến. Nó làm code dễ dự đoán và giảm reassignment ngoài ý muốn.

### Senior Answer
> Prefer `const` because it communicates that the binding will not be reassigned, reducing accidental state changes and improving readability.

---

## Câu 10

### Câu hỏi
> Vì sao có thể sửa `employee.name` nhưng không thể gán `employee` sang object khác?

### Câu trả lời của bạn
> Đầu tiên cần phân tích là employee được khai báo bằng const, nghĩa là object này là cố định, employee.name = "Tom"; là việc thay đổi giá trị cho class field chứ không phải object employee nên không bị lỗi. Đoạn khi hai là cố thay đổi employee trỏ sang object khác nên bị lỗi

### Điểm
**10 / 10**

### Feedback
Bạn hiểu đúng reference. Chỉnh thuật ngữ: `name` ở đây là object property, không phải class field.

### Senior Answer
> `const` prevents rebinding the variable to another object. It does not make the referenced object immutable.

---

## Câu 11

### Câu hỏi
> Liên hệ `const` trong JavaScript với `final` trong Java.

### Câu trả lời của bạn
> Giống nhau, đối với biến thì không được ghi đè giá trị, đối với class thì không được thay đổi object reference (tôi đoán vậy)

### Điểm
**10 / 10**

### Feedback
Bạn đoán đúng. Cả hai đều ngăn reference bị gán sang object khác nhưng không làm object bất biến.

### Senior Answer
> JavaScript `const` and Java `final` are similar for references: the reference cannot be reassigned, while the object's internal state may still change.

---

## Câu 12

### Câu hỏi
> Trong Angular class, vì sao field thường không viết `let` hoặc `const` trước tên biến?

### Câu trả lời của bạn
> Vì đó là class field, được xác định scope nằm trong class đó

### Điểm
**10 / 10**

### Feedback
Chính xác. Class field dùng cú pháp của class, không dùng từ khóa khai báo local variable.

### Senior Answer
> Class fields are declared using class member syntax. `let` and `const` are for lexical variable declarations, not class member declarations.

---

# Knowledge Seeds

- Memory Model
- Object Reference
- Block Scope
- Strict Mode
- Hoisting
- Temporal Dead Zone

# Điểm mạnh

- Tư duy hệ thống tốt
- Liên hệ Java nhanh
- Hiểu scope và reference
- Giải thích bằng lời của mình
- Không học thuộc máy móc

# Điểm cần cải thiện

1. Dùng thuật ngữ chính xác hơn:
   - object property, không phải class field
   - reassignment, không chỉ “thay đổi”
2. Đọc kỹ câu hỏi:
   - Câu 9 mô tả `let` thay vì `const`

# Progress Summary

- Variable mental model: hiểu tốt
- Declaration / Assignment / Initialization: hiểu tốt
- `var`: hiểu vấn đề
- `let`: hiểu khi nào dùng
- `const`: hiểu reference, còn một lỗi diễn đạt ở câu 9
- Block scope: hiểu tốt
- Angular class field: hiểu tốt
