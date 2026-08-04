# Lesson 07 – Modules (`import` / `export`)

# 📖 Theory

## 🎯 Story

Hãy tưởng tượng năm 1998, một website bán hàng chỉ có:

```text
index.html
↓
script.js
```

Mọi logic đều nằm trong một file JavaScript:

```javascript
function addProduct() {}
function removeProduct() {}
function login() {}
function logout() {}
function searchProduct() {}
function checkout() {}
function validateEmail() {}
function formatCurrency() {}
```

Khi dự án tăng lên hàng chục nghìn dòng, mọi thứ trở nên khó quản lý.

---

# 😭 Problem

Hai developer có thể vô tình tạo cùng tên function:

```javascript
function save() {}
```

Nếu tất cả nằm trong global scope, function khai báo sau có thể ghi đè function trước. Ngoài ra còn có các vấn đề:

- Trùng tên variable/function.
- Khó debug và trace.
- Khó chia code theo context, feature, responsibility.
- Khó tái sử dụng.
- Khó bảo trì.

JavaScript cần một cách để nói:

> Những gì nằm trong file này thuộc về file này; module khác chỉ dùng được những gì được công khai.

---

# 💡 Solution – Module

Mỗi file JavaScript có thể trở thành một module.

`employee.js`:

```javascript
export function saveEmployee() {}
export function deleteEmployee() {}
```

`report.js`:

```javascript
export function exportExcel() {}
```

Hai module không tự động nhìn thấy nội dung private của nhau. Muốn dùng phải import.

---

# `export`

`export` có nghĩa là cho phép thành phần được sử dụng từ module khác.

```javascript
export function add(a, b) {
    return a + b;
}
```

Có thể export:

- Function
- Variable
- Constant
- Object
- Array
- Class
- Type/Interface trong TypeScript

---

# `import`

Module khác dùng thành phần đã export:

```javascript
import { add } from "./math.js";

console.log(add(10, 20));
```

Mental model:

```text
math.js
↓
export add()
↓
import
↓
app.js
```

---

# Tại sao không dùng global scope?

Không có module:

```text
Global Scope
↓
save()
login()
logout()
validate()
...
```

Module tạo ranh giới:

```text
employee.js
↓
saveEmployee()

-----------------

order.js
↓
saveOrder()
```

---

# ☕ Java Comparison

Java:

```java
package com.company.employee;
import com.company.employee.EmployeeService;
```

JavaScript:

```javascript
export class EmployeeService {}
import { EmployeeService } from "./employee.service.js";
```

So sánh gần đúng:

| Java | JavaScript |
|---|---|
| `package` | File module |
| `public` | `export` |
| `import` | `import` |

JavaScript có thể export bất kỳ value nào, không chỉ class.

---

# Named Export

```javascript
export function saveEmployee() {}
export function deleteEmployee() {}
```

Import:

```javascript
import {
    saveEmployee,
    deleteEmployee
} from "./employee.js";
```

Tên import phải khớp với tên export.

---

# Default Export

Default Export dùng để đánh dấu một thành phần chính của module.

```javascript
export default function EmployeeService() {}
```

Import không dùng `{}`:

```javascript
import EmployeeService from "./employee.js";
```

Tên local khi import có thể đổi:

```javascript
import Service from "./employee.js";
```

```javascript
import MyEmployeeService from "./employee.js";
```

Đều hợp lệ vì module chỉ có tối đa một Default Export.

## Quy tắc chính xác

Default Export không có nghĩa file chỉ được chứa một function hay variable.

Ví dụ hợp lệ:

```javascript
export const VERSION = "1.0";
export function validate() {}
export default class EmployeeService {}
```

Một module có thể có:

- Nhiều Named Export.
- Tối đa một Default Export.

Trong Angular, Named Export được dùng thường xuyên hơn.

---

# 🧠 Inside the Engine – mức vừa đủ

Khi browser gặp:

```javascript
import { add } from "./math.js";
```

Mental model:

```text
Đọc app.js
↓
Thấy import
↓
Tải math.js
↓
Thực thi module
↓
Tạo liên kết import/export
↓
Tiếp tục app.js
```

Chưa cần đi sâu vào module loader, dependency graph hay bundler.

---

# Angular dùng ở đâu?

Gần như khắp mọi nơi:

```typescript
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { signal } from "@angular/core";
import { EmployeeService } from "./employee.service";
```

Mỗi file Angular thường import các thành phần mà nó phụ thuộc vào.

---

# 🌱 Advanced Note

Chưa học sâu:

- Barrel (`index.ts`)
- Dynamic `import()`
- Circular Dependency
- ES Modules vs CommonJS
- Bundler (Vite/Webpack)
- Tree Shaking

---

# 🎯 Tổng kết

Module giúp:

- Chia nhỏ chương trình thành nhiều file.
- Tránh trùng tên.
- Quản lý dependency rõ ràng.
- Dễ bảo trì và tái sử dụng.

Mental model:

```text
Module A
├── export saveEmployee()
└── export deleteEmployee()
        ↓ import
Module B
└── sử dụng saveEmployee()
```
