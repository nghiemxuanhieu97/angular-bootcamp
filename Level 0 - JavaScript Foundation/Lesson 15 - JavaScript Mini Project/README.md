# Lesson 15 – JavaScript Mini Project

## Giới thiệu

Chúc mừng bạn đã hoàn thành **Level 0 – JavaScript Foundation**.

Đến thời điểm này, bạn đã học toàn bộ những kiến thức JavaScript nền tảng cần thiết trước khi bước sang TypeScript và Angular.

Lesson 15 chủ yếu tổng hợp kiến thức đã học. Một vài DOM API cần thiết nhưng chưa xuất hiện ở lesson trước sẽ được giới thiệu ngắn gọn ngay trong exercise sử dụng chúng.

Thay vào đó, mục tiêu của lesson này là:

> **Ghép toàn bộ những gì đã học thành một ứng dụng nhỏ giống như một task thực tế tại công ty.**

Trong suốt quá trình làm bài, bạn sẽ gặp lại:

* DOM
* Events
* Callback
* Array Methods
* Function
* Object
* Array
* Event Loop (gián tiếp thông qua Event)
* JavaScript tổ chức code

Nếu hoàn thành toàn bộ 10 bài tập, bạn sẽ có một nền tảng rất vững để bắt đầu học TypeScript và Angular.

---

# Mục tiêu

Xây dựng từng bước một ứng dụng **Employee Management** bằng JavaScript thuần.

Không sử dụng:

* Angular
* React
* Vue
* jQuery
* TypeScript

Mục tiêu duy nhất là luyện JavaScript.

---

# Cấu trúc Lesson

```text
Lesson 15 - JavaScript Mini Project/
│
├── exercise-01-render-employees/
├── exercise-02-filter-active-employees/
├── exercise-03-show-employee-detail/
├── exercise-04-calculate-total-salary/
├── exercise-05-count-active-employees/
├── exercise-06-show-active-button/
├── exercise-07-show-all-button/
├── exercise-08-highlight-selected-employee/
├── exercise-09-handle-employee-not-found/
└── exercise-10-refactor-application/
```

Mỗi Exercise đều hoạt động độc lập.

Bạn có thể làm theo thứ tự từ 01 → 10.

Hoặc mở bất kỳ bài nào để luyện tập.

---

# Cấu trúc của mỗi Exercise

Mỗi bài tập gồm:

```text
exercise-xx/
│
└── exercise/
    ├── index.html
    └── app.js
└── solution/
    ├── index.html
    └── app.js
```

## exercise/index.html

Đã được chuẩn bị sẵn.

Bạn **không cần sửa**.

Chỉ mở bằng trình duyệt để xem kết quả.

---

## exercise/app.js

Đây là file bạn sẽ làm.

File chỉ chứa:

* dữ liệu mẫu
* các DOM Object cần thiết
* các TODO hướng dẫn

Bạn sẽ hoàn thành toàn bộ logic JavaScript tại đây.

---

## solution/index.html

Đã được chuẩn bị sẵn.

Bạn **không cần sửa**.

Chỉ mở bằng trình duyệt để xem kết quả.

---

## solution/app.js

Đây là đáp án hoàn chỉnh.

**Không nên mở trước khi tự làm.**

Sau khi hoàn thành Exercise, hãy so sánh lời giải của mình với đáp án để học cách tổ chức code.

---

# Cách học hiệu quả

Đối với mỗi Exercise, hãy thực hiện đúng quy trình sau:

## Bước 1

Đọc yêu cầu.

Không xem đáp án.

---

## Bước 2

Phân tích:

> Mình cần sử dụng kiến thức nào?

Ví dụ:

* DOM
* Event
* map()
* filter()
* reduce()
* find()

---

## Bước 3

Viết JavaScript trong:

```text
app.js
```

---

## Bước 4

Mở:

```text
index.html
```

bằng trình duyệt.

Kiểm tra kết quả.

---

## Bước 5

Nếu sai.

Hãy tự debug.

Đừng mở đáp án ngay.

---

## Bước 6

Sau khi hoàn thành.

Mở:

```text
solution/app.js
```

So sánh:

* cách đặt tên biến
* cách chia function
* cách tổ chức code
* cách sử dụng Array Methods

---

# Nội dung từng Exercise

## Exercise 01 – Render Employees

Hiển thị tên của tất cả nhân viên trong danh sách.

### 📌 Allowed Knowledge

* `const`
* Array và Object
* `document.getElementById()`
* `forEach()`
* Arrow Function và Callback Function
* `document.createElement()`
* `textContent`
* `appendChild()`

### 📚 New Syntax

#### `document.createElement()`

Tạo một HTML element mới. Cú pháp: `document.createElement("tag")`.

```javascript
const item = document.createElement("li");
```

#### `appendChild()`

Thêm một element vào cuối một parent element. Cú pháp: `parent.appendChild(child)`.

```javascript
employeeList.appendChild(item);
```

---

## Exercise 02 – Filter Active Employees

Lọc và hiển thị các nhân viên đang active.

### 📌 Allowed Knowledge

* `const`
* Array và Object
* `document.getElementById()`
* `filter()`
* `forEach()`
* Arrow Function và Callback Function
* `document.createElement()`
* `textContent`
* `appendChild()`

### 📚 New Syntax

#### `document.createElement()`

Tạo một HTML element mới. Cú pháp: `document.createElement("tag")`.

```javascript
const item = document.createElement("li");
```

#### `appendChild()`

Thêm một element vào cuối một parent element. Cú pháp: `parent.appendChild(child)`.

```javascript
employeeList.appendChild(item);
```

---

## Exercise 03 – Show Employee Detail

Hiển thị thông tin chi tiết khi người dùng chọn một nhân viên.

### 📌 Allowed Knowledge

* `const`
* Array và Object
* `document.getElementById()`
* `forEach()`
* `find()`
* Arrow Function và Callback Function
* `document.createElement()`
* `appendChild()`
* `addEventListener()` và event `click`
* `textContent`
* Template Literal

### 📚 New Syntax

#### `document.createElement()`

Tạo một HTML element mới. Cú pháp: `document.createElement("tag")`.

```javascript
const item = document.createElement("li");
```

#### `appendChild()`

Thêm một element vào cuối một parent element. Cú pháp: `parent.appendChild(child)`.

```javascript
employeeList.appendChild(item);
```

---

## Exercise 04 – Calculate Total Salary

Tính và hiển thị tổng lương của tất cả nhân viên.

### 📌 Allowed Knowledge

* `const`
* Array và Object
* `document.getElementById()`
* `reduce()` với giá trị khởi tạo `0`
* Arrow Function và Callback Function
* `textContent`

---

## Exercise 05 – Count Active Employees

Đếm và hiển thị số nhân viên đang active.

### 📌 Allowed Knowledge

* `const`
* Array và Object
* `document.getElementById()`
* `filter()`
* `.length`
* Arrow Function và Callback Function
* `textContent`

---

## Exercise 06 – Show Active Button

Hiển thị tất cả nhân viên lúc đầu và lọc danh sách khi nhấn nút Show Active.

### 📌 Allowed Knowledge

* `const`
* Array và Object
* Function Declaration và Function Call
* `document.getElementById()`
* `filter()`
* `forEach()`
* Arrow Function và Callback Function
* `document.createElement()`
* `appendChild()`
* `innerHTML`
* `addEventListener()` và event `click`
* `textContent`

### 📚 New Syntax

#### `document.createElement()`

Tạo một HTML element mới. Cú pháp: `document.createElement("tag")`.

```javascript
const item = document.createElement("li");
```

#### `appendChild()`

Thêm một element vào cuối một parent element. Cú pháp: `parent.appendChild(child)`.

```javascript
employeeList.appendChild(item);
```

#### `innerHTML`

Đọc hoặc thay thế HTML bên trong một element. Gán chuỗi rỗng để xóa nội dung cũ.

```javascript
employeeList.innerHTML = "";
```

---

## Exercise 07 – Show All Button

Dùng hai nút để chuyển đổi giữa tất cả nhân viên và các nhân viên đang active.

### 📌 Allowed Knowledge

* `const`
* Array và Object
* Function Declaration và Function Call
* `document.getElementById()`
* `filter()`
* `forEach()`
* Arrow Function và Callback Function
* `document.createElement()`
* `appendChild()`
* `innerHTML`
* `addEventListener()` và event `click`
* `textContent`

### 📚 New Syntax

#### `document.createElement()`

Tạo một HTML element mới. Cú pháp: `document.createElement("tag")`.

```javascript
const item = document.createElement("li");
```

#### `appendChild()`

Thêm một element vào cuối một parent element. Cú pháp: `parent.appendChild(child)`.

```javascript
employeeList.appendChild(item);
```

#### `innerHTML`

Đọc hoặc thay thế HTML bên trong một element. Gán chuỗi rỗng để xóa nội dung cũ.

```javascript
employeeList.innerHTML = "";
```

---

## Exercise 08 – Highlight Selected Employee

Hiển thị chi tiết và highlight nhân viên được chọn.

### 📌 Allowed Knowledge

* `const`, `let` và `null`
* Array và Object
* Function Declaration và Function Call
* `document.getElementById()`
* `forEach()`
* Arrow Function và Callback Function
* `document.createElement()`
* `appendChild()`
* `innerHTML`
* `addEventListener()` và event `click`
* `classList.add()`
* Strict Equality (`===`)
* `if`
* `textContent`
* Template Literal

### 📚 New Syntax

#### `document.createElement()`

Tạo một HTML element mới. Cú pháp: `document.createElement("tag")`.

```javascript
const item = document.createElement("li");
```

#### `appendChild()`

Thêm một element vào cuối một parent element. Cú pháp: `parent.appendChild(child)`.

```javascript
employeeList.appendChild(item);
```

#### `innerHTML`

Đọc hoặc thay thế HTML bên trong một element. Gán chuỗi rỗng để xóa nội dung cũ.

```javascript
employeeList.innerHTML = "";
```

#### `classList.add()`

Thêm một CSS class vào element. Cú pháp: `element.classList.add("class-name")`.

```javascript
item.classList.add("selected");
```

---

## Exercise 09 – Handle Employee Not Found

Hiển thị thông báo khi không tìm thấy nhân viên.

### 📌 Allowed Knowledge

* `const`
* Array và Object
* Function Declaration, Parameter và Function Call
* `document.getElementById()`
* `find()`
* Arrow Function và Callback Function
* `undefined`
* Logical NOT (`!`)
* `if`
* `return`
* `textContent`
* Template Literal

---

## Exercise 10 – Refactor Application

Hoàn thiện và chia nhỏ toàn bộ Employee Management application thành các function rõ trách nhiệm.

### 📌 Allowed Knowledge

* `const`, `let` và `null`
* Array và Object
* Function Declaration, Parameter, Return Value và Function Call
* `document.getElementById()`
* `forEach()`
* `filter()`
* `find()`
* `reduce()`
* Arrow Function và Callback Function
* `document.createElement()`
* `appendChild()`
* `innerHTML`
* `addEventListener()` và event `click`
* `classList.add()`
* Strict Equality (`===`)
* `if`
* `return`
* `textContent`
* Template Literal

### 📚 New Syntax

#### `document.createElement()`

Tạo một HTML element mới. Cú pháp: `document.createElement("tag")`.

```javascript
const item = document.createElement("li");
```

#### `appendChild()`

Thêm một element vào cuối một parent element. Cú pháp: `parent.appendChild(child)`.

```javascript
employeeList.appendChild(item);
```

#### `innerHTML`

Đọc hoặc thay thế HTML bên trong một element. Gán chuỗi rỗng để xóa nội dung cũ.

```javascript
employeeList.innerHTML = "";
```

#### `classList.add()`

Thêm một CSS class vào element. Cú pháp: `element.classList.add("class-name")`.

```javascript
item.classList.add("selected");
```

---

# Điều quan trọng nhất

Đừng cố nhớ cú pháp.

Hãy luôn tự hỏi:

> **"Bài toán này cần method nào?"**

Ví dụ:

Muốn chạy một hành động với từng phần tử?

→ `forEach()`

Muốn biến đổi dữ liệu?

→ `map()`

Muốn lọc dữ liệu?

→ `filter()`

Muốn tìm một phần tử?

→ `find()`

Muốn tính toán hoặc gom dữ liệu?

→ `reduce()`

---

# Sau Lesson này

Nếu hoàn thành toàn bộ 10 Exercise, bạn đã sẵn sàng bước sang:

```text
Level 1 – TypeScript Foundation
```

Lúc đó, chúng ta sẽ không còn tập trung vào cách viết JavaScript nữa, mà sẽ học cách bổ sung **Type System** để JavaScript trở nên an toàn và dễ bảo trì hơn trong các dự án Angular.
