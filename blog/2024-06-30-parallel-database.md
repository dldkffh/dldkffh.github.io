---
title: 병렬 데이터베이스
authors: dldkffh
tags: [병렬 데이터베이스, database, 정보처리기사, 개념]
enableComments: true # for Gisqus
---

### 병령 데이터베이스란?

성능 개선을 목적으로 병렬 컴퓨팅을 통해 데이터 적재, 색인 빌드, 쿼리 평가 등의 데이터베이스 기능들을 수행

### 특징

- 다수의 마이크로프로세서를 동시에 사용하여 데이터 처리를 고속으로 수행
- 주로 멀티프로세서 구조를 통한 병령 처리
- 그외에 공유 메모리 구조, 공유 디스크 구조, 비공유 구조 등

<!--truncate-->

### 수평 분할

- 행을 다른 테이블에 분산

### 수직 분할

- 열을 빼내는 형태로 분할
- 관계의 정규화는 본질적으로 수직 분할에 관련된 과정
- 수직 분할에는 여러 저장 장치를 사용할 수도 있음

### 종류

#### 범위 분할

분할 키 값이 범위 내에 있는지 여부로 구분우편 번호를 분할키로 수평 분할 하는 경우

#### 목록 분할

특정 컬럼의 특징 값을 기준으로 파티셔닝을 하는 방식

#### 해시 분할

특정 컬럼 값에 해시 함수를 적용하여 분할 하는 방식데이터 관리보다는 성능 향상에 목적

#### 합성 분할

여러 분할 방법을 합친 방법

#### 라운도 로빈 분할

파티션에 행의 고른 분포를 원할 때 사용

### 출처

- [devgraphy - 병령데이터 베이스의 병렬 기법](https://devgraphy.tistory.com/entry/%EB%B3%91%EB%A0%AC-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4%EC%9D%98-%EB%B6%84%ED%95%A0-%EA%B8%B0%EB%B2%95)
