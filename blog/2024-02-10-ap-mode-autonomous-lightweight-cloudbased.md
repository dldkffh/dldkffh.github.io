---
title: AP 모드 종류 - autonomous, lightweight, cloudbased
authors: dldkffh
tags: [private, IPv4, 네트워크, 개념]
enableComments: true # for Gisqus
---

> **무선 네트워크에서 사용할 수 있는 무선 액세스 포인트의 두 가지 모드**
>
> - Autonomous(자율) AP
> - Lightweight(경량) AP
>
> Autonomous AP와 Lightweight AP는 일반적으로 동일한 네트워크에서 함께 작동할 수 없음

### Autonomous AP (자율 엑세스 포인트)

- 자율 액세스 포인트는 경량 액세스 포인트보다 훨씬 더 흔함
- 최초의 자율 액세스 포인트는 가능한 한 무선 장치를 연결하기 위해 개발
- 현대적인 자율 액세스 포인트는 일반적으로 WLAN을 통해 작동
<!--truncate-->
- 무선 트래픽을 위한 액세스 포인트와 스위치가 결합
  - 컨트롤러는 단일 장치가 독립적으로 트래픽을 관리 가능
- 작은 네트워크에 적합
  - 모든 트래픽을 처리할 수 있는 장치가 하나만 필요하기 때문에 결정이 간단해짐
- 규모가 커질때 최고의 옵션이 아님
  - 수동으로 구성하면 엄청나게 복잡해짐
  - 네트워크를 더 비싸고 덜 신뢰할 수 있게 함

### Lightweight AP (경량 엑세스 포인트)

- 외부 무선랜 컨트롤러(WLC)에 의존
  - 독립적인 컨트롤러를 통해, 많은 Lightweight AP들이 동일한 네트워크에서 동작하도록 구성
  - 외부 WLC를 통해 원활하게 통신 가능
- 무선 네트워크를 확장하기 쉽게 하기 위한 것
  - 용량이나 커버리지를 빠르게 확장하거나 전환해야 할 때 유리
  - 시스템의 플러그 및 재생 특성은 필요에 따라 액세스 포인트를 쉽게 이동하거나 추가할 수 있음
  - 초기에 더 많은 하드웨어를 필요로 함
  - 네트워크 내의 장치 수가 증가함에 따라 설계, 배치 및 유지 보수 비용이 감소

### Cloudbased AP (클라우드 기반 엑세스 포인트)

- 클라우드를 통해 동작
- 클라우드에 데이터를 저장함
- 사용하는 데 있어 가장 큰 유연성 허용

### 출처

- https://www.cablesandkits.com/learning-center/autonomous-vs-lightweight-access-points
