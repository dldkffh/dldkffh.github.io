---
title: AWS와 보안 - CIA, AAA, AWS 보안
authors: dldkffh
tags: [AWS, CIA, AAA, 보안, 클라우드, 개념, 차이를 만드는 AWS 클라우드 보안 첫걸음]
enableComments: true # for Gisqus
---

### 보안이란?

시스템, 네트워크, 데이터, 애플리케이션 등의 정보기술의 무결성을 유지하고 외부의 공격으로부터 보호하는 관리적, 기술적 방법

<br/>

### CIA 모델

- Confidentiality 기밀성
- Intearity 무결성
- Availability 가용성

##### 위 세가지를 중심으로 한 보안 모델

-> 이 모델을 통해 다른 카테고리를 추가 / 보안하여 모델 적용

<!--truncate-->

#### Confidentiality 기밀성

- 검증되거나 허용되지 않는 주체에게는 정보 및 데이터 미공개 원칙
- 정보 및 데이터는 허용된 주체에게는 공개될 수 있어야 함
  - ex : 개인정보, 은행 계좌의 잔액, 신용카드 번호, 주민등록 번호
- 권한 검증 -> 데이터 공개의 순서로 진행검증/허용된 주체인지 판단하는 프로세스(Identification) 필요

##### 대응 개념

- 암호화 : SSL, TLS, HTTPS
- IAM : 자격증명, MFA 인증 등

#### Intearity 무결성

- 검증되거나 허용되지 않은 주체가 데이터를 변경할 수 없다는 원칙
- 데이터와 정보의 무결성을 유지하기 위한 원칙

##### 대응 개념

- S3의 객체 권한 : ACL/Bucket Policy / 버저닝
- 원장(장부)(Ledger) DB : Amazon QLDB
- S3 / CloudWatch 로그의 다중 계정 보관

#### Availability 가용성

- 서비스 혹은 시스템이 정상적으로 동작 가능한 상태를 유지하는 원칙
- 외부의 공격과 침입에 대비하여 서비스 혹은 시스템을 보호하는 원칙

##### 대응 개념

- 해킹(DDOS, XSS)의 방지
- 보안 그룹 / NACL
- AWS WAF / AWS Shield
- 고가용성 / 장애내구성의 확보
- 인시던트 매니징 (AWS Config 등)

<br/>

### AAA 모델

- Authentication(인증), Authorization(인가or권한 부여), Accounting(계정 관리) 세가지를 중심으로 한 보안
- 모델 -> 대부분 CIA 모델에 다른 카테고리를 추가 / 보안하여 모델 적용

#### Authentication(인증)

- 정보에 접근하는 주체 증명
- 다양한 Factor 기반으로 자신을 증명
- 다양한 주체에서 인증을 담당 가능
  - ex : Facebook으로 로그인하기, 구글로 로그인 하기 등
- AWS의 대응 개념
  - ex : AWS SSO, AWS Active Directory 등

#### Authorization(인가or권한 부여)

- 인증된 대상에 대해서 역할을 수행하기 위한 궈난을 부여하는 과정
- 부여된 권한 밖의 행동에 대해 허용하지 않는 과정 포함
- 상황별, 조건별로 다른 권한을 부여할 수도 있음
- AWS의 대응 개념 IAM 역할, IAM 정책

#### Accounting(계정 관리)

- 계정의 활동을 기록하고 감사할 수 있어야 한다는 원칙
- 보안 사고 발생시, 인지할 수 있어야 함
- 보안 사고 발생시, 해당 사고의 내역을 추적할 수 있어야 함
- AWS의 대응 개념 Amazon Cloud Watch, Amazon CloudTrail

<br/>

### 클라우드 보안 사고 사례

##### 95% 고객 실수

#### 자격 증명 유출

- 클라우드 인프라를 접근/관리하기 위한 자격증명의 유출
- Git/Docker Hub의 도커 파일 등 공개된 저장소에 자격증명의 유출

#### 클라우드 환경의 데이터 유출

- 클라우드 환경의 스토리지 보안 정책의 미비로 인한 데이터 유출

<br/>

### AWS 보안 기초

방지, 탐지, 대처, 해결

#### 방지

- 데이터의 유출과 침입 등의 보안 사고를 방지

#### 탐지

- 로깅, 모니터링을 통해 AWS 인프라 및 조직의 보안 상태를 파악
- 보안 관련 히스토리 파악

#### 대처

- 자동화된 인시던트 응답, 복구를 통해 문제 해결 및 원인 분석

#### 해결

- 이벤트 기반 자동화를 활용하여 실시간, 신속하게 문제 해결
- 인프라 보호

#### AWS의 보안 관련 서비스

- 장애 인지 / 파악 : AWS CloudWatch, AWS Config
- 활동 감사 : AWS CloudTrail
- 데이터 암호화 및 키 관리 : AWS KMS, AWS CloudHSM, AWS Secrets Manager, AWS Certification Manager
- 권한 관리 : AWS IAM
- 기타 보안 관련 서비스 : Amazon Inspector, Detective, Macie, AWS WAF, Shield, GuardDuty, Security Hub 등

<br/>

### AWS 규정 준수

- 클라우드를 활용할 경우, 고객에게 납품할 경우, 클라우드를 활용한 인증을 받을 경우 등 AWS가 어떤 규정을 준수하는가를 아는 것이 중요
- AWS에서는 다양한 규정을 준수하고 있으며 각 서비스별 준수 정도가 다름
- 규정 준수를 위해서는 규정을 준수하고 있는 서비스를 이용하는 것이 중요

#### AWS Artifact

- 규정 준수와 관련된 정보를 제공하는 신로할 수 있는 리소스

<br/>

### AWS의 공동 책임 모델

- AWS는 클라우드의 보안을 책임지고, 고객은 클라우드에서의 보안 책임을 준수한다.
- AWS 책임 : 하드웨어, 소프트웨어, 시설 운영
- 고객 책임 : OS 패칭(일부 서비스 제외), 애플리케이션 보안 데이터 암호화, SSH, HTTPS, IAM

##### 고객이 할 수 있는 것은 고객 책임이고, 고객이 할 수 없는 것은 AWS 책임이다.

<br/>
