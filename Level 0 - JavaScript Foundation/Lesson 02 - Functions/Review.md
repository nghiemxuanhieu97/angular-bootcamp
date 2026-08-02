# Review & Feedback

## Kết quả chung

| Tiêu chí | Đánh giá |
|---|---|
| Hiểu bản chất Function | ⭐⭐⭐⭐⭐ |
| Parameter / Argument | ⭐⭐⭐⭐⭐ |
| Return Value | ⭐⭐⭐⭐⭐ |
| Tư duy tổ chức code | ⭐⭐⭐⭐⭐ |
| Điểm khác Java | ⭐⭐⭐⭐☆ |

**Tổng điểm: 9.7 / 10**

---

## Câu 1

### Câu hỏi
> Function là gì? Hãy giải thích bằng ngôn ngữ của bạn.

### Câu trả lời của bạn
> Function là một chuỗi hành động được thể hiện trong javascript thông qua việc đặt tên hành động và cái tên đó sẽ tham chiếu tới một vùng nhớ chứa code của function

### Điểm
**10 / 10**

### Feedback
Bạn kết nối tốt mental model giữa variable và function. Cách diễn đạt chính xác hơn: function là một callable value đóng gói hành vi có thể tái sử dụng.

### Senior Answer
> A function is a callable value that encapsulates reusable behavior and may receive inputs and return an output.

---

## Câu 2

### Câu hỏi
> Function giải quyết vấn đề gì trong chương trình?

### Câu trả lời của bạn
> Function tránh việc lặp đi lặp lại các đoạn code giống nhau, giúp tổ chức code như chia nhỏ, đọc dễ hiểu nếu mỗi function đại diện cho một hành động nhất định

### Điểm
**10 / 10**

### Feedback
Đúng: tránh duplication và decomposition bài toán.

### Senior Answer
> Functions reduce duplication, encapsulate behavior, and decompose complex workflows into smaller units with clear responsibilities.

---

## Câu 3

### Câu hỏi
> Khai báo function và gọi function khác nhau thế nào?

### Câu trả lời của bạn
> Khai báo function sẽ giúp javascript engine lưu tên function, parameter và code của function vào vùng nhớ cố định. Khi gọi function và truyền argument, javascript engine sẽ map argument vào parameter, thực thi code của function và trả về kết quả nếu function có return

### Điểm
**9.5 / 10**

### Feedback
Hiểu đúng luồng. Chỉ nên tránh khẳng định “vùng nhớ cố định”.

### Senior Answer
> Function declaration defines callable behavior. Invocation creates an execution context, binds arguments to parameters, executes the body, and produces a return value.

---

## Câu 4

### Câu hỏi
> Parameter và argument khác nhau thế nào?

### Câu trả lời của bạn
> Parameter là việc khai báo kèm với khai báo function ngay từ đầu, được thiết kế để cho đại diện cho input mà function cần trong quá trình xử lý, argument là giá trị của parameter khi gọi function hay còn gọi là đối số, parameter là tham số

### Điểm
**9.5 / 10**

### Feedback
Đúng. Argument là giá trị thật được truyền để parameter nhận trong từng lần gọi.

### Senior Answer
> Parameters are placeholders declared by a function; arguments are the actual values supplied during invocation.

---

## Câu 5

### Câu hỏi
> Đoạn code chỉ khai báo `sayHello` rồi `console.log("Start")` in gì?

### Câu trả lời của bạn
> đoạn code in ra Start vì function sayHello chưa được gọi

### Điểm
**10 / 10**

### Senior Answer
> It prints only `Start`; `sayHello` is defined but never invoked.

---

## Câu 6

### Câu hỏi
> Kết quả của `const result = add(10, 20)` là gì?

### Câu trả lời của bạn
> đoạn code sau sẽ chạy function add, truyền argument 10 và 20 và map vào a với b, sau đó tính ra kết quả 30 và gán kết quả vào biến result.

### Điểm
**10 / 10**

### Feedback
Hoàn toàn chính xác.

---

## Câu 7

### Câu hỏi
> `console.log()` và `return` khác nhau thế nào?

### Câu trả lời của bạn
> console.log() in ra màn hình còn return là từ khóa cho biết function có trả về kết quả

### Điểm
**9.5 / 10**

### Feedback
`console.log()` phục vụ quan sát/debug; `return` trả dữ liệu cho caller.

### Senior Answer
> `console.log` creates a visible debugging side effect, while `return` produces the function's result for the calling code.

---

## Câu 8

### Câu hỏi
> Nếu function không có `return`, giá trị mặc định là gì?

### Câu trả lời của bạn
> undefined

### Điểm
**10 / 10**

---

## Câu 9

### Câu hỏi
> Vì sao nên chia function lớn thành nhiều function nhỏ?

### Câu trả lời của bạn
> Giúp code dễ đọc, dễ tái sử dụng, dễ quản lý, bảo trì

### Điểm
**10 / 10**

### Feedback
Đúng. Có thể bổ sung dễ test, debug và thay đổi.

---

## Câu 10

### Câu hỏi
> Đâu là parameter và argument trong `deleteEmployee(id)` và `deleteEmployee(15)`?

### Câu trả lời của bạn
> id là parameter, 15 là argument

### Điểm
**10 / 10**

---

## Câu 11

### Câu hỏi
> Function JavaScript giống Java method ở điểm nào?

### Câu trả lời của bạn
> đều đại diện cho một chuỗi các hành động, có thể trả về kết quả, có tham số và chỉ thực thi khi gọi

### Điểm
**10 / 10**

---

## Câu 12

### Câu hỏi
> Điểm khác biệt quan trọng nào giữa JavaScript function và Java method mà chúng ta mới chạm tới?

### Câu trả lời của bạn
> Tôi không biết, có thể là arrow function

### Điểm
**7 / 10**

### Feedback
Arrow function là cú pháp khác. Khác biệt nền tảng là JavaScript function là first-class value: có thể gán, truyền, trả về và lưu như dữ liệu.

### Senior Answer
> JavaScript functions are first-class values: they can be assigned, passed as arguments, returned, and stored like other data.

---

## Knowledge Seeds
- First-class Function
- Execution Context
- Call Stack

## Điểm mạnh
- Hiểu mental model function
- Parameter/argument chắc
- Return chắc
- Tư duy decomposition tốt
- Liên hệ Java nhanh

## Điểm cần cải thiện
Bổ sung đặc trưng: function trong JavaScript có thể được dùng như dữ liệu.

## Progress Summary
- Function mental model: hiểu tốt
- Declaration vs invocation: hiểu tốt
- Parameter vs argument: hiểu tốt
- Return: hiểu tốt
- Decomposition: hiểu tốt
- First-class Function: mới biết tên, chưa học sâu
