---
author: leolion
description: Một cách tổ chức workspace để tách rõ phần cá nhân và product-kb dùng chung, giúp team biết viết tài liệu ở đâu, AI đọc context nào, và skill nào được chia sẻ.
pubDate: 2026-05-09
tags:
- Product
- AI
- Operations
title: Tổ chức folder như một workspace chung cho team và AI agent
type: post
---

Ở bài trước, mình có nói về chuyện làm product trong kỷ nguyên AI agent không chỉ là "code nhanh hơn". Thứ thay đổi lớn hơn là cách team gom context, ra quyết định và biến tín hiệu từ khách hàng thành một plan đủ rõ để triển khai.

Nhưng có một vấn đề xuất hiện ngay sau đó:

> Nếu cả team cùng tham gia vào một plan, thì plan đó nằm ở đâu?

Nếu team muốn làm việc quanh một plan chung, thì phải thống nhất trước: **mỗi phần việc sẽ được viết vào tài liệu nào, ai chịu trách nhiệm phần nào, và AI sẽ đọc tài liệu nào khi cần bối cảnh**.

Không thể để mỗi dự án tự tổ chức một kiểu. Khi cần đọc lại full bối cảnh, người trong team không biết phải mở bao nhiêu tài liệu cho đủ; AI agent cũng không biết đâu là source of truth để hành động.

Vì vậy, điểm bắt đầu không nên là một folder task đứng lẻ loi. Điểm bắt đầu nên là một workspace có hai phần rõ ràng:

- Phần cá nhân: mỗi người tự tổ chức note, draft, script, skill riêng của mình
- Phần dùng chung: `product-kb`, nơi team cùng sync, review và cho AI đọc context chung

---

## Workspace cá nhân và product-kb dùng chung

Một cấu trúc thực tế hơn nên bắt đầu từ workspace của từng người:

```text
Company/
├── AGENTS.md                         # hướng dẫn AI ở workspace cá nhân
├── .agent/
│   └── skills/
│       ├── personal-skill/            # skill riêng của từng người
│       └── shared-product-skills -> ../../product-kb/.agent/skills
├── .codex/                            # optional, cấu hình riêng theo tool
├── personal/
│   ├── notes/                         # ghi chú riêng
│   ├── drafts/                        # nháp cá nhân
│   └── experiments/                   # thử nghiệm local
└── product-kb/                        # shared folder của team
    ├── README.md                      # context tổng: công ty, khách hàng, cách dùng workspace
    ├── AGENTS.md                      # hướng dẫn AI dùng chung cho product-kb
    ├── .agent/
    │   └── skills/                    # skill dùng chung cho team
    └── docs/
        ├── context/                   # business, customer, glossary, system overview
        ├── by-product/
        │   └── <product>/modules/<module>/tasks/<YYYY-QN>/[<JiraKey>]-<task-name>/
        │       ├── README.md          # tài liệu chính duy nhất của task
        │       └── design/
        │           └── prototype/     # source prototype/demo nếu có
        ├── decisions/                 # ADR/RFC/decision log dùng lại nhiều lần
        └── playbooks/                 # quy trình vận hành hoặc review lặp lại
```

Ở đây, `Company/` là workspace cá nhân của một người. Nó có thể nằm trên máy local, Google Drive, iCloud, Dropbox, hoặc bất cứ chỗ nào người đó quen dùng.

Nhưng `product-kb/` mới là phần share chung với team. Đây là folder nên được sync qua shared drive hoặc một repo chung. Những gì người khác cần đọc để hiểu product, khách hàng, decision, task, workflow review, hoặc skill dùng chung thì để trong đây.

Ngược lại, note riêng, prompt thử nghiệm, script cá nhân, skill chỉ phục vụ thói quen của một người thì để ngoài `product-kb`.

---

## Trong product-kb nên chia theo gì?

Không nên tạo quá nhiều nhánh `by-*` chỉ vì nhìn có vẻ đầy đủ. Folder dùng chung chỉ nên có các nhánh mà team thật sự tra cứu lặp lại.

Mình nghĩ `by-product` vẫn là nhánh chính, vì phần lớn task product đều bắt đầu từ một sản phẩm, một module, rồi mới xuống task cụ thể.

Nhưng ngoài `by-product`, nên có thêm vài nhóm không đặt theo sản phẩm:

### context/

Đây là nơi đặt bối cảnh nền mà mọi sản phẩm đều cần dùng chung:

- Công ty đang phục vụ ai
- Nhóm khách hàng chính là gì
- Các khái niệm nghiệp vụ quan trọng
- System overview hoặc glossary
- Những constraint lớn mà team mới vào cần biết

Nếu AI agent bắt đầu từ `product-kb`, nó nên đọc `README.md`, rồi đọc tiếp các file nền trong `docs/context/` trước khi đi vào product cụ thể.

### by-product/

Đây là nhánh cho product work:

```text
docs/by-product/<product>/modules/<module>/tasks/<YYYY-QN>/[<JiraKey>]-<task-name>/
├── README.md
└── design/
    └── prototype/
```

Task vẫn nên có một `README.md` chính. Nếu ai muốn hiểu task này là gì, đọc `README.md`. Nếu AI agent cần context, đọc `README.md`. Nếu dev cần biết scope, đọc `README.md`. Nếu QA cần biết kỳ vọng, đọc `README.md`.

Điều này không có nghĩa mọi thứ phải viết dài trong một file. Nó có nghĩa là mọi decision quan trọng phải được neo về một nơi duy nhất.

### decisions/

Có những quyết định không thuộc riêng một task. Ví dụ: chọn một hướng kiến trúc, đổi cách đo metric, thống nhất quy ước đặt tên, chọn cách dùng AI agent trong review.

Những quyết định kiểu đó nên nằm ở `docs/decisions/` để task sau có thể link lại, thay vì copy lại nhiều lần.

### playbooks/

Có những việc không phải task product, nhưng team lặp lại nhiều lần: cách review tài liệu, cách gửi prototype, cách audit một luồng, cách chuẩn bị context cho AI agent.

Những quy trình đó nên nằm ở `docs/playbooks/`. Đây là nơi lưu cách làm, không phải nơi lưu decision của từng task.

---

## README.md nên chứa gì?

Mỗi folder quan trọng nên có một `README.md`, nhưng vai trò của từng file không giống nhau.

`product-kb/README.md` là cửa vào của shared folder. Nó nên trả lời:

1. Folder này dùng cho team nào?
2. AI nên đọc file nào trước?
3. Context nền nằm ở đâu?
4. Product work nằm ở đâu?
5. Skill dùng chung nằm ở đâu?

`docs/context/README.md` nên giải thích các file nền trong context.

`docs/by-product/<product>/README.md` nên giải thích sản phẩm đó phục vụ ai, module chính là gì, metric hoặc constraint lớn là gì.

`tasks/.../README.md` mới là tài liệu chính của task. Một task đủ nghiêm túc nên có vài phần tối thiểu:

### Bối cảnh

Task này xuất phát từ đâu? Feedback khách hàng, vấn đề vận hành, bug, mục tiêu kinh doanh, hay cải tiến kỹ thuật?

### Scope

Task này làm gì và không làm gì?

Phần "không làm" rất quan trọng. Rất nhiều task trễ không phải vì team không làm được, mà vì scope âm thầm phình ra trong quá trình làm.

### Quyết định chính

Những quyết định nào đã được chốt? Có trade-off nào đã được chấp nhận?

### Artifact liên quan

Nếu có Figma, prototype, demo, script test, log phân tích, link data, thì link vào đây. Nhưng chỉ link những thứ thật sự còn dùng được.

Nếu artifact nằm trong folder, ví dụ prototype hoặc demo source, thì để dưới `design/prototype/`.

### Checklist hoàn tất

- Sản phẩm đã xử lý use case chính
- Edge case quan trọng đã được kiểm tra
- QA hoặc reviewer đã xác nhận
- Decision mới đã được cập nhật ngược lại vào `README.md`

---

## AGENTS.md, .agent và symlink

Nếu chỉ có markdown mà không có hướng dẫn cho AI agent, mỗi người sẽ dùng AI theo một kiểu. Vì vậy, trong shared folder nên có cả tài liệu cho người và tài liệu cho agent.

Ở `product-kb`, có thể có:

```text
product-kb/
├── AGENTS.md
├── .agent/
│   └── skills/
└── docs/
```

`AGENTS.md` nói cho AI biết cách đọc folder này: bắt đầu từ đâu, ưu tiên file nào, khi nào phải cập nhật `README.md`, khi nào dùng skill nào.

`.agent/skills/` chứa skill dùng chung cho cả team. Ví dụ: skill viết bài blog, skill tạo Plannotator review link, skill deploy prototype lên Vercel, skill audit một task folder.

Trên workspace cá nhân, mỗi người vẫn có thể có skill riêng. Nhưng những skill chung nên được symlink về `product-kb/.agent/skills/`, để khi team cập nhật skill, mọi người cùng dùng được bản mới.

Ví dụ:

```text
Company/.agent/skills/shared-product-skills -> ../../product-kb/.agent/skills
```

Cách này giữ được hai nhu cầu cùng lúc:

- Team có một bộ skill chuẩn dùng chung
- Mỗi người vẫn có skill riêng, note riêng, setup riêng

---

## Làm sao để cả team cùng dùng được folder này?

Một cấu trúc folder chỉ có ích khi mọi người trong team có thể truy cập và cập nhật nó dễ dàng. Nếu setup quá kỹ thuật, chỉ dev dùng được, thì nó sẽ không trở thành workspace chung.

Với team chưa muốn dựng hệ thống phức tạp, có thể bắt đầu rất đơn giản:

- Tạo một folder Google Drive hoặc shared drive cho `product-kb`
- Bên trong giữ đúng cấu trúc `README.md`, `AGENTS.md`, `.agent/skills/`, `docs/`
- Dùng file `.md` cho tài liệu chính để AI, dev tool, editor và git đều đọc được
- Lưu prototype/demo source thật ở `design/prototype/` nếu task có prototype
- Dùng Plannotator để gửi link review nhanh cho bài viết hoặc tài liệu markdown
- Với prototype cần người ngoài xem, dùng skill/plugin deploy lên Vercel để có một link public miễn phí

Điểm quan trọng là người trong team không cần hiểu quá sâu về git hay setup dev environment vẫn có thể tham gia:

- Business có thể góp bối cảnh và link data
- PM/PO có thể chốt scope, decision và trade-off
- Design có thể để link Figma hoặc prototype source
- Dev có thể bổ sung constraint kỹ thuật và implementation note
- QA có thể cập nhật checklist hoàn tất
- AI agent có thể đọc `README.md` như điểm bắt đầu trước khi phân tích hoặc sửa

---

## Cách bắt đầu cho team

Mình nghĩ không cần rollout bằng một quy trình quá lớn. Chỉ cần bắt đầu bằng một `product-kb` dùng chung.

Trong `product-kb`, tạo tối thiểu:

```text
product-kb/
├── README.md
├── AGENTS.md
├── .agent/skills/
└── docs/
    ├── context/
    ├── by-product/
    ├── decisions/
    └── playbooks/
```

Sau đó chọn một task mới có nhiều người cùng tham gia, tạo folder task trong `docs/by-product/.../tasks/...`, rồi viết `README.md` tối thiểu:

1. Bối cảnh
2. Scope
3. Decision đã chốt
4. Link artifact liên quan
5. Checklist hoàn tất

Trong quá trình làm, mọi người update vào cùng file đó. Không cần hoàn hảo ngay từ đầu. Quan trọng là khi cần hiểu task, cả team biết phải quay lại một chỗ duy nhất.

---

## Kết lại

AI làm cho tốc độ tạo output tăng rất nhanh. Nhưng nếu context của team vẫn nằm rải rác, output đó sẽ kéo theo nhiều review, sửa sai và hiểu nhầm hơn.

Vì vậy, trước khi kỳ vọng AI agent làm được nhiều việc hơn, team cần một nền tảng cộng tác đủ rõ.

Với mình, điểm bắt đầu phù hợp không phải là một process nặng, cũng không phải một tool mới.

Chỉ là một workspace biết tách phần cá nhân khỏi phần dùng chung, một `product-kb` đủ rõ để team cùng đọc, và một thói quen rất đơn giản:

> Khi task cần nhiều người cùng làm, hãy để mọi người và AI cùng bắt đầu từ một nơi.
