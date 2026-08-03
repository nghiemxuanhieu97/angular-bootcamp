# Answers

## Câu 1

Spread được sinh ra để giải quyết vấn đề gì? -> thêm dữ liệu vào danh sách một cách nhanh chóng, không viết dài dòng.

## Câu 2

Rest được sinh ra để giải quyết vấn đề gì? -> lấy tất cả giá trị của một mảng mà không cần biết mảng đó có bao nhiêu giá trị

## Câu 3

Cho hai Array:

const backendEmployees = [
    "Hieu",
    "Tom"
];

const newEmployees = [
    "Jerry",
    "Anna"
];

Hãy dùng Spread để tạo Array mới có kết quả:

[
    "Hieu",
    "Tom",
    "Jerry",
    "Anna"
]

const employees = [...backendEmployees, ...newEmployees];

## Câu 4

Đoạn code sau có kết quả gì?

const numbers = [
    1,
    2,
    3
];

const copy = [
    ...numbers
];

Giá trị của copy là gì? giống giá trị của numbers là mảng gồm số 1, 2 và 3

## Câu 5

Đoạn code sau có ý nghĩa gì?

function sum(...numbers) {

}

Hãy giải thích bằng ngôn ngữ của bạn. 
Cộng tất cả các giá trị có trong danh sách numbers

## Câu 6

Nếu gọi:

sum(10, 20, 30, 40);

thì bên trong function:

numbers

sẽ có giá trị là gì?
sẽ có 4 giá trị lần lượt là 10, 20, 30, 40

## Câu 7

Hãy phân biệt:

...numbers

trong hai trường hợp sau:

const copy = [
    ...numbers
];

và

function sum(...numbers) {

}

Chúng khác nhau ở điểm nào?
...numbers đầu là spread còn ...numbers sau là rest

## Câu 8

Làm sao để nhớ nhanh khi nào là Spread, khi nào là Rest?
spread xuất hiện bên phải dấu = còn rest ở phần parameter của function

## Câu 9

Trong Angular, vì sao người ta thường viết:

employees = [
    ...employees,
    newEmployee
];

thay vì:

employees.push(newEmployee);

Theo cách hiểu hiện tại của bạn.

📌 Chưa cần nói về Change Detection hay Signals.
-> viết theo kiểu dùng spread nó gọn hơn, sau này có thay đổi gì thì không phải viết thêm nhiều dòng giống nhau cho cùng một mục đích

## Câu 10

Java có khái niệm nào gần giống Rest không? -> Là varargs

Giống ở điểm nào? -> là một parameter đặc biệt, có khả năng lấy hết các arguments mà người dùng truyền vào.

Khác ở điểm nào? -> syntax viết khác nhau, có thể là kiểu dữ liệu cho phép truyền vào cũng khác nhau

## Câu 11 ⭐ (Tư duy)

Hãy liên hệ:

Array
        ↓
?

Spread
        ↓
?

Rest
        ↓
?

bằng ngôn ngữ của bạn.
Array: chứa danh sách các giá trị
Spread: trải các giá trị từ array
Rest: lấy các giá trị từ array

## Câu 12 ⭐⭐ (Mental Model)

Hiện tại bạn đã học:

Variable
Function
Object
Array
Destructuring
Spread
Rest

Theo cách hiểu của riêng bạn, hãy mô tả luồng dữ liệu trong JavaScript.

Gợi ý:

Variable
        ↓

Object
        ↓

Array
        ↓

Destructuring
        ↓

Spread
        ↓

Rest

Hãy bỏ câu 12 từ các bài sau vì tôi cảm giác câu 12 ngày càng dài dựa theo số lượng bài học
