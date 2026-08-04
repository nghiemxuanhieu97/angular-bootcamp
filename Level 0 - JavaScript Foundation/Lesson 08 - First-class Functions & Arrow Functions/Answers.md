# Answers

## Câu 1
First-class Function được sinh ra để giải quyết vấn đề gì? -> để xem function như là một giá trị, có thể gán vào biến, tuyền vào function khác như là một parameter thông thường, lưu trong một mảng...

## Câu 2
Theo JavaScript, vì sao Function được xem là một value?
vì có thể nó cần cái function được trả về từ một function để làm gì đó tiếp theo

## Câu 3
Biến action đang chứa gì?
function

## Câu 4
In ra chữ Hello vì ta đã gán function sayHello cho action nên khi gọi action(); thì nó gọi function sayHello() và từ đó in ra chữ Hello

## Câu 5
Đoạn 1 là gán function vào biến action, lúc này cần phải gọi action() thì function sayHello() mới được thực thi
Đoạn 2 là gọi function sayHello() trả về kết quả rồi gán kết quả đó vào biến action

## Câu 6
Khi gọi execute và truyền function sayHello vào, execute sẽ nhận sayHello như một argument từ parameter task sao đó gọi sayHello() và in ra "Hello"

## Câu 7
Giúp cú pháp trở nên ngắn gọn

## Câu 8
```javascript
const add = (a,b) => a+b;
```

## Câu 9
Tôi đoán vì angular xử lý dữ liệu dạng danh sách thường xuyên sử dụng arrow function giúp cú pháp ngắn gọn, dễ đọc.

## Câu 10
Với mỗi employee trong mảng employees thì lấy tên của employee đó ra

## Câu 11
function được xem là một giá trị trong javascript và có thể dùng trong một function khác dưới dạng arrow function (thường thấy khi xử lý mảng dữ liệu)

## Câu 12
function được xem là một giá trị, do đó nó được gán vào biến, biến này dùng làm đối số để truyền vào một function khác và function khác đó có thể gọi function truyền vào gọi là function execution
