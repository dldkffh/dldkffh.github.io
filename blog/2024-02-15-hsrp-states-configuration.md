---
title: HSRP States/Configuration
authors: dldkffh
tags: [HSRP, 프로토콜, 네트워크, 개념]
enableComments: true # for Gisqus
---

### HSRP States

- Initial : HSRP 동작 않함
- Learn : Hello 패킷 교환 진행중
- Listen : Hello 패킷 완료 및 주기적 교환
- Speak : Hello 패킷 주기적으로 교환, Active 라우터와 Standby 라우터 비교중
- Standby : Hello 패킷 주기적으로 교환, Standby 라우터 선출
- Active : Hello 패킷 주기적으로 교환, Active 라우터 선출
<!--truncate-->
- Speak 상태에서 라우터끼리 서로 경쟁
  - 자신의 값이 좋다면 Active
  - 경쟁에서 진 라우터는 Standby 상태로 넘어감
- Active 과정 예시
  - Listen -> Speak -> Standby -> Active
- Standby 과정 예시
  - Listen -> Speak -> Listen -> Speak -> Standby

### HSRP Configuration

- priority
  - 가장 높은 값을 갖는 라우터가 Active 라우터가 됨
  - 기본값 : 100
  - 우선 순위 범위 : 1-255 사이
  - 값이 동일한 경우 가장 높은 ip를 가진 라우터가 Active 라우터가 됨
- preempt
  - 본래 Active 라우터가 죽었다가 다시 살아난 대기 상태에서 Active 상태로 변환을 하기 위해 사용하는 기능
  - 딜레이 타임 필요
  - Standby에서 바로 Active가 되면 라우팅 테이블을 학습하지 못하여 통신장애 발생
- timer
  - default hello time 3초, hold time 10초 설정 가능
  - hold 타임 값은 hello 타임 값의 3배 이상 되어야 함
- tracking
  - 외부에서는 HSRP가 구성되어 있지 않아 상단으로 가는 인터페이스 장애시 priority 값을 줄여줌으로서 Standby 라우터가 Active 라우터로 변하게 하여 통신이 되게 하는 설정

### 출처

- https://blog.naver.com/gaegurijump/110185200763
- https://feelsogoodcamp.tistory.com/48
