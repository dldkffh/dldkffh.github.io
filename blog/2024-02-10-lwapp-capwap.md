---
title: LWAPP, CAPWAP
authors: dldkffh
tags: [LWAPP, CAPWAP, 네트워크, 개념]
enableComments: true # for Gisqus
---

### CAPWAP(Control And Provisioning of Wireless Access Points, 무선 액세스 포인트 제어 및 프로비저닝)

- AP와 WLC간의 통신 프로토콜
  - WLC - CAPWAP - AP - 802.11 - CLIENT
  - WLC - LWAPP - AP - 802.11 - CLIENT
- AP와 네트워크 인프라간의 상호작동을 표준화하는데 목표를 둔 IETF 이니셔티
  - AP와 무선 스위치간의 상호운용성을 향상
- 중앙 무선 LAN 액세스 컨트롤러(AC)가 일반적으로 무선 액세스 포인트로 알려진 WTP(Wireless Termination Points, 무선 종료 포인트) 모음을 관리할 수 있도록 하는 상호 운용 가능한 표준 네트워킹 프로토콜
<!--truncate-->
- LWAPP(Lightweight Access Point Protocol)을 기반
  - LWAPP와 유사
  - LWAPP는 CISCO 전용 프로토콜
  - CAPWAP은 표준 기술로 IETF standard로 지정됨
- LWAPP과 다르게 DTLS(Datagram Transport Layer Security, 데이터그램 전송 계층 보안) 터널 설정이 추가되어 있음
- UDP 포트 5246(제어 채널) 및 5247(데이터 채널)을 사용

#### CAPWAP 검색의 작동 방식
1. 무선 액세스 포인트의 전원이 켜지면 연결할 CAPWAP 컨트롤러를 찾는다.
2. 액세스 포인트는 로컬 네트워크에서 CAPWAP 검색 메시지를 브로드캐스트한다.
3. APWAP 컨트롤러는 검색 메시지를 수신하면 구성 정보로 응답한다.

### 출처

- https://en.wikipedia.org/wiki/CAPWAP
- 데이터넷(https://www.datanet.co.kr)
- https://www.linkedin.com/pulse/capwap-explained-briefly-mark-pinchen
