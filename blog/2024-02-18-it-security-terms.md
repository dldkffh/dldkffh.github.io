---
title: IT 보안 용어 정리
authors: dldkffh
tags: [AAA, VPN, ACL, RADIUS, TACACS+, WPA, PSK, SAE, WEP, TKIP, AES, IPsec, IKE, 2FA, 네트워크, IT, 보안, 개념]
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

### VPN

- 두 사이트가 두 장치 간에 데이터를 암호화하고 전송하여 VPN 터널(tunnel)을 만드는 것
- 사이트 간 VPN을 사용하면 여러 고정 위치에 있는 사무실이 인터넷과 같은 공용 네트워크를 통해 서로 보안 연결을 설정할 수 있음

### ACL (Access Control List, 접근 제어 목록)

- 개체나 개체 속성에 적용되어 있는 허가 목록
- 누가 또는 무엇이 객체 접근 허가를 받는지, 어떠한 작업이 객체에 수행되도록 허가를 받을지를 지정

#### 주요 명령어

- `access-list` : ACL 설정
- `access-group`, `access-class` : ACL 활성화
- `show ip access-list` : ACL를 설정한 내용
- `show ip access-list` : ACL를 설정한 내용 확인

### 네트워크 액세스 제어 보안 프로토콜

#### RADIUS(Remote Authentication Dial-In User Service)

- 네트워크 서비스에 연결하고 사용하는 사용자에게 중앙 집중식 AAA를 제공하는 네트워킹 프로토콜
- 비밀번호만 암호화되고 사용자 이름, 계정 정보 등과 같은 기타 정보는 암호화되지 않음
- 비밀번호만 암호화하므로 기밀성이 유지되지 않음
- UDP 사용
- Authentication(인증)과 Authorization(권한 부여)를 분리하는 것이 어려움
  - RADIUS 서버에서 클라이언트로 보낸 access-accept 패킷에는 권한 부여 정보가 포함되어서

#### TACACS+ (Terminal Access Controller Access-Control System Plus)

- Cisco에서 개발하여 1993년부터 개방형 표준으로 발표한 프로토콜
- TACACS에서 파생, AAA 서비스를 처리하는 별도의 프로토콜
- 표준 TACACS+ 헤더는 남겨두고 패킷의 전체 본문을 암호화
- TCP 사용
- AAA 아키텍처를 사용하여 AAA를 분리
  - Authorization(권한 부여) 및 Accounting(어카운팅)에 TACACS+를 계속 사용할 수 있는 별도의 인증 솔루션이 허용됨
- 다중 프로토콜 지원

### Security Mechanism (보안 메커니즘)

#### Layer 2 (Data-Link Layer)

- WPA+WPA2
- 802.1X
- Static WEP
- CKIP

#### Layer 3 (Network Layer)

- IPSec
- VPN Passthrough,
- Web Passthrough

### 무선랜 (무선공유기, Wi-Fi) 보안

- 종류
  - WPA1
  - WPA2
  - WPA3
- 인증 방식
  - PSK (Pre-Shared Key)
  - SAE (Simultaneous Authentication of Equals)
- 암호화 방식
  - WEP (Wired Equivalent Privacy)
  - TKIP (Temporal Key Integrity Protocol)
  - AES (Advanced Encryption Standard)
  - TKIP/AES

#### 옵션 예시

- WPA2-PSK(TKIP)
- WPA2-PSK(AES)
- WPA2-PSK(TKIP/AES)

#### WPA (Wi-Fi Protected Access)

- Wi-Fi 얼라이언스에서 Wi-Fi의 송출 신호에 대한 보안을 위해 고안된 물리 계층에서의 패킷 암호화 방식
- IEEE 802.11i 표준이 출시될 때 까지 취약한 WEP(Wired Equivalent Privacy)을 대신하기 위해 2002년에 발표한 암호화 규격
- 매우 안전하지 않은 WEP 암호화를 대체

#### PSK (Pre-Shared Key, 사전 공유 키)

- 가장 간단한 인증 방법
- 두 당사자가 안전한 채널을 통해 사전에 공유한 비밀 키를 이용해 암호화
- 거의 항상 대칭 키 암호화 알고리즘을 사용

#### SAE (Simultaneous Authentication of Equals, 동일 동시 인증)

- 비밀번호 기반 인증이자 암호 인증된 키 합의 방법
- 공격자가 추가적인 네트워크 상호작용 없이 암호 추측을 시도하는 오프라인 사전 공격(dictionary attack)을 방어
- WPA-PSK(Pre-Shared Key) 인증 방법을 대체하는 방식

#### WEP (Wired Equivalent Privacy)

- 보안의 취약점이 드러나 보안이 중시되는 곳에서는 거의 쓰지 않음

#### TKIP (Temporal Key Integrity Protocol)

- WEP 암호화와 매우 유사
- TKIP는 더 이상 안전한 것으로 간주되지 않으며 더 이상 사용되지 않음

#### AES (Advanced Encryption Standard)

- WPA2 보다 안전한 암호화 프로토콜
- 보안을 뚫는 것이 거의 불가능한 암호화 방식
- 현재 제일 안전한 방식
- 현재 WPA2-PSK에 대한 가장 강력한 암호화 유형

### IPsec (Internet Protocol Security)

- IP 레이어에서 인터넷 통신에 대한 보안을 제공하는 프로토콜 모음
- 현재 IPsec의 가장 일반적인 용도는 두 위치(게이트웨이 대 게이트웨이) 또는 원격 사용자와 엔터프라이즈 네트워크 (호스트 대 게이트웨이) 사이에 VPN(Virtual Private Network)을 제공하는 것
- IKE 프로토콜을 사용하여 보안 사이트 대 사이트 또는 원격 액세스 VPN(Virtual Private Network) 터널을 협상하고 설정

#### IKE 프로토콜

- 시스코에서는 ISAKMP(Internet Security Association and Key Management Protocol)라고도 함
- IKEv1
  - RFC 2409에 정의
  - 인터넷 키 교환
- IKE 버전 2(IKEv2)
  - RFC 4306, IKEv2(Internet Key Exchange) 프로토콜에 정의됨

### 2FA (Two-Factor Authentication)

- 리소스 및 데이터에 액세스할 때 두 가지 형태의 인증이 요구되는 ID 및 액세스 관리 보안 방법

#### 과정

1. 사용자는 자신의 사용자 이름과 비밀번호를 사용하여 웹사이트 또는 서비스에 로그인
2. 비밀번호는 인증 서버에 의해 검증되며, 정확할 경우 사용자는 두 번째 요소에 대한 자격을 얻게 됨
3. 인증서버는 사용자의 2단계 방식(스마트폰 앱 등)으로 고유코드를 전송
4. 사용자는 2차 인증 방식에 대한 추가 인증을 통해 본인임을 확인

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
- https://www.cisco.com/c/ko_kr/support/docs/security-vpn/ipsec-negotiation-ike-protocols/217432-understand-ipsec-ikev1-protocol.html#anc0
- https://namu.wiki/w/WPA
- https://blog.naver.com/ibm99/221620134067
- https://netxhack.com/network/wifi-wpa2-wpa3-tkip-aes-sae-psk/
- https://ko.wikipedia.org/wiki/IPsec
- https://namu.wiki/w/AES
- https://ko.wikipedia.org/wiki/%EA%B3%A0%EA%B8%89_%EC%95%94%ED%98%B8%ED%99%94_%ED%91%9C%EC%A4%80
- https://www.microsoft.com/ko-kr/security/business/security-101/what-is-two-factor-authentication-2fa
