---
author: leolion
description: Khi sếp giao target doanh thu, team product cần làm gì? Bài này về cách
  dịch mục tiêu doanh thu thành KPI có ý nghĩa cho từng role trong team — PM, designer,
  engineer — mà không làm méo đi công việc thực sự của họ.
pubDate: 2023-05-10
tags:
- Product
- Career
title: Phân bổ KPI team product từ mục tiêu doanh thu
type: post
---

## Vấn đề thực tế

Mỗi đầu năm, kịch bản thường diễn ra theo một pattern quen thuộc:

Leadership announce target doanh thu cho năm. Con số được breakdown theo phòng ban. Team product nhận được phần của mình: tăng X%. Và sau đó... mọi người nhìn nhau.

Vì "tăng doanh thu X%" không phải KPI cho product team. Đó là kết quả của rất nhiều thứ — chỉ một số trong đó nằm trong tay product.

Phân bổ KPI tệ có hai dạng:

**Dạng 1 — Quá trừu tượng**: "Team product chịu trách nhiệm tăng trưởng bền vững." Không ai biết mình cần làm gì cụ thể, và không ai có thể đánh giá được vào cuối kỳ.

**Dạng 2 — Quá cụ thể sai chỗ**: PM bị giao target doanh thu trực tiếp, engineer bị đo bằng số feature ship, designer bị đo bằng số màn hình làm xong. Mọi người đều có số, nhưng số đó không phản ánh đúng đóng góp thực tế của họ.

---

## Framework phân rã: từ doanh thu xuống product metric

Doanh thu không phải một thứ. Nó là tích của nhiều yếu tố, và product ảnh hưởng đến từng yếu tố theo mức độ khác nhau.

Công thức đơn giản nhất:

```
Doanh thu = Traffic × Conversion Rate × Average Order Value × Retention
```

Mỗi biến trong công thức này là một lever — và mỗi lever có những product metric đi kèm:

| Business lever | Product có thể ảnh hưởng | Ví dụ product metric |
|---|---|---|
| **Traffic** | Thấp — chủ yếu do marketing | SEO-friendly structure, page speed |
| **Conversion Rate** | Cao | Checkout completion rate, onboarding completion, feature activation |
| **Average Order Value** | Trung bình | Upsell flow, bundle suggestion, product discovery |
| **Retention** | Cao | D7/D30 retention, churn rate, NPS, feature stickiness |

Bước đầu tiên của việc phân bổ KPI là **xác định lever nào team product có thể tác động nhiều nhất** trong kỳ đó — rồi tập trung KPI vào đó.

Không phải kỳ nào cũng optimize tất cả cùng lúc. Nếu conversion đang tệ thì tập trung vào conversion. Nếu retention là vấn đề thì đó là ưu tiên. Dàn đều ra tất cả thường có nghĩa là không làm tốt cái nào.

---

## Phân rã theo layer: từ team xuống cá nhân

Sau khi xác định product metric ưu tiên, bước tiếp theo là phân rã xuống từng role.

Một cách tôi thấy hữu ích là chia thành 3 layer:

### Layer 1 — Team KPI (PM sở hữu)

Đây là những metric mà cả team cùng chịu trách nhiệm. PM là người chịu trách nhiệm chính cho layer này.

Ví dụ nếu ưu tiên là conversion:
- Checkout completion rate tăng từ X% lên Y%
- Drop-off rate tại bước payment giảm Z%
- Time to complete checkout giảm

PM không làm một mình — nhưng PM là người theo dõi, report, và ensure cả team đang move theo đúng hướng.

### Layer 2 — Contribution metric (theo squad hoặc feature area)

Mỗi nhóm nhỏ trong team có một phần của KPI lớn. Cách phân chia tự nhiên là theo feature area hoặc user journey:

- Squad phụ trách onboarding → activation rate
- Squad phụ trách checkout → checkout completion rate
- Squad phụ trách post-purchase → repeat purchase rate

Contribution metric quan trọng vì nó tạo ra tuyến tính giữa "team tôi làm gì" và "metric nào tôi chịu trách nhiệm" — thay vì mọi người đều chịu trách nhiệm cho mọi thứ và thực ra không ai chịu trách nhiệm cho bất cứ thứ gì.

### Layer 3 — Individual KPI (theo role)

Đây là phần khó nhất và cũng hay sai nhất.

**PM:** Nên được đo bằng product outcome, không phải output.
- ✅ Feature adoption rate của tính năng X sau 30 ngày
- ✅ Số hypothesis được test trong kỳ + learning rút ra
- ✅ Stakeholder satisfaction với communication và delivery
- ❌ Số feature ship
- ❌ Số PRD viết xong
- ❌ Doanh thu (không kiểm soát được hoàn toàn)

**Engineer:** Nên được đo bằng chất lượng và reliability, không phải số lượng.
- ✅ Bug rate của code mình viết (critical bugs sau release)
- ✅ Delivery predictability (estimate vs actual)
- ✅ Technical debt được giải quyết vs technical debt tạo ra
- ❌ Số ticket đóng
- ❌ Số dòng code
- ❌ Doanh thu

**Designer:** Nên được đo bằng design impact, không phải design output.
- ✅ Usability score của luồng mình design (test với user)
- ✅ Tỉ lệ design được implement đúng so với intent
- ✅ Số lần phải redo design vì không cân nhắc constraint kỹ
- ❌ Số màn hình design xong
- ❌ Số iteration
- ❌ Doanh thu

---

## Những cạm bẫy phổ biến

### Cạm bẫy 1: Giao KPI mà không giao quyền

KPI chỉ có ý nghĩa khi người được giao KPI có đủ quyền để tác động vào metric đó.

Nếu PM bị giao conversion rate nhưng không có quyền thay đổi pricing, không có quyền quyết định thứ tự ưu tiên engineering, và không có quyền push back yêu cầu của sales — thì conversion rate KPI đó chỉ là áp lực, không phải trách nhiệm.

Trước khi giao KPI, hỏi: **"Người này có đủ công cụ và quyền hạn để tác động vào metric này không?"**

### Cạm bẫy 2: Measure thứ dễ đo, không phải thứ quan trọng

Số feature ship dễ đo. Số dòng code dễ đo. Số màn hình design xong dễ đo.

Feature adoption rate khó hơn. Design usability score khó hơn. Engineering delivery predictability khó hơn.

Vì khó đo hơn nên nhiều team bỏ qua và chọn thứ dễ hơn. Kết quả là team optimize cho output thay vì outcome — và công ty ngạc nhiên khi ship nhiều mà không thấy business impact tương ứng.

### Cạm bẫy 3: KPI tĩnh cả năm trong môi trường thay đổi nhanh

Trong startup hoặc môi trường competitive cao, context có thể thay đổi đáng kể sau một quý. KPI đặt ra từ đầu năm có thể không còn relevant.

Không phải lý do để không đặt KPI — mà là lý do để có **review định kỳ** và sẵn sàng adjust khi cần, thay vì bảo vệ KPI cũ chỉ vì nó được đặt ra từ đầu năm.

### Cạm bẫy 4: Dùng KPI cá nhân để punish, không phải để develop

KPI nên là công cụ để align và phát triển, không phải để tìm người đổ lỗi khi metric không đạt.

Khi team biết KPI sẽ dùng để punish, họ sẽ chơi safe — chọn target dễ, tránh experiment, tránh những initiative có risk cao nhưng potential lớn. Đây là cách nhanh nhất để giết innovation trong product team.

---

## Quy trình đặt KPI thực tế

Một quy trình đơn giản mà tôi thấy hiệu quả:

**Bước 1 — Từ top down: Leadership share business target và context** Không chỉ con số. Cả lý do tại sao con số đó, market context, và những lever leadership nghĩ là quan trọng nhất.

**Bước 2 — Product team phân tích: lever nào mình có thể tác động?** Nhìn vào funnel, nhìn vào data hiện tại, identify 2-3 metric mà product có thể move nhiều nhất trong kỳ.

**Bước 3 — Đề xuất product metric và argue với leadership** Không phải nhận KPI một chiều — mà là align về "đây là những gì team product cam kết, và đây là lý do". Nếu leadership muốn thêm, thì cần thêm resource hoặc cut scope đi chỗ khác.

**Bước 4 — Breakdown xuống squad và cá nhân** Từ product metric đã align, phân rã theo contribution logic. Mỗi người biết metric của họ liên kết với metric của team như thế nào.

**Bước 5 — Review định kỳ, không phải chỉ cuối kỳ** Monthly hoặc bi-weekly check-in về metric — không phải để report, mà để phát hiện sớm nếu có gì không đúng hướng và adjust.

---

## Một ví dụ cụ thể

**Tình huống**: E-commerce, target doanh thu tăng 25% trong Q3.

**Phân tích funnel**: Data cho thấy conversion rate đang thấp hơn benchmark ngành 3 điểm %, trong khi traffic và AOV đã ổn định. Đây là lever có tiềm năng lớn nhất.

**Team KPI**: Tăng checkout conversion rate từ 2.1% lên 2.8%.

**Breakdown theo contribution**:
- Squad checkout flow → giảm drop-off tại bước payment từ 40% xuống 30%
- Squad product discovery → tăng add-to-cart rate từ 8% lên 11%

**Individual KPI**:
- PM squad checkout → checkout completion rate + user test score của luồng mới
- Engineer → zero regression bugs trong checkout flow sau release
- Designer → usability score ≥ 4/5 trong user test với luồng mới

**Kết nối với doanh thu**: Nếu conversion rate tăng từ 2.1% lên 2.8% (tăng ~33%), với cùng traffic và AOV hiện tại, đóng góp ước tính X tỷ vào doanh thu — chiếm khoảng 40% của target 25% tăng trưởng tổng.

---

## Kết lại

KPI tốt không phải KPI cao nhất có thể đặt ra. KPI tốt là KPI mà người được giao:

1. Hiểu tại sao nó quan trọng với business
2. Có quyền và công cụ để tác động vào nó
3. Có thể tự theo dõi tiến độ mà không cần nhờ người khác đo

Và quan trọng nhất: KPI của mỗi người trong team cần kết nối được thành một mạch logic rõ ràng — từ action của cá nhân, đến metric của squad, đến product metric, đến business target.

Khi mạch logic đó rõ, mọi người không chỉ biết mình cần làm gì. Họ biết **tại sao** những gì họ làm quan trọng — và đó là điều kiện để product mindset thực sự hoạt động.

> KPI không phải để kiểm soát người. Nó là công cụ để mọi người biết mình đang đi đúng hướng — và tự điều chỉnh khi lệch.