# Lesson 05 – Destructuring

# 📝 Questions

## Câu 1
Destructuring được sinh ra để giải quyết vấn đề gì?

## Câu 2
Cho object sau:

```javascript
const employee = {
    id: 1,
    name: "Hieu",
    department: "R&D"
};
```

Không dùng destructuring, hãy lấy `id` và `name`.

## Câu 3
Viết lại Câu 2 bằng destructuring.

## Câu 4
Đoạn code sau có ý nghĩa gì?

```javascript
const { name } = employee;
```

Hãy giải thích bằng ngôn ngữ của bạn.

## Câu 5
Đoạn code sau có kết quả gì?

```javascript
const names = [
    "Hieu",
    "Tom",
    "Jerry"
];

const [first] = names;
```

`first` bằng gì?

## Câu 6
Đoạn code sau có kết quả gì?

```javascript
const names = [
    "Hieu",
    "Tom",
    "Jerry"
];

const [first, second] = names;
```

`first` và `second` lần lượt bằng gì?

## Câu 7
Đoạn code sau có kết quả gì?

```javascript
const names = [
    "Hieu",
    "Tom",
    "Jerry"
];

const [, second] = names;
```

Tại sao lại lấy được `"Tom"`?

## Câu 8
Destructuring có tạo Object mới không?

Nếu không thì JavaScript Engine có thể hiểu:

```javascript
const { name } = employee;
```

tương đương với câu lệnh nào?

## Câu 9
Trong Angular, vì sao destructuring được dùng rất nhiều?

## Câu 10
Theo bạn, destructuring có phải là một tính năng mới hoàn toàn của JavaScript hay chỉ là cú pháp rút gọn? Vì sao?

## Câu 11 ⭐ (Tư duy)
Hãy liên hệ:

* Object
* Array
* Destructuring

bằng ngôn ngữ của bạn.

## Câu 12 ⭐⭐ (Mental Model)
Hãy cập nhật lại "bức tranh JavaScript" của bạn sau **5 lesson đầu tiên**.

Hiện tại bạn đã biết:

* Variable
* Function
* Object
* Array
* Destructuring

Theo cách hiểu của riêng bạn, mỗi khái niệm đóng vai trò gì trong một chương trình JavaScript?
