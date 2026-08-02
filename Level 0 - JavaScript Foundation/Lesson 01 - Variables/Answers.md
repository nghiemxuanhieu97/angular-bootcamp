# Answers

## Câu 1
Biến là cách hệ thống lưu trữ giá trị

## Câu 2
là từ khóa khai báo biến. var là cách khai báo kiểu cũ, còn let vs const là cách khai báo kiểu mới

## Câu 3
Khái báo biến là tạo label gán cho một vùng nhớ cố định nhưng chưa có giá trị nên giá trị mặc định là undefined. Gán giá trị là cách gán giá trị cho vùng nhớ thông qua biến. Khởi tạo là kết hợp việc khai báo và gán giá trị.

## Câu 4
Vì var là cách javascript cho phép khai báo biến kiểu dễ dãi, khó xác định được ý tưởng ban đầu của biến, dẫn tới khó debug, khó hiểu và dễ gây lỗi vì ứng dụng không báo error.

## Câu 5
là phạm vi trong dấu { }

## Câu 6
In ra chữ Hello vì biến khai báo bằng var không bị ràng buộc trong block scope

## Câu 7
Sẽ bị lỗi là message chưa được khai báo hoặc không tìm thấy do biến message được khai báo qua let mà let có phạm vi trong block scope if, còn console.log.. là gọi ở ngoài if (tức là ngoài block scope)

## Câu 8
Khi cảm thấy có thể thay đổi dữ liệu biến trong một quá trình nào đó

## Câu 9
Khi cảm thấy biến tạo ra được phép thay đổi trong tương lai

## Câu 10
Đầu tiên cần phân tích là employee được khai báo bằng const, nghĩa là object này là cố định, employee.name = "Tom"; là việc thay đổi giá trị cho class field chứ không phải object employee nên không bị lỗi. Đoạn khi hai là cố thay đổi employee trỏ sang object khác nên bị lỗi

## Câu 11
Giống nhau, đối với biến thì không được ghi đè giá trị, đối với class thì không được thay đổi object reference (tôi đoán vậy)

## Câu 12
Vì đó là class field, được xác định scope nằm trong class đó
