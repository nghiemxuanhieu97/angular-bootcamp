# Review & Feedback

## Kết quả chung

| Tiêu chí | Đánh giá |
|---|---|
| Hiểu khái niệm | ⭐⭐⭐⭐⭐ |
| Hiểu luồng | ⭐⭐⭐⭐⭐ |
| Liên hệ Java | ⭐⭐⭐⭐⭐ |
| Thuật ngữ | ⭐⭐⭐⭐☆ |
| Diễn đạt | ⭐⭐⭐⭐☆ |

**Tổng điểm: 9.5 / 10**

---

## Câu 1

### Câu hỏi
> Tại sao JavaScript được tạo ra?

### Câu trả lời của bạn
> javascript được sinh ra để giúp html chrome hiển thị html như là một văn bản sống động thay vì chỉ là text

### Điểm
**8.5 / 10**

### Feedback
Bạn hiểu đúng mục đích chính: JavaScript giúp website trở nên sống động và có tương tác.

Điểm cần chỉnh: Chrome đã hiển thị HTML được ngay cả khi không có JavaScript. JavaScript giúp website phản ứng với hành động người dùng.

### Cách diễn đạt chính xác hơn
> JavaScript được tạo ra để giúp website trở nên tương tác, thay vì chỉ hiển thị nội dung tĩnh như HTML thuần.

### Senior Answer
> JavaScript bổ sung khả năng lập trình và tương tác cho trang web, cho phép xử lý sự kiện, thay đổi nội dung động và giao tiếp với server.

---

## Câu 2

### Câu hỏi
> Nếu website chỉ có HTML thì người dùng sẽ gặp hạn chế gì?

### Câu trả lời của bạn
> Nếu website chỉ có html thì người dùng sẽ không thể sử dụng chức năng như click vào button hay đổi màu hay hiện popup thông báo. Nói tóm lại là website sẽ như một giao diện có hiển thị chức năng nhưng chức năng không hoạt động

### Điểm
**10 / 10**

### Feedback
Câu trả lời rất thực tế. Bạn mô tả đúng một giao diện có cấu trúc nhưng chưa có hành vi.

### Cách diễn đạt chính xác hơn
> HTML chủ yếu định nghĩa cấu trúc. Không có JavaScript, website không thể chủ động xử lý click, validation, popup hoặc cập nhật nội dung động trong browser.

### Senior Answer
> HTML định nghĩa cấu trúc tài liệu; JavaScript đảm nhiệm logic tương tác, xử lý sự kiện và cập nhật trạng thái động phía client.

---

## Câu 3

### Câu hỏi
> JavaScript Engine là gì? Nó có vai trò gì trong browser?

### Câu trả lời của bạn
> JavaScript Engine là trình đọc mã javascript, từ đó giúp browser hiểu được hành vi người dùng đối với trang web mà nó hiển thị

### Điểm
**9 / 10**

### Feedback
Bạn hiểu đúng browser cần JavaScript Engine để chạy JavaScript.

Điểm cần chỉnh: browser nhận click, scroll và bàn phím; JavaScript Engine thực thi đoạn JavaScript xử lý các sự kiện đó.

### Cách diễn đạt chính xác hơn
> JavaScript Engine là bộ máy bên trong browser có nhiệm vụ đọc, phân tích và thực thi mã JavaScript.

### Senior Answer
> JavaScript Engine là runtime component thực thi JavaScript, quản lý bộ nhớ và chạy logic trong môi trường do browser cung cấp.

---

## Câu 4

### Câu hỏi
> Chrome và V8 khác nhau như thế nào?

### Câu trả lời của bạn
> Chrome là trình duyệt đọc html và css, đối với javascript thì chrome sử dụng V8 như là một javascript engine để hiểu mã javascript từ đó thay đổi cấu trúc dom (mặc dù tôi chưa hiểu dom là gì nhưng tôi đoán vậy) để người dùng thấy website như có nội dung sống

### Điểm
**9.5 / 10**

### Feedback
Bạn phân biệt đúng Chrome là browser và V8 là JavaScript Engine. Bạn cũng tự suy luận đúng rằng JavaScript có thể thay đổi DOM.

Điểm cần chỉnh: Chrome còn quản lý network, tab, event, DOM và rendering.

### Cách diễn đạt chính xác hơn
> Chrome là toàn bộ trình duyệt. V8 là một thành phần bên trong Chrome chịu trách nhiệm thực thi JavaScript.

### Senior Answer
> Chrome là browser application; V8 là JavaScript Engine. Browser cung cấp DOM, event system, network APIs và rendering, còn V8 chạy logic JavaScript.

---

## Câu 5

### Câu hỏi
> Vì sao Angular không thể tồn tại nếu không có JavaScript?

### Câu trả lời của bạn
> Angular viết bằng typescript và typescript thì được viết dựa trên javascript, và chrome hay các trình duyệt khác cũng chỉ hiểu javascript nhờ các javascript engine nên nếu không có javascript thì browser không hiểu được angular

### Điểm
**10 / 10**

### Feedback
Bạn hiểu đúng chuỗi Angular → TypeScript → JavaScript → Browser.

### Cách diễn đạt chính xác hơn
> Angular thường được viết bằng TypeScript, nhưng quá trình build chuyển mã đó thành JavaScript để browser thực thi.

### Senior Answer
> Angular là framework chạy trên JavaScript runtime của browser. TypeScript là ngôn ngữ phát triển; sau build, ứng dụng trở thành JavaScript bundles.

---

## Câu 6

### Câu hỏi
> Hãy giải thích luồng Angular TypeScript → JavaScript → Browser → JavaScript Engine → UI.

### Câu trả lời của bạn
> Đây là sơ đồ luồng hoạt động giữa angular, java script và browser
>
> Đầu tiên angular viết bằng typescript, sau đó angular build biến typescript thành javascript, browser tải javascript và nhờ javascript engine thực thi, sau đó browser hiểu và hiển thị đúng yêu cầu người dùng

### Điểm
**10 / 10**

### Feedback
Bạn hiểu đây là một luồng xử lý hoàn chỉnh, không phải những khái niệm rời rạc.

### Bổ sung
```text
JavaScript Engine thực thi Angular
        ↓
Angular yêu cầu cập nhật DOM
        ↓
Browser render giao diện
```

### Senior Answer
> Angular source được build thành JavaScript bundles. Browser tải và thực thi chúng; Angular cập nhật state và DOM, sau đó browser render kết quả.

---

## Điểm mạnh

- Tư duy hệ thống tốt.
- Thích hiểu luồng thay vì học thuộc.
- Chủ động đưa ra giả thuyết.
- Liên kết tốt kiến thức mới với kiến thức cũ.
- Diễn đạt bằng ngôn ngữ của chính mình.

## Điểm cần cải thiện

Cần tăng độ chính xác của thuật ngữ.

Ví dụ:

- “Chrome hiển thị HTML nhờ JavaScript” ❌
- “Chrome hiển thị HTML, JavaScript giúp trang web tương tác” ✅

## Knowledge Seeds

- **DOM:** đã tự suy luận đúng rằng JavaScript có thể thay đổi DOM.
- **Event:** đã chạm tới click và hành vi người dùng.
- **Rendering:** đã hình dung browser hiển thị kết quả sau khi JavaScript chạy.

## Progress Summary

- Browser: hiểu cơ bản.
- JavaScript: hiểu vai trò.
- JavaScript Engine: hiểu vai trò.
- Chrome và V8: phân biệt được.
- Angular → TypeScript → JavaScript → Browser: hiểu đúng luồng.
- DOM, Event, Rendering: đã nghe và sẽ học chính thức ở lesson sau.
