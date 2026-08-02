# Theory

# Lesson 00 — Browser, JavaScript and Angular

## Problem

> Tại sao website cần JavaScript?  
> Angular, TypeScript, JavaScript và browser liên quan với nhau như thế nào?

---

## Câu chuyện bắt đầu năm 1995

Hãy tưởng tượng.

Có một công ty.

Tên là...

**Netscape.**

Họ tạo ra trình duyệt web.

Lúc đó website gần như chỉ có:

```
HTML
```

Ví dụ

```html
<h1>Hello</h1>

<p>Xin chào</p>
```

Website chỉ là...

**một tờ giấy.**

Không bấm được.

Không animation.

Không popup.

Không login.

Không button.

---

Người dùng than phiền.

> "Website này giống quyển sách quá."

---

Thế là Netscape nghĩ

> "Nếu website có thể tự phản ứng giống ứng dụng thì sao?"

---

Họ thuê một lập trình viên.

Tên

**Brendan Eich.**

Yêu cầu của sếp:

> "Trong 10 ngày hãy tạo một ngôn ngữ."

Và...

JavaScript ra đời.

---

# Lúc đó JavaScript dùng để làm gì?

Đừng nghĩ tới React.

Đừng nghĩ tới Angular.

Đừng nghĩ tới SPA.

JavaScript ban đầu chỉ làm những việc như

```text
Khi bấm nút

↓

Đổi màu chữ
```

Hoặc

```text
Hiện popup

```

Hoặc

```text
Kiểm tra email có rỗng không

```

Chỉ vậy thôi.

---

# Vai trò của HTML, CSS và JavaScript

Có thể hình dung một trang web như một con người.

## HTML — Bộ xương

HTML tạo ra cấu trúc.

Nó nói rằng:

- Có một tiêu đề
- Có một đoạn văn
- Có một button

## CSS — Quần áo và ngoại hình

CSS quyết định:

- Màu sắc
- Khoảng cách
- Kích thước
- Vị trí
- Cách trình bày

## JavaScript — Hành vi

JavaScript quyết định:

- Click thì làm gì
- Nhập dữ liệu thì xử lý ra sao
- Khi nào gọi API
- Khi nào thay đổi giao diện
- Khi nào hiện thông báo

Có thể nhớ:

```text
HTML       → Cấu trúc
CSS        → Trình bày
JavaScript → Hành vi
```

---

# Browser lúc đó

Browser giống một người.

Khi nhận được

```
HTML
```

Browser sẽ đọc.

Giống bạn đọc một quyển sách.

Ví dụ

```html
<h1>Hello</h1>

<button>Save</button>
```

Browser hiểu

```
Có tiêu đề

Có nút
```

Rồi hiển thị.

---

# Browser hiện đại làm những gì?

Browser không chỉ đọc HTML.

Browser còn chịu trách nhiệm:

- Gửi HTTP request tới server
- Nhận HTML, CSS và JavaScript
- Phân tích HTML
- Áp dụng CSS
- Hiển thị giao diện
- Nhận click và thao tác bàn phím
- Quản lý tab, cookie và network
- Tạo và quản lý DOM
- Cung cấp môi trường để JavaScript chạy

Có thể xem browser như một **nền tảng chạy ứng dụng web**.

---

# Nhưng Browser không hiểu JavaScript

Nó cần một "bộ não".

Thế là Browser có thêm

```
JavaScript Engine
```

Chrome

↓

V8

Firefox

↓

SpiderMonkey

Safari

↓

JavaScriptCore

---

# JavaScript Engine thực sự làm gì?

JavaScript Engine không chỉ "đọc" JavaScript.

Nó còn:

- Phân tích mã
- Thực thi lệnh
- Quản lý bộ nhớ
- Tối ưu việc chạy code

Ví dụ:

```javascript
const total = 10 + 20;
console.log(total);
```

JavaScript Engine cần hiểu:

- `const` là khai báo biến
- `10 + 20` là phép cộng
- `total` có giá trị `30`
- `console.log` cần được gọi

---

# ECMAScript là gì?

V8, SpiderMonkey và JavaScriptCore là các engine khác nhau.

Nhưng chúng đều cố gắng tuân theo một chuẩn chung:

> **ECMAScript**

ECMAScript là bản đặc tả quy định JavaScript nên hoạt động như thế nào.

```text
ECMAScript
"Bộ luật của JavaScript"
        ↓
V8 / SpiderMonkey / JavaScriptCore
```

## Liên hệ với Java

Có thể so sánh ở mức ý tưởng:

```text
Java Specification
        ↓
HotSpot / OpenJ9 / GraalVM
```

và:

```text
ECMAScript Specification
        ↓
V8 / SpiderMonkey / JavaScriptCore
```

Điểm giống:

- Có một đặc tả chung
- Có nhiều implementation
- Mỗi implementation có cách tối ưu riêng

> JavaScript Engine không hoàn toàn giống JVM. Đây chỉ là so sánh để tạo mental model.

---

Bây giờ Browser có hai phần.

```
HTML

↓

Browser

↓

Màn hình
```

và

```
JavaScript

↓

JavaScript Engine

↓

Browser

↓

Màn hình
```

---

# Một ví dụ rất đơn giản

HTML

```html
<button>Click</button>
```

Browser hiển thị

```
[ Click ]
```

Nếu không có JavaScript.

Bấm.

Không có gì xảy ra.

---

Có JavaScript

```javascript
button.onclick = function () {
    alert("Hello");
}
```

Bấm.

```
Hello
```

Website bắt đầu "sống".

---

# Browser và JavaScript Engine phối hợp thế nào?

Với ví dụ button ở trên, luồng đầy đủ là:

```text
Người dùng click button
        ↓
Browser nhận sự kiện click
        ↓
Browser gọi đoạn JavaScript đã đăng ký
        ↓
JavaScript Engine thực thi đoạn code
        ↓
Browser hiển thị popup
```

Điểm cần phân biệt:

- Browser nhận hành vi từ người dùng
- JavaScript Engine thực thi JavaScript
- Browser cập nhật giao diện

---

# Nhưng có một vấn đề lớn 😄

Website lúc này vẫn giống...

PowerPoint.

Ví dụ

Trang đăng nhập.

```
Login

↓

Server

↓

Server trả HTML mới

↓

Browser xóa trang cũ

↓

Hiện trang mới
```

Toàn bộ trang bị tải lại.

Rất chậm.

---

Đó là lý do sau này xuất hiện:

- AJAX
- jQuery
- SPA
- Angular
- React
- Vue

Nhưng đó là câu chuyện của những bài sau.

---

# Liên hệ với Java Backend

Hãy tưởng tượng Spring Boot.

Khi browser gọi

```
GET /employee
```

Spring Boot trả

```html
<html>

Employee

</html>
```

Browser chỉ hiển thị.

Không có logic nhiều.

---

Angular thì khác.

Spring Boot chỉ trả

```json
[
   {
      "id":1,
      "name":"John"
   }
]
```

Angular sẽ quyết định:

- Hiển thị thế nào
- Sắp xếp ra sao
- Tìm kiếm
- Phân trang
- Đổi màu
- Animation

Điều này giúp backend và frontend tách biệt rõ ràng hơn.

---

# 🧠 Người Java thường nhầm

Nhiều Backend Developer nghĩ:

> Angular = JavaScript.

Không.

Quan hệ đúng là:

```
Browser
│
├── HTML
├── CSS
├── JavaScript
│
└── Angular
      ▲
      │
TypeScript
```

Angular **không thay thế JavaScript**.

Angular **được xây dựng trên TypeScript**, còn TypeScript **là JavaScript có thêm hệ thống kiểu dữ liệu**.

Đó là lý do chúng ta học theo thứ tự:

**JavaScript → TypeScript → Angular**

---

# TypeScript, JavaScript và Angular chạy như thế nào?

Browser không chạy trực tiếp TypeScript.

Luồng thực tế:

```text
Bạn viết Angular bằng TypeScript
              ↓
Angular build
              ↓
JavaScript
              ↓
Browser tải JavaScript
              ↓
JavaScript Engine thực thi
              ↓
Angular chạy
              ↓
Giao diện được cập nhật
```

Nếu sử dụng Chrome:

```text
Angular TypeScript
       ↓
JavaScript
       ↓
Chrome tải code
       ↓
V8 thực thi JavaScript
       ↓
Angular cập nhật giao diện
```

Angular phụ thuộc vào JavaScript vì:

1. Browser không chạy trực tiếp TypeScript
2. Angular code được build thành JavaScript
3. JavaScript Engine thực thi JavaScript
4. Angular runtime chạy trong môi trường JavaScript của browser

---

# DOM — hạt giống kiến thức

Trong quá trình học, người học đã tự suy luận:

> JavaScript có thể thay đổi DOM.

Suy luận này đúng.

Ở mức hiện tại, chỉ cần hiểu:

> DOM là cách browser biểu diễn cấu trúc HTML thành một mô hình mà JavaScript có thể truy cập và thay đổi.

Ví dụ:

```html
<h1>Hello</h1>
```

JavaScript có thể thay đổi nội dung:

```javascript
document.querySelector("h1").textContent = "Hello Angular";
```

DOM sẽ được học trong một lesson riêng.

---

# Tổng kết mental model

```text
Server
  ↓
HTML + CSS + JavaScript
  ↓
Browser
  ├── Hiển thị HTML
  ├── Áp dụng CSS
  └── Dùng JavaScript Engine chạy JavaScript
            ↓
      JavaScript thay đổi giao diện
```

Với Angular:

```text
Angular TypeScript
        ↓
Build
        ↓
JavaScript
        ↓
Browser
        ↓
JavaScript Engine
        ↓
Angular chạy
        ↓
DOM được cập nhật
        ↓
Browser render giao diện
```

---

# Điều bắt buộc phải nhớ

- HTML tạo cấu trúc.
- CSS tạo cách trình bày.
- JavaScript tạo hành vi.
- JavaScript ra đời để giúp website tương tác.
- Browser là toàn bộ môi trường chạy web.
- JavaScript Engine là thành phần thực thi JavaScript.
- Chrome dùng V8.
- Firefox dùng SpiderMonkey.
- Safari dùng JavaScriptCore.
- Các engine tuân theo đặc tả ECMAScript.
- Angular viết bằng TypeScript nhưng phải build thành JavaScript.
- Browser cuối cùng vẫn thực thi JavaScript.

---

# Advanced Notes

Chỉ cần ghi lại, chưa cần học sâu:

- Lịch sử đầy đủ của JavaScript
- Browser rendering pipeline
- DOM tree chi tiết
- Event Loop
- Call stack
- Task queue và microtask queue
- Parser
- Interpreter
- JIT compiler
- Machine code
- Garbage collection trong V8
- Sự khác nhau sâu giữa JVM và JavaScript Engine
