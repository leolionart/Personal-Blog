---
author: leolion
description: Product rất ít có tác động nhìn thấy được trực tiếp tới việc kinh doanh.
  Vậy đo cái gì, và đo thế nào?
pubDate: 2024-02-10
tags:
- Product
- Metrics
title: Chuyện đo đạc product
type: post
---

## Mở đầu

Product rất ít có tác động nhìn thấy được **trực tiếp** tới việc kinh doanh.

Sales chốt đơn — nhìn thấy ngay. Marketing chạy campaign — thấy traffic, thấy lead. Còn product? Một feature ship ra hôm nay có thể mất 3 tháng mới phản ánh vào doanh thu, nếu có.

Đây là lý do mà nhiều team product rơi vào một trong hai cực:

- **Đo quá nhiều**: tracking mọi thứ, báo cáo đủ loại số, nhưng không ai hành động theo số đó.
- **Không đo gì cả**: ship theo gut feeling, không biết feature vừa làm có tác dụng không.

Cả hai đều sai. Vấn đề không phải *có đo hay không* — mà là *đo đúng thứ* và *đo đúng cách*.

---

## Đo cái gì? Hai nguyên tắc định metric

Mình không theo framework nào cụ thể — HEART, AARRR hay OKR đều có chỗ đúng. Nhưng khi define metric, mình luôn quy về hai câu hỏi đơn giản:

### 1. Bao nhiêu người bị ảnh hưởng? (Count)

Đây là chiều **breadth** — độ rộng của tác động. Một bug chỉ 5 user gặp khác hoàn toàn với bug 50.000 user gặp, dù cùng mức độ nghiêm trọng kỹ thuật.

Metric theo chiều này: số lượng user thực hiện hành động, số session, số lượt tương tác.

### 2. Ảnh hưởng mức độ nào?

Đây là chiều **depth** — độ sâu của tác động. Có hai cách đo:

| Cách đo | Ý nghĩa | Ví dụ |
|---|---|---|
| **Bao lâu** (time) | Tốc độ hoàn thành, thời gian chờ | Time-to-first-action, checkout duration |
| **Tổng số ảnh hưởng** (count) | Tần suất, khối lượng | Số lần dùng feature/tháng, số đơn hàng qua flow mới |

Kết hợp hai chiều này, mình có được một hình ảnh đủ đầy về tác động:

> **Breadth × Depth = Product Impact**

Ví dụ thực tế: Feature tìm kiếm được cải thiện.
- Breadth: 80% user có dùng search.
- Depth: Time-to-result giảm từ 4.2s xuống 1.8s / Số lần search per session tăng 1.3x.

Chỉ dùng một chiều sẽ miss góc nhìn quan trọng — breadth cao mà depth thấp có thể là feature được dùng nhưng không giải quyết vấn đề.

---

## Đo thế nào? Triển khai metrics ra sao

*[Phần này cần phát triển thêm — đây là nháp ý tưởng ban đầu]*

### Trước khi đo: Define North Star

Mọi metric đều cần anchor vào một North Star — điều duy nhất mà nếu nó tốt lên, business cũng tốt lên theo.

Việc chọn North Star Metric quan trọng hơn việc tracking 20 metric. Vì khi mọi người nhìn vào cùng một con số, decision-making đơn giản hơn rất nhiều.

### Triển khai: Input metrics vs Output metrics

Output metric là kết quả — doanh thu, conversion, churn. Chúng quan trọng nhưng là lagging indicator.

Input metric là những thứ **PM có thể tác động trực tiếp** — feature adoption, activation rate, time-to-value. Chúng là leading indicator: nếu input tốt, output sẽ theo sau.

> PM nên chịu trách nhiệm với input metrics. Leadership đánh giá PM qua output metrics. Nhưng chính sách thưởng/phạt nên đặt ở input.

### Pitfall phổ biến khi đo

1. **Vanity metrics**: Pageview tăng nhưng không ai mua hàng hơn. Session tăng nhưng có thể vì UX tệ nên user phải quay lại.

2. **Averaging che giấu vấn đề**: Thời gian tải trung bình 2s trông ổn — nhưng nếu p95 là 8s, có một nhóm user đang chịu trải nghiệm rất tệ.

3. **Đo xong không có owner**: Metric không có người theo dõi = không tồn tại. Mỗi metric cần một người chịu trách nhiệm hành động khi nó lệch.

---

## Kết lại

Đo đạc product không phải làm dashboard đẹp để báo cáo. Đo đạc product là xây hệ thống giúp team ra quyết định nhanh hơn, đúng hơn.

Hai nguyên tắc đơn giản:
- Đo **breadth**: bao nhiêu người bị ảnh hưởng.
- Đo **depth**: ảnh hưởng sâu đến đâu (time + count).

Và quan trọng hơn: chỉ đo những thứ team **sẽ hành động theo**. Metric không dẫn đến hành động là noise — và noise làm mọi người mất tin vào số liệu.

> Mục tiêu của metrics không phải là biết nhiều hơn. Mục tiêu là ra quyết định tốt hơn.