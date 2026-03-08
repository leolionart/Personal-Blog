---
author: leolion
description: Cách thiết kế giao diện phải thích ứng với AI agents - Google I/O 2025
  insights
pubDate: 2025-02-20
tags:
- Technology
- Design
title: UI/UX của web app trong thời đại AI
type: post
---

## Giới thiệu

Trong thời đại AI, tư duy thiết kế UI/UX đang đổi khá mạnh.

Trước đây mình chỉ tối ưu trải nghiệm cho người dùng là chính. Bây giờ, ngoài con người, **AI agents** cũng là một “đối tượng sử dụng” cần được tính đến trong cách thiết kế sản phẩm.

---

## Mục lục

1. [Thiết kế thân thiện với AI agents](#thiết-kế-thân-thiện-với-ai-agents)
2. [Prompt engineering là kỹ năng thật sự](#prompt-engineering-là-kỹ-năng-thật-sự)
3. [Kiến trúc sản phẩm trong giai đoạn mới](#kiến-trúc-sản-phẩm-trong-giai-đoạn-mới)

---

## Thiết kế thân thiện với AI agents

### Bài toán mới của UX

Ở kỷ nguyên trước, phần lớn UI tối ưu cho mắt người và thao tác tay.

Ở kỷ nguyên AI, mình phải đặt thêm câu hỏi:

- AI có hiểu cấu trúc nội dung này không?
- API có đủ rõ để agent hành động không?
- Luồng dữ liệu có nhất quán để agent đọc/ghi ổn định không?

### Ví dụ đơn giản: thiết kế form

Nếu muốn form vừa tốt cho người dùng vừa dễ cho AI xử lý, mình ưu tiên:

```text
- Label rõ ràng, hạn chế viết tắt khó hiểu
- Trường bắt buộc được đánh dấu nhất quán
- Error message chỉ đúng lỗi cụ thể
- Format dữ liệu ổn định và có thể đoán trước
```

Những thứ nên tránh:

```text
- Label mơ hồ hoặc quá “sáng tạo”
- Quy tắc bắt buộc không rõ ràng
- Error message chung chung
- Format dữ liệu thay đổi tùy ngữ cảnh
```

---

## Prompt engineering là kỹ năng thật sự

Prompt engineering không phải “mẹo vặt”, mà là kỹ năng giao tiếp với mô hình.

Nó giống như bất kỳ kỹ năng chuyên môn nào: càng làm nhiều, càng biết đặt câu hỏi đúng.

### 3 nguyên tắc mình thấy hiệu quả

1. **Nói rõ mục tiêu**
   - Tránh kiểu: “viết gì đó hay hay”.
   - Nên cụ thể: mục tiêu, độ dài, giọng văn, audience.

2. **Cung cấp bối cảnh**
   - User là ai, thương hiệu muốn gì, ràng buộc nào phải giữ.

3. **Chỉ định output format**
   - Ví dụ JSON/schema rõ ràng khi cần tích hợp workflow.

Càng rõ đầu vào, đầu ra càng dễ kiểm soát.

---

## Kiến trúc sản phẩm trong giai đoạn mới

Một xu hướng mình quan sát được là mô hình:

> AI điều phối hành động qua giao thức chuẩn (như MCP), thay vì chỉ dừng ở chat.

### MCP là gì

**MCP (Model Context Protocol)** giúp AI tools giao tiếp có cấu trúc với các service, theo cách gần giống API contract dành riêng cho agent.

### Hình dung kiến trúc

```text
AI Agent
  ↓
MCP layer
  ↓
Service APIs (nhiều hệ thống khác nhau)
```

### Điểm mạnh của kiến trúc này

- AI có thể gọi service theo workflow phức tạp hơn.
- Giảm thao tác trung gian thủ công.
- Mở đường cho trải nghiệm AI-first mượt hơn.

---

## Kết luận

Làm sản phẩm giai đoạn này không phải là bỏ UX cho con người, mà là **mở rộng UX để tương thích cả với AI agents**.

Nếu phải tóm gọn, mình nghĩ designer và PM nên làm tốt 4 việc:

1. Hiểu cách AI agents đọc và hành động.
2. Thiết kế API/data contract rõ ràng.
3. Viết nội dung có cấu trúc, dễ parse.
4. Thiết kế trải nghiệm theo hướng AI-first nhưng vẫn human-friendly.

Ai làm sớm phần này sẽ có lợi thế rất lớn trong 1-2 năm tới.