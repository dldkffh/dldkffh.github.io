---
title: AWS CloudTrail 및 CloudWatch
authors: dldkffh
tags:
  [AWS, 클라우드, VPC, 네트워크 보안, 차이를 만드는 AWS 클라우드 보안 첫걸음]
enableComments: true # for Gisqus
---

### AWS CloudTrail

- AWS 계정의 **거버넌스, 규정 준수, 운영 감사, 위험 감사**를 지원하는 서비스
- AWS 인프라에서 계정 활동과 관련된 **작업을 기록**하고 **지속적으로 모니터링, 보관**할 수 있음
- AWS 보안 감사를 위한 서비스 : CCTV
- 여러 서비스에 대한 **API 이용 로그** 등 제공
  - API 호출의 시간 및 결과, 에러, 사용 인증 정보 등을 기록
  - AWS CLI, 콘솔 이용, API 호출 등 모든 이벤트가 대상
  - 일부 Data API의 경우 수동으로 활성화 필요

<!--truncate-->

### AWS CloudWatch

- DevOps 엔지니어, 개발자, SRE(사이트 안정성 엔지니어) 및 IT 관리자를 위해 구축된 **모니터링 및 관찰 기능 서비스**(퍼포먼스 체크)
- AWS에서 제공하는 AWS 서비스 전반에 대한 모니터링 서비스
- 주요 서비스들에 대한 **모니터링(로그, 지표 등) 제공**

#### 주요 기능

- **지표(Metric) 수집** : EC, DynamoDB, RDS 등 시간 순서별 데이터 요소의 집합
- **경보(Alarm)** : 수집된 지표 값에 따라 **알람 생성** 가능
- **로그 수집 및 관리** : Lambda, EC2, Route53, ECS 등 여러 AWS 서비스의 로그 수집
- **대시보드** : 수집한 로그/집표를 기반으로 대시보드 구성

### CloudTrail vs CloudWatch

- CloudTrail : AWS를 감사(Audit)하기ㅏ 위한 서비스로, 단순하게 **AWS 사용 로그만 저장**
- CloudWatch : AWS를 모니터링 하기 위한 서비스로, AWS의 서비스 뿐 아니라 **애플리케이션의 로그 및 동작 로그 취합**

<br/>
