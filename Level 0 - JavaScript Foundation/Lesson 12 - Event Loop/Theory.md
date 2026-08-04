# 📚 Level 0 – JavaScript Foundation

# Lesson 12 – Event Loop

Nếu Lesson 10 trả lời:

> **"Làm sao biểu diễn một kết quả sẽ có trong tương lai?"** (Promise)

và Lesson 11 trả lời:

> **"Làm sao viết Promise cho dễ đọc?"** (Async / Await)

thì Lesson 12 sẽ trả lời câu hỏi quan trọng nhất:

> **"JavaScript làm cách nào để vừa chờ Promise, vừa không bị đứng chương trình?"**

Đó chính là **Event Loop**.

---

# 📖 Theory

## 🎯 Story

Hãy tưởng tượng bạn là nhân viên lễ tân của một phòng khám.

Mỗi ngày bạn phải làm rất nhiều việc:

* Tiếp nhận bệnh nhân.
* Trả lời điện thoại.
* In hóa đơn.
* Gọi bệnh nhân tiếp theo.

Một ngày có người nói:

> "Tôi cần kết quả xét nghiệm sau 30 phút."

Bạn có hai lựa chọn.

### Cách 1

Ngồi yên.

```text
30 phút

↓

Không làm gì

↓

Đợi kết quả
```

Trong 30 phút đó:

* Không tiếp bệnh nhân.
* Không nghe điện thoại.
* Không in hóa đơn.

Phòng khám gần như tê liệt.

---

### Cách 2

Bạn ghi lại:

> "Khi có kết quả xét nghiệm thì gọi tôi."

Sau đó tiếp tục:

* Tiếp bệnh nhân.
* Trả lời điện thoại.
* In hóa đơn.

Đến khi kết quả có:

> "Đã có kết quả."

Bạn quay lại xử lý.

Đây chính là cách JavaScript hoạt động.

---

# 😭 Problem

JavaScript chỉ có **một thread**.

Nếu viết:

```javascript
downloadUser();
```

và `downloadUser()` mất:

```text
5 giây
```

Nếu JavaScript đứng yên chờ:

```text
5 giây

↓

Không làm gì
```

thì:

* UI bị đứng.
* Không click được.
* Không scroll được.
* Không nhập liệu được.

Điều này không thể chấp nhận.

---

# 💡 Solution

JavaScript không đứng chờ.

Nó nói:

> "Khi nào xong thì báo tôi."

Ví dụ:

```javascript
downloadUser().then(user => {

    console.log(user.name);

});

console.log("Continue...");
```

Luồng:

```text
downloadUser()

↓

Đăng ký callback

↓

Không chờ

↓

Tiếp tục chạy

↓

console.log("Continue...")

↓

...

↓

Download xong

↓

Callback chạy
```

---

# Event Loop là gì?

Event Loop là cơ chế giúp JavaScript:

> **Liên tục kiểm tra xem có công việc nào đã sẵn sàng để thực thi hay chưa.**

Mental model:

```text
Code

↓

Call Stack

↓

Event Loop

↓

Callback
```

Event Loop giống như người lễ tân:

```text
"Có việc mới không?"

↓

"Có"

↓

Đưa vào xử lý

↓

Lặp lại
```

---

# Call Stack

Mỗi function được gọi sẽ được đưa vào:

```text
Call Stack
```

Ví dụ:

```javascript
function a() {

    b();

}

function b() {

    console.log("Hello");

}

a();
```

Luồng:

```text
Call Stack

↓

a()

↓

b()

↓

console.log()

↓

Pop

↓

Pop

↓

Pop
```

Call Stack hoạt động theo nguyên tắc:

```text
LIFO

Last In

First Out
```

Giống như chồng sách.

---

# Khi Promise xuất hiện

Ví dụ:

```javascript
downloadUser()

    .then(user => {

        console.log(user);

    });

console.log("Done");
```

JavaScript sẽ làm:

```text
downloadUser()

↓

Đăng ký callback

↓

Không chờ

↓

console.log("Done")

↓

...

↓

Promise hoàn thành

↓

Event Loop

↓

Callback

↓

console.log(user)
```

Kết quả:

```text
Done

↓

User
```

Không phải:

```text
User

↓

Done
```

---

# Async / Await có liên quan thế nào?

Ví dụ:

```javascript
async function loadUser() {

    const user = await downloadUser();

    console.log(user);

}
```

Bạn thấy như:

```text
Đứng chờ
```

Nhưng thực tế:

JavaScript vẫn:

* Không block.
* Không đứng.
* Event Loop vẫn chạy.

`await` chỉ:

> **Tạm dừng function hiện tại**, không dừng toàn bộ chương trình.

Đây là điểm rất quan trọng.

---

# Angular dùng ở đâu?

Ví dụ:

Người dùng click nút:

```typescript
button.addEventListener("click", async () => {

    const user = await loadUser();

    console.log(user);

});
```

Trong lúc chờ API:

* Người dùng vẫn scroll.
* Vẫn click.
* Vẫn nhập dữ liệu.

Tại sao?

Vì Event Loop vẫn hoạt động.

---

# 🌱 Advanced Note

Hôm nay chúng ta **chưa học**:

* Web APIs
* Task Queue
* Microtask Queue
* Macrotask Queue
* Rendering Pipeline
* Vì sao Promise chạy trước setTimeout()

Những chủ đề này sẽ học sau khi chúng thực sự phục vụ Angular.

---

# 🎯 Tổng kết

Event Loop là:

> **Cơ chế giúp JavaScript tiếp tục xử lý công việc khác trong khi chờ các tác vụ bất đồng bộ hoàn thành.**

Mental model:

```text
Call Stack

↓

Event Loop

↓

Callback

↓

Call Stack
```

Điều quan trọng nhất:

* JavaScript chỉ có một thread.
* JavaScript **không đứng chờ** Promise.
* Event Loop liên tục kiểm tra công việc đã sẵn sàng.
* `await` chỉ tạm dừng **function hiện tại**, không dừng toàn bộ chương trình.
Tuyệt. Mình muốn **viết lại hoàn toàn Lesson 12**. Không phải sửa vài câu, mà là đổi cách dạy.

Sau hơn 10 lesson, mình nhận ra một điều về bạn:

> **Bạn không học bằng định nghĩa. Bạn học bằng cách tìm "ai đang làm việc?".**

Ví dụ:

* Function → ai chạy?
* Callback → ai gọi?
* Promise → ai trả kết quả?
* Async/Await → ai đang chờ?

Đến Event Loop thì câu hỏi đúng phải là:

> **"Rốt cuộc ai đang download?"**

---

# Giải thích theo một hướng khác

## Cả công ty chỉ có 1 Team Lead

Giả sử JavaScript là Team Lead.

```text
JavaScript
```

Chỉ có đúng **1 người**.

Một hôm.

Có việc:

```text
Download User
```

mất:

```text
5 phút
```

Nếu Team Lead tự download.

```text
Team Lead

↓

Download

↓

5 phút
```

5 phút đó.

Không ai:

* review code
* trả lời email
* họp

Công ty đứng.

---

# Brendan Eich nghĩ khác

Ông nói:

> "Không.

> Team Lead không nên đi download."

Ông thuê thêm một phòng.

Tên là:

```text
Browser
```

Trong Browser.

Có:

```text
Network

Timer

Rendering

Click

...
```

Mỗi người làm một việc.

---

# Lúc này chuyện gì xảy ra?

JavaScript:

```text
Download User nhé.
```

Browser:

```text
OK.
```

JavaScript:

```text
Tôi đi làm việc khác.
```

Đây là điều đầu tiên phải nhớ.

---

# JavaScript KHÔNG download

JavaScript:

```text
Không download.
```

Browser:

```text
Download.
```

Đây là điều rất nhiều người mới học hiểu sai.

---

# Vậy Browser báo ai?

Download xong.

Browser không thể tự chạy callback.

Vì JavaScript đang bận.

Nó phải hỏi:

```text
JavaScript rảnh chưa?
```

Ai hỏi?

Đó chính là:

```text
Event Loop
```

---

# Đây là Mental Model thật sự

Không phải:

```text
Code

↓

Call Stack

↓

Event Loop
```

Mà là:

```text
JavaScript

↓

Giao Browser làm việc

↓

JavaScript tiếp tục code

↓

Browser làm xong

↓

Event Loop hỏi:

"Call Stack rảnh chưa?"

↓

Có

↓

Đưa callback vào Call Stack

↓

Callback chạy
```

---

# Vai trò từng thành phần

## JavaScript

```text
Viết logic.
```

---

## Call Stack

```text
Đang chạy gì.
```

---

## Browser

```text
Làm việc mất thời gian.

Network

Timer

Click

...
```

---

## Event Loop

```text
Không chạy callback.

Không download.

Không render.

Chỉ hỏi:

"Call Stack rảnh chưa?"
```

---

## Callback

```text
Việc cần làm sau khi Browser xong.
```

---

# Toàn bộ hệ thống

```text
            JavaScript
                 │
                 ▼
          Có việc mất thời gian?
                 │
        ┌────────┴────────┐
        │                 │
       Không             Có
        │                 │
        ▼                 ▼
  Chạy ngay          Browser xử lý
                          │
                          ▼
                 Browser hoàn thành
                          │
                          ▼
                    Event Loop
                          │
              Call Stack rảnh?
                    │
          ┌─────────┴─────────┐
          │                   │
         Không               Có
          │                   │
          ▼                   ▼
        Chờ          Đưa Callback vào
                     Call Stack
                          │
                          ▼
                    Callback chạy
```
