# 📚 Lesson 10 – Promise

# ✍️ Answers

## Câu 1

Promise được sinh ra để giải quyết vấn đề gì? -> đẻ hứa hẹn một kết quả sẽ trả về trong tương lai, làm cho hệ thống không phải chờ và bị đứng.

## Câu 2

Promise là gì?

promise là một lời hứa hẹn rằng function sẽ trả về kết quả trong tương lai dù kết quả đó có là gì đi chăng nữa

## Câu 3

Vì sao JavaScript không thể chờ 5 giây để downloadUser() trả về kết quả?

Hãy nêu ít nhất 3 ảnh hưởng.
- hệ thống không đi tiếp bước tiếp theo
- Những bước tiếp theo đều phải chờ 5 giây
- nếu downloadUser bị đứng thì hệ thống bị treo

## Câu 4

Cho đoạn code:

const promise = downloadUser();

promise đang chứa gì?

Nó đã là User chưa?

Giải thích bằng ngôn ngữ của bạn.

promise chứa kết quả trả về trong tương lai của downloadUser

## Câu 5

Promise có những trạng thái nào?

Hãy giải thích ý nghĩa của từng trạng thái.
có 3 trạng thái: pending: đang chờ, fulfilled : đã trả về kết quả, rejected: lỗi xảy ra trong quá trình chờ kết quả

## Câu 6

Đoạn code sau có ý nghĩa gì?

downloadUser()

    .then(user => {

        console.log(user.name);

    });

Hãy mô tả luồng thực thi của chương trình.
downloadUser -> pending -> nếu fulfilled thì lấy result là user -> in user.name ra

## Câu 7

Đoạn code sau có ý nghĩa gì?

downloadUser()

    .catch(error => {

        console.log(error);

    });

Khi nào catch() được gọi?
-> downloadUser -> pending -> rejected -> catch callback được gọi và in ra error tại sao result không được trả về

## Câu 8

then() và catch() khác nhau ở điểm nào?
then dùng khi trạng thái promise là fulfilled còn catch là khi trạng thái promise là rejected

## Câu 9

Theo bạn, Promise có thay thế Callback hoàn toàn không?

Vì sao?

📌 Chưa cần nói về Callback Hell hay Async/Await.
Không, promise ko thay thế callback mà nó dùng callback để thực hiện promise

## Câu 10

Trong Angular, vì sao Promise thường xuất hiện khi gọi API hoặc tải dữ liệu?

Theo cách hiểu hiện tại của bạn.

📌 Chưa cần nói về Observable.
vì khi gọi API hoặc tải dữ liệu thì sẽ có wait time, sau wait time nếu tích cực thì có kết quả trả về, còn tiêu cực thì có lỗi trả về

## Câu 11 ⭐ (Tư duy)

Hãy liên hệ:

Callback
        ↓
?

Promise
        ↓
?

then()
        ↓
?

bằng ngôn ngữ của bạn.
callback được ứng dụng trong promise như function then, dùng để lấy kết quả trả về từ function chính sau một khoảng thời gian mà kết quả được trả về

## Câu 12 ⭐⭐ (Mental Model)

Hãy mô tả luồng hoạt động sau theo cách hiểu của bạn:

downloadUser()

↓

Promise

↓

Pending

↓

Fulfilled / Rejected

↓

then() / catch()

Điều gì đang xảy ra trong toàn bộ luồng này?
bộ luồng này áp dụng promise để chờ xử lý kết quả user từ function downloadUser, nếu function trả về thành công thì trạng thái là fulfilled, còn trả về lỗi thì trạng thái là rejected
