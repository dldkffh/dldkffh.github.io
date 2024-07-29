---
title: AWS VPC 및 네트워크 보안
authors: dldkffh
tags:
  [AWS, 클라우드, VPC, 네트워크 보안, 차이를 만드는 AWS 클라우드 보안 첫걸음]
enableComments: true # for Gisqus
---

### Security Group (보안그룹)

- 인스턴스에 대한 Inbound 및 Outbound 트래픽을 제어하는 **가상 방화벽** 역할
- VPC에서 인스턴스 시작시, 최대 5개의 보안 그룹에 인스턴스 할당 가능
- 기본적으로 모든 포트는 **비활성화**
- 선택적으로 트래픽이 지나갈 수 있는 Port와 Source를 설정 가능
- **Deny는 불가능**
- 인스턴스 단위 : **하나의 EC2 인스턴스**에만 적용되고, 하나의 인스턴스에 하나 이상의 보안 그룹을 설정할 수 있음
- Stateful : Inbound로 들어온 트래픽이 별다른 Outbound 설정 없이 나갈 수 있음

<!--truncate-->

### NACL

- Network Access Control List
- 보안 그룹처럼 **방화벽 역할**을 담당
- **서브넷** 단위
- 포트 및 IP를 **직접 Deny 가능**
  - 외부 공격을 받는 상황 등 특정 IP를 블록하고 싶을 때 사용
- **순서대로** 규칙평가(낮은 숫자부터)

#### VPC의 보안 모법 사례

- 다양한 가용 영역에 여러 서브넷 생성
  - 최대한 분산시켜 저장
- 보안그룹으로 EC2 인스턴스 트래픽 제어
- NACL을 활용하여 서브넷 수준 트래픽 제어
- IAM을 활용하여 트래픽 제어
- VPC 흐름 로그 활용

<br/>
