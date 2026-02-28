---
author: leolion
description: Khi bạn đã quen vẽ user flow và diagram, bước tiếp theo là biến chúng
  thành workflow chạy được
pubDate: 2025-02-20
tags:
- Technology
- Productivity
title: Thực thi hoá sơ đồ tư duy qua n8n
type: post
---

## Bạn đã biết vẽ flow rồi — chỉ chưa biết chạy nó thôi

Nếu bạn là PM, designer, hay bất kỳ ai từng vẽ user flow, bạn đã quen với việc nghĩ theo luồng:

```text
User mở app
  │
  ▼
Chọn sản phẩm
  │
  ▼
Thêm vào giỏ
  │
  ▼
Thanh toán
  │
  ▼
Nhận xác nhận
```

Nếu bạn từng vẽ diagram mô tả logic vận hành:

```text
Đơn hàng mới
  │
  ▼
Kiểm tra tồn kho
  │
  ├── Có hàng?
  │     │
  │     ▼
  │   Xuất kho ──▶ Giao vận
  │
  └── Hết hàng?
        │
        ▼
      Thông báo seller ──▶ Hủy/Chờ nhập
```

Hay đơn giản là bạn từng sketch quy trình làm việc hàng ngày trên giấy, trên Miro, trên FigJam — bất kỳ đâu.

Thì bạn **đã biết nghĩ theo workflow rồi**. Cái thiếu duy nhất là: biến cái flow đó từ hình vẽ thành thứ chạy được thật.

Đó chính xác là thứ n8n làm.

---

## Mục lục

1. [Thay đổi tư duy: từ vẽ flow sang chạy flow](#-thay-đổi-tư-duy-từ-vẽ-flow-sang-chạy-flow)
2. [Cách mình làm: luôn sketch trước, đấu nối sau](#-cách-mình-làm-luôn-sketch-trước-đấu-nối-sau)
3. [Test từng bước — không đợi hoàn chỉnh mới chạy](#-test-từng-bước--không-đợi-hoàn-chỉnh-mới-chạy)
4. [Gắn AI vào giữa luồng](#-gắn-ai-vào-giữa-luồng)
5. [Ví dụ thực tế từ workflow của mình](#-ví-dụ-thực-tế-từ-workflow-của-mình)
6. [Kết hợp n8n với MCP](#-kết-hợp-n8n-với-mcp)

---

## Thay đổi tư duy: từ vẽ flow sang chạy flow

Nhiều năm làm product, mình vẽ rất nhiều diagram. User flow cho feature mới. Sequence diagram cho API integration. Flowchart mô tả quy trình xử lý đơn hàng. Sơ đồ logic cho campaign promotion.

Nhưng tất cả đều dừng ở mức **tài liệu**. Vẽ xong, trình bày xong, rồi giao cho engineer đi build. Bản thân cái diagram thì nằm im trong Figma hay Confluence.

Khi mình bắt đầu dùng n8n, cái “aha moment” là: **canvas của n8n trông y hệt cái flowchart mình vẫn vẽ — nhưng mỗi ô vuông đều chạy được thật**.

Trigger giống cái ô “Bắt đầu” trong flowchart. Condition giống cái hình thoi rẽ nhánh. Action giống cái ô “Gửi email” hay “Cập nhật database” mà mình hay vẽ. Khác biệt duy nhất: ở n8n, bạn bấm Execute và nó **chạy thật**.

Tư duy không cần thay đổi nhiều. Bạn vẫn nghĩ theo luồng, vẫn phân tích input/output, vẫn xử lý ngoại lệ. Chỉ là bây giờ, thay vì vẽ xong rồi đưa người khác, **bạn tự thực thi được luôn**.

---

## Cách mình làm: luôn sketch trước, đấu nối sau

Mình không bao giờ mở n8n lên rồi bắt đầu kéo thả node ngay. Cách đó dễ bị lạc giữa chừng vì vừa nghĩ vừa build.

Quy trình của mình luôn là:

### Bước 1: Sketch ý tưởng các bước trên giấy hoặc note

Trước khi mở n8n, mình viết ra flow bằng text đơn giản. Ví dụ:

```text
1. Nhận email mới có attachment
2. Lọc: chỉ xử lý email từ domain @vendor.com
3. Tải attachment về
4. Gửi nội dung qua AI để trích xuất thông tin quan trọng
5. Ghi kết quả vào Google Sheet
6. Gửi Slack thông báo cho team
```

Chỉ cần 6 dòng, mình đã thấy rõ toàn bộ flow. Biết có bao nhiêu bước, bước nào cần condition, bước nào cần gọi API ngoài.

### Bước 2: Mở n8n, kéo node theo đúng sketch

Giờ mới mở canvas. Kéo từng node theo thứ tự đã sketch:

```text
Email Trigger
  │
  ▼
  IF
  │
  ▼
Download
  │
  ▼
AI Agent
  │
  ▼
Google Sheets
  │
  ▼
Slack
```

Chưa cần nối. Chưa cần config. Chỉ đặt node lên canvas để **nhìn thấy hình hài tổng thể** — giống như bạn đặt wireframe trước khi design chi tiết.

### Bước 3: Đấu nối và config từng node

Bây giờ mới bắt đầu nối dây và cấu hình. Từng node một, từ trái sang phải.

Cách tiếp cận này giống hệt cách mình làm product design: **sketch low-fi trước, rồi mới đi vào detail**. Không khác gì.

---

## Test từng bước — không đợi hoàn chỉnh mới chạy

Đây là sai lầm phổ biến nhất mình thấy người mới dùng n8n mắc phải: build xong toàn bộ workflow rồi mới bấm Execute. Lỗi ở node thứ 2 nhưng phải debug cả 8 node.

Cách mình làm: **chạy thử từng node ngay khi vừa config xong**.

n8n có một tính năng rất hay: **Execute Node** — cho phép bạn chạy thử đúng một node, xem output của nó, rồi mới quyết định có đi tiếp không.

Quy trình test:

```text
Config node
  │
  ▼
Execute
  │
  ▼
Xem output
  │
  ├── Đúng ý? ──▶ Sang node tiếp
  │
  └── Sai? ──▶ Sửa lại ──▶ Execute lại
```

Mỗi node mình đều kiểm tra:

- **Input có đúng format không?** Nhiều khi node trước trả ra array mà node sau expect object — nối vào là lỗi ngay.
- **Output có đúng thứ mình cần không?** Không phải field nào cũng cần truyền tiếp. Lọc bớt data giữa các node giúp flow clean hơn.
- **Edge case thì sao?** Email không có attachment thì node download có crash không? Input rỗng thì AI node trả về gì?

Cách test từng bước này chậm hơn lúc đầu, nhưng **tiết kiệm rất nhiều thời gian debug về sau**. Giống như viết unit test: đầu tư ban đầu cao, nhưng payoff lớn.

---

## Gắn AI vào giữa luồng

Đây là phần thú vị nhất của n8n thời điểm hiện tại. Bạn có thể gắn một AI node vào **bất kỳ đâu giữa luồng** để xử lý những việc mà logic cứng không làm được.

### AI không cần ở đầu hay cuối — nó ở giữa

Nhiều người nghĩ dùng AI nghĩa là build chatbot hoặc AI assistant. Nhưng trong n8n, AI node mạnh nhất khi nó **xen giữa một quy trình vốn đã chạy bằng logic thông thường**.

Ví dụ một flow xử lý feedback khách hàng:

```text
Nhận feedback từ form
→ [AI] Phân loại: bug / feature request / complaint / compliment
→ IF bug → Tạo ticket Jira
→ IF feature request → Thêm vào backlog Notion
→ IF complaint → Gửi Slack cho team support
→ IF compliment → Gửi Slack cho team product (boost morale)
```

Không có AI, bạn phải viết regex hoặc keyword matching để phân loại — vừa cứng vừa hay sai. Với AI node, bạn chỉ cần prompt: *”Phân loại feedback sau vào một trong 4 nhóm: bug, feature_request, complaint, compliment. Trả về đúng 1 từ.”*

### Những chỗ mình hay gắn AI vào

- **Trích xuất thông tin từ text phi cấu trúc**: email, chat message, PDF scan
- **Phân loại và gắn nhãn**: phân loại nội dung, sentiment, mức độ ưu tiên
- **Tóm tắt**: rút gọn nội dung dài thành vài bullet point
- **Dịch hoặc chuyển đổi format**: từ ngôn ngữ này sang ngôn ngữ khác, từ free text sang JSON

Nguyên tắc của mình: **AI xử lý phần “mềm” (ngôn ngữ, phân loại, suy luận), logic cứng xử lý phần còn lại (routing, lưu trữ, thông báo)**. Đừng dùng AI cho thứ mà một cái IF/ELSE làm được.

---

## Ví dụ thực tế từ workflow của mình

### 1) Tóm tắt và phân loại email vendor

```text
Email mới từ @vendor.com
→ Tải attachment (invoice/quote)
→ [AI] Trích xuất: số tiền, hạn thanh toán, hạng mục
→ Ghi vào Google Sheet theo category
→ Nếu hạn thanh toán < 7 ngày → Slack alert
```

Trước đây mình làm việc này bằng tay: mở email, đọc, copy số liệu vào sheet. Mất 15–20 phút mỗi ngày. Giờ flow chạy tự động, mình chỉ review kết quả.

### 2) Theo dõi bookmark và build knowledge base

```text
Lưu bookmark mới (qua Webhook)
→ Fetch nội dung trang
→ [AI] Tóm tắt + trích keyword
→ Ghi vào Notion database
→ Gắn tag tự động theo chủ đề
```

Đây là workflow “second brain” của mình. Mỗi link mình lưu đều được AI tóm tắt và phân loại, nên sau này tìm lại rất nhanh.

### 3) Xử lý feedback từ nhiều nguồn

```text
Feedback từ form / email / Slack
→ Gộp về format chung
→ [AI] Phân loại + đánh mức ưu tiên
→ Route đến đúng team
→ Tạo ticket hoặc task tương ứng
```

Flow này giải quyết bài toán mà nhiều team product gặp: feedback đến từ khắp nơi, không ai tổng hợp kịp.

---

## Kết hợp n8n với MCP

**MCP (Model Context Protocol)** cho phép AI tools gọi workflow n8n như một “tool” và nhận kết quả trả về.

Khi kết hợp:

```text
User hỏi AI assistant một câu hỏi
→ AI nhận ra cần chạy workflow
→ Gọi n8n qua MCP endpoint
→ n8n xử lý logic nhiều bước
→ Trả kết quả cho AI
→ AI tổng hợp và trả lời user
```

Điểm hay: bạn tách được phần **”điều phối logic”** (n8n — visual, dễ sửa) và phần **”giao tiếp tự nhiên”** (AI assistant). Mỗi bên làm tốt nhất thứ mình giỏi.

---

## Lời khuyên để bắt đầu

**Đừng nghĩ n8n là công cụ automation xa lạ.** Hãy nghĩ nó là Figma/Miro cho quy trình — nơi bạn vẽ flow và flow đó chạy được thật.

1. **Chọn một quy trình bạn đang làm bằng tay mỗi tuần.** Càng lặp lại, càng phù hợp.
2. **Sketch ra các bước trên giấy trước.** Đừng mở n8n ngay.
3. **Kéo node lên canvas theo sketch.** Nhìn tổng thể trước, chi tiết sau.
4. **Test từng node.** Xem input/output có đúng ý chưa rồi mới nối tiếp.
5. **Gắn AI node vào chỗ cần xử lý ngôn ngữ hoặc phân loại.** Không phải chỗ nào cũng cần AI.
6. **Chạy vài ngày, quan sát, rồi điều chỉnh.** Workflow tốt nhất là workflow được sửa nhiều lần.

Bạn đã biết nghĩ theo flow rồi. n8n chỉ là bước tiếp theo: **biến sơ đồ tư duy thành hệ thống chạy thật**.