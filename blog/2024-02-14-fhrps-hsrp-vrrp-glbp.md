---
title: FHRPs - HSRP, VRRP, GLBP
authors: dldkffh
tags: [FHRPs, HSRP, VRRP, GLBP, 프로토콜, 네트워크, 개념]
enableComments: true # for Gisqus
---

### FHRPs(First-Hop Redundancy Protocols)

- 중복되고 투명한 게이트웨이 연결을 보장하는 데 사용
- 서브 네트워크에서 2개 이상의 라우터가 해당 주소에 대해 백업할 수 있도록 함으로써 기본 게이트웨이를 보호하기 위한 컴퓨터 네트워크 프로토콜 빌드
- 백업 라우터는 라우터 충돌 시 몇 초 내에 활성 라우터를 대체
<!--truncate-->

#### 이중화 구성 이유

- Load balancing : 똑같은 기능을 수행하는 장비를 여러 개 구성하여 네트워크 부하를 분산
- Failover : 하나의 장비가 죽었을 때 다른 장비로 전환되어 서비스 단절 최소화

#### First Hop

- PC가 트래픽을 보내는 네트워크에서 첫 홉으로 여겨지는 기본 라우터를 의미

### HSRP(Hot Standby Router Protocol)

- 시스코 전용 프로토콜
- first-hop device의 failover를 routing redundancy를 통해서 해결
- 기본적으로 HSRP로 구성된 router 한 대는 active device로 동작
  - packet forwarding을 담당
- 다른 한 대의 router는 active router가 문제가 생길 경우 failover할 수 있도록 standby 상태로 운영

|  | HSRPv1 | HSRPv2 |
| --- | --- | --- |
| Timers | Not support millisecond timer | Supports millisecond timer |
| Group range | 0~255 | 0~4095 |
| Multicast address | 224.0.0.2 | 224.0.0.102 |
| MAC address range | 0000.0C07.ACxy, xy값은 HSRP group number | 0000.0C9F.F000~0000.9C9F.FFFF |

### VRRP(Virtual Router Redundancy Protocol, 가상 라우터 장애 복구 프로토콜)

- VRRP는 주로 Failover를 목적으로 Master / Slave 장비 간의 전환을 위해 사용됨
- 표준화된 FHRP이지만 약간 다르게 작동
- **멀티 벤더 환경**에서 사용 가능
- XX가 VRRP 그룹 번호의 헥스 값인 멀티캐스트 가상 MAC 0000.5e00.01XX를 사용
- IOS 객체 추적을 사용하여 인터페이스 상태를 추적
- **VRRP Master**는 **HSRP Active**와 동일함
- VRRP 그룹 IP는 VRRP 라우터 중 하나의 인터페이스 주소이며 가상 IP가 아님

#### Master 장비의 선출 조건

- VIP와 RIP가 같은 장비
- VRRP Priority (우선순위) 값이 큰 장비 (기본값 : 100)
- [RIP](https://ko.wikipedia.org/wiki/%EB%9D%BC%EC%9A%B0%ED%8C%85_%EC%A0%95%EB%B3%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)의 주소가 큰 장비

### GLBP(Gateway Load Balancing Protocol)

- GLBP는 HSRP와 마찬가지로 시스코 독점
- GLBP와 HSRP/VRRP의 차이점은 라우터 중복성 외에도 부하 균형 기능을 추가한다는 것
- Group마다 Virtual Router가 1개 생성
  - Virtual Router 하나 당 Virtual IP 주소가 하나 할당
  - 하나의 Virtual IP에 Virtual MAC 주소가 기본적으로 4개가 생성
  - 결과적으로 4대의 Gateway 장비를 동시에 사용하는 것이 가능
- GLBP는 GLBP 그룹의 각 라우터를 가상 MAC 주소를 할당하는 AVG(Active Virtual Gateway)를 가짐
  - 포맷 : 0007.b400.XXYY
    - XX가 GLBP 그룹이고 YY가 각 라우터마다 다른 수
- 기본 게이트웨이의 가상 IP 주소에 대한 클라이언트 ARP가 해당 그룹에서 가능한 4개의 라우터 중 하나에 가상 MAC 주소로 응답
  - 라운드 로빈 패션 호스트 트래픽에서 그렇게 함으로써 4개의 라우터 모두에 걸쳐 균형 잡힌 부하가 공급
- AVG(Active Virtual Gateway)
  - AVF 중 하나의 장치를 AVG(Active Virtual Gateway)로 선출
  - AVG는 AVF의 가상 MAC 주소를 관리
  - 내부 End Device가 Gateway에 대한 ARP를 요청하는 경우 Loadbalancing 방식에 하나의 AVF 가상 MAC 주소를 응답
- 3가지 방식의 Load-balancing 지원
  - Round Robin (Default)
  - Weighted (가중치 방식)
  - Host-dependent

#### AVG 선출 조건

- GLBP Priority 값이 높은 장비가 선출 (기본값: 100)
- GLBP Priority 값이 동일한 경우 실제 IP 주소의 숫자가 큰 장비가 선출

### 출처

- https://ethan-world.tistory.com/
- https://www.cisco.com/c/en/us/products/ios-nx-os-software/first-hop-redundancy-protocol-fhrp/index.html
- [https://bethepacketsite.wordpress.com](https://bethepacketsite.wordpress.com/2016/03/24/fhrps-hsrp/)
- https://www.nwkings.com/what-is-fhrp-in-networking
- https://peemangit.tistory.com/24
- https://limvo.tistory.com/13
