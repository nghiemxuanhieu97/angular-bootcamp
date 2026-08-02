# Review & Feedback

## Tổng điểm

**9.6 / 10**

## Điểm mạnh

- Hiểu Object theo mental model.
- Liên hệ Java rất nhanh.
- Hiểu rõ const khóa reference chứ không khóa property.
- Tự suy luận đúng Angular sẽ thao tác với object từ backend.

## Điểm cần cải thiện

### Câu 4

Bạn bị lẫn Java và JavaScript.

Đúng phải là:

- employee là variable.
- Giá trị của employee là object.
- name là property.
- "Hieu" là value của property.

Mental model:

```text
employee (variable)
        │
        ▼
Object
 ├── name → "Hieu"
 └── age  → 29
```

### Câu 8

Đúng cú pháp là:

```javascript
employee.name
employee["name"]
```

không phải:

```javascript
employee.["name"]
```

## Knowledge Seeds

Variable
↓
Có thể tham chiếu tới Object

Object
↓
Tổ chức dữ liệu

Function
↓
Tổ chức hành động

## Progress Summary

Lesson 00 ✅
Lesson 01 ✅
Lesson 02 ✅
Lesson 03 ✅
