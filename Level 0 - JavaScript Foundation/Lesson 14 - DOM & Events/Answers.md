Câu 1

DOM được sinh ra để giải quyết vấn đề gì? -> Để javascript tương tác với các thành phần trong html như thay đổi màu, xử lý click button logic...

Câu 2

DOM là gì? -> là sơ đồ object được browser build dựa trên html

Câu 3

Browser đọc HTML rồi tạo ra cái gì? -> tạo ra DOM

Vì sao phải làm như vậy? -> Để javascript có thể hiểu html, bản chất javascript sẽ tương tác với DOM và browser theo dõi sự thay đổi trong DOM để thay đổi tương ứng bên html

Câu 4

Cho HTML:

<h1 id="title">
    Hello
</h1>

Và JavaScript:

const title = document.getElementById("title");

Theo bạn:

title đang chứa gì? -> title đang chứa giá trị thẻ h1 là Hello
Có phải String không? -> giá trị của title là String
Vì sao? -> vì document.getElementById sẽ tìm trong dom object nào có id là title và lấy giá trị ra gán vào biến title
Câu 5

Cho đoạn code:

title.textContent = "Angular";

Điều gì sẽ xảy ra? -> DOM được cập nhật

JavaScript có sửa file HTML không? Javascript chỉ sửa DOM, Browser sửa HTML khi DOM update xong

Câu 6

Event được sinh ra để giải quyết vấn đề gì? -> để browser biết người dùng dùng event gì, như click, double click, hover, right click....

Câu 7

Cho đoạn code:

button.addEventListener("click", () => {

    console.log("Clicked");

});

Theo bạn hãy mô tả luồng hoạt động của chương trình.
javascript bỏ callback cho sự kiện click, khi browser thông báo người dùng click thì eventloop bỏ callback vào callstack để thực thi

Câu 8

Browser và JavaScript có vai trò khác nhau như thế nào khi người dùng click một button?
-> browser lắng nghe và phân loại sự kiện click, tạo ra event click
-> javascript trigger sự kiện đó và nhờ event loop bỏ callback vào callstack để chạy

Câu 9

Trong Angular, vì sao chúng ta có thể viết:

<button (click)="save()">

Theo cách hiểu hiện tại của bạn. -> cú pháp viết angular giúp làm gọn hơn nhưng bản chất vẫn là gọi callback tên là save khi người dùng click button

📌 Chưa cần nói về Angular Compiler hay Change Detection.

Câu 10

Hãy phân biệt vai trò của:

HTML -> chứa nội dung, giao diện người dùng dạng text
Browser -> đọc HTML và show giao diện cho người dùng
DOM -> là văn bản object giúp javascript tương tác được với html 
JavaScript -> người xử lý sự kiện, hành vi người dùng thao tác trên giao diện
Event -> sự kiện giúp browser biết người dùng muốn gì, từ đó báo cho javascript bằng các phát ra event, javascript trigger event và chạy callback tương ứng

Theo cách hiểu của riêng bạn.