Câu 1

Event Loop được sinh ra để giải quyết vấn đề gì? -> để javascript có thể thực hiện đoạn code tiếp theo mà không phải chờ promise

Câu 2

Event Loop là gì? nó là chức năng giúp javascript không phải đợi, nó là thằng trung gian đi kiểm tra tiến độ promise, kiểm tra javascript để quyết định khi nào nên đưa callback vào callstack để chạy promise

Câu 3

Vì sao JavaScript không thể đứng chờ một API trả về kết quả?

Hãy nêu ít nhất 3 ảnh hưởng. -> UI bị block, những task tiếp theo bị chờ theo, hệ thống có nguy cơ bị treo vì chờ quá lâu

Câu 4

Trong JavaScript, ai là người thực hiện việc download dữ liệu?

JavaScript
Browser
Event Loop

Browser vì download dữ liệu là việc tốn thời gian, không thể thực hiện ngay nên javascript sẽ giao cho browser làm

Câu 5

Call Stack có vai trò gì?

Nó hoạt động theo nguyên tắc nào?

Call Stack có vai trò gọi callback khi promise xong, hoạt động theo cơ chế LIFO, nghĩa là function nào vào sau thì được làm trước

Câu 6

Cho đoạn code:

downloadUser().then(user => {

    console.log(user.name);

});

console.log("Done");

Theo bạn:

Dòng nào in ra trước?
Vì sao?
Done rồi tới tên user vì downloadUser tốn time nên javascript sẽ đưa browser download, trong thời gian chờ thì javascript chạy dòng code tiếp theo và in ra Done. khi downloadUser xong, Event Loop sẽ hỏi javascript rảnh chưa để bỏ callback vào callstack để lấy kết quả từ downloadUser và in ra tên user sau khi lấy xong
Câu 7

Event Loop thực sự làm công việc gì? là người kiểm tra promise khi nào xong, kiểm tra xem javascript có rảnh để bắt đầu bỏ callback vào call stack để callback chạy

Hãy giải thích bằng ngôn ngữ của bạn.

Câu 8

await có làm JavaScript dừng toàn bộ chương trình không?

Vì sao?

Không vì đã có event loop xử lý việc sắp xếp và nhắc nhở

Câu 9

Trong Angular, vì sao khi đang chờ API người dùng vẫn có thể:

Click
Scroll
Nhập dữ liệu

Theo cách hiểu hiện tại của bạn.

📌 Chưa cần nói về Zone.js hay Change Detection.

Vì javascript sẽ giao browser xử lý API và tiếp tục việc được giao từ người dùng

Câu 10

Hãy phân biệt vai trò của:

JavaScript -> người xử lý công việc không phải đợi
Browser -> người xử lý công việc tốn thời gian
Event Loop -> người sắp xếp để công việc được diễn ra suôn sẻ
Callback -> người được giao việc gì đó sau
