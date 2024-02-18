---
title: IT 보안 용어 정리
authors: dldkffh
tags: [AAA, ACL, RADIUS, TACACS+, 네트워크, IT, 보안, 개념]
enableComments: true # for Gisqus
---

### AAA (Authentication, Authorization and Accounting)

- **Authentication** (인증)
  - 누구인지, 사용자의 Identity(신원)를 증명
  - 일반적으로 username & password를 통해 증명
- **Authorization** (권한 부여)
  - 수행할 수 있는 작업, 액세스할 수 있는 리소스 지정
- **Accounting** (회계, 계정 관리)
  - 자신이 하는 일, 수행 기간을 모니터링
  - 청구 및 감사에 사용
  <!--truncate-->

### ACL (Access Control List, 접근 제어 목록)

- 개체나 개체 속성에 적용되어 있는 허가 목록
- 누가 또는 무엇이 객체 접근 허가를 받는지, 어떠한 작업이 객체에 수행되도록 허가를 받을지를 지정

#### 주요 명령어

- `access-list` : ACL 설정
- `access-group`, `access-class` : ACL 활성화
- `show ip access-list` : ACL를 설정한 내용
- `show ip access-list` : ACL를 설정한 내용 확인

### RADIUS(Remote Authentication Dial-In User Service)

- 네트워크 서비스에 연결하고 사용하는 사용자에게 중앙 집중식 AAA를 제공하는 네트워킹 프로토콜
- 비밀번호만 암호화되고 사용자 이름, 계정 정보 등과 같은 기타 정보는 암호화되지 않음
- 비밀번호만 암호화하므로 기밀성이 유지되지 않음
- UDP 사용
- Authentication(인증)과 Authorization(권한 부여)를 분리하는 것이 어려움
  - RADIUS 서버에서 클라이언트로 보낸 access-accept 패킷에는 권한 부여 정보가 포함되어서

### TACACS+ (Terminal Access Controller Access-Control System Plus)

- Cisco에서 개발하여 1993년부터 개방형 표준으로 발표한 프로토콜
- TACACS에서 파생, AAA 서비스를 처리하는 별도의 프로토콜
- 표준 TACACS+ 헤더는 남겨두고 패킷의 전체 본문을 암호화
- TCP 사용
- AAA 아키텍처를 사용하여 AAA를 분리
  - Authorization(권한 부여) 및 Accounting(어카운팅)에 TACACS+를 계속 사용할 수 있는 별도의 인증 솔루션이 허용됨
- 다중 프로토콜 지원

### Layer 2 (Data-Link Layer) Security Mechanism

- WPA+WPA2
- 802.1X
- Static WEP
- CKIP

### Layer 3 (Network Layer) Security Mechanism

- IPSec
- VPN Passthrough,
- Web Passthrough

### 라우터 암호화 프로토콜 옵션

- WPA2-PSK(TKIP)
- WPA2-PSK(AES)
- WPA2-PSK(TKIP/AES)

#### TKIP

- WEP 암호화와 매우 유사

#### WPA

- 매우 안전하지 않은 WEP 암호화를 대체
- TKIP는 더 이상 안전한 것으로 간주되지 않으며 더 이상 사용되지 않음
  - 즉, 사용하면 안됨

#### AES

- WPA2에 도입된 보다 안전한 암호화 프로토콜
- 현재 WPA2-PSK에 대한 가장 강력한 암호화 유형

### 출처

- https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/config-guide/b_wl_16_10_cg/multi-preshared-key.pdf
- https://ko.wikipedia.org/wiki/%EC%A0%91%EA%B7%BC_%EC%A0%9C%EC%96%B4_%EB%AA%A9%EB%A1%9D
- https://www.cisco.com/c/en/us/support/docs/wireless/4400-series-wireless-lan-controllers/106082-wlc-compatibility-matrix.html
- https://www.cisco.com/c/ko_kr/support/docs/security-vpn/remote-authentication-dial-user-service-radius/13838-10.html#anc17
- https://en.wikipedia.org/wiki/TACACS
- http://www.ktword.co.kr/test/view/view.php?m_temp1=2479
- https://www.cisco.com/c/en/us/support/docs/wireless/4400-series-wireless-lan-controllers/106082-wlc-compatibility-matrix.html
- https://m.blog.naver.com/PostView.naver?blogId=ibm99&logNo=221620134067&proxyReferer=https:%2F%2Fwww.google.com%2F
- https://m.blog.naver.com/ees4man/220923585466