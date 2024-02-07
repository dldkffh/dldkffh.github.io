---
title: IPv6 주소 종류
authors: dldkffh
tags: [IPv6, unicast, multicast, anycast, eui-64, 네트워크, 개념]
enableComments: true # for Gisqus
---

### unicast

- one-to-one 통신
- 단일 인터페이스에 대한 네트워크 계층 식별자
- 해당 IPv6 주소로 구성된 인터페이스로 전달
<!--truncate-->
- global unicast
  - 2 or 3으로 시작, 예비되지 않는 모든 주소들
  - 공인 IPv4 주소들과 같이 동작하는 주소들
    - 필요한 기관들은 할당을 받아 사용
    - 할당된 프리픽스로 시작하는 주소들만 사용
    - 인터넷 라우팅이 가능
- unique local
  - FD
  - 사설 IPv4 주소들과 같이 동작하는 주소들
    - 다수의 기관들이 동일한 주소 사용 가능
    - 어떤 주소 등록 기관에도 등록할 필요 없음
- link-local
  - FE80
  - 유니캐스트 (멀티캐스트X)
    - 싱글 호스트를 위한 것
    - 링크로컬 주소로 보내진 패킷은 오직 하나의 IPv6 호스트에 의해 처리
  - 로컬 링크로만 전달
    - 링크 로컬로 보낸 패킷은 로컬 데이터 링크(네트워크)를 벗어날 수 없음
    - 라우터가 링크 로컬 주소가 목적지인 패킷은 전달 안함
    - 동일한 로컬 링크에 있는 장치와 통신하는 데에만 사용
  - 자동으로 생성
    - 모든 IPv6 호스트 인터페이스와 라우터 인터페이스는 자신의 링크 로컬 주소를 자동으로 생성
    - 글로벌 유니캐스트 주소를 학습하기 전 몇가지 초기화 문제 해결 필요
  - 일반적으로 링크 로컬 주소는 하나의 서브넷이 동작 범위인 일부 오버헤드 프로토콜과 IPv6 경로의 다음 홉 주소로써 사용
- loopback
  - ::1
    - 이진수로 보았을때 앞의 127개는 0이고 나머지 1개가 1인 주소
  - 물리적 인터페이스에 할당되지 않은 주소
  - 호스트가 IPv6 패킷을 자신에게 보내는 데 사용 가능
- unknown, unspecified
  - ::
    - 모두 0으로 이루어진 주소
  - IPv6 주소가 없음을 나타냄
  - 소스 주소로만 사용
- embedded IPv4
  - ::/80
  - 주소의 하위 32비트에 IPv4 주소를 전달하는 IPv6 주소

### multicast

- one-to-many 통신
- FF
- well-known
  - ff00::/12
- transient
  - ff10::/12
- solicited-node
  - ff02:0:0:0:0:1:ff00::/104

### anycast

- 특정 서비스를 지원하기 위해 두 라우터는 동일한 애니캐스트 주소를 설정
- 애니캐스트 주소로 전송된 패킷은 해당 주소로 식별되는 “가장 가까운” 인터페이스로 전달
  - “가장 가까운”은 일반적으로 IPv6 라우팅 프로토콜에 따라 최상의 라우팅 메트릭을 갖는 것을 의미
- one-to-closest 통신

### broadcast

- IPv6에는 브로드캐스트가 없음
- 브로드캐스트 기능은 멀티캐스트 주소를 사용해 구현됨

### EUI-64 인터페이스 생성시

중간에 **FFFE** 넣는거임

### IPv4 - IPv6 전환기술

- dual stack(듀얼스택)
  - IPv4와 IPv6를 동시설정하여 통신상태에 따라 선택적으로 사용
- tunneling(터널링)
  - IPv4 네트워크를 경유하여 IPv6간 통신을 위한 방식으로 가상의 경로(터널)를 만들어 통신
  - IPv6패킷은 그 영역에 들어갈 때 IPv4패킷 내에 캡슐화되며 그 영역을 나올때 역캡슐
- translation(주소변환)
  - 변환 헤더를 추가하여IPv4 주소와 IPv6 주소를 상호변환 하는 방식

### 출처

- [networkacademy - IPv6 Address Types](https://www.networkacademy.io/ccna/ipv6/ipv6-address-types)
- [시스코 네트워크 CCNA 자격증 공인 학습 가이드 CCENT/CCNA ICND1 100-105](https://www.cyber.co.kr/book/item/5604)
- [IT Net Tech - 네트워크 기초 - IPv6](https://daengsik.tistory.com/9)
