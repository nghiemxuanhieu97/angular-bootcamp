# Lesson 07 – Modules (`import` / `export`)

# 🧠 Review & Feedback

## Quy tắc Bootcamp mới

Từ Lesson 08 trở đi:

- Theory vẫn có thể dùng Java Comparison khi hữu ích.
- Questions không còn yêu cầu so sánh Java ↔ JavaScript.
- Chỉ nhắc khác biệt quan trọng trong Feedback khi ảnh hưởng trực tiếp đến Angular.

## Kết quả chung

| Tiêu chí | Đánh giá |
|---|---|
| Hiểu Module | ⭐⭐⭐⭐⭐ |
| Hiểu Import / Export | ⭐⭐⭐⭐⭐ |
| Mental Model | ⭐⭐⭐⭐⭐ |
| Angular Thinking | ⭐⭐⭐⭐⭐ |
| Terminology | ⭐⭐⭐⭐☆ |

## Tổng điểm

**9.8 / 10**

---

# Câu 1

## Câu hỏi
Module được sinh ra để giải quyết vấn đề gì?

## Câu trả lời của bạn
> Chia nhỏ file JS theo context, responsibility; tránh lỗi vì biến hay function bị trùng, từ đó dễ quản lý, bảo trì.

## Điểm
**10 / 10**

## Feedback
Bạn trả lời đúng theo cấu trúc Problem → Solution → Benefit.

---

# Câu 2

## Câu hỏi
Nếu không có Module, sẽ gặp những vấn đề gì?

## Câu trả lời của bạn
- Function sau đè logic function trước.
- Khó debug và trace.
- Khó quản lý theo context/feature.

## Điểm
**10 / 10**

## Feedback
Đầy đủ và thực tế.

---

# Câu 3

## Câu hỏi
`export` có ý nghĩa gì?

## Câu trả lời của bạn
> Cho phép function hay biến của file JS này được truy cập bởi JS khác thông qua từ khóa `import`.

## Điểm
**10 / 10**

## Feedback
Đúng. Ngoài function/variable, có thể export class, object, constant, array, type/interface.

---

# Câu 4

## Câu hỏi
`import` có ý nghĩa gì?

## Câu trả lời của bạn
> Cho phép sử dụng function hoặc biến hoặc bất kỳ thứ gì được export trong file JS nào đó.

## Điểm
**10 / 10**

## Feedback
Chính xác.

---

# Câu 5

## Câu hỏi
Import `add()` và gọi `add(10, 20)`.

## Câu trả lời của bạn

```javascript
import { add } from "./math.js";
```

## Điểm
**9.5 / 10**

## Feedback
Import đúng, nhưng thiếu lời gọi:

```javascript
import { add } from "./math.js";
add(10, 20);
```

---

# Câu 6

## Câu hỏi
Named Export có hợp lệ không?

## Câu trả lời của bạn
> Hợp lệ vì đây là cú pháp named export và import dùng đúng tên `saveEmployee`.

## Điểm
**10 / 10**

## Feedback
Chính xác.

---

# Câu 7

## Câu hỏi
Default Export có hợp lệ không?

## Câu trả lời của bạn
> Đúng vì đối với default export thì lúc import dùng tên gì cũng được.

## Điểm
**10 / 10**

## Feedback
Đúng bản chất.

---

# Câu 8

## Câu hỏi
Named Export và Default Export khác nhau ở điểm nào?

## Câu trả lời của bạn
> Named Export dành cho file JS có nhiều function hoặc biến, còn Default Export dành cho file JS chỉ có 1 function hoặc 1 biến duy nhất.

## Điểm
**9 / 10**

## Feedback
Cần chỉnh: Default Export không bắt buộc module chỉ có một thành phần.

Ví dụ:

```javascript
export const VERSION = "1.0";
export function validate() {}
export default class EmployeeService {}
```

Một module có thể có nhiều Named Export và một Default Export. Default Export thường đánh dấu thành phần chính.

---

# Câu 9

## Câu hỏi
Java Module và JavaScript Module.

## Câu trả lời của bạn
> Giống là đều cho phép truy cập từ bên ngoài. Khác là JavaScript cho phép dynamic name với default export, Java thì không.

## Điểm
**10 / 10**

## Feedback
Câu trả lời tốt. Dạng câu hỏi này sẽ không xuất hiện ở các lesson sau.

---

# Câu 10

## Câu hỏi
Vì sao Angular có nhiều dòng `import`?

## Câu trả lời của bạn
> Vì file đó cần dùng nhiều thứ từ nhiều file JS khác nhau.

## Điểm
**10 / 10**

## Feedback
Đúng.

---

# Câu 11

## Câu hỏi
Liên hệ Module, Export và Import.

## Câu trả lời của bạn
> Module giúp tách file JS thành nhiều file nhỏ. Import và export giúp module này sử dụng module khác.

## Điểm
**10 / 10**

## Feedback
Ngắn gọn và chính xác.

---

# Câu 12

## Câu hỏi
Mô tả luồng hoạt động của Module.

## Câu trả lời của bạn
> File A là module và export ra cho module khác là file B dùng thông qua từ khóa import.

## Điểm
**10 / 10**

## Feedback

```text
File A
↓
Export public API
↓
File B
↓
Import API
↓
Sử dụng
```

---

# Knowledge Seeds

Từ đây, chương trình chuyển từ viết code trong một file sang tổ chức chương trình gồm nhiều module.

# Điểm mạnh

Bạn đã trả lời theo hướng khái niệm sinh ra để giải quyết vấn đề gì và mang lại lợi ích gì.

# Điểm cần cải thiện

1. Default Export không có nghĩa module chỉ chứa một thành phần.
2. Khi đề yêu cầu import và gọi function, cần hoàn thành cả hai bước.
