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

#### First Hop

- PC가 트래픽을 보내는 네트워크에서 첫 홉으로 여겨지는 기본 라우터를 의미

### HSRP(Hot Standby Router Protocol)

- 시스코 전용 프로토콜
- first-hop device의 failover를 routing redundancy를 통해서 해결

### VRRP(Virtual Router Redundancy Protocol)

### GLBP(Gateway Load Balancing Protocol)

### 출처

- https://ethan-world.tistory.com/
- https://www.cisco.com/c/en/us/products/ios-nx-os-software/first-hop-redundancy-protocol-fhrp/index.html
- [https://bethepacketsite.wordpress.com](https://bethepacketsite.wordpress.com/2016/03/24/fhrps-hsrp/)
- https://www.nwkings.com/what-is-fhrp-in-networking
