---
author: leolion
description: PM không cần biết thiết kế, nhưng cần biết đánh giá thiết kế. Bài này
  về framework thực tế để đánh giá UI, thiết kế cho dễ thay đổi, xử lý màn hình không
  có design — và giải quyết conflict khi mọi thứ va nhau.
pubDate: 2022-08-10
tags:
- Product
- Design
title: Đánh giá UI tốt hay xấu — PM cần biết gì?
type: post
---

## Mở đầu

Có một khoảnh khắc tôi nhớ mãi trong buổi review design đầu tiên: designer trình bày xong, cả phòng im lặng, rồi sếp nhìn về phía tôi — "PM thấy thế nào?"

Và tôi không biết nói gì.

Không phải vì thiết kế tệ. Không phải vì tôi không có ý kiến. Mà vì tôi không có **framework để đánh giá**. Tôi chỉ có cảm giác — và cảm giác không đủ để đưa ra quyết định sản phẩm.

Bài này là những gì tôi học được sau đó: cách đánh giá UI không phải bằng gu thẩm mỹ cá nhân, mà bằng tiêu chí có thể lý giải được với cả team.

---

## Một UI tốt cần đáp ứng gì?

Trước khi có framework riêng, tôi học từ những tài liệu này:

**Jakob Nielsen's 10 Usability Heuristics** — 10 nguyên tắc đánh giá khả năng sử dụng của interface. Không phải rule tuyệt đối, nhưng là checklist tốt để phát hiện vấn đề. Đặc biệt hữu ích: *Visibility of system status*, *Match between system and the real world*, *Error prevention*.

**Don Norman — The Design of Everyday Things** — Cuốn sách cũ nhưng cực kỳ gốc rễ. Hai khái niệm tôi dùng nhiều nhất: *affordance* (vật thể cho thấy cách dùng nó) và *feedback* (hệ thống phản hồi sau khi bạn thao tác).

**Refactoring UI (Adam Wathan & Steve Schoger)** — Thực chiến nhất trong ba nguồn này. Không phải lý thuyết — là những quyết định cụ thể: spacing, typography, visual hierarchy, color usage. Rất phù hợp khi bạn cần nói chuyện với developer về UI mà không có designer trong phòng.

Nhưng đọc xong ba nguồn đó, tôi rút ra một framework đơn giản hơn để dùng hằng ngày:

### Tứ giác đánh giá UI

| Tiêu chí | Câu hỏi cần trả lời |
|---|---|
| **Rõ ràng** | User biết mình đang ở đâu, cần làm gì tiếp theo không? |
| **Nhất quán** | Cùng một loại element có cư xử giống nhau ở mọi nơi không? |
| **Phản hồi** | Sau mỗi thao tác, user có nhận được tín hiệu gì không? |
| **Lỗi** | UI có giúp user tránh sai, và recover dễ không khi lỡ sai? |

Bốn câu hỏi này không cover tất cả, nhưng đủ để phát hiện 80% vấn đề trong một buổi review bình thường.

---

## Thiết kế để dễ thay đổi — không phải để đẹp một lần

Một UI nhìn đẹp trong Figma không có nghĩa là nó dễ maintain trong code. Và một UI build nhanh không có nghĩa là nó dễ thay đổi sau này.

Đây là điểm mà PM cần có ý kiến, vì PM là người phải sống với hậu quả khi cần change.

### Component thinking

UI tốt được xây từ những component tái sử dụng được, không phải từ những màn hình one-off.

Ví dụ thực tế: nếu button "Submit" ở màn hình checkout khác về màu sắc, kích thước, và vị trí so với button "Confirm" ở màn hình review — thì khi bạn cần đổi brand color, bạn phải sửa ở hai chỗ riêng biệt. Nhân lên 50 màn hình, thành 50 chỗ phải sửa, và 50 chỗ có thể miss.

Component thinking không phải chuyện của designer hay developer đơn thuần — nó là quyết định kiến trúc ảnh hưởng trực tiếp đến tốc độ thay đổi sau này.

Câu hỏi PM nên hỏi khi review design: **"Cái này có reuse component hiện có không, hay lại tạo mới?"**

### Design token và "nguồn sự thật duy nhất"

Design token là tên gọi của các giá trị được dùng nhất quán xuyên suốt UI: màu sắc, font size, spacing, border radius...

Khi design dùng token thay vì hardcode giá trị cụ thể — `color-primary` thay vì `#2563EB` — thì khi brand thay đổi, bạn chỉ cần đổi ở một chỗ và mọi nơi đều cập nhật.

Không phải mọi team đều có design system đầy đủ. Nhưng ngay cả team nhỏ cũng cần **một file/document** làm nguồn sự thật cho màu, font, spacing. Không có nó, mỗi người tự diễn giải — và UI dần trở nên không nhất quán mà không ai rõ tại sao.

### Thiết kế cho trạng thái — không chỉ happy path

Một màn hình thường có nhiều trạng thái hơn bạn thấy trong mockup: empty state (chưa có data), loading state, error state, partial data state...

Design chỉ có happy path là design chưa xong. Nhưng cái này thường bị bỏ qua vì:

1. Designer quên hoặc không có thời gian
2. PM không hỏi
3. Developer tự xử lý theo cách họ thấy hợp lý

Và kết quả là UI production có những góc kỳ lạ mà không ai có ý định thiết kế như vậy.

Câu hỏi PM nên hỏi: **"Nếu không có data thì màn hình này trông như thế nào? Nếu API lỗi thì sao?"**

---

## Không có design — developer sẽ làm gì?

Trong thực tế, không phải màn hình nào cũng có design đầy đủ trước khi dev bắt tay vào làm. Deadline có, designer không đủ thời gian, PM cũng bận — và developer phải tự quyết định.

Đây không hẳn là vấn đề nếu team có nền tảng tốt. Nhưng nếu không, developer sẽ làm theo một trong ba hướng:

**Hướng 1: Copy pattern hiện có.** Developer tìm màn hình gần giống nhất trong app và copy structure. Đây là hướng an toàn nhất — nhưng chỉ an toàn nếu pattern hiện có thực sự tốt. Nếu không, tech debt được nhân bản.

**Hướng 2: Tự quyết định.** Developer dùng judgment của mình — thường ưu tiên functional hơn aesthetic. Không sai, nhưng có thể tạo ra những quyết định UI mà sau này PM hoặc designer không biết tại sao lại như vậy, và khó thay đổi vì "nó đang hoạt động ổn".

**Hướng 3: Hỏi lại PM.** Lý tưởng nhất, nhưng cũng là hướng ít xảy ra nhất — vì developer thường không muốn làm chậm sprint của mình.

PM cần biết điều này không phải để kiểm soát, mà để **tạo ra điều kiện cho hướng 3 xảy ra tự nhiên hơn**:

- Có một style guide tối thiểu — kể cả chỉ là một page Notion với màu, font, spacing cơ bản
- Trong sprint planning, nếu một màn hình chưa có design, đánh dấu rõ để team biết cần phối hợp
- Tạo thói quen "design review ngắn" trước khi dev bắt đầu — 15 phút để align về UI expectation, tránh làm xong rồi mới phát hiện sai

---

## Conflict giữa các yếu tố — và luôn luôn có conflict

Đây là phần thực tế nhất, và cũng là phần ít sách nào nói đến.

Trong một quyết định UI bình thường, bạn sẽ có xung đột kiểu:

- **Đẹp vs. rõ ràng**: Designer muốn màn hình minimal, ít text. PM muốn user hiểu được họ đang ở bước nào. Cắt text thì đẹp hơn, nhưng user không biết làm gì tiếp.
- **Nhất quán vs. context-specific**: Dùng lại component hiện có thì nhanh và nhất quán. Nhưng use case này hơi khác — nên dùng lại hay tạo mới? Tạo mới thì tốt hơn cho user nhưng tạo thêm nợ kỹ thuật.
- **Hoàn chỉnh vs. tốc độ**: Ship với happy path trước để kịp deadline, rồi làm empty state và error state sau. Nghe hợp lý — nhưng "sau" trong product thường nghĩa là không bao giờ.
- **Dev-friendly vs. design intent**: Designer muốn animation X. Developer nói animation đó tốn performance. Ai thắng?

Không có công thức chung cho mọi conflict. Nhưng có một số nguyên tắc tôi dùng để navigate:

### Nguyên tắc 1: Ưu tiên theo user impact, không theo cảm giác

Khi conflict, hỏi: **cái nào ảnh hưởng đến user nhiều hơn?** Không phải cái nào đẹp hơn, không phải cái nào dễ làm hơn — cái nào ảnh hưởng đến user nhiều hơn.

Nếu không có data, hãy ước tính. "Bao nhiêu % user sẽ gặp màn hình empty state này?" Nếu câu trả lời là 60% user mới, thì empty state quan trọng hơn bạn nghĩ và không nên để sau.

### Nguyên tắc 2: Phân biệt "không thể thay đổi sau" và "khó thay đổi sau"

Một số quyết định UI gần như không thể thay đổi sau khi đã ship — ví dụ cấu trúc navigation, URL structure, tên của các khái niệm hiển thị với user. Những thứ này cần được quyết định cẩn thận hơn.

Một số thứ khác khó nhưng vẫn thay đổi được — màu sắc, spacing, copy. Những thứ này có thể trade đổi lấy tốc độ ship.

### Nguyên tắc 3: Document quyết định, không chỉ kết quả

Khi conflict được resolve, ghi lại tại sao quyết định đó được đưa ra. Không cần dài — một câu trong ticket Jira là đủ: "Dùng pattern A thay vì B vì B cần thêm 2 ngày dev và deadline T+3."

Không có document này, sau 3 tháng không ai nhớ tại sao UI lại như vậy, và conflict tương tự lại xảy ra từ đầu.

### Nguyên tắc 4: Không resolve conflict trong kênh text

Conflict về UI rất khó resolve qua comment thread hay Slack. Có quá nhiều thứ cần show — screenshot, prototype, annotation. Kéo đúng người vào một cuộc call 20 phút thường ra quyết định nhanh hơn 2 ngày đi lại comment.

---

## Kết lại

Làm product không có nghĩa là phải biết thiết kế. Nhưng có nghĩa là phải biết **đặt câu hỏi đúng về thiết kế** — và biết khi nào cần dừng lại để align, khi nào có thể để team tự quyết.

Bốn câu hỏi cơ bản khi review UI: rõ ràng chưa, nhất quán chưa, có phản hồi không, lỗi thì sao.

Hai câu hỏi khi review design process: component có reuse không, các trạng thái đặc biệt đã có design chưa.

Một câu hỏi khi không có design: team dev đang plan làm gì, và mình có cần align không.

Và khi conflict xảy ra — vì sẽ xảy ra — ưu tiên theo user impact, phân biệt reversible và irreversible, và document lại tại sao.

> UI không bao giờ xong. Nhưng có thể xây nó theo cách mà "chưa xong" không phải là lý do để không ship.