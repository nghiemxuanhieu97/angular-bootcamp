# Lesson 07 – Modules (`import` / `export`)

# 📝 Questions

## Câu 1
Module được sinh ra để giải quyết vấn đề gì?

## Câu 2
Nếu không có Module, khi dự án có hàng nghìn function thì sẽ gặp những vấn đề gì? Hãy kể ít nhất 3 vấn đề.

## Câu 3
`export` có ý nghĩa gì? Hãy giải thích bằng ngôn ngữ của bạn.

## Câu 4
`import` có ý nghĩa gì? Hãy giải thích bằng ngôn ngữ của bạn.

## Câu 5
Cho `math.js`:

```javascript
export function add(a, b) {
    return a + b;
}
```

Trong `app.js`, hãy import `add()` và gọi `add(10, 20)`.

## Câu 6
Đoạn code sau có hợp lệ không? Vì sao?

```javascript
export function saveEmployee() {}
```

```javascript
import { saveEmployee } from "./employee.js";
```

## Câu 7
Đoạn code sau có hợp lệ không? Vì sao?

```javascript
export default function EmployeeService() {}
```

```javascript
import Service from "./employee.js";
```

## Câu 8
Named Export và Default Export khác nhau ở điểm nào?

## Câu 9
Java Module và JavaScript Module giống và khác nhau ở điểm nào?

## Câu 10
Trong Angular, vì sao gần như mọi file đều bắt đầu bằng nhiều dòng `import`?

## Câu 11 ⭐
Liên hệ Module, Export và Import bằng ngôn ngữ của bạn.

## Câu 12 ⭐⭐
Mô tả luồng:

```text
File A
↓
export
↓
import
↓
File B
```
