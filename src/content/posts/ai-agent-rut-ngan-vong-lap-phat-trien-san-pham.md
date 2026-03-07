---
author: leolion
description: Góc nhìn thực chiến về cách AI Agent rút ngắn vòng lặp phát triển sản
  phẩm, tăng tốc thử-sai và thay đổi vai trò của team product/dev.
pubDate: 2026-03-07
tags:
- Product
- Career
title: 'Làm Product trong kỷ nguyên AI Agent: từ feedback khách hàng đến production
  trong nửa ngày'
type: post
---

Mình là **Ái Trần** — **PO of AI & Automation tại VeXeRe**.

Mình có hơn 10 năm làm sản phẩm, đi từ UI/UX design sang product, từng làm phần mềm cho vận hành trong các lĩnh vực E-commerce, Logistics và Hospitality (phân khúc cao). Mình cũng đã tham gia các dự án AI từ 5–7 năm trước, trước cả làn sóng Generative AI bùng nổ, và đã production nhiều AI features trong môi trường thực tế.

Bài viết này không phải để nói về “AI sẽ thay thế ai”.
Mình muốn nói về một thứ thực tế hơn: **AI đang rút ngắn vòng lặp phát triển sản phẩm như thế nào**.

---

## Từ “ship theo sprint” sang “ship theo vòng lặp phản hồi”

Trong nhiều năm, vòng lặp quen thuộc của team product thường là:

- Nhận feedback khách hàng
- Tổng hợp & phân tích
- Viết spec
- Thiết kế
- Dev
- Test
- Deploy

Quy trình này không sai. Nhưng nó chậm, và trong nhiều thị trường, chậm là thua.

Điều đang thay đổi rất nhanh là:
một feedback đơn giản từ khách hàng, nếu setup workflow đúng, giờ có thể đi vào production trong **nửa ngày hoặc ít hơn**.

---

## “Làm product bây giờ giống như vibe coding với một AI Agent team”

Mình thường nói vui với team:

> Tính ra đó giờ làm product là đang đi vide code với một team coding thôi nhỉ, giờ khác là team scale nhanh quá nên a phải đưa ra yêu cầu nhiều hơn thôi 

Khác biệt nằm ở prompt và process.

Nếu bạn thiết kế quy trình đủ chặt:
- input rõ, có quy trình debug & analysis rõ
- tiêu chí chấp nhận rõ,
- rule test rõ,
- rule triển khai rõ,

thì chỉ với một prompt ngắn, hệ thống vẫn có thể generate ra output đủ tốt để đi tiếp.

Điều này không còn là ý tưởng xa vời.
Nó đang diễn ra trên thị trường từ cuối năm ngoái đến giờ: nhiều sản phẩm đã setup để support ticket đi thẳng vào pipeline phân tích và lập kế hoạch; đội ngũ chỉ cần approve là bắt đầu code, tự test, tự deploy.

Một ví dụ dễ thấy là hệ sinh thái công cụ từ Anthropic, đặc biệt là **Claude Code** khi mà team này coding 100% bằng AI, họ chỉ review plan of code thôi.

---

## Workflow thực tế bọn mình đang triển khai

Mình chia sẻ thẳng: đây là workflow bọn mình đang chạy thật, không phải demo.

1. **Ticket từ khách hàng đi vào hệ thống**
2. **AI hỗ trợ phân tích bối cảnh và đề xuất hướng xử lý** -> PO duyệt và truyền đạt lại cho stakeholder
3. **Sinh plan + task kỹ thuật**
4. **AI Agent triển khai code**
5. **AI hỗ trợ test và kiểm tra lại**
6. **Team review/approve các checkpoint quan trọng**
7. **Đẩy lên production**

Nghe thì rất “automation”, nhưng thực tế vẫn cần con người ở những điểm quyết định:
- chọn trade-off,
- chấp nhận mức rủi ro,
- và chịu trách nhiệm cuối cùng cho chất lượng sản phẩm.

---

## Sự thật: bottleneck hiện tại chính là mình

Phần này mình muốn nói thật, vì nhiều team cũng sẽ gặp y chang.

Dù vòng lặp mới nhanh hơn rất nhiều, **bottleneck hiện tại vẫn là con người**, và ở team mình thì thường là mình.
Tốc độ tạo output của AI tăng quá nhanh, trong khi năng lực ra quyết định của PM/PO chưa chắc tăng tương ứng.

Kết quả là lead time có cải thiện, nhưng chưa bứt phá như kỳ vọng.

Đây cũng là lý do mình tin rằng “kỹ năng product” trong kỷ nguyên AI sẽ dịch chuyển mạnh:
- từ viết spec dài sang thiết kế các skill (SOP) để kiểm soát các bước,
- từ theo dõi task sang điều phối vòng lặp, can thiệp vào đúng lúc
- từ kiểm soát chi tiết sang kiểm soát chất lượng cuối cùng sau khi đến tay người dùng cuối.

---

## Vai trò mới của team dev

Một thay đổi rất rõ ở team mình:
dev hiện tại **viết tay ít hơn trước**, nhưng chất lượng thảo luận kỹ thuật lại quan trọng hơn trước.

Các bạn dành nhiều thời gian:
- ngồi cùng PO để làm rõ bài toán,
- review hướng đi trong lúc agent đang code,
- tập trung vào chuẩn kỹ thuật và tiêu chí production.

Và bọn mình cũng thực dụng hơn trong flow:
- nhiều case đi thẳng từ yêu cầu → build → test trên sản phẩm thật,
- thay vì luôn phải đi qua một vòng Figma đầy đủ như trước.

Không phải vì design không quan trọng, mà vì ở một số bài toán, **feedback từ sản phẩm chạy thật có giá trị hơn mockup**.

---

## Agentic AI không còn là buzzword

Trong buổi chia sẻ tới, mình sẽ hỏi mọi người vài câu mở đầu:

- Bạn nào đã nghe về **Agentic AI**?
- Bạn nào đã thử **OpenClaw**?
- Bạn nào biết **Manus**?
- Bạn nào đã dùng các AI browser có thể tự điều khiển trình duyệt?

Mục tiêu không phải để kể tên tool.
Mục tiêu là để cùng nhìn ra một thực tế: **cách chúng ta xây sản phẩm đang đổi rất nhanh**, và người làm product cần nâng cấp cách làm việc ngay bây giờ.

---

## Hẹn bạn ở workshop online

Bài này là bản mở đầu.
Trong workshop online, mình sẽ chia sẻ đầy đủ hơn:

- Cách thiết kế workflow AI-first cho team product/dev
- Cách đặt checkpoint để nhanh mà không vỡ chất lượng
- Cách đo lead time mới theo vòng lặp AI
- Những sai lầm thực tế tụi mình đã gặp và cách sửa

Nếu bạn đang làm product, engineering, hoặc vận hành và cảm thấy tốc độ hiện tại chưa theo kịp thị trường, mình tin buổi này sẽ hữu ích.

**Hẹn gặp bạn trong workshop.**