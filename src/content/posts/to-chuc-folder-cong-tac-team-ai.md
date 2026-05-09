---
author: leolion
description: Khi team bắt đầu làm việc cùng AI agent, folder không còn là nơi cất file. Nó trở thành workspace chung để mọi người gom context, quyết định và artifact vào một chỗ đủ rõ để cùng cộng tác.
pubDate: 2026-05-09
tags:
- Product
- AI
- Operations
title: Tổ chức folder như một workspace chung cho team và AI agent
type: post
---

Ở bài trước, mình có nói về chuyện làm product trong kỷ nguyên AI agent không chỉ là "code nhanh hơn". Thứ thay đổi lớn hơn là cách team gom context, ra quyết định và biến tín hiệu từ khách hàng thành một plan đủ rõ để triển khai.

Nhưng có một vấn đề rất thực tế xuất hiện ngay sau đó:

> Nếu cả team cùng tham gia vào một plan, thì plan đó nằm ở đâu?

Nghe có vẻ nhỏ, nhưng đây là điểm làm rất nhiều workflow bị gãy. Business có note riêng. PM có file spec riêng. Design có Figma riêng. Dev có technical plan riêng. QA có checklist riêng. AI agent thì lại cần một bối cảnh đủ đầy để đọc và hành động.

Kết quả là mỗi người đều "có tài liệu", nhưng không ai chắc đâu là source of truth cuối cùng.

Vì vậy, trước khi nói tới AI workflow phức tạp hơn, mình nghĩ team cần thống nhất một thứ cơ bản hơn: **mỗi task quan trọng nên có một folder làm việc chung**.

---

## Folder không chỉ để lưu file

Trước đây, mình cũng hay nhìn folder như chỗ để cất tài liệu. Có spec thì bỏ vào. Có design thì bỏ vào. Có demo thì bỏ vào.

Nhưng khi làm việc với AI agent, folder bắt đầu có vai trò khác.

Nó trở thành một **workspace có cấu trúc**:

- nơi gom bối cảnh sản phẩm
- nơi ghi lại quyết định quan trọng
- nơi để AI đọc trước khi phân tích hoặc code
- nơi team review lại cùng một nguồn thông tin
- nơi lưu các artifact thật sự liên quan tới task

Điểm mấu chốt là folder không nên trở thành một bãi rác tài liệu. Nếu cái gì cũng nhét vào, không có quy ước, thì sau vài tuần không ai dám tin nội dung trong đó nữa.

Một folder tốt không cần nhiều file. Ngược lại, càng ít entry point càng tốt.

---

## Một task chỉ nên có một tài liệu chính

Quy ước mình muốn team bắt đầu từ đây rất đơn giản:

```text
knowledge_base/product-kb/docs/by-product/<product>/modules/<module>/tasks/<YYYY-QN>/[<JiraKey>]-<task-name>/
├── README.md                 # tài liệu chính duy nhất của task
└── design/                   # optional, chỉ khi có artifact thật
    └── prototype/            # source prototype/demo nếu có
```

Trong đó, `README.md` là tài liệu chính duy nhất của task.

Không phải `spec-v1.md`, `spec-final.md`, `final-final.md`, `dev-note.md`, `qa-note.md`, rồi một file "summary" khác để giải thích mấy file kia.

Chỉ một entry point.

Nếu ai muốn hiểu task này là gì, đọc `README.md`. Nếu AI agent cần context, đọc `README.md`. Nếu dev cần biết scope, đọc `README.md`. Nếu QA cần biết kỳ vọng, đọc `README.md`.

Điều này không có nghĩa mọi thứ phải viết dài trong một file. Nó có nghĩa là mọi decision quan trọng phải được neo về một nơi duy nhất.

---

## Vì sao phải theo product, module, quý và Jira key?

Cấu trúc này hơi dài, nhưng mỗi tầng đều có lý do.

`by-product/<product>` giúp tránh tình trạng một knowledge base chung bị trộn lẫn nhiều sản phẩm. Khi team scale, context của từng sản phẩm sẽ khác nhau: user khác, flow khác, constraint khác, metric khác.

`modules/<module>` giúp gom task theo năng lực sản phẩm hoặc khu vực nghiệp vụ. Ví dụ booking, payment, profile, support, reporting. Đây là cách dễ hơn để một người mới, hoặc một AI agent, hiểu task đang thuộc phần nào của hệ thống.

`tasks/<YYYY-QN>` giúp giữ timeline gọn. Product knowledge nếu không có thời gian sẽ rất nhanh bị mơ hồ. Một quyết định đúng ở 2025-Q4 chưa chắc còn đúng ở 2026-Q2. Chia theo quý làm cho context có tuổi đời rõ ràng hơn.

`[<JiraKey>]-<task-name>` giúp nối folder với hệ thống quản lý công việc. Jira vẫn là nơi theo dõi trạng thái, assignee, sprint, estimation. Folder này không thay Jira, mà bổ sung phần context và artifact mà Jira thường không giữ tốt.

Nói ngắn gọn:

- Jira trả lời: task đang ở trạng thái nào?
- Folder trả lời: team đã hiểu và quyết định gì?
- `README.md` trả lời: nếu bắt đầu làm task này hôm nay, cần biết gì trước?

---

## README.md nên chứa gì?

Mình không muốn biến `README.md` thành một template quá nặng. Nếu template dài hơn task, mọi người sẽ bỏ qua.

Nhưng một task đủ nghiêm túc nên có vài phần tối thiểu:

### Bối cảnh

Task này xuất phát từ đâu? Feedback khách hàng, vấn đề vận hành, bug, mục tiêu kinh doanh, hay cải tiến kỹ thuật?

Phần này giúp người đọc hiểu vì sao task tồn tại, không chỉ biết team đang làm gì.

### Scope

Task này làm gì và không làm gì?

Phần "không làm" rất quan trọng. Rất nhiều task trễ không phải vì team không làm được, mà vì scope âm thầm phình ra trong quá trình làm.

### Quyết định chính

Những quyết định nào đã được chốt? Có trade-off nào đã được chấp nhận?

Ví dụ: chọn giải pháp đơn giản trước, chưa tối ưu full automation; chỉ hỗ trợ một nhóm user trước; chưa đụng tới flow cũ trong phase này.

### Artifact liên quan

Nếu có Figma, prototype, demo, script test, log phân tích, link data, thì link vào đây. Nhưng chỉ link những thứ thật sự còn dùng được.

Nếu artifact nằm trong folder, ví dụ prototype hoặc demo source, thì để dưới `design/prototype/`.

### Checklist hoàn tất

Không cần phức tạp. Chỉ cần đủ để team biết khi nào task có thể coi là xong:

- sản phẩm đã xử lý use case chính
- edge case quan trọng đã được kiểm tra
- QA hoặc reviewer đã xác nhận
- decision mới đã được cập nhật ngược lại vào `README.md`

---

## Đừng tạo folder trước khi có việc thật

Một lỗi dễ mắc là thấy có cấu trúc folder rồi bắt đầu tạo trước cho "đầy đủ".

Không cần.

Folder task chỉ nên được tạo khi có một việc thật sự cần nhiều người cùng cộng tác, hoặc có khả năng cần AI agent đọc lại context để hỗ trợ phân tích, viết code, test, hoặc audit.

Với các việc nhỏ, Jira comment hoặc một ghi chú ngắn là đủ. Cấu trúc sinh ra để giảm friction, không phải để thêm nghi thức.

Tương tự, folder `design/` chỉ nên có khi có artifact thật. Nếu chưa có prototype, đừng tạo folder rỗng cho đẹp. Folder rỗng chỉ làm người sau tưởng là thiếu tài liệu.

---

## Tại sao cách này hợp với AI agent?

AI agent làm tốt hơn rất nhiều khi context có cấu trúc ổn định.

Nếu mỗi task có một đường dẫn đoán được, một file chính đoán được, và một cách ghi quyết định tương đối nhất quán, agent có thể:

- tìm đúng bối cảnh trước khi code
- đối chiếu scope với implementation
- tạo checklist test từ decision đã chốt
- cập nhật lại tài liệu sau khi thay đổi
- audit xem artifact nào bị thiếu hoặc đã lỗi thời

Ngược lại, nếu context nằm rải rác trong Slack, Jira comment, Google Docs, Figma, Notion, và vài file markdown lạc chỗ, AI có thể vẫn giúp được, nhưng nó sẽ tốn nhiều thời gian hơn để đoán.

Mà khi AI phải đoán nhiều, con người lại phải review nhiều hơn.

Muốn AI agent scale tốt, team cần giảm phần "đoán context" xuống thấp nhất có thể.

---

## Cách bắt đầu cho team

Mình nghĩ không cần rollout bằng một quy trình quá lớn. Chỉ cần bắt đầu từ các task mới.

Khi một task đủ lớn để có nhiều người cùng tham gia, tạo folder theo cấu trúc:

```text
knowledge_base/product-kb/docs/by-product/<product>/modules/<module>/tasks/<YYYY-QN>/[<JiraKey>]-<task-name>/
```

Sau đó tạo `README.md` và ghi tối thiểu:

1. Bối cảnh
2. Scope
3. Decision đã chốt
4. Link artifact liên quan
5. Checklist hoàn tất

Trong quá trình làm, mọi người update vào cùng file đó. Không cần hoàn hảo ngay từ đầu. Quan trọng là mọi người có thói quen quay lại một chỗ duy nhất khi cần hiểu task.

Sau vài task, team sẽ bắt đầu thấy lợi ích:

- người mới vào task nhanh hơn
- handoff ít mất context hơn
- review bớt cảm tính hơn
- AI agent hỗ trợ chính xác hơn
- quyết định cũ không bị thất lạc sau sprint

---

## Kết lại

AI làm cho tốc độ tạo output tăng rất nhanh. Nhưng nếu context của team vẫn nằm rải rác, output đó sẽ kéo theo nhiều review, sửa sai và hiểu nhầm hơn.

Vì vậy, trước khi kỳ vọng AI agent làm được nhiều việc hơn, team cần một nền tảng cộng tác đủ rõ.

Với mình, điểm bắt đầu phù hợp không phải là một process nặng, cũng không phải một tool mới.

Chỉ là một folder đúng chỗ, một `README.md` làm source of truth, và một thói quen rất đơn giản:

> Khi task cần nhiều người cùng làm, hãy để mọi người và AI cùng bắt đầu từ một nơi.
