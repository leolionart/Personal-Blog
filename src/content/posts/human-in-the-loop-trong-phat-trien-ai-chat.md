---
author: leolion
description: AI model vốn dĩ đã xử lý rất tốt các bài toán CS và hậu mãi, nhưng triển
  khai thực tế đòi hỏi nhiều lớp vận hành và tuỳ chỉnh. Đây là mindset mình đặt ra
  trong chiến lược xây dựng sản phẩm AI
pubDate: 2026-03-12
tags:
- Product
- AI
- Operations
title: Từ demo AI Chatbot tới production sản phẩm là cả một chặng đường dài
type: post
---

Nếu chỉ ở demo, ai cũng có thể tin rằng AI sẽ “xử đẹp” mọi ticket chăm sóc khách hàng, chat sơ sơ mấy câu mà prompt để AI trả lời ngắn gọn, gọi RAG ra trả lời chuẩn chỉnh là việc không khó, triển khai đơn giản với tech stacks của n8n hay rất nhiều nền tảng làm AI Chatbot hiện tại đều làm được.

AI ngày nay đã được train rất tốt để:
- Phân loại yêu cầu,
- Tóm tắt hội thoại,
- Gợi ý hướng xử lý theo kịch bản sẵn có

Nhưng khi bước vào thực tế vận hành ví dụ của ngành vận tải du lịch — nơi có đổi lịch, huỷ chuyến, hoàn tiền, đối soát nhà xe, SLA theo khung giờ cao điểm, và nhiều ngoại lệ “không giống ai” — bài toán không còn là “AI trả lời hay đến đâu”. Ngoài ra chúng ta phải đối mặt với rất nhiều hành vi khách hàng như:
- Nhắn tin ngắt quảng, nói chuyện bằng sticker
- Chẳng có quy trình vận hành cố định nào mà đa số đều là "tuỳ trường hợp"
- Có những quy định không được ghi trên giấy nhưng phải thử mới biết vì còn tuỳ tâm trạng của đối tác nhất là mấy bài toán đổi thông tin vé

Bài toán thật sự là: **làm sao để AI trở thành một phần đáng tin cậy của hệ thống vận hành**. Nơi mà mọi câu trả lời của AI đưa ra đều cần có khả năng kiểm soát, theo dõi để cải tiến liên tục. Mình đã xem demo của nhiều đội sale sản phẩm ở Agentforce, Google Cloud Conversational AI, FPT AI Agents hay các open source Dify, Coze... đều chưa đáp ứng được góc nhìn của quản lý doanh nghiệp. Nơi mà việc bổ sung kiến thức cho agent, kiểm soát chất lượng từng topic là việc tối quan trọng, khi đào sâu vào thì các sản phẩm này đều chưa show được những báo cáo nào như vậy hoặc cho mình thấy được họ đã có features để giải quyết.

Vì vậy, ngay từ đầu mình chọn hướng xây nền tảng theo triết lý **Human in the Loop (HITL)**.

---

## AI không thiếu thông minh, vấn đề là làm thế nào để dạy AI hiểu được vận hành

Trong các bài toán CS và hậu mãi, mình thấy có một ngộ nhận phổ biến:

> Cứ có model tốt + prompt tốt là scale được. Làm một lần rồi để thế chạy được mãi thôi không cần đụng vào nữa

Rất nhiều sản phẩm hiện tại đang triển khai production ở mức độ này, khách hàng tìm đến mình với chia sẻ về việc họ từng dùng qua các sản phẩm này và cảm thấy bất lực thế nào. Có rất nhiều vấn đề mà ngay khi setup xong chat vài câu sẽ không thấy hết vấn đề được, thậm chí là dùng một bộ set test đầy đủ chưa chắc bạn đã giả lập hoàn toàn được hết các case.

Thực tế triển khai thì khác.

Một ticket của khách không chỉ cần “câu trả lời đúng”, mà cần đi qua nhiều lớp:
- đúng chính sách hiện tại,
- đúng ngữ cảnh đơn hàng/chuyến đi,
- đúng ràng buộc đối tác vận hành,
- đúng quyền hạn xử lý của từng vai trò,
- và có khả năng audit lại khi có khiếu nại.

Nói cách khác, AI giỏi ở tầng **suy luận ngôn ngữ**. Nhưng vận hành cần thêm tầng **quyết định có trách nhiệm**. Và hơn hết là khi bạn đặt một con người vào quy trình họ có đủ năng lực để tự tư duy trong quyền hạn cho phép để tìm kiếm thông tin và đưa ra quyết định, với AI cũng tương tự chỉ là AI nó không có nổi sợ bị phạt tiền và nó được thiết kế để luôn tin những gì nó làm là đúng. Đó mới là điều nguy hiểm.

Gần đây có xu hướng về việc đưa AgenticAI gắn vào vận hành (OpenClaw), cứ vứt hết các chính sách lên đâu đấy, gắn cho nó vài công cụ thêm bằng việc quăng cho nó API và credential rồi nó tự viết các tool cho nó sử dụng. Làm cách này ban đầu khá ổn, nhưng chỉ cần vài ngày thôi, lượng chat tăng lên tầm 1k/ngày là bạn nhức nhức cái đầu liền. Bạn không có đủ công cụ để optimize về token, kỹ thuật xử lý routing khi nhiều người chat... Lúc này lại bắt đầu thuê một đội vào gắn hết db này tới thư viện kia, rồi từ một bài toán đơn giản ban đầu giờ bạn kéo theo một khối lượng lớn vấn đề bảo trì. 

Vì vậy ngay từ 6 tháng trước là đội mình đã chọn kiến trúc sản phẩm sao cho con người và AI sẽ cùng làm việc với nhau một cách chặt chẽ. AI liên tục học hỏi từ con người để làm tốt hơn, được giao nhiều phần việc hơn. Như quá trình học tập và phát triển của một nhân sự thực thụ.

![1000](https://firebasestorage.googleapis.com/v0/b/xuan-mai-stationery-showcase.firebasestorage.app/o/pasterly%2Fimage_1773475230662_vrmnhm.png?alt=media&token=6c0005b7-b892-4e6d-b69f-e154cfb3b094)

---

## Vì sao ngành vận tải du lịch đặc biệt khó

So với nhiều domain khác, CS trong vận tải du lịch có 4 đặc điểm làm mọi thứ phức tạp hơn:

1. **Biến động theo thời gian thực**
   - Chuyến thay đổi theo phút.
   - Ghế, điểm đón/trả, giờ khởi hành có thể lệch liên tục.

2. **Mạng lưới đối tác dị biệt**
   - Mỗi nhà xe/đối tác có quy trình và chính sách riêng.
   - Cùng một tình huống, phương án xử lý không giống nhau.

3. **Rủi ro cảm xúc cao**
   - Khách đang “kẹt chuyến” hoặc “lỡ việc” thường ở trạng thái căng thẳng.
   - Một phản hồi sai tông có thể làm khiếu nại leo thang rất nhanh.

4. **Hậu mãi kéo dài nhiều bước**
   - Không dừng ở chat trả lời.
   - Còn hoàn tiền, bù voucher, đối soát, xác nhận lại với nhiều bên.

Để chạy được bạn cần tích hợp vào một hệ thống quản lý chuyến xe, giá tiền và ti tỉ các thứ khác, một hệ thống chuyên nghiệp để cung cấp thông tin này với độ chính xác cao, đủ thông tin, thời gian truy xuất đủ nhanh. Phần lớn thị trường sản phẩm AI họ sẽ kẹt lại ở vòng ngoài, chả bao giờ có đủ cơ hội để đi sâu vào vận hành cụ thể nơi bạn thực sự ngồi xuống và giải quyết từng vấn đề một. Để ở trong thị trường này các sản phẩm phục vụ vận hành họ đã dành thời hàng chục năm, đi qua bao nhiêu thời kỳ thay đổi quy định và vận hành để đạt độ chín về giải quyết nghiệp vụ. Điểm mạnh của một công ty tại thời điểm này không còn là những gì họ đã build, mà là những gì họ đã học được từ quá trình build đó. 

Và trên hết mình tin rằng: 

> Không có cái gì build ra rồi vận hành hàng chục năm không cần thay đổi. Nhu cầu thay đổi nó cần diễn ra liên tục và thấy được kết quả ngay để tiếp tục thay đổi hay nhân rộng nó. Vì vậy sản phẩm mình đang xây dựng cung cấp cho chủ nhà xe, chủ doanh nghiệp năng lực làm việc này dễ dàng và tin cậy.

Và với triết lý đó rất nhiều features, rất nhiều quy trình ở Vexere cần trợ giúp của một đội AI để tìm kiếm và áp dụng các giải pháp để nâng tầm cuộc chơi, bắt kịp xu hướng "ngôn ngữ giao tiếp máy tính mới", có rất nhiều quy trình trước đây giao tiếp với con người bằng form giờ đây đã được thay thế bằng hội thoại. Xu hướng này không mới (2020 đã có kiểu rule base), nhưng nhờ các công nghệ AI mới mà nó được nâng tầm lên rất nhiều. 

---

## Mình đang tìm kiếm một Tech Lead đồng hành với mình trên hành trình này
6 tháng ở Vexere giúp mình nhìn rõ cơ hội thị trường, tiếp xúc với nhiều bài toán vận hành thực tế ở thị trường Vietnam. Nơi mình nhìn thấy những cơ hội rất lớn trong kỷ nguyên vươn mình của Vietnam nơi mà vị trí địa lý, địa thế trải dài, cảnh đẹp, đang thu hút du lịch mạnh mẽ. Và Vexere đang thiếu những chiến binh công nghệ giúp đưa ra những giải pháp đón đầu thị trường. Chúng ta đang ở vị thế dẫn đầu trong lĩnh vực vận tải hành khách xe bus liên tỉnh, và mình tin với sự giúp đỡ của nền tảng AI sẽ giúp phá vỡ các rào cản về scale up cost để giúp Vexere và đối tác tiếp tục tiếp cận với nhiều phân khúc khách hàng mới, đặc biệt khách hàng nước ngoài nơi có tiêu chuẩn về chăm sóc khách hàng rất cao mà chỉ có thể khoả lấp bằng nền tảng công nghệ mạnh mẽ.

Các anh chị nào đang cảm thấy phù hợp với vị trí AI Engineer Lead thì inbox em hoặc liên hệ trực tiếp với nhân sự Vexere nhé.

https://careers.vexere.com/jobs/lead-ai-engineer-llm-nlp-hybrid-working/

Đặc biệt Vexere có văn hoá làm việc từ xa 100%, mọi quy trình và nhân sự đã quá quen với văn hoá này rồi nên thực sự mình không thấy khó khăn nào khi làm việc cả, đỡ rất nhiều thời gian và năng lượng để đi đến công ty mỗi ngày. Và hơn hết là văn hoá làm product luôn để đội ngũ đi rất sát với người dùng cuối, ưu tiên các thử nghiệm. Và phần lớn đội AI hiện tại cũng đang phát triển sản phẩm bằng vide coding, giúp tốc độ ship features tính bằng ngày chứ k tính bằng sprint nữa.