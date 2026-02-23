---
title: Tự học kiến thức technical từ HomeLAB, IoT, DIY
description: Hành trình tự học toàn bộ kiến thức kỹ thuật qua hands-on projects từ 2022 đến nay
pubDate: 2024-12-01
author: leolion
tags:
  - Technology
  - Career
type: post
---

## Giới thiệu

Từ năm 2022, mình bắt đầu một hành trình tự học technical bằng cách làm dự án thật: HomeLAB, IoT, DIY và cả hệ năng lượng mặt trời tại nhà.

Mình nhận ra một điều rất rõ: học qua thực hành cho tốc độ và độ nhớ tốt hơn hẳn chỉ đọc lý thuyết.

---

## Mục lục

1. [Bắt đầu từ IoT](#bắt-đầu-từ-iot)
2. [Đi từ thiết bị đến hệ thống](#đi-từ-thiết-bị-đến-hệ-thống)
3. [Bài học về hạ tầng mạng](#bài-học-về-hạ-tầng-mạng)
4. [Hệ thống năng lượng mặt trời](#hệ-thống-năng-lượng-mặt-trời)

---

## Bắt đầu từ IoT

### Vì sao mình chọn IoT

Lúc mới tìm hiểu nhà thông minh, mình thấy giải pháp thương mại vừa đắt, vừa khó tùy biến, lại dễ bị khóa vào hệ sinh thái của một vendor.

Vậy nên mình chọn hướng tự làm:

- Chi phí thấp hơn đáng kể.
- Tùy biến theo nhu cầu thật của nhà mình.
- Chủ động toàn bộ stack từ thiết bị đến dữ liệu.

### Hành trình phần cứng

#### 1) Arduino

Arduino rất hợp để bắt đầu:

- Dễ tiếp cận.
- Chi phí thấp.
- Cộng đồng cực lớn.

Các project đầu tay mình làm: cảm biến nhiệt độ/độ ẩm, điều khiển đèn, đo mực nước.

Kỹ năng nhận được: điện tử cơ bản, C cơ bản, debug phần cứng.

#### 2) Raspberry Pi

Sau đó mình chuyển lên Raspberry Pi để có một máy Linux hoàn chỉnh, đủ mạnh để chạy service.

Project tiêu biểu: thermostat, camera an ninh, lock system.

Kỹ năng tăng lên: Linux, Python, vận hành hệ thống.

#### 3) ESP8266 / ESP32

Đây là bước quan trọng vì có WiFi tích hợp, phù hợp cho IoT deploy thực tế.

Project mình làm: trạm thời tiết gửi dữ liệu lên cloud, cảm biến chuyển động cảnh báo, điều khiển đèn từ xa.

Kỹ năng học được: networking protocol, IoT programming, cloud integration.

---

## Đi từ thiết bị đến hệ thống

Lúc mới làm, mình nghĩ chỉ cần cảm biến chạy được là ổn. Nhưng khi số lượng thiết bị tăng, bài toán lập tức chuyển sang kiến trúc hệ thống.

```text
Thiết bị chạy được
→ Thu thập dữ liệu
→ Lưu trữ
→ Trực quan hóa
→ Vận hành ổn định
```

### Công nghệ mình phải học thêm

#### 1) Container hóa

Mình dùng Docker và Docker Compose để chạy database, API, dashboard theo cách nhất quán.

Kết quả: setup nhanh hơn, môi trường ổn định hơn, dễ tái tạo khi cần.

#### 2) Reverse proxy

Dùng Nginx làm điểm vào chung để route traffic, xử lý SSL/TLS và chuẩn hóa cách truy cập service.

#### 3) Load balancing

Khi có nhiều request hơn, một instance không đủ, nên mình phải học cách scale nhiều instance và phân phối traffic.

#### 4) Tối ưu hạ tầng

Những vấn đề mình gặp: startup chậm, ngốn tài nguyên, nghẽn mạng.

Các hướng xử lý hiệu quả:

- Cache layer.
- Index database.
- Tối ưu network path.
- Lazy loading ở chỗ phù hợp.

---

## Bài học về hạ tầng mạng

Khi số thiết bị tăng từ vài cái lên vài chục cái, mạng trở thành điểm nghẽn lớn nhất.

### 1) Độ ổn định WiFi không tự nhiên mà có

Mình phải học lại từ gốc:

- 2.4GHz vs 5GHz dùng khi nào.
- Vị trí router ảnh hưởng ra sao.
- Khi nào cần mesh, khi nào nên kéo dây.

### 2) Router dân dụng có giới hạn rất nhanh

Khi vào hệ IoT nhiều node, router phổ thông sớm chạm trần.

Giải pháp mình áp dụng:

- Chuyển sang access point ổn định hơn.
- Tách VLAN/SSID cho IoT.
- Áp QoS để ưu tiên traffic quan trọng.
- Theo dõi băng thông thường xuyên.

### 3) Security là chuyện bắt buộc

Các rủi ro mình từng thấy:

- Thiết bị lộ trực tiếp ra internet.
- Credential quản lý quá yếu.
- Firmware cũ có lỗ hổng.

Cách giảm rủi ro:

- Firewall rule rõ ràng.
- Truy cập từ xa qua VPN.
- Cập nhật firmware định kỳ.
- Cô lập mạng IoT khỏi mạng chính.

---

## Hệ thống năng lượng mặt trời

Mình bắt đầu tìm hiểu mảng này với mục tiêu giảm phụ thuộc điện lưới.

### DC/AC conversion

Pin mặt trời sinh ra DC, trong khi đồ điện gia dụng dùng AC, nên inverter là mắt xích bắt buộc.

Ở phần này mình học được:

- Power electronics cơ bản.
- Hiệu suất chuyển đổi và tổn hao nhiệt.
- Cách chọn thiết bị theo nhu cầu tải thực tế.

### Theo dõi tải và quản lý năng lượng

Mình triển khai theo hướng theo dõi thời gian thực:

- Mức tiêu thụ điện.
- Sản lượng từ solar.
- Trạng thái pin.
- Cơ chế bật/tắt tải thông minh.

Qua đó học thêm về energy management, pin behavior, và bài toán grid-tied/off-grid.

---

## Kỹ năng tích lũy

### Kỹ năng technical

| Lĩnh vực | Kỹ năng |
|---|---|
| Nhúng | Arduino, ESP32, C/Python cơ bản |
| Linux | SSH, shell script, vận hành service |
| Mạng | WiFi, TCP/IP, DNS, DHCP |
| DevOps | Docker, Compose, automation cơ bản |
| Điện | DC/AC conversion, quản lý tải |
| Điện tử | Mạch cơ bản, hàn, troubleshooting |

### Kỹ năng mềm

- Giải quyết vấn đề theo hệ thống.
- Kiên nhẫn với trial-and-error.
- Học nhanh công nghệ mới.
- Ghi chép để tái sử dụng kiến thức.
- Tích hợp nhiều hệ khác nhau thành một workflow chạy được.

---

## Bài học lớn

1. **Học bằng dự án thật là nhanh nhất.**
2. **Scale khác nhau sinh ra vấn đề khác nhau.**
3. **Open-source là đòn bẩy cực mạnh cho người tự học.**
4. **Phần cứng dạy mình tính kỷ luật và sự khiêm tốn.**

---

## Tiếp theo mình muốn thử

- Edge AI cho các thiết bị tại nhà.
- Kubernetes cho HomeLAB.
- Time-series database tối ưu hơn.
- Security nâng cao cho hệ IoT.
- Các bài toán điện dân dụng phức tạp hơn.

---

## Gợi ý cho người muốn tự học technical

Nếu bạn muốn bắt đầu, mình gợi ý quy trình này:

1. Chọn một vấn đề thật trong cuộc sống của bạn.
2. Làm phiên bản tối thiểu có thể chạy.
3. Build sớm thay vì đọc quá lâu.
4. Chấp nhận debug là phần học quan trọng nhất.
5. Mở rộng dần theo từng mức scale.
6. Viết lại hành trình để không học lại từ đầu.

---

## Kết luận

Hành trình HomeLAB cho mình một niềm tin rất rõ: khi bạn có “skin in the game” và tự tay giải quyết vấn đề thật, tốc độ trưởng thành technical sẽ tăng rất nhanh.

Bắt đầu nhỏ thôi, nhưng bắt đầu sớm.