# 📚 Level 0 – JavaScript Foundation

# Lesson 10 – Promise

Đây là một trong những cột mốc quan trọng nhất của JavaScript.

Nếu Lesson 09 trả lời câu hỏi:

> **"Làm thế nào để truyền một Function vào Function khác?"**

thì Lesson 10 sẽ trả lời:

> **"Làm thế nào để xử lý một công việc chưa có kết quả ngay lập tức?"**

Đó chính là **Promise**.

---

# 📖 Theory

## 🎯 Story

Giả sử bạn đặt đồ ăn qua một ứng dụng.

Bạn nhấn:

> **Đặt món.**

Ứng dụng không thể ngay lập tức trả lời:

> 🍜 "Đồ ăn đã tới."

vì nhà hàng còn:

- nhận đơn,
- nấu ăn,
- giao hàng.

Kết quả sẽ có **sau**.

JavaScript cũng gặp vấn đề tương tự.

Ví dụ:

```javascript
const user = downloadUser();
```

Nếu `downloadUser()` phải gọi Internet thì sao?

JavaScript không thể đứng yên đợi.

Nếu đợi:

```text
Download User

↓

Đợi...

↓

Đợi...

↓

Đợi...
```

thì toàn bộ trang web sẽ bị đứng.

Người dùng không bấm được nút.

Không kéo được trang.

Không nhập được dữ liệu.

Đó là điều JavaScript phải tránh.

---

# 😭 Problem

Giả sử:

```javascript
function downloadUser() {

    // mất 5 giây

}
```

Nếu viết:

```javascript
const user = downloadUser();

console.log(user);
```

JavaScript sẽ phải chờ 5 giây.

Trong thời gian đó:

- UI bị đứng.
- Không click được.
- Không scroll được.
- Không nhập được.

Một trải nghiệm rất tệ.

---

# 💡 Solution

Brendan Eich đưa ra một ý tưởng.

Thay vì trả về dữ liệu ngay.

Hãy trả về:

> **Một lời hứa.**

Tiếng Anh:

> **Promise**

Ví dụ:

```javascript
const promise = downloadUser();
```

`promise` **chưa phải User**.

Nó chỉ là:

> "Tôi hứa sẽ có User sau."

Mental model:

```text
downloadUser()

↓

Promise

↓

(chờ)

↓

User
```

---

# Promise là gì?

Promise là:

> **Một object đại diện cho kết quả sẽ có trong tương lai.**

Không phải:

```text
User
```

Mà là:

```text
Promise<User>
```

Điều này rất giống việc bạn giữ:

> Phiếu nhận hàng.

Bạn chưa có món đồ.

Nhưng bạn có:

> Quyền nhận món đồ khi nó sẵn sàng.

---

# Ba trạng thái của Promise

Promise luôn có một trong ba trạng thái.

```text
Pending
```

↓

Đang chờ.

---

```text
Fulfilled
```

↓

Hoàn thành thành công.

---

```text
Rejected
```

↓

Thất bại.

Mental model:

```text
            Pending
           /       \
          /         \
 Fulfilled       Rejected
```

Promise chỉ chuyển một chiều.

Ví dụ:

```text
Pending

↓

Fulfilled
```

hoặc

```text
Pending

↓

Rejected
```

Không quay trở lại `Pending`.

---

# then()

Khi Promise thành công.

Ta dùng:

```javascript
promise.then(result => {

    console.log(result);

});
```

Nghĩa là:

> Khi có kết quả, hãy gọi callback này.

Hãy để ý.

Lesson 09:

```text
Callback
```

↓

Lesson 10:

```text
Promise

↓

then(callback)
```

Promise và Callback **không tách rời nhau**.

Promise sử dụng Callback.

---

# catch()

Nếu lỗi.

```javascript
promise.catch(error => {

    console.log(error);

});
```

Mental model:

```text
Promise

↓

Success

↓

then()

---------------

Promise

↓

Failure

↓

catch()
```

---

# Ví dụ

```javascript
downloadUser()

    .then(user => {

        console.log(user.name);

    })

    .catch(error => {

        console.log(error);

    });
```

Luồng:

```text
downloadUser()

↓

Promise

↓

Pending

↓

Fulfilled

↓

then()

↓

user
```

hoặc

```text
downloadUser()

↓

Promise

↓

Pending

↓

Rejected

↓

catch()
```

---

# Angular dùng ở đâu?

Ví dụ:

```typescript
login()
    .then(user => {
        console.log(user);
    });
```

Hoặc:

```typescript
fetch(...)
```

đều trả về Promise.

📌 Lưu ý:

Trong Angular hiện đại, bạn sẽ gặp **Observable** còn nhiều hơn Promise.

Nhưng để hiểu Observable, trước hết bạn phải hiểu Promise.

---

# 🌱 Advanced Note

Hôm nay chúng ta **chưa học**:

- Promise constructor
- resolve()
- reject()
- finally()
- Promise.all()
- Promise.race()
- async / await
- Event Loop
- Microtask Queue

Chúng ta sẽ học dần ở các lesson sau.

---

# 🎯 Tổng kết

Promise là:

> **Một object đại diện cho kết quả sẽ có trong tương lai.**

Mental model:

```text
Function

↓

Callback

↓

Promise

↓

then()

↓

Result
```

Điểm quan trọng nhất hôm nay:

> Promise **không chứa kết quả ngay lập tức**.

Nó chứa:

> **Lời hứa rằng kết quả sẽ đến sau.**

---

# 🙋 Phần 2 – Giải đáp

Theo đúng quy trình Bootcamp:

> **Có phần nào trong bài hôm nay bạn chưa hiểu hoặc muốn tôi giải thích sâu hơn không?**
