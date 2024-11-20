---
title: Chia sẻ kinh nghiệm làm user interview của product manager
description: There's probably another theme like this one right? There just has to be! There's only one in the entire internet? I'm a tad skeptical about that.
pubDate: 2023-02-20
author: leolion
tags:
  - user-research
type: announcement
---
Bài viết dưới đây mình dựa trên kinh nghiệm của những buổi usability testing hay user interview mình đã thực hiện ở Tiki. Có nhiều phần mình sưu tầm lại từ các bài viết khác mà mình sẽ dẫn link trực tiếp trong bài viết.

![](https://i.imgur.com/BZvzaE1.jpeg)


Minh họa từ [https://uxknowledgebase.com/@krisztina.szerovaybạn](https://uxknowledgebase.com/@krisztina.szerovayb%E1%BA%A1n) này có nhiều bài viết cực hay và chuyên sâu, diễn tả bằng mindmap khá hay

Để dễ hình dung thực tế quá trình này bắt đầu như thế nào. Hãy bắt đầu với một case study.

# Phân tính về case thiết kế ứng dụng note.

- Nghĩ xem bạn sẽ hỏi ai. Người dùng của tôi là ai và tìm họ ở đâu. Tìm 5 đối tượng ở các nhóm đối tượng khác nhau. Trường hợp này chúng ta thử phỏng vấn nhóm sinh viên đầu tiên, sau đấy đến quản lý IT của trường học, Giáo viên…
- Ghi nhớ điều cốt lõi khi phỏng vấn người dùng ở giai đoạn này không phải là User flows, Tối ưu visual hoặc những thứ quá cụ thể kiểu như thế. Điều đó có thể gây phân tâm vì người dùng tưởng họ biết họ biết họ muốn gì. Điều bạn muốn là “hiệu ứng xe không ngựa kéo”.
- Tránh hỏi về tính năng. Bạn nói chuyện và hỏi về nhiều người bạn sẽ nhận ra vấn đề thực sự của họ và xác định nó có tiềm năng hay không. Đôi khi phỏng vấn một vài người chúng ta không tìm thấy vấn đề hoặc ít nhất là một vấn đề đủ lớn đáng để làm một sản phẩm mới cho nó.
- Thông thường sau khi phỏng vấn một vài user bạn sẽ đúc kết ra được những câu dạng. “Lý do cô ấy dùng Evernote là vì nó mang cảm giác tờ note, thiên về suy nghĩ và chi tiết. Còn Google Docs là kiểu văn bản chứ không phải kiểu ghi chú nhỏ => Nên làm một tính năng kiểu di động và không cồng cềnh như văn bản thật”.
- Bạn đã có một ý tưởng dựa trên ý kiến người dùng. Sẽ thế nào nếu chúng ta có Google Docs với những tính năng làm việc nhóm và có thể viết thêm những ghi chú nhỏ và được thiết kế nhiều hơn cho mặt ghi chú.
- Câu hỏi đặt ra: Bạn đã có ý tưởng rồi, có thể đưa ra giải pháp hợp lý nhưng đã đủ chưa? Đã đủ thuyết phục người dùng chuyển đổi để sử dụng chưa. Có 2 cách để xác định:
- Bạn có thể phỏng vấn với sơ đồ, vẽ wireframe và làm low prototype và mang nó đi gặp mọi ngườiCó một điều bạn không nên làm là hỏi họ tính năng đó có tốt hay không. Nếu muốn biết họ nghĩ gì, thì đừng áp đặt một thứ khác vào đầu họ. Hãy nói về những chuyện phiếm, về cuộc sống của họ. Vì bạn càng hiểu hơn về một người nào đó, bạn sẽ hiểu được bối cảnh mà họ đang sống, giúp bạn hiểu tại sao họ muốn điều họ muốn. Hãy đóng vai là người không làm sản phẩm để đưa ra ý kiến phê bình và làm cho người được test thấy thoải mái hơn. Bắt đầu ý kiến bằng cấu trúc “Yes, and…” để nhắc nhở bản thân phải nói theo kiểu đóng góp. _“Tôi cảm thấy điều quan trọng là…”“Đây là suy nghĩ của tôi về vấn đề này…”“Tôi không đồng ý về việc này bởi vì…”“Điều thực sự quan trọng đối với tôi là…”_
- Làm MVP thật nhanh và tung ra xem thế nào. Bạn sẽ mất 3 tháng để thực sự làm được một cái đáng để dùng. Đừng xây cả một bản Google Docs dành cho việc ghi chú. Hãy tìm cách viết phần mở rộng cho trình duyệt. Dành riêng một tính năng nhỏ xíu đó thôi và đánh giá xem nó có hữu ích cho người dùng không. Nếu bạn không thể thực sự đưa nó ra trước mặt người dùng sẽ rất khó để đánh giá kết quả. Khi bạn khiến người dùng trả tiền, tôi đảm bảo là họ sẽ sử dụng tính năng đó. Nếu chỉ vì $5 mà không thể trả thì họ cũng chẳng háo hức gì lắm.
- Khi phỏng vấn user của sản phẩm đối thủ, bạn sẽ nhận được hàng tá kết quả về những khó khăn khi sử dụng sản phẩm hay yêu cầu những tính năng mới. Nếu bạn nghĩ rằng những điều đó đã nêu lên vấn đề, bạn sẽ sai lầm. Vì thực ra nếu họ đã sử dụng dịch vù và sẵn sàng bỏ qua những vấn đề này, có nghĩa đây không phải là vấn đề lớn nhất. Điều này dẫn tới một điều tối quan trọng là bạn phải so sánh các nhóm đối tượng và so sánh mức độ mà họ tranh luận.
- Phỏng vấn những người “không phải người dùng” — Nhóm chưa bao giờ sử dụng ứng dụng note. Những điều nhóm này nói mới là quan trọng nhất, đó là thứ chặn đứng sự mở rộng của bạn. Nếu bạn chỉ nói chuyện với người sử dụng dịch vụ của bạn hoặc của đối thủ bạn sẽ không bao giờ tìm được những thứ giúp bạn mở rộng thị trường.
- Trở lại với người đã phỏng vấn để đánh giá về mức độ thành công của tính năng bạn đã phát triển. Họ chưa từng nói với ai rằng họ cần sản phẩm đó có tính năng X, và vài tháng sau đó sản phẩm của bạn thực sự có tính năng X hoặc ít nhất giải quyết vấn đề của họ. Vậy nên những người đầu tiên chuyển sang dùng nền tảng của chúng ta là những người chúng ta đã phỏng vấn.
- Không nên tốn quá nhiều thời gian xem dữ liệu thống kê từ những Analytics tools. Nó sẽ không cho bạn biết bạn sẽ cần đi đâu hay nói cho bạn biết vấn đề lớn bạn cần giải quyết là gì.

# Các bước phỏng vấn

![](https://i.imgur.com/3NTvTEM.png)

[https://uxlagi.com/#!#15](https://uxlagi.com/#!#15)

### Bước 1. Xin chào

Cười, mời nước, và làm người đối diện thoải mái. Người dùng càng thoải mái thì sẽ càng chia sẻ nhiều hơn.

### Bước 2. Giới thiệu

> What participants need to know before they begin? Dẫn dắt câu chuyện tình huống, giúp user tưởng tượng mình trong một trường hợp nhất định (Tell users what their frame of mind should be).Examples:

- Imagine that you want to buy a gift for a friend.
- You need to buy a Wi-Fi printer for your company.
- You’re in the market to buy a Bluetooth headset.
- You took photos at a party and you want to share them with your friends.
- You need to buy a fingerprint scanner for your company.
- You’re the owner of a coffee shop and you need a website.
- You just received an email from your manager telling you to check out this site.

Đây là 5 phút rất quan trọng để nêu rõ mình cần gì từ người dùng và người dùng có thể mong chờ gì từ mình. Giải thích cam kết bảo mật, quà thưởng, mục đích, quyền từ chối và ngừng bất cứ lúc nào.

### Bước 3. Khám phá

Không ai giống ai cả. Bạn hãy dùng những câu hỏi gợi mở, ví dụ “Bạn thường làm gì khi chuẩn bị đi chơi xa?”. Những câu hỏi này giúp bạn hiểu họ là ai và họ hay làm gì. Ngược lại, những câu hỏi đóng như “Khi chuẩn bị đi chơi xa, bạn có mua đồ ăn đem theo không?” sẽ khiến người dùng tập trung câu trả lời vào việc mua đồ ăn.

Dưới đây là danh sách tất cả các câu hỏi mẫu mà bạn có thể lấy ra vài câu để hỏi:

### Bước 4. Dùng thử

Đây là bước bạn quan sát người dùng sử dụng sản phẩm hoặc dùng thử bản nháp giấy, nháp sơ cấp, nháp cao cấp. Sẽ hiệu quả nhất nếu bạn khuyến khích được người dùng tưởng tượng và nói ra những gì họ đang nghĩ.

### Bước 5: Tổng kết

Tóm tắt lại những gì hai bạn đã nói. Hãy hỏi “Có gì bạn muốn chia sẻ mà chưa được hỏi không?” để người dùng nói hết những gì muốn nói.

### Bước 6: Tạm biệt

Đừng là người bất lịch sự, ở nhà bạn không đột ngột đuổi khách về đúng không? Hãy dọn dần sách vở từ trước để người dùng biết cuộc phỏng vấn chuẩn bị kết thúc. Nhớ cám ơn họ đã dành thời gian cho bạn.

# Những câu nên và không nên hỏi khi thực hiện user interview?

- Đừng đưa sản phẩm ra cho họ xem, vì chẳng khác gì nói về một tính năng
- Đừng hỏi về định hướng tính năng thử nghiệm. Kiểu như bạn nghĩ ra tính năng theo dõi trả phí, thế là bạn đi hỏi “Bạn có sẵn sàng trả phí để theo dõi”
- Đừng hỏi những người dễ hỏi, dễ gặp, bạn sẽ không có thông tin tốt nhất. Hãy đào bới trong các groups, forum về lĩnh vực bạn quan tâm.
- Hỏi thừa nhận: Đừng thừa nhận về người dùng.
- Hỏi dẫn dắc: Đừng áp đặt suy nghĩ bản thân khi hỏi.
- Hỏi kép: Đừng hỏi nhiều câu một lúc.
- Hỏi loạn: Đừng làm người dùng bị rối.

Sau khi phỏng vấn xong rồi, làm sao để thuyết phục mọi người trong team làm một tính năng nào đó. Đây là trường hợp mình thường xuyên gặp phải.Mình thường có thói quen ghi âm lại các buổi phỏng vấn hoặc trao đổi chuyên môn.

1. Nó giúp bạn không phải ghi chú. Ghi chú tạo cảm giác khá khó chịu, cảm giác như không thực sự tham gia cuộc trò chuyện
2. Bạn có thể phát lại cho mọi người nghe.

Luôn là phỏng vấn qua gặp mặt trực tiếp hoặc qua video chat. Nên tránh sử dụng email vì không có tính tương tác cao. Điều thú vị là trong những buổi phỏng vấn bạn có thể làm cho họ nói nhiều bằng những câu “Ồ hay đó, bạn nói rõ hơn đi”. Bạn nên bật chế độ do thám kiểu “Ồ hay quá!”. Bạn sẽ lấy được kha khá thông tin hữu ích về người dùng. Làm cho họ thoải mái chia sẻ.

Có nên lấy phản hồi từ các công cụ feedback trên trang? Đương nhiên đây là một điều siêu quan trọng, nó có thể giúp bạn phát hiện nhiều bugs trước khi tung ra sản phẩm. Nó không cho bạn biết bạn cần làm gì nhưng nó cho bạn biết về những điều chưa tốt về thứ bạn đã làm. Khi nguồn lực hạn chế thì sẽ phải tập trung vào phỏng vấn nhóm người đang sử dụng sản phẩm của đối thủ, vì chúng ta biết rằng họ đã có hứng thú với hành vi mà chúng ta cần. Và việc của chúng ta chỉ là thuyết phục họ chuyển đổi. Túc là dễ hơn nhiều so với việc tạo ra một hành vi mới chưa có sẵn à chúng ta phải làm thế nào để chiến thắng thật nhanh. Đối tượng mà bạn quan tâm có thể chuyển dịch theo thời gian, những người quan trọng nhất khi bạn làm sản phẩm trong khoảng 6 tháng đầu tiên không phải là những người sử dụng nó 3 năm sau đó. Điều này khiến bạn phải nói chuyện thường xuyên, nếu không sẽ dễ khiến những tính năng tiếp theo của bạn không tốt như lúc đầu nữa.