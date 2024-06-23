---
title: 단일 스위치 리부팅 작업 절차
authors: dldkffh
tags: [리부팅, 개념]
enableComments: true # for Gisqus
---

### 단일 스위치 리부팅 작업 절차

#### 스위치 수용 트래픽을 예비 스위치로 절체

1. VRRP mastership 스위치 예비 스위치로 절체
2. ospf interface cost 값을 10,000 적용
3. 스위치 연동 포트 DOWN (서비스 시스템 포트 -> 업링크 포트 -> trunk 포트)

<!--truncate-->

#### 작업

#### 스위치 트래픽 원복 수용

1. 스위치 연동 포트 UP (trunk 포트 -> 업링크 포트 -> 서비스 시스템 포트)
2. ospf interface cost 값 복원
3. VRRP mastership 원복
