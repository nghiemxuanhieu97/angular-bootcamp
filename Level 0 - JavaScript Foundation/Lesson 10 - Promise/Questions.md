# 📚 Level 0 – JavaScript Foundation

# Lesson 10 – Promise

# 📝 Questions

## Câu 1

Promise được sinh ra để giải quyết vấn đề gì?

---

## Câu 2

Promise là gì?

Hãy giải thích bằng ngôn ngữ của bạn.

---

## Câu 3

Vì sao JavaScript không thể chờ 5 giây để `downloadUser()` trả về kết quả?

Hãy nêu ít nhất **3 ảnh hưởng**.

---

## Câu 4

Cho đoạn code:

```javascript
const promise = downloadUser();
```

`promise` đang chứa gì?

Nó đã là `User` chưa?

Giải thích bằng ngôn ngữ của bạn.

---

## Câu 5

Promise có những trạng thái nào?

Hãy giải thích ý nghĩa của từng trạng thái.

---

## Câu 6

Đoạn code sau có ý nghĩa gì?

```javascript
downloadUser()

    .then(user => {

        console.log(user.name);

    });
```

Hãy mô tả luồng thực thi của chương trình.

---

## Câu 7

Đoạn code sau có ý nghĩa gì?

```javascript
downloadUser()

    .catch(error => {

        console.log(error);

    });
```

Khi nào `catch()` được gọi?

---

## Câu 8

`then()` và `catch()` khác nhau ở điểm nào?

---

## Câu 9

Theo bạn, Promise có thay thế Callback hoàn toàn không?

Vì sao?

📌 Chưa cần nói về Callback Hell hay Async/Await.

---

## Câu 10

Trong Angular, vì sao Promise thường xuất hiện khi gọi API hoặc tải dữ liệu?

Theo cách hiểu hiện tại của bạn.

📌 Chưa cần nói về Observable.

---

## Câu 11 ⭐ (Tư duy)

Hãy liên hệ:

```text
Callback
        ↓
?

Promise
        ↓
?

then()
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

Pending

↓

Fulfilled / Rejected

↓

then() / catch()
```

Điều gì đang xảy ra trong toàn bộ luồng này?
