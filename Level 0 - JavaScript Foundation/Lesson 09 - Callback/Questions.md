# 📚 Level 0 – JavaScript Foundation

# Lesson 09 – Callback

# 📝 Questions

## Câu 1

Callback được sinh ra để giải quyết vấn đề gì?

---

## Câu 2

Callback là gì?

Hãy giải thích bằng ngôn ngữ của bạn.

---

## Câu 3

Cho đoạn code:

```javascript
function execute(task) {
    task();
}

function sayHello() {
    console.log("Hello");
}

execute(sayHello);
```

Trong đoạn code trên:

- Callback là Function nào?
- Vì sao?

---

## Câu 4

Hãy mô tả luồng thực thi của chương trình sau:

```javascript
function cookFood(callback) {

    console.log("Cooking...");

    callback();

}

function eatFood() {

    console.log("Eating...");

}

cookFood(eatFood);
```

---

## Câu 5

Đoạn code sau có kết quả gì?

```javascript
function download(callback) {

    console.log("Downloading...");

    callback();

}

download(() => {

    console.log("Finished");

});
```

Giải thích vì sao.

---

## Câu 6

Anonymous Callback là gì?

Vì sao người ta thường dùng Arrow Function để viết Callback?

---

## Câu 7

Hai đoạn code sau khác nhau ở điểm nào?

### Đoạn 1

```javascript
downloadFile(openFile);
```

### Đoạn 2

```javascript
downloadFile(openFile());
```

---

## Câu 8

Theo bạn, Callback có phải là một loại Function mới của JavaScript không?

Vì sao?

---

## Câu 9

Trong Angular, vì sao Callback xuất hiện rất nhiều?

Theo cách hiểu hiện tại của bạn.

📌 Chưa cần nói về Promise, Async/Await hay RxJS.

---

## Câu 10

Cho đoạn code:

```javascript
employees.forEach(employee => {

    console.log(employee.name);

});
```

Theo bạn:

```javascript
employee => {

    console.log(employee.name);

}
```

đóng vai trò gì trong lời gọi `forEach()`?

---

## Câu 11 ⭐ (Tư duy)

Hãy liên hệ:

```text
Function
        ↓
?

First-class Function
        ↓
?

Callback
        ↓
?
```

bằng ngôn ngữ của bạn.

---

## Câu 12 ⭐⭐ (Mental Model)

Hãy mô tả luồng hoạt động sau bằng ngôn ngữ của bạn:

```text
Function

↓

Truyền vào Function khác

↓

Chờ được gọi

↓

Thực thi
```

Điều gì đang xảy ra trong luồng này? Hãy giải thích theo cách hiểu của riêng bạn.
