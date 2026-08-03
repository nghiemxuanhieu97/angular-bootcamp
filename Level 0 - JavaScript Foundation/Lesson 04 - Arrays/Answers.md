Câu 1

Array được sinh ra để giải quyết vấn đề gì? -> Để chứa một danh sách đối tượng, từ đó làm cho việc xử lý dễ dàng, gọn gàng, không lặp đi lặp lại

Câu 2

Array khác Object ở điểm nào? Nếu object là một đối tượng thì array là một danh sách các đối tượng (object)

Câu 3

Array là gì? Hãy giải thích bằng ngôn ngữ của bạn. -> là một danh sách chứa dữ liệu

Câu 4

Trong đoạn code sau:

const employees = [
    {
        id: 1,
        name: "Hieu"
    },
    {
        id: 2,
        name: "Tom"
    }
];
employees là gì? là biến
Giá trị của employees là gì? -> là một danh sách
employees[0] là gì? -> là  1 object employee với index 0: { id: 1, name: "Hieu" }
Câu 5

Trong JavaScript, Array có thể chứa những kiểu dữ liệu nào? hmm tôi không thể nhớ hết nhưng tôi sẽ liệt kê. String, Number, Object, Function, Array...

Câu 6

Đoạn code sau có kết quả gì?

const names = [
    "Hieu",
    "Tom"
];

names.push("Jerry");

Sau khi chạy xong, names có giá trị là gì?
names = [
    "Hieu",
    "Tom",
    "Jerry"
];
Câu 7

Đoạn code sau có kết quả gì?

const names = [
    "Hieu",
    "Tom",
    "Jerry"
];

names.pop();

Sau khi chạy xong, names còn lại gì?
names = [

    "Hieu",

    "Tom"

];
Câu 8

Trong đoạn code sau:

const employees = [
    {
        id: 100
    },
    {
        id: 200
    },
    {
        id: 300
    }
];

Biểu thức:

employees[1]

trả về object nào? {

        id: 200

    }

Vì sao? vì 1 là index. Index 0 sẽ lấy object ở vị trí đầu tiên, index 1 sẽ lấy object ở vị trí thứ 2

Câu 9

Tại sao JavaScript đánh index từ 0 thay vì 1? không chỉ javascript mà tôi thấy index ngôn ngữ nào cũng là 0, nghĩa là vị trí đầu tiên. Đó là quy tắc cố định

📌 Chưa cần giải thích về memory. Chỉ cần trả lời theo mức chúng ta đã học.

Câu 10

JavaScript cho phép:

const data = [
    12,
    "Hieu",
    true,
    {
        id: 1
    }
];

Theo bạn, trong dự án thực tế có nên viết như vậy không? Vì sao?
Không vì thực tế danh sách như vậy sẽ khó xử lý, khó hiểu cho developer khi đọc và hiểu.

Câu 11 ⭐ (Tư duy)

Hãy liên hệ:

Object
Array

bằng ngôn ngữ của bạn.

Gợi ý:

Object
    ↓
?

Array
    ↓
?

object là 1 đối tượng, Array là một danh sách các objects
Câu 12 ⭐⭐ (Mental Model)

Hãy liên hệ 4 lesson đầu tiên:

Lesson 01 – Variable
Lesson 02 – Function
Lesson 03 – Object
Lesson 04 – Array

Theo cách hiểu của riêng bạn.
Variable để lưu vùng nhớ chứa giá trị và giá trị có thể là function, object hoặc array.
