# Answers

Câu 1 Destructuring được sinh ra để giải quyết vấn đề gì? -> Giúp tạo ra nhiều biến để lấy nhiều giá trị mà không phải viết lặp đi lặp lại

Câu 2 Cho object sau: const employee = { id: 1, name: "Hieu", department: "R&D" }; Không dùng destructuring, hãy lấy id và name. const id = employee.id; const name = employee.name;

Câu 3 Viết lại Câu 2 bằng destructuring. const { id, name } = employee;

Câu 4 Đoạn code sau có ý nghĩa gì? const { name } = employee; Hãy giải thích bằng ngôn ngữ của bạn. Tạo ra một biến có tên là name, lấy property có tên là name trong object employee, nếu name không có thì lấy property đầu tiên trong employee và gán cho biến name mới tạo

Câu 5 Đoạn code sau có kết quả gì? const names = [ "Hieu", "Tom", "Jerry" ]; const [first] = names; first bằng gì? first = "Hieu"

Câu 6 Đoạn code sau có kết quả gì? const names = [ "Hieu", "Tom", "Jerry" ]; const [first, second] = names; first và second lần lượt bằng gì? -> first = "Hieu", second = "Tom"

Câu 7 Đoạn code sau có kết quả gì? const names = [ "Hieu", "Tom", "Jerry" ]; const [, second] = names; Tại sao lại lấy được "Tom"? -> dấu , trong [] nghĩa là bỏ qua 1 giá trị nên second sẽ được gán giá trị tiếp theo đó chính là "Tom"

Câu 8 Destructuring có tạo Object mới không? Nếu không thì JavaScript Engine có thể hiểu: const { name } = employee; tương đương với câu lệnh nào? const name = employee.name;

Câu 9 Trong Angular, vì sao destructuring được dùng rất nhiều? Vì developer muốn lấy nhiều giá trị mà không phải viết lặp đi lặp lại.

Câu 10 Theo bạn, destructuring có phải là một tính năng mới hoàn toàn của JavaScript hay chỉ là cú pháp rút gọn? Vì sao? Tôi nghĩ đó vừa là tính năng vừa là cú pháp rút gọn. Đó là tính năng vì tôi không thấy ngôn ngữ khác có như java. Đây là cú pháp rút gọn vì nó giúp tôi không viết code lặp đi lặp lại, chỉ 1 dòng là xong, ngắn gọn, dễ hiểu.

Câu 11 ⭐ (Tư duy) Hãy liên hệ: Object Array Destructuring bằng ngôn ngữ của bạn. Gợi ý: Object ↓ ? Array ↓ ? Destructuring ↓ ? Destructuring có thể lấy object mong muốn từ array

Câu 12 ⭐⭐ (Mental Model) Hãy cập nhật lại "bức tranh JavaScript" của bạn sau 5 lesson đầu tiên. Hiện tại bạn đã biết: Variable Function Object Array Destructuring Theo cách hiểu của riêng bạn, mỗi khái niệm đóng vai trò gì trong một chương trình JavaScript? Đây là câu quan trọng nhất của bài, vì nó cho thấy bạn đang xây dựng được một mô hình tổng thể chứ không chỉ học từng cú pháp riêng lẻ. destructuring là cú pháp tạo variable lấy giá trị ngắn gọn. dùng argument dạng destructuring giúp truyền dữ liệu mong muốn vào function. destructuring còn giúp lấy giá trị mong muốn từ object hoặc array.
