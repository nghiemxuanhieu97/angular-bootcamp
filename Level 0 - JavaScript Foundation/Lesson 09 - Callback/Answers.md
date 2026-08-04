# 📚 Lesson 09 – Callback

# ✍️ Answers

## Câu 1

Callback được sinh ra để giải quyết vấn đề gì? -> dùng để truyền vào một function khác và function khác có thể để gọi callback function sau đó

## Câu 2

Callback là gì? -> là một function được gọi lại sau một function nào đó

Hãy giải thích bằng ngôn ngữ của bạn.

## Câu 3

Cho đoạn code:

function execute(task) {
    task();
}

function sayHello() {
    console.log("Hello");
}

execute(sayHello);

Trong đoạn code trên:

Callback là Function nào?
Vì sao?
callback là function sayHello() vì sayHello function được truyền vào function execute và được function execute gọi bên trong

## Câu 4

Hãy mô tả luồng thực thi của chương trình sau:

function cookFood(callback) {

    console.log("Cooking...");

    callback();

}

function eatFood() {

    console.log("Eating...");

}

cookFood(eatFood);
-> khi gọi cookFood có callback là eatFood thì Cooking... sẽ in ra trước sau đó chạy eatFood và Eating... được in ra sau đó

## Câu 5

Đoạn code sau có kết quả gì?

function download(callback) {

    console.log("Downloading...");

    callback();

}

download(() => {

    console.log("Finished");

});

Giải thích vì sao.
Kết quả có hai dòng, dòng đầu là Downloading... và dòng sau đó là Finished vì download sử dụng anonymous function với cách viết arrow function rút gọn và anonymous function đó chính là callback

## Câu 6

Anonymous Callback là gì?

Vì sao người ta thường dùng Arrow Function để viết Callback?
anonymous function là function không có parameter, chỉ có body. dùng arrow function viết callback vì người ta muốn viết nhanh function callback

## Câu 7

Hai đoạn code sau khác nhau ở điểm nào?

Đoạn 1
downloadFile(openFile);
Đoạn 2
downloadFile(openFile());

đoạn 1: dùng openFile làm callback function trong downloadFile
đoạn 2: thực thi function openFile() trước, lấy kết quả truyền vào function downloadFile

## Câu 8

Theo bạn, Callback có phải là một loại Function mới của JavaScript không?

Vì sao?

không, vì javascript quy định function là first-class function nên function được xem là 1 giá trị, từ đó nó được dùng làm callback, về bản chất nó vẫn là function bình thường, chỉ là đặc biệt ở chỗ được thiết kế thành parameter của một function

## Câu 9

Trong Angular, vì sao Callback xuất hiện rất nhiều?

Theo cách hiểu hiện tại của bạn.

📌 Chưa cần nói về Promise, Async/Await hay RxJS.

vì ta cần gọi một hành động A và ta muốn hành động A đó gọi hành động B

## Câu 10

Cho đoạn code:

employees.forEach(employee => {

    console.log(employee.name);

});

Theo bạn:

employee => {

    console.log(employee.name);

}

đóng vai trò gì trong lời gọi forEach()?

là một call back function

## Câu 11 ⭐ (Tư duy)

Hãy liên hệ:

Function
        ↓
?

First-class Function
        ↓
?

Callback
        ↓
?

bằng ngôn ngữ của bạn.

function là một hành động, First-class Function xem function như là một giá trị, truyền vào function khác được gọi là callback

## Câu 12 ⭐⭐ (Mental Model)

Hãy mô tả luồng hoạt động sau bằng ngôn ngữ của bạn:

Function

↓

Truyền vào Function khác

↓

Chờ được gọi

↓

Thực thi

call back xảy ra trong luồng này. vì function được truyền vào một function khác để chờ function khác đó gọi và thực thi
