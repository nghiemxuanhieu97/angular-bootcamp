# 📚 Level 0 – JavaScript Foundation

# Lesson 11 – Async / Await

# 📝 Questions

## Câu 1

Async / Await được sinh ra để giải quyết vấn đề gì?

---

## Câu 2

`async` có ý nghĩa gì?

Hãy giải thích bằng ngôn ngữ của bạn.

---

## Câu 3

`await` có ý nghĩa gì?

Hãy giải thích bằng ngôn ngữ của bạn.

---

## Câu 4

Cho đoạn code:

```javascript
async function loadUser() {

    const user = await downloadUser();

    console.log(user);

}
```

Hãy mô tả luồng thực thi của chương trình.

---

## Câu 5

Đoạn code sau có hợp lệ không?

```javascript
function loadUser() {

    const user = await downloadUser();

}
```

Vì sao?

---

## Câu 6

So sánh hai đoạn code sau.

### Đoạn 1

```javascript
downloadUser()

    .then(user => {

        console.log(user.name);

    });
```

### Đoạn 2

```javascript
const user = await downloadUser();

console.log(user.name);
```

Theo bạn:

* Chúng giống nhau ở điểm nào?
* Khác nhau ở điểm nào?

---

## Câu 7

Đoạn code sau có kết quả gì?

```javascript
async function getName() {

    return "Hieu";

}
```

Theo bạn:

`getName()` trả về gì?

* String?
* Promise?
* Hay thứ gì khác?

Giải thích vì sao.

---

## Câu 8

Theo bạn:

`await`

đang lấy:

* Promise?
* Hay kết quả bên trong Promise?

Giải thích bằng ngôn ngữ của bạn.

---

## Câu 9

Trong Angular, vì sao `async/await` thường được dùng khi gọi API?

Theo cách hiểu hiện tại của bạn.

📌 Chưa cần nói về Observable.

---

## Câu 10

Theo bạn:

`async/await`

có thay thế Promise hoàn toàn không?

Vì sao?

---

## Câu 11 ⭐ (Tư duy)

Hãy liên hệ:

```text
Promise
        ↓
?

async
        ↓
?

await
        ↓
?
```

bằng ngôn ngữ của bạn.

---

## Câu 12 ⭐⭐ (Mental Model)

Hãy mô tả luồng hoạt động sau theo cách hiểu của bạn:

```text
downloadUser()

↓

Promise

↓

async

↓

await

↓

User
```

Điều gì đang xảy ra trong toàn bộ luồng này?


