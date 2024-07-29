---
title: AWS 암호화 및 KMS, ACM
authors: dldkffh
tags: [AWS, 클라우드, 암호화, KMS, ACM, 차이를 만드는 AWS 클라우드 보안 첫걸음]
enableComments: true # for Gisqus
---

### 암호화(Encryption)

#### 암호화

- 암호화 기술을 사용하는 상황
  - **저장된** 데이터 보호(Encryption At Rest)
  - **전송 중** 데이터 보호(Encryption At Transit)
- 암호화 방법 : **대칭키** 암호화, **비대칭키** 암호화

#### 저장된 데이터 보호

- 데이터를 저장할 때 **암호화**, 필요할 때 **복호화** 하는 방식
- 주로 하나의 물리적인 기기에 보안을 적용하기 위해 사용
- 주로 키 팔일 혹은 암호를 사용하여 암호화/복호화

<!--truncate-->

#### 전송 중 데이터 보호

- 데이터의 전송 중 암호화를 적용하여 데이터가 탈취 당하지 않도록 보호
- 주로 여러 **시스템/기기 간에 보안**을 적용하기 위해 사용

#### 대칭키 암호화

- **하나의 키**로 암호화, 복호화를 하는 알고리즘으로 연산이 매우 빠름

#### 비대칭키 암호화

- **한 쌍의 키**를 활용한 암호화
- 하나의 암호는 암호화만 가능, 다른 하나는 복호화만 가능
- 연산이 비교적 복잡하지만 **키 전달이 쉬움**

### AWS Key Manage Service

#### Key Management Service (KMS)

- 안전하게 키를 생성하고 관리해주는 서비스
- **리전 단위**로 키를 보관
  - 리전 바깥으로 키가 유출되지 않음
  - 고객 **마스터키**를 사용하여 다양한 키를 생성함

#### Customer Master Key (CMK)

- 마스터키를 논리적으로 표현한 키
- CMK를 사용해서 **암호화에 실제로 사용되는 키**를 생성하고 암호화
- 동작방식
  1. KMS에 키 생성 요청
  2. 평문키를 사용해 암호화
  3. 암호화된 내용과 암호키를 저장
  4. 암호키를 KMS로 보내 평문키 확보
  5. 평문키로 복호화

#### AWS CloudHSM

- **지정된 하드웨어**(공유되지 않음)
- FIPS 140-2 **레벨3** 인증(KMS 레벨2)
- HSM에 맞는 인터페이스 제공

### AWS Certificate Manager

#### AWS Certificate Manager (ACM)

- AWS의 SSL/TLS 인증서를 프로비전, 관리 및 배포하는 서비스
- Public SSL 인증서의 발급 가능(무료)
  - AWS의 서비스에서만 활용 가능(AWS의 지원 서비스 한정)
  - Amazon CloudFront, ALB, Amazon API Gateway 등 특정 서비스에서만 무료 사용
- ACM은 리전 기반
  - AP-Northeast-2 리전의 ALB에서 ACM 발급 인증서 활용

<br/>
