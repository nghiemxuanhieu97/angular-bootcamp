# Answers

## Câu 1

Module được sinh ra để giải quyết vấn đề gì? -> chia nhỏ file js theo context, reponsibility. tránh lỗi vì biến hay function bị trùng, từ đó dễ quản lý, bảo trì

## Câu 2

-> function sau đè logic function trước mà developer không hay biết
-> khi có lỗi xảy ra khó debug hay trace lỗi vì quá nhiều function trong cùng 1 file js
-> khó quản lý function theo context, feature...

## Câu 3

cho phép function hay biến của file js này được truy cập bởi js khác thông qua từ khóa import

## Câu 4

cho phép sử dụng function hoặc biến hoặc bất kỳ thứ gì được export trong file js nào đó

## Câu 5

giả sử 2 file này cùng cấp, nằm trong cùng 1 package

```javascript
import { add } from "./math.js";
```

## Câu 6

hợp lệ vì đây là cú pháp named export và import dùng đúng name saveEmployee từ file employee.js

## Câu 7

-> đúng vì đối với default export thì lúc import dùng tên gì cũng được

## Câu 8

Named Export dành cho file js có nhiều function hoặc biến, còn default export dành cho file js chỉ có 1 function hoặc 1 biến duy nhất

## Câu 9

giống là đều cho phép sự truy cập từ bên ngoài. khác là cú pháp và quy tắc khác nhau, javascript cho phép dynamic name với default export còn java thì không có, phải import chính xác.
Tôi không muốn những câu hỏi so sánh java và javascript trong tương lai vì tôi không muốn phải ôn cả java

## Câu 10

vì file đó cần dùng nhiều thứ từ nhiều file js khác nhau

## Câu 11

module giúp tác file js thành nhiều file nhỏ
import và export giúp module này sử dùng module khác

## Câu 12

File A là module và export ra cho module khác là file B dùng thông qua từ khóa import
