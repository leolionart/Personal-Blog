---
author: leolion
description: Từ clip hướng dẫn đưa thiết bị lên HomeKit, tới tự flash firmware, dựng
  dashboard, build NAS, và cuối cùng là dùng AI để code ra tool cho chính mình
pubDate: 2024-12-01
tags:
- Technology
- Career
title: Tự học mọi thứ từ HomeLAB — hành trình từ YouTube đến AI
type: post
---

## Mở đầu

Mình không bắt đầu hành trình HomeLAB từ một khóa học hay một lộ trình nào cả. Mình bắt đầu vì tò mò — muốn cái công tắc Tuya ở nhà nó hiện lên được trên HomeKit.

Cứ thế, từ một clip YouTube, mình rơi vào cái rabbit hole kéo dài mấy năm: từ Homebridge đến flash firmware, từ MQTT đến Grafana, từ NAS đến media server, và bây giờ là dùng AI để tự code ra tool phục vụ chính mình.

Không có lộ trình. Chỉ có đúng một pattern lặp đi lặp lại: **thấy thiếu → tìm cách tự làm → học được một đống thứ ngoài dự kiến.**

---

## Mục lục

1. [Homebridge — điểm khởi đầu của mọi thứ](#homebridge--điểm-khởi-đầu-của-mọi-thứ)
2. [Flash firmware — khi muốn kiểm soát hoàn toàn](#flash-firmware--khi-muốn-kiểm-soát-hoàn-toàn)
3. [Dashboard từ dữ liệu thật](#dashboard-từ-dữ-liệu-thật)
4. [Hạ tầng mạng — bài toán không ai nói trước](#hạ-tầng-mạng--bài-toán-không-ai-nói-trước)
5. [Matter — nâng cấp để HomeKit mượt hơn](#matter--nâng-cấp-để-homekit-mượt-hơn)
6. [NAS và media server tự dựng](#nas-và-media-server-tự-dựng)
7. [Home Assistant — trung tâm điều khiển](#home-assistant--trung-tâm-điều-khiển)
8. [AI và vibe coding — chương hiện tại](#ai-và-vibe-coding--chương-hiện-tại)

---

## Homebridge — điểm khởi đầu của mọi thứ

Mọi chuyện bắt đầu từ mấy thiết bị smarthome giá rẻ mua trên Shopee: công tắc eWeLink, ổ cắm Tuya, remote hồng ngoại Broadlink. Mỗi cái một app riêng, không cái nào nói chuyện được với HomeKit.

Rồi mình coi được mấy clip YouTube hướng dẫn cài Homebridge trên Raspberry Pi. Chỉ cần cài đúng plugin, mấy thiết bị đó tự hiện lên Apple Home.

Lúc đó mình chưa biết gì về Linux, Node.js hay Docker. Cứ copy paste command theo clip, lỗi thì Google tiếp. Nhưng chính cái quá trình mày mò đó cho mình mấy thứ quan trọng:

- Biết SSH vào Raspberry Pi là gì.
- Hiểu sơ sơ về service, port, log.
- Lần đầu thấy terminal không phải thứ đáng sợ.

Homebridge là cánh cửa. Bước qua rồi thì không quay lại được.

---

## Flash firmware — khi muốn kiểm soát hoàn toàn

Homebridge giải quyết được vấn đề “hiện lên HomeKit”, nhưng thiết bị gốc vẫn phụ thuộc cloud của Tuya, eWeLink. Mất mạng là mất điều khiển. Muốn tùy chỉnh sâu hơn cũng không được.

Lúc này mình biết tới **Tasmota** và **ESPHome** — hai firmware mã nguồn mở chạy trên ESP8266/ESP32. Nạp vào là thiết bị chạy local hoàn toàn, không cần cloud.

### Tasmota

Mình bắt đầu với Tasmota vì nó đơn giản: flash xong là có giao diện web, cấu hình WiFi, MQTT chỉ bằng trình duyệt. Nhiều thiết bị Tuya dùng chip ESP nên flash được luôn.

Qua Tasmota mình học được:

- Flash firmware qua serial (UART) bằng USB-to-TTL.
- Hiểu GPIO pin mapping — chân nào điều khiển relay, chân nào đọc nút nhấn.
- MQTT là gì, tại sao nó quan trọng trong IoT.

### ESPHome

Sau đó chuyển sang ESPHome vì nó mạnh hơn: viết config bằng YAML, compile firmware riêng, OTA update không cần cắm dây.

ESPHome mở ra thế giới DIY thật sự:

- Tự gắn cảm biến nhiệt độ, độ ẩm, chất lượng không khí.
- Tự làm công tắc thông minh từ board ESP32 trần.
- Kết hợp nhiều sensor trên một board duy nhất.

Kỹ năng lớn nhất mình học được giai đoạn này: **đọc datasheet, hiểu wiring diagram, và debug phần cứng khi nó không chạy đúng lần đầu** — mà nó không bao giờ chạy đúng lần đầu.

---

## Dashboard từ dữ liệu thật

Khi nhà có chục cái sensor chạy ESPHome, tất cả đều bắn dữ liệu qua MQTT. Câu hỏi tự nhiên nảy ra: dữ liệu này đi đâu, hiển thị ở đâu?

### MQTT → Prometheus → Grafana

Mình dựng pipeline đơn giản:

```text
Sensor (ESPHome)
  │
  ▼
MQTT Broker (Mosquitto)
  │
  ▼
mqtt2prometheus
  │
  ▼
Prometheus
  │
  ▼
Grafana
```

- **Mosquitto** làm message broker — nơi tất cả sensor publish dữ liệu.
- **Prometheus** scrape metric và lưu time-series.
- **Grafana** display thành dashboard đẹp, có alert.

Lần đầu thấy biểu đồ nhiệt độ phòng khách real-time trên dashboard tự dựng, cảm giác rất phê. Không phải vì nó khó, mà vì mình hiểu từng lớp trong stack đó.

### Kỹ năng mới từ việc dựng dashboard

- Docker Compose để orchestrate nhiều container.
- Cách viết PromQL query.
- Alert rules: khi nhiệt độ quá cao, khi sensor mất kết nối.
- Retention policy: giữ data bao lâu, resolution thế nào.

Đây là lúc mình bắt đầu nghĩ theo kiểu hệ thống, không còn nghĩ theo từng thiết bị đơn lẻ nữa.

---

## Hạ tầng mạng — bài toán không ai nói trước

Có vài chục thiết bị IoT chạy WiFi rồi thì mình hiểu tại sao hạ tầng mạng quan trọng. Router dân dụng đơn giản không kham nổi.

### WiFi Mesh

Nhà rộng, tường dày, một router không phủ hết. Mình chuyển sang WiFi mesh để mở rộng vùng phủ sóng mà không cần kéo dây. Qua đó học được:

- Roaming giữa các node hoạt động ra sao.
- 2.4GHz cho IoT, 5GHz cho thiết bị chính.
- Backhaul có dây vs không dây khác nhau thế nào.

### MikroTik — cân bằng tải và kiểm soát traffic

Khi muốn kiểm soát sâu hơn, mình nhảy sang MikroTik. Đây là lúc mọi thứ “pro” lên rõ rệt:

- Load balancing nhiều đường WAN.
- VLAN tách riêng mạng IoT khỏi mạng chính.
- QoS ưu tiên traffic quan trọng.
- Firewall rules chi tiết.

MikroTik cho mình kiến thức network engineering thực tế mà đọc sách không bao giờ đủ. Phải ngồi debug tại sao thiết bị này không thấy thiết bị kia, tại sao DNS resolve chậm, tại sao DHCP lease bị conflict — toàn những bài toán nhỏ nhưng dạy rất nhiều.

---

## Matter — nâng cấp để HomeKit mượt hơn

Sau một thời gian chạy Homebridge làm cầu nối, mình nhận ra nó vẫn là một lớp trung gian. Thiết bị → Homebridge → HomeKit — mỗi lớp thêm độ trễ và điểm lỗi.

Khi Matter ra mắt, mình chuyển dần các thiết bị sang protocol này:

- ESPHome đã hỗ trợ Matter native.
- Thiết bị Matter nói chuyện trực tiếp với HomeKit, không cần bridge.
- Phản hồi nhanh hơn hẳn, ít lỗi “No Response” hơn.

Matter cũng dạy mình về chuẩn giao tiếp trong IoT: tại sao interoperability quan trọng, tại sao một protocol chung lại giải quyết được nhiều vấn đề đến vậy.

---

## NAS và media server tự dựng

Song song với smarthome, mình bắt đầu mảng media server — cũng vì nhu cầu cá nhân: muốn xem phim ở nhà mà không phụ thuộc streaming service nào.

### Tự build NAS

Thay vì mua Synology hay QNAP, mình tự dựng NAS từ phần cứng cũ:

- Chọn case, PSU, HDD phù hợp.
- Cài TrueNAS hoặc OMV.
- Setup RAID, SMB share, backup schedule.

Qua đó học được storage fundamentals: RAID levels, filesystem, IO throughput, và bài toán backup 3-2-1.

### Plex + Radarr + Sonarr — hệ sinh thái tải và xem phim tự động

Đây là lúc mọi thứ bắt đầu kết nối lại:

- **Plex** làm media server — stream phim đến mọi thiết bị trong nhà.
- **Radarr** tự động tìm và tải phim theo watchlist.
- **Sonarr** làm tương tự cho series.
- Tất cả chạy trong Docker container trên NAS.

Mình chỉ cần thêm phim vào danh sách, hệ thống tự tải, tự đổi tên, tự sắp xếp thư mục, tự thông báo khi có phim mới. Không cần động tay.

Kỹ năng học được: Docker networking, volume mapping, reverse proxy (Nginx Proxy Manager), và tư duy automation — làm một lần, chạy mãi.

---

## Home Assistant — trung tâm điều khiển

Mình đến với Home Assistant khá muộn so với nhiều người chơi smarthome. Lý do đơn giản: trước đó Homebridge + ESPHome + MQTT đã đủ dùng.

Nhưng khi hệ thống lớn dần, cần một nơi quản lý tập trung, viết automation phức tạp, và có dashboard riêng — Home Assistant trở thành lựa chọn tự nhiên.

Những thứ Home Assistant giúp mình làm được mà trước đó khó:

- Automation dựa trên nhiều điều kiện: giờ, trạng thái sensor, vị trí người.
- Dashboard tùy biến sâu cho từng phòng.
- Tích hợp mọi thứ vào một nơi: ESPHome, MQTT, Plex, camera, weather.
- History và energy tracking dài hạn.

Home Assistant cũng là nơi mình nhận ra giá trị của open-source ecosystem: hàng ngàn integration, community add-on, và một cộng đồng cực kỳ active.

---

## AI và vibe coding — chương hiện tại

Đây là giai đoạn mình đang ở. Và nó thay đổi hoàn toàn cách mình tiếp cận vấn đề.

### Từ “tìm tool” sang “tự build tool”

Trước đây, khi cần một chức năng mới cho media server hay smarthome, mình lên GitHub tìm có ai làm chưa. Nếu có thì dùng, không có thì chịu.

Bây giờ, với AI-assisted coding (Claude, Cursor, Copilot), mình có thể tự code ra tool mình cần. Không phải dev chuyên nghiệp, nhưng đủ để build những thứ hoạt động được.

### Những thứ mình đang làm với AI

- **Tool kiểu Bazarr** nhưng theo logic riêng — tự match subtitle, tự fetch từ nhiều nguồn, tự đồng bộ với Plex library.
- **Automation script** cho các tác vụ lặp lại trên media server.
- **Ứng dụng nhỏ** phục vụ workflow cá nhân mà không có tool nào trên thị trường làm đúng ý.

### Pattern mới: ý tưởng → AI → deploy

Bây giờ mỗi khi mình nghĩ ra một ý tưởng — dù là tự động hóa một quy trình trong nhà, hay build một micro-tool cho media server — flow luôn là:

1. Mô tả ý tưởng cho AI.
2. Iterate qua vài vòng để có code chạy được.
3. Đóng gói bằng Docker, deploy lên HomeLAB.
4. Chạy và cải tiến dần.

Tất cả ý tưởng nghĩ ra giờ đều được **tự động hóa hoặc công cụ hóa bằng AI**. Không còn bước “chờ ai đó build” nữa. Mình tự làm luôn.

---

## Nhìn lại: một pattern duy nhất

Nhìn lại toàn bộ hành trình, mình thấy nó chỉ là một vòng lặp:

```text
Có nhu cầu thật
  │
  ▼
Mày mò tự làm
  │
  ▼
Gặp vấn đề mới
  │
  ▼
Học thêm để giải quyết
  │
  ▼
Nhu cầu mới xuất hiện
  │
  ╰──▶ (lặp lại)
```

Clip YouTube về Homebridge dẫn mình đến ESP32. ESP32 dẫn đến MQTT. MQTT dẫn đến Grafana. Mạng yếu dẫn đến MikroTik. Muốn xem phim dẫn đến NAS. NAS dẫn đến Radarr. Và tất cả dẫn đến việc mình ngồi dùng AI để tự code tool cho chính mình.

Không có lúc nào mình ngồi nói “hôm nay mình sẽ học Docker” hay “tuần này mình học networking”. Mình học vì cần, và mình nhớ vì mình dùng.

---

## Gợi ý cho người muốn bắt đầu

Nếu bạn đang muốn tự học technical mà không biết bắt đầu từ đâu:

1. **Chọn một thứ bạn muốn nó hoạt động.** Đừng chọn thứ bạn “nên học”. Muốn đèn nhà tắt bằng giọng nói? Bắt đầu từ đó.
2. **Làm theo clip YouTube, đừng sợ copy paste.** Ban đầu ai cũng thế. Hiểu sẽ đến sau.
3. **Khi nó chạy được, hỏi “tại sao nó chạy”.** Đây là lúc học thật bắt đầu.
4. **Khi nó hỏng, đừng reset từ đầu.** Debug là kỹ năng quan trọng nhất bạn sẽ học được.
5. **Mở rộng dần, đừng nhảy cóc.** Mỗi lớp mới xây trên lớp cũ.

---

## Kết

Mình không phải kỹ sư. Mình là một người tò mò, bắt đầu từ một clip YouTube về Homebridge.

Nhưng mấy năm mày mò HomeLAB cho mình nhiều kiến thức technical hơn bất kỳ khóa học nào: Linux, Docker, networking, IoT, automation, storage, và bây giờ là AI-assisted development.

Tất cả bắt đầu từ việc muốn cái công tắc Tuya nó hiện lên HomeKit. Và nó chưa có dấu hiệu dừng lại.