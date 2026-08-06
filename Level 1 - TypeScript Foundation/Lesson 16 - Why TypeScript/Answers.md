Câu 1

TypeScript được sinh ra để giải quyết vấn đề gì? -> để chương trình phát hiện lỗi sớm hơn thông qua type check

Câu 2

TypeScript là gì? là javascript + type system

Hãy giải thích bằng ngôn ngữ của bạn.

Câu 3

TypeScript có thay thế JavaScript không?

Vì sao? không vì nó chính là javascript và có thêm type system

Câu 4

Cho đoạn code:

function calculateTotal(
    price: number,
    quantity: number
) {
    return price * quantity;
}

calculateTotal("100", 5);

Theo bạn:

Điều gì sẽ xảy ra? sẽ xảy ra lỗi
Vì sao? vì function define parameter price là number nhưng argument truyền vào là string: "100"
Câu 5

Browser có chạy trực tiếp được TypeScript không? không

Nếu không thì TypeScript phải trải qua bước nào trước? trải qua quá trình compile, tức là chuyển từ typescript sang javascript

Câu 6

Hãy mô tả luồng hoạt động sau:

TypeScript

↓

Compile

↓

JavaScript

↓

Browser

Theo cách hiểu của bạn.
TypeScript sau khi compile sẽ biến thành javascript, từ đó browser có thể đọc và hiểu được
Câu 7

TypeScript giúp lập trình viên phát hiện lỗi ở thời điểm nào? trước khi compile

So với JavaScript thì khác nhau như thế nào? javascript nếu lỗi thì sẽ phát hiện lúc runtime

Câu 8

Theo bạn, vì sao Angular chọn TypeScript thay vì JavaScript thuần? vì angular có nhiều component, làm quy chuẩn hơn nên cần hạn chế sự linh hoạt của javascript, typescript được angular dùng vì nó có type rõ ràng, hạn chế lỗi lúc runtime

Câu 9

Cho hai đoạn code:

JavaScript
const name = "Hieu";
TypeScript
const name: string = "Hieu";

Theo bạn:

Điểm giống nhau là gì? đều là cú pháp tạo biến và gán giá trị
Điểm khác nhau là gì? javascript không có type còn typescript thì có
Câu 10

Theo cách hiểu hiện tại của bạn, hãy phân biệt vai trò của:

JavaScript
TypeScript
Compiler
Browser

Mỗi thành phần chịu trách nhiệm gì trong quá trình chạy chương trình?
javascript chịu trách nhiệm xử lý phần tác của người dùng đối với giao diện trên browser
typescript chịu trách nhiệm hạn chế lỗi runtime, thêm một lớp bảo vệ hệ thống
compiler chịu trách nhiệm chuyển typescript sang javascript để browser hiểu được
browser chịu trách nhiệm nhiều thứ như hiển trị giao diện, tạo dom, bắn event, theo dõi request....