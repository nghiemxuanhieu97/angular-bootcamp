# 📚 Level 0 – JavaScript Foundation

# Lesson 11 – Async / Await

Đây là lesson mà gần như mọi JavaScript Developer đều sử dụng hàng ngày.

Nếu Lesson 10 trả lời:

> **"Làm thế nào để xử lý kết quả trả về trong tương lai bằng Promise?"**

thì Lesson 11 trả lời:

> **"Làm thế nào để viết Promise theo cách giống code đồng bộ (synchronous), dễ đọc và dễ bảo trì hơn?"**

Đó chính là **Async / Await**.

---

# 📖 Theory

## 🎯 Story

Sau khi Promise ra đời, lập trình viên rất thích.

Ví dụ:

```javascript
login()

    .then(user => {

        return downloadProfile(user.id);

    })

    .then(profile => {

        return downloadOrders(profile.id);

    })

    .then(orders => {

        return downloadNotifications(orders);

    })

    .then(notifications => {

        console.log(notifications);

    })

    .catch(error => {

        console.log(error);

    });
```

Đoạn code trên hoạt động hoàn toàn chính xác.

Nhưng khi chương trình ngày càng lớn:

* Login
* Download User
* Download Profile
* Download Orders
* Download Products
* Download Settings
* Download Messages

thì chuỗi `.then()` ngày càng dài.

Code bắt đầu khó đọc.

Khó debug.

Khó bảo trì.

JavaScript cần một cách viết tự nhiên hơn.

---

# 😭 Problem

Promise giúp giải quyết bất đồng bộ.

Nhưng cú pháp:

```javascript
downloadUser()

    .then(...)

    .then(...)

    .then(...)

    .then(...)

    .catch(...);
```

không còn giống cách con người suy nghĩ.

Con người thường nghĩ:

```text
Làm A

↓

Lấy kết quả

↓

Làm B

↓

Lấy kết quả

↓

Làm C
```

Không phải:

```text
.then()

↓

.then()

↓

.then()

↓

.then()
```

---

# 💡 Solution

ES2017 giới thiệu:

> **Async / Await**

Ý tưởng rất đơn giản.

Thay vì:

```javascript
downloadUser()

    .then(user => {

        console.log(user);

    });
```

Ta viết:

```javascript
const user = await downloadUser();

console.log(user);
```

Đọc giống hệt code đồng bộ.

Nhưng bên trong vẫn sử dụng Promise.

---

# async là gì?

`async` dùng để khai báo:

> **Function này có thể sử dụng `await`.**

Ví dụ:

```javascript
async function loadUser() {

}
```

Hoặc:

```javascript
const loadUser = async () => {

};
```

Mental model:

```text
async

↓

Function hỗ trợ await
```

📌 Điều quan trọng:

Một `async function` **luôn trả về Promise**.

Ví dụ:

```javascript
async function getUser() {

    return "Hieu";

}
```

JavaScript sẽ hiểu gần như:

```javascript
Promise.resolve("Hieu");
```

Chúng ta chưa đi sâu vào `Promise.resolve()`, chỉ cần nhớ:

> **async function luôn trả về Promise.**

---

# await là gì?

`await` có nghĩa là:

> **Hãy chờ Promise hoàn thành rồi lấy kết quả của Promise.**

Ví dụ:

```javascript
const user = await downloadUser();
```

Mental model:

```text
downloadUser()

↓

Promise

↓

await

↓

User
```

Điều rất quan trọng:

`await` không trả về Promise.

Nó trả về:

> **Giá trị bên trong Promise sau khi Promise hoàn thành.**

---

# async và await luôn đi cùng nhau?

Gần như vậy.

Ví dụ đúng:

```javascript
async function loadData() {

    const user = await downloadUser();

}
```

Ví dụ sai:

```javascript
function loadData() {

    const user = await downloadUser();

}
```

Sẽ báo lỗi.

Vì:

> `await` chỉ được dùng bên trong `async function`.

---

# So sánh Promise và Async / Await

Promise:

```javascript
downloadUser()

    .then(user => {

        console.log(user.name);

    })

    .catch(error => {

        console.log(error);

    });
```

Async / Await:

```javascript
async function loadUser() {

    try {

        const user = await downloadUser();

        console.log(user.name);

    } catch (error) {

        console.log(error);

    }

}
```

Hai đoạn code làm cùng một việc.

Khác nhau ở cách diễn đạt.

---

# Angular dùng ở đâu?

Ví dụ:

```typescript
async function loadProfile() {

    const profile = await fetchProfile();

    console.log(profile);

}
```

Hay:

```typescript
async function login() {

    const token = await authenticate();

    console.log(token);

}
```

Bạn sẽ gặp `async/await` rất nhiều khi:

* Gọi REST API.
* Upload file.
* Download dữ liệu.
* Đăng nhập.
* Đọc cấu hình.

📌 Sau này, Angular còn dùng `Observable`, nhưng `async/await` vẫn là kỹ năng nền tảng.

---

# 🌱 Advanced Note

Hôm nay chúng ta **chưa học**:

* Promise.resolve()
* Promise.reject()
* finally()
* Promise.all()
* Promise.allSettled()
* Promise.race()
* Event Loop
* Microtask Queue
* Vì sao `await` không block UI

Chúng ta sẽ học khi đến đúng thời điểm.

---

# 🎯 Tổng kết

Async / Await là:

> **Một cú pháp giúp viết Promise theo cách dễ đọc hơn, giống code đồng bộ.**

Mental model:

```text
Promise

↓

async function

↓

await

↓

Result
```

Điều quan trọng nhất:

* `async` cho phép function sử dụng `await`.
* `await` lấy **kết quả** của Promise.
* `async/await` **không thay thế Promise**.
* `async/await` chỉ là **cách viết khác của Promise**.

---

# 🙋 Phần 2 – Giải đáp

Theo đúng quy trình Bootcamp:

> **Có phần nào trong bài hôm nay bạn chưa hiểu hoặc muốn tôi giải thích sâu hơn không?**
