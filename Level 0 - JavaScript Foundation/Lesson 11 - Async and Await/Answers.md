Câu 1

Async / Await được sinh ra để giải quyết vấn đề gì? -> để viết promise gọn hơn, trông giống như code đồng bộ

Câu 2

async có ý nghĩa gì? thông báo developer biết function này có thể sử dụng await bên trong, hãy lưu ý khi dùng.

Câu 3

await có ý nghĩa gì?
đợi function chạy và trả về kết quả sau đó lấy kết quả đưa cho async

Câu 4

Cho đoạn code:

async function loadUser() {

    const user = await downloadUser();

    console.log(user);

}

Hãy mô tả luồng thực thi của chương trình.
đợi downloadUser chạy xong trả về user rồi in user đó ra

Câu 5

Đoạn code sau có hợp lệ không?

function loadUser() {

    const user = await downloadUser();

}

Vì sao?
Không hợp lệ vì await phải được dùng trong function có khai báo async

Câu 6

So sánh hai đoạn code sau.

Đoạn 1
downloadUser()

    .then(user => {

        console.log(user.name);

    });
Đoạn 2
const user = await downloadUser();

console.log(user.name);

Theo bạn:

Chúng giống nhau ở điểm nào? -> đều là promise
Khác nhau ở điểm nào? -> async/await giúp viết promise gọn hơn
Câu 7

Đoạn code sau có kết quả gì?

async function getName() {

    return "Hieu";

}

Theo bạn:

getName() trả về gì?

String?
Promise?
Hay thứ gì khác?

Giải thích vì sao.
get name trả về promise.resolve("Hieu"); vì function được khai báo là async

Câu 8

Theo bạn:

await

đang lấy:

Promise?
Hay kết quả bên trong Promise? Lấy kết quả trong promise

Giải thích bằng ngôn ngữ của bạn.

Câu 9

Trong Angular, vì sao async/await thường được dùng khi gọi API?

Theo cách hiểu hiện tại của bạn.

📌 Chưa cần nói về Observable.
để đợi lấy kết quả từ API, kết quả này có thể là lỗi hoặc dữ liệu 

Câu 10

Theo bạn:

async/await

có thay thế Promise hoàn toàn không?

Vì sao?
Không vì nó chỉ là cách viết gọn hơn, sạch hơn

Câu 11 ⭐ (Tư duy)

Hãy liên hệ:

Promise
        ↓
?

async
        ↓
?

await
        ↓
?

bằng ngôn ngữ của bạn.
Promise hứa hẹn trả về kết quả tương lai
async trả về promise
await trả về kết quả của promise

Câu 12 ⭐⭐ (Mental Model)

Hãy mô tả luồng hoạt động sau theo cách hiểu của bạn:

downloadUser()

↓

Promise

↓

async

↓

await

↓

User
Điều gì đang xảy ra trong toàn bộ luồng này?
downloadUser là trả về promise vì không thể trả kết quả user ngay lập tức, dùng async/await để lấy user 

