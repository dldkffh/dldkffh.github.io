---
title: AWS Secret Manager & AWS WAF, AWS Shield
authors: dldkffh
tags:
  [
    AWS,
    클라우드,
    Secret Manager,
    WAF,
    Shield,
    차이를 만드는 AWS 클라우드 보안 첫걸음,
  ]
enableComments: true # for Gisqus
---

### AWS Secret Manager

#### AWS Secret Manager의 개념

- 애플리케이션, 서비스, IT 리소스에 액세스할 때 **필요한 보안 정보를 보호**
- 수명 주기에 걸쳐 데이터베이스 자격 증명, API 키 및 다른 보안 정보를 손쉽게 교체, 관리 및 검색할 수 있음

#### Secret Manager 특징

- **보안 정보**(암호, API Key 등)를 안전하게 저장하고 손쉽게 사용할 수 있도록 도와주는 서비스
- 보안 정보의 **주기적인 교체**(Rotation) 지원
- CloudFormation 등 **다른 서비스와 연동**하여 안전한 보안 확보 가능

<!--truncate-->

### AWS WAF와 AWS Shield

#### AWS Web Application Firewall의 개념

- 가용성에 영향을 주거나, 보안을 위협하거나, 리소스를 과도하게 사용하는 일반적인 웹 공격으로 부터 **웹 애플리케이션이나 API를 보호**하는 데 도움이 되는 웹 애플리케이션 방화벽

#### AWS WAF 특징

- **트래픽을 모니터링**하여 공격을 방어해주는 서비스로 AWS의 여러 서비스와 연동
- 실제 공격 발생시, 해당 트래픽이 **서비스에 도달하지 않도록** 하여 보호
- **여러 조건**에 따라 트래픽을 제어 가능
- AWS WAF 규칙
  - AWS Managed 규칙 : AWS에서 직접 생성한 규칙
  - 유저 생성 규칙 : 조건 등에 따라 Block, Allow, Count, CAPTCHA 직접 구성

#### AWS Shield의 개념

- AWS에서 실행되는 애플리케이션으로 보호하는 **DDoS 보호** 서비스
- AWS Shield는 애플리케이션 가동 중지 및 지연 시간을 최소화하는 상시 탐지 및 자동 인라인 통합을 제공하므로 DDoS 보호를 위해 AWS Support를 이용할 필요가 없음

#### AWS Shield 특징

- **DDoS 공격을 방어**해 주는 서비스
- 모든 AWS 계정에 **기본적으로 적용**되어 있음
- 무료 버전과 어드배스 버전이 있음

### 기타 AWS 보안 서비스

- Amazon Inspector : AWS에 배포된 애플리케이션의 보안 및 규정 준수를 개선하는 데 도움이 되는 **자동 보안 평가 서비스**
- Amazon Macie : 완전 관리형 데이터 보안 및 데이터 프라이버시 서비스로서, **기계 학습 및 패턴 일치를 활용**하여 AWS에서 민감한 데이터를 검색하고 보호
- Amazon GuardDuty : AWS 계정 워크로드, Amazon S3에 저장된 데이터를 보호하기 위해 악의적 활동 또는 무단 동작을 지속적으로 모니터링하는 **위협 탐지 서비스**
- Amazon Cognito : 웹과 모바일 앱에 빠르고 **사용자 가입, 로그인 및 액세스 제어** 기능을 추가함
- Amazon Detective : **잠재적 보안 문제나 의심스러운 활동의 근본 원인**을 쉽고 빠르게 분석, 조사 및 식별함

<br/>
