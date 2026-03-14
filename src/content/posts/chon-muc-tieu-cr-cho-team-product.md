---
author: leolion
description: Câu hỏi "CR bao nhiêu là đủ?" nghe có vẻ đơn giản — nhưng trả lời sai
  câu này có thể làm team chạy sai hướng cả quý.
pubDate: 2023-11-15
tags:
- Product
- Metrics
title: Chọn mục tiêu CR bao nhiêu là phù hợp với team product?
type: post
---

## Mở đầu

Hỏi "CR bao nhiêu là phù hợp?" giống như hỏi "tôi nên ngủ mấy tiếng là đủ?"

Câu trả lời phụ thuộc vào: bạn đang ở đâu trong vòng đời, bạn đang làm gì, và bạn đang so sánh với ai. Không có con số nào đúng cho mọi team, mọi sản phẩm, mọi giai đoạn.

Vậy mà trong thực tế, mình thấy rất nhiều team đặt CR target theo một trong ba cách sau — và cả ba đều có vấn đề.

---

## Ba cách đặt CR target phổ biến — và tại sao chúng hay sai

### Cách 1: Nhìn benchmark ngành

*"E-commerce benchmark là 2-3%, chúng ta đang 1.8%, cần tăng lên 2.5%."*

Vấn đề: Benchmark ngành là **average của mọi thứ** — sản phẩm khác nhau, audience khác nhau, traffic source khác nhau, funnel khác nhau. Con số 2-3% đó bao gồm cả Shopee lẫn shop thủ công mỹ nghệ ở Hội An.

Benchmark hữu ích để **biết mình đang ở đâu so với thị trường**. Không hữu ích để đặt target vì nó không nói gì về điều kiện cụ thể của bạn.

### Cách 2: Tăng X% so với tháng trước

*"Tháng này CR 2.3%, tháng sau target 2.6% — tăng 13%."*

Vấn đề: Con số này không gắn với bất kỳ thay đổi nào về sản phẩm hay người dùng. Nó chỉ là "tăng vì muốn tăng". Team không biết phải làm gì để đạt, và không biết khi nào thì nên dừng tăng.

### Cách 3: Leadership ra con số

*"Quý này target CR phải là 4% để đạt revenue plan."*

Vấn đề: Revenue plan và CR target là hai thứ khác nhau. CR phụ thuộc vào rất nhiều yếu tố mà product không kiểm soát được — traffic quality, pricing, offer, thời điểm. Backward từ revenue về CR thường tạo ra con số không realistic, gây áp lực sai chỗ.

---

## Vậy nên đặt CR target thế nào?

Trước khi đặt target, cần trả lời ba câu hỏi:

### Câu 1: CR của bạn đang bị giới hạn bởi điều gì?

CR không phải một con số đơn lẻ — nó là kết quả của cả một funnel. Điểm nghẽn nằm ở đâu?

| Điểm nghẽn | Dấu hiệu | Giải pháp hướng tới |
|---|---|---|
| **Traffic quality** | Bounce rate cao, session ngắn | Điều chỉnh targeting, không phải product |
| **Landing / First impression** | Drop ngay trang đầu | UX, copy, trust signal |
| **Intent gap** | User vào nhưng không tìm được thứ muốn | Search, navigation, personalization |
| **Friction trong checkout** | Drop ở bước payment/confirm | Simplify flow, trust, payment options |
| **Offer** | Thêm vào cart nhưng không mua | Pricing, promotion, urgency |

Nếu điểm nghẽn là traffic quality — tức là người vào không có intent mua — thì dù cải thiện product mãi, CR cũng không tăng được nhiều. Target CR cao lúc này là target sai chỗ.

### Câu 2: Bạn đang ở giai đoạn nào của funnel optimization?

Không phải lúc nào cũng nên optimize CR. Có những giai đoạn optimize CR là đúng — có giai đoạn lại làm hại.

| Giai đoạn | Ưu tiên đúng |
|---|---|
| **Mới launch, traffic ít** | Học user behavior trước, chưa nên fix CR |
| **Traffic ổn định, funnel chưa clean** | Optimize từng step trong funnel |
| **Funnel clean, CR plateau** | A/B test, personalization, offer |
| **CR đã cao, cần scale** | Tăng traffic volume, giữ CR |

Nếu traffic đang ở 500 sessions/ngày mà đã bắt đầu A/B test — statistical significance sẽ mất cả tháng mới có kết quả, và kết quả đó không đáng tin.

### Câu 3: Bạn kiểm soát được điều gì?

Đây là câu quan trọng nhất và ít được hỏi nhất.

CR là output metric. PM không trực tiếp "tăng CR" — PM tác động vào các **input** để CR thay đổi:

```
Input PM kiểm soát:
  → Simplify checkout flow
  → Cải thiện product page (ảnh, mô tả, review)
  → Giảm required fields
  → Thêm trust signal (rating, return policy)
  → Tối ưu mobile experience

Input PM không kiểm soát:
  → Traffic source và quality (Marketing)
  → Pricing và promotion (Business)
  → Inventory (Ops)
  → Thị trường và mùa vụ
```

Target CR của PM nên được đặt dựa trên những input PM kiểm soát được. Không phải con số tổng.

---

## Framework đặt CR target thực tế

Thay vì đặt "CR = X%", mình hay dùng cách sau:

**Bước 1**: Phân tích funnel hiện tại, tìm điểm drop lớn nhất.

**Bước 2**: Estimate impact nếu fix điểm đó — ví dụ: "Nếu checkout step 3 giảm drop từ 40% xuống 25%, CR overall tăng khoảng 0.4%."

**Bước 3**: Đặt target gắn với việc cụ thể: "Quý này target giảm checkout drop rate tại step 3 từ 40% → 28%. Kỳ vọng CR tăng ~0.3-0.4%."

Cách này có ba lợi ích:
- Team biết cụ thể phải làm gì
- Leadership hiểu tại sao chọn con số đó
- Khi đạt hoặc không đạt, có dữ liệu để học

> Đặt target từ **problem** xuống, không từ **số kỳ vọng** xuống.

---

## Một lưu ý về CR theo segment

CR tổng thường là con số gây hiểu nhầm nhiều nhất.

Ví dụ: CR overall là 2.1%. Nhưng khi break down:
- Mobile: 1.2%
- Desktop: 4.8%
- New user: 0.9%
- Returning user: 5.3%

Vấn đề thực sự nằm ở mobile và new user — không phải "CR tổng cần tăng lên 3%".

Khi đặt target, luôn hỏi: **segment nào đang kéo CR tổng xuống, và tại sao?** Đó mới là nơi đáng đầu tư.

---

## Kết lại

Câu hỏi "CR bao nhiêu là phù hợp?" không có một đáp án đúng cho mọi team.

Câu hỏi đúng hơn là:
- **Điểm nghẽn hiện tại** của funnel là gì?
- **Input nào** PM có thể tác động để dịch chuyển CR?
- **Segment nào** đang kéo CR tổng xuống?

Từ ba câu đó, target CR tự nhiên sẽ lộ ra — và team sẽ biết phải làm gì để đạt, thay vì chỉ nhìn con số và lo.

> CR không phải là đích đến. CR là tín hiệu cho biết user có tin tưởng sản phẩm đủ để hành động hay không.