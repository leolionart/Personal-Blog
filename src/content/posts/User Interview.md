---
title: Chia sẻ kinh nghiệm làm user interview của product manager
description: Kinh nghiệm thực tế từ Tiki về cách thực hiện user interview hiệu quả
pubDate: 2023-02-20
author: leolion
tags:
  - user-research
type: announcement
---

## 📌 Giới thiệu

Bài viết dưới đây dựa trên **kinh nghiệm thực tế** từ những buổi:
- 🔍 **Usability testing**
- 👥 **User interview**

được thực hiện tại **Tiki**.

> Có nhiều phần mình sưu tầm lại từ các bài viết khác mà mình sẽ dẫn link trực tiếp trong bài.

![](https://i.imgur.com/BZvzaE1.jpeg)

_Minh họa từ [uxknowledgebase.com](https://uxknowledgebase.com/@krisztina.szerovayb%E1%BA%A1n) - có nhiều bài viết cực hay và chuyên sâu, được diễn tả bằng mindmap_

---

## 📋 Mục lục

1. [Case Study: Thiết kế ứng dụng note](#-case-study)
2. [Các bước phỏng vấn](#-các-bước-phỏng-vấn)
3. [Câu hỏi nên và không nên hỏi](#-câu-hỏi-nên-và-không-nên-hỏi)
4. [Tips ghi lại phỏng vấn](#-tips-ghi-lại-phỏng-vấn)

---

## 🎯 Case Study: Thiết kế ứng dụng Note 

### 📍 Bước 1: Xác định đối tượng phỏng vấn

**Câu hỏi**:
- Bạn sẽ hỏi ai?
- Người dùng của tôi là ai?
- Tìm họ ở đâu?

**Cách làm**:
- Tìm **5 đối tượng** ở các nhóm khác nhau
- Ví dụ cho ứng dụng note:
  - 👨‍🎓 Sinh viên
  - 💼 Quản lý IT của trường học
  - 👨‍🏫 Giáo viên
  - ... và những nhóm khác

---

### 📍 Bước 2: Tránh những cái bẫy

❌ **KHÔNG nên làm**:
- Hỏi về User Flow, tối ưu visual, những chi tiết quá cụ thể
- Điều này gây **phân tâm** vì người dùng sẽ nghĩ họ biết họ muốn gì

✅ **NÊN làm**:
- Tìm **vấn đề thực sự** của họ
- Xác định nó có **tiềm năng** hay không
- Ghi nhớ: Đôi khi phỏng vấn vài người bạn không tìm thấy vấn đề đủ lớn

---

### 📍 Bước 3: Nhận ra vấn đề từ cuộc phỏng vấn

Sau khi phỏng vấn vài user, bạn sẽ đúc kết được **insight pattern** như:

> "Lý do cô ấy dùng Evernote là vì nó mang cảm giác tờ note, thiên về suy nghĩ và chi tiết. Còn Google Docs kiểu như văn bản, không phải ghi chú nhỏ gọn"

**Kết luận**: Cần làm tính năng **di động, gọn nhẹ** giống tờ note, không cồng cềnh như văn bản.

---

### 📍 Bước 4: Phát triển ý tưởng

**Giả thuyết mới**:
> "Nếu chúng ta có Google Docs + tính năng làm việc nhóm + khả năng ghi chú nhỏ, được thiết kế nhiều hơn cho ghi chú → thì sẽ hút người dùng"

---

### 📍 Bước 5: Xác thực ý tưởng

**Câu hỏi quan trọng**:
- ✅ Bạn đã có ý tưởng
- ✅ Có giải pháp hợp lý
- ❓ Nhưng **đã đủ chưa**? Đủ để thuyết phục user chuyển đổi?

**2 cách xác thực**:

#### Cách 1️⃣: Phỏng vấn với prototype
- Vẽ wireframe → làm low prototype
- Mang đi gặp user

**⚠️ Tuyệt đối KHÔNG hỏi**: "Tính năng này có tốt không?"

✅ **Thay vào đó**:
- Nói về chuyện phiếm, cuộc sống của họ
- Càng hiểu họ sâu → hiểu **bối cảnh** họ đang sống
- Hiểu **tại sao** họ muốn những gì họ muốn

**Tips**:
- Đóng vai là người **không làm sản phẩm** để feedback phê bình
- Dùng cấu trúc **"Yes, and…"** để nói theo kiểu đóng góp
- Ví dụ cách nói:
  - _"Tôi cảm thấy điều quan trọng là…"_
  - _"Đây là suy nghĩ của tôi về vấn đề này…"_
  - _"Tôi không đồng ý về việc này bởi vì…"_
  - _"Điều thực sự quan trọng đối với tôi là…"_

#### Cách 2️⃣: Làm MVP nhanh
- Tung **MVP thực sự** ra thị trường
- Dùng thử → đánh giá

**Lý do**:
- Bạn sẽ **mất 3 tháng** làm cả bộ Google Docs
- Thay vào đó, làm **một tính năng nhỏ xíu** (ví dụ: browser extension)
- **Đánh giá**: Nó có hữu ích cho user không?

**⚠️ Chìa khóa**: Nếu không thực thi ra → **rất khó đánh giá kết quả**

**💡 Sự thật**: Khi user phải trả tiền → họ sẽ thực sự dùng. Nếu chỉ vì $5 mà không trả → họ cũng chẳng háo hức lắm.

---

### 📍 Bước 6: Phỏng vấn user của đối thủ

**Nhận xét**:
- Bạn sẽ nhận được **hàng tá kết quả** về những khó khăn, yêu cầu tính năng mới
- ❌ NHƯNG **KHÔNG nên** coi đó là vấn đề lớn

**Lý do**: Nếu họ đã dùng dịch vụ đối thủ và sẵn sàng bỏ qua những vấn đề này → **đó không phải vấn đề lớn nhất**

**Kết luận**: Phải **so sánh mức độ tranh luận** giữa các nhóm đối tượng khác nhau

---

### 📍 Bước 7: Phỏng vấn những người "không phải user"

**Nhóm này**: Người chưa bao giờ dùng ứng dụng note

**Tại sao quan trọng**:
- Những điều từ nhóm này **mới là quan trọng nhất**
- Đó là **rào cản** chặn đứng sự mở rộng của bạn
- Nếu chỉ nói chuyện với user hiện tại → **không tìm được cách mở rộng thị trường**

---

## 🎤 Các bước phỏng vấn 

![](https://i.imgur.com/3NTvTEM.png)

_Tham khảo: [uxlagi.com](https://uxlagi.com/#!#15)_

### **Bước 1. Xin chào** 👋

- 😊 Cười nồn nả
- 🥤 Mời nước
- 💬 **Làm người đối diện thoải mái**

> **Càng thoải mái** → họ chia sẻ càng nhiều

---

### **Bước 2. Giới thiệu** 📝

> _"What participants need to know before they begin?"_

**Dẫn dắt bối cảnh**:
- Dùng situation scenario để giúp user **tưởng tượng** mình trong trường hợp nào đó
- Giúp họ có **mindset phù hợp**

**Ví dụ**:
- "Imagine that you want to buy a gift for a friend."
- "You need to buy a Wi-Fi printer for your company."
- "You're in the market to buy a Bluetooth headset."
- "You took photos at a party and you want to share them with your friends."
- "You need to buy a fingerprint scanner for your company."
- "You're the owner of a coffee shop and you need a website."
- "You just received an email from your manager telling you to check out this site."

**Điểm quan trọng**:
- Nêu rõ mình cần gì từ user
- User có thể mong chờ gì từ bạn
- Giải thích cam kết bảo mật, quà thưởng, mục đích, quyền từ chối, và khả năng ngừng bất cứ lúc nào

---

### **Bước 3. Khám phá** 🔍

Không ai giống ai. Dùng **câu hỏi gợi mở**.

**✅ Ví dụ câu hỏi TỐT**:
- "Bạn thường làm gì khi chuẩn bị đi chơi xa?"
- Giúp bạn hiểu **họ là ai** và **họ hay làm gì**

**❌ Ví dụ câu hỏi XẤU (câu hỏi đóng)**:
- "Khi chuẩn bị đi chơi xa, bạn có mua đồ ăn đem theo không?"
- Khiến user **tập trung chỉ vào mua đồ ăn** thôi

---

### **Bước 4. Dùng thử** 🧪

- Quan sát user **sử dụng sản phẩm** hoặc dùng thử nháp:
  - 📋 Nháp giấy
  - 🎨 Nháp sơ cấp
  - 📐 Nháp cao cấp

**Tips**: Khuyến khích user **tưởng tượng và nói ra** những gì họ đang nghĩ

---

### **Bước 5. Tổng kết** 📋

- Tóm tắt lại những gì **hai bạn đã nói**
- Hỏi: **"Có gì bạn muốn chia sẻ mà chưa được hỏi không?"**
- Để user nói hết những gì muốn nói

---

### **Bước 6. Tạm biệt** 👋

- Dọn dần sách vở từ trước → user **biết phỏng vấn chuẩn bị kết thúc**
- **Cảm ơn** họ đã dành thời gian

> Trong nhà bạn không bao giờ đuổi khách về đột ngột đúng không?

---

## 🎯 Câu hỏi nên và không nên hỏi 

### ❌ KHÔNG nên làm:

| ❌ | Lý do |
|-----|-------|
| Đưa sản phẩm ra cho họ xem | Chẳng khác gì nói về tính năng |
| Hỏi về định hướng tính năng | Kiểu "Bạn có sẵn sàng trả phí để theo dõi?" → áp đặt suy nghĩ |
| Hỏi những người **dễ gặp** | Không có thông tin tốt nhất |
| **Thừa nhận** về user | Áp đặt suy nghĩ của bạn |
| **Hỏi dẫn dắc** | Áp đặt suy nghĩ khi hỏi |
| **Hỏi kép** | Hỏi nhiều câu một lúc |
| **Hỏi loạn** | Làm user bị rối |

**✅ Thay vào đó**:
- Đào bới trong **groups, forum** về lĩnh vực bạn quan tâm

---

## 💡 Tips ghi lại phỏng vấn 

### Cách thuyết phục team làm một tính năng

Sau khi phỏng vấn xong, mình thường:
- 🎙️ **Ghi âm** lại các buổi phỏng vấn
- 📹 **Quay video** các buổi trao đổi chuyên môn

**Tại sao**?

1️⃣ **Không phải ghi chú**
   - Ghi chú tạo cảm giác khó chịu
   - Cảm giác như không thực sự tham gia cuộc trò chuyện

2️⃣ **Phát lại cho team nghe**
   - Mọi người sẽ nghe được **giọng nói, cảm xúc** của user
   - Xác nhận hơn về nhu cầu thực tế

---

### Luôn là phỏng vấn trực tiếp

**✅ Nên dùng**:
- 👥 **Gặp mặt trực tiếp**
- 📹 **Video chat**

**❌ Tránh**:
- ✉️ Email (không có tính tương tác cao)

---

### Kỹ thuật "phỏng vấn sâu"

Trong những buổi phỏng vấn, bạn có thể **làm cho họ nói nhiều** bằng cách:

- Dùng câu: **"Ồ hay đó, bạn nói rõ hơn đi"**
- **Bật chế độ do thám** nhẹ nhàng: "Ồ hay quá!"
- Bạn sẽ lấy được **kha khá thông tin hữu ích** về user
- **Làm cho họ thoải mái chia sẻ** 🤝

---

### Feedback tools vs. User interview

**📊 Feedback tools trên trang**:
- ✅ Siêu quan trọng
- ✅ Giúp phát hiện **bugs** trước khi tung sản phẩm
- ❌ KHÔNG cho biết bạn cần làm **gì**
- ✅ Cho biết những điều **chưa tốt** về thứ đã làm

**📋 Khi nguồn lực hạn chế**:
- Tập trung vào phỏng vấn **user của đối thủ**
- Tại sao? Vì họ đã có **hứng thú** với hành vi cần
- Công việc của bạn chỉ là **thuyết phục họ chuyển đổi**
- Dễ hơn so với **tạo hành vi mới** chưa có

---

### Khi phải phỏng vấn lại?

**Đối tượng thay đổi theo thời gian**:
- Những người quan trọng **trong 6 tháng đầu** ≠ những người **3 năm sau**
- **Bắt buộc** phỏng vấn **thường xuyên**
- Nếu không → tính năng tiếp theo sẽ không tốt như lúc đầu

---

**🎯 Tóm tắt**: Phỏng vấn user là quá trình liên tục, không phải một lần. Kiên trì, đồng cảm, và lắng nghe là chìa khóa thành công.
