Câu 1

Type Annotation được sinh ra để giải quyết vấn đề gì? để bổ sung ý nghĩa cho biến, để nhìn vào là biết biến khai báo có kiểu dữ liệu gì

Câu 2

Type Annotation là gì? là cú pháp ": kiểu dữ liệu" được viết sau tên biến

Hãy giải thích bằng ngôn ngữ của bạn.

Câu 3

Cho đoạn code:

let age: number = 30;

Theo bạn:

age là gì? là biến
number là gì? là kiểu dữ liệu số
30 là gì? là giá trị biến
Câu 4

Điều gì sẽ xảy ra với đoạn code sau?

let age: number = 30;

age = "Thirty";

Vì sao? Sẽ lỗi vì age có kiểu dữ liệu là number nhưng giá trị gán lại là string

Câu 5

Type Inference là gì? là khi không khai báo kiểu dữ liệu thì typescript xác định kiểu dữ liệu thông qua giá trị

Hãy giải thích bằng ngôn ngữ của bạn.

Câu 6

Cho hai đoạn code:

Đoạn 1
let name: string = "Hieu";
Đoạn 2
let name = "Hieu";

Theo bạn:

Chúng giống nhau ở điểm nào? đều tạo ra biến có giá trị là "Hieu"
Khác nhau ở điểm nào? một cái có type annotation còn 1 cái thì không
Câu 7

Trong những trường hợp nào bạn không cần viết Type Annotation?

Vì sao? 
khi code đơn giản vì nhìn vào là biết biến đó có kiểu dữ liệu gì
khi tên biến rõ ràng, thể hiện được type reference khi đọc qua
Khi cần viết code gọn

Câu 8

Theo bạn, vì sao TypeScript vẫn hỗ trợ Type Inference thay vì bắt lập trình viên phải khai báo type ở mọi nơi? để duy trì tính linh hoạt vốn là bản chất của javascript, typescript chỉ thêm ý nghĩa về type

Câu 9

Trong Angular, vì sao bạn thường thấy:

name = "Hieu";

age = 30;

active = true;

thay vì:

name: string = "Hieu";

age: number = 30;

active: boolean = true;

Theo cách hiểu hiện tại của bạn.

vì nhìn vào tên biến và giá trị là biết được kiểu dữ liệu nên không cần type annotation

📌 Chưa cần nói về Strict Mode hay Compiler Options.

Câu 10

Hãy phân biệt vai trò của:

Variable -> là tên đặt để ánh xạ vào một vùng nhớ dữ liệu
Type Annotation -> là cú pháp giúp cho developer biết biến có kiểu dữ liệu gì
Type Inference -> giúp typescript tự động suy kiểu dữ liệu từ giá trị biến
Type Checking -> là bước kiểm tra kiểu dữ liệu biến và giá trị có hợp lệ không, quá trình này nằm trong quá trình compiler

Theo cách hiểu của riêng bạn.