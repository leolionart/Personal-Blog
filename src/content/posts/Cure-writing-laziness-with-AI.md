---
title: Chữa bệnh lười viết bằng AI
description: Chiến lược sử dụng ChatGPT & AI để vượt qua procrastination trong viết lách và đọc sách
pubDate: 2025-02-10
author: leolion
tags:
  - AI
  - Writing
  - Productivity
type: post
---

## Vấn đề

Bạn có từng rơi vào vòng lặp này chưa:

- Muốn đọc sách nhưng đọc mãi không xong.
- Muốn viết bài nhưng cứ dời hết lần này tới lần khác.
- Đọc xong thì nhớ được vài hôm rồi quên.

Mình đã từng như vậy trong thời gian dài.

---

## Mục lục

1. [Vấn đề 1: Đọc dở dang](#vấn-đề-1-đọc-dở-dang)
2. [Vấn đề 2: Khó ghi nhớ kiến thức](#vấn-đề-2-khó-ghi-nhớ-kiến-thức)
3. [Vấn đề 3: Tê liệt khi viết](#vấn-đề-3-tê-liệt-khi-viết)
4. [Xây thói quen viết đều](#xây-thói-quen-viết-đều)
5. [Những điều mình rút ra](#những-điều-mình-rút-ra)

---

## Vấn đề 1: Đọc dở dang

### Tình huống cũ

Trước đây mình thường:

- Mua rất nhiều sách.
- Mỗi cuốn đọc 1-2 chương.
- Rồi bỏ dở gần như tất cả.

Lý do rất đơn giản:

- Sách dài, thông tin dày.
- Vào thẳng nội dung nên khó nắm ý chính.
- Chưa thấy giá trị sớm nên nhanh nản.

### Cách mình xử lý: Tóm tắt trước bằng AI

Mình làm theo flow này:

```text
1) Chọn cuốn mình quan tâm
2) Copy mục lục vào ChatGPT
3) Yêu cầu tóm tắt ngắn (khoảng 500 từ)
4) Đọc bản tóm tắt trước
5) Sau đó mới đọc bản đầy đủ
```

Prompt mẫu:

```text
Bạn là người review sách. Hãy tóm tắt các ý chính và bài học quan trọng của cuốn sau:

[Tên sách]
[Mục lục]

Đầu ra gồm:
- Luận điểm cốt lõi (1 câu)
- 3 ý tưởng chính
- 3 bài học quan trọng
- Cuốn này hợp với nhóm độc giả nào
```

Kết quả là:

- Mình biết sớm cuốn nào đáng đầu tư thời gian.
- Có bối cảnh trước nên đọc sâu dễ hơn.
- Động lực tăng rõ rệt vì hiểu mình đang đọc để làm gì.

---

## Vấn đề 2: Khó ghi nhớ kiến thức

### Tình huống cũ

- Đọc xong thấy rất hay.
- Một tuần sau quên gần hết.
- Ghi chú rời rạc, lúc cần thì không tìm nổi.

Nguyên nhân chính:

- Không có hệ thống tổng hợp kiến thức.
- Ghi chú kiểu chắp vá.
- Không có vòng ôn lại.

### Cách mình xử lý: Mindmap + AI hỗ trợ cấu trúc

Flow mình đang dùng:

```text
1) Đọc theo từng chapter
2) Sau mỗi chapter, chốt 5 ý quan trọng
3) Nhờ AI gợi ý cấu trúc mindmap
4) Sắp xếp lại note theo cấu trúc đó
5) Tạo một trang tóm tắt cuối cùng
```

Prompt mẫu:

```text
Mình có các ghi chú sau từ một chapter:
[ghi chú]

Hãy đề xuất cấu trúc mindmap gồm:
- Trung tâm: ý tưởng chính
- Các nhánh: khái niệm hỗ trợ
- Nhánh ứng dụng: ví dụ thực tế

Xuất ra dạng cây markdown hoặc JSON.
```

Lợi ích:

- Ghi nhớ tốt hơn vì kiến thức được trực quan hóa.
- Ôn lại nhanh hơn vì thông tin có cấu trúc.
- Đỡ tốn thời gian sắp ý thủ công.

---

## Vấn đề 3: Tê liệt khi viết

### Tình huống cũ

- Muốn viết, mở Google Docs ra.
- Đứng hình trước trang trắng.
- Nghĩ quá nhiều, không bắt đầu được.
- Cuối cùng lại “nghiên cứu thêm” để trì hoãn.

Nguyên nhân quen thuộc:

- Sợ viết dở.
- Không biết mở bài từ đâu.
- Cầu toàn quá mức.

### Cách mình xử lý: Quy trình viết 3 bước với AI

#### Bước 1: Brainstorm

Nhờ AI gợi ý góc tiếp cận, đối tượng độc giả, ý chính.

Prompt mẫu:

```text
Mình muốn viết về: [chủ đề]

Hãy đề xuất 5 góc tiếp cận khác nhau.
Mỗi góc gồm 3 ý chính.
Ưu tiên góc nhìn đa dạng theo từng nhóm độc giả.
```

Mục tiêu: có nhiều hướng để chọn, thay vì kẹt ở một hướng duy nhất.

#### Bước 2: Lên dàn ý

Nhờ AI dựng outline rõ ràng để giảm ma sát khi viết.

```text
Tạo outline chi tiết cho bài viết:
- Tiêu đề: [tiêu đề]
- Góc tiếp cận: [đã chọn]
- Độc giả mục tiêu: [ai]

Bao gồm:
- Mở bài
- 3-4 phần chính
- Mỗi phần có các ý con
- Kết bài có CTA

Định dạng markdown.
```

#### Bước 3: Viết nháp nhanh rồi chỉnh

1. Viết nháp thô trong 30 phút, chưa cần hay.
2. Dán vào AI để cải thiện độ rõ ràng, flow, ví dụ.
3. Chỉnh lại theo giọng văn cá nhân trước khi publish.

Điểm quan trọng: AI giúp tăng tốc phần “nặng”, còn tiếng nói cuối cùng vẫn là của mình.

---

## Xây thói quen viết đều

Điều mình thấy hiệu quả nhất là:

> Time block cố định hiệu quả hơn quản lý task kiểu cứng.

Trước đây mình coi viết là một “dự án” trong Notion nên hay bỏ qua.
Hiện tại mình chốt một khung cố định: **thứ Tư, 9-10h sáng**.

Quy tắc đi kèm:

- Bật airplane mode.
- Mục tiêu đơn giản: viết nháp hoặc hoàn thiện một phần.
- Không đặt chuẩn “phải hoàn hảo”.

Kết quả:

- Tần suất viết ổn định hơn.
- Giảm mệt mỏi vì phải ra quyết định liên tục.
- Dần tạo thành nhịp tự nhiên.

---

## Những điều mình rút ra

1. **AI không viết thay bạn, AI giúp bạn bắt đầu.**
2. **Đọc tóm tắt trước** giúp tăng tốc hiểu sâu.
3. **Hệ thống tốt luôn thắng ý chí nhất thời.**
4. **Done tốt hơn perfect** nếu muốn tiến lên đều.
5. **Công cụ chỉ là đòn bẩy**, quy trình mới là gốc.

---

## Hành động ngay trong tuần này

- Chọn 1 cuốn sách và thử đọc tóm tắt trước bằng AI.
- Chốt 1 khung giờ viết cố định trong tuần.
- Dùng quy trình 3 bước để ra 1 bản nháp đầu tiên.

---

## Kết luận

“Lười đọc, lười viết” thường không phải do thiếu kỷ luật, mà do hệ thống chưa đúng và ngưỡng bắt đầu quá cao.

Nếu biết dùng AI để giảm ma sát, cộng với thói quen đều đặn, bạn sẽ đi rất xa.