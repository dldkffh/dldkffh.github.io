---
title: AWS IAM
authors: dldkffh
tags:
  [AWS, 클라우드, IAM, 차이를 만드는 AWS 클라우드 보안 첫걸음]
enableComments: true # for Gisqus
---

### AWS IAM의 고급 활용

#### IAM 정책의 적용 방식

- 명시적인 Deny는 언제나 우선 적용
  - 하나라도 Deny가 있다면 다른 Allow들은 무시됨
- 명시적으로 Allow 하지 않는 경우 묵시적으로 Deny
- 명시적으로 Allow가 있다면 권한 획득

<!--truncate-->

#### IAM 정책 적용 순서

1. 명시적인 Deny
2. SCP(Service Control Policy)
3. 리소스 정책
4. 권한 범위
5. 세션 정책(IAM Assume Role)
6. 정책의 Allow

#### Action

- **특정 Allow/Deny** 할 Action을 정의
- List로 설정 가능
- **와일드카드**로 모든 Action 표현 가능

#### NotAction

- "**지정한 Acttion 이외에~**"에 해당하는 조건을 정의

#### Resource

- '**무엇을**'에 해당하는 내용을 정의
- **ARN**을 사용해 리소스 표현
- 리스트 및 와일드카드로 여러 리소스 표현 가능하며, Variable 사용가능

#### NotResource

- "**이것을 제외하고**"에 해당하는 내용을 정의

#### Condition

- IAM Policy 정책의 **적용 조건을 판별** 가능
- 여러 조건을 활용하여 정책을 잘 구성하는 것이 보안의 핵심 <br/>

<br/>