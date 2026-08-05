Câu 1

Array Methods được sinh ra để giải quyết vấn đề gì? -> giúp thao tác, xử lý dữ liệu trong array một cách gọn gàng, dễ dàng

Câu 2

forEach() dùng để làm gì? -> lặp qua các phần tử có trong danh sách

Câu 3

map() được sinh ra để giải quyết vấn đề gì? -> biến đổi từ danh sách này sang danh sách khác

Nó trả về kết quả như thế nào? -> tạo ra một mảng mới chứa dữ liệu đã được thay đổi từ dữ liệu cũ

Câu 4

Cho đoạn code:

const names = employees.map(employee => employee.name);

Theo bạn:

Callback là gì? callback là employee => employee.name
names sẽ chứa gì? -> names là danh sách tên của nhân viên
Câu 5

filter() dùng để làm gì? -> filter dùng để lọc danh sách theo một điều kiện nào đó

Nó trả về gì? -> trả về một danh sách mới, danh sách mới có thể ngắn hơn danh sách cũ hoặc rổng tùy vào điều kiện lọc

Câu 6

Cho đoạn code:

const activeEmployees = employees.filter(
    employee => employee.active
);

Nếu:

employee.active

trả về:

true
false

thì điều gì sẽ xảy ra với từng employee? vào employee có active = true thì được đưa vào danh sách mới, còn active = false thì bị bỏ qua

Câu 7

find() và filter() khác nhau ở điểm nào? -> find giúp tìm phần tử đầu tiên thỏa điều kiện, nếu không có phần từ nào thì trả về undefined. còn filter thì lọc tất cả phẩn tử thỏa điều kiện.
find trả về 1 phần tử, còn filter trả về một danh sách phần tử

Câu 8

Cho đoạn code:

const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);

Theo bạn:

sum là gì? sum là tổng number trong mảng numbers
number là gì? number là từng phần từ number trong mảng numbers
0 là gì? 0 là số giá trị ban đầu của sum trước khi chạy reduce.
Câu 9

Trong Angular, vì sao map(), filter(), find() xuất hiện rất nhiều?

-> cần xử lý nhiều các logic với mảng như lọc, chuyển đổi, tìm kiếm...

Câu 10

Hãy phân biệt mục đích sử dụng của:

forEach() -> lặp từng phần tử trong danh sách
map() -> chuyển đổi từng phần tử trong danh sách sang dạng khác
filter() -> lọc từng phần tử trong danh sách
find() -> có thể không cần di qua hết phần tử nếu tìm được phần tử thỏa điều kiện sớm
reduce() -> tính toán một giá trị nào đó dựa trên các phần tử hiện có trong danh sách