---
title: private IPv4
authors: dldkffh
tags: [private, IPv4, 네트워크, 개념]
enableComments: true # for Gisqus
---

### private IPv4 (사설망)

- **사설망** 또는 **프라이빗 네트워크**(private network)
- [인터넷](https://ko.m.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7) 어드레싱 아키텍처에서 사설 [IP 주소](https://ko.m.wikipedia.org/wiki/IP_%EC%A3%BC%EC%86%8C) 공간을 이용하는 네트워크
- [RFC 1918](http://tools.ietf.org/html/rfc1918)과 [RFC 4193](http://tools.ietf.org/html/rfc4193) 표준 준수
- 가정, 사무실, 기업 [랜](https://ko.m.wikipedia.org/wiki/%EB%9E%9C)에 쓰임
<!--truncate-->

### 주소 공간

| 클래스 구분 | 클래스 개수 | 주소 개수 | IP 주소 범위 | 서브넷 마스크 |
| --- | --- | --- | --- | --- |
| 클래스A | 1개 | 16,777,216개 | 10.0.0.0~10.255.255.255 | /24 |
| 클래스B | 16개 | 1,048,576개 | 172.16.0.0~172.31.255.255 | /20 |
| 클래스C | 256개 | 65,536개 | 192.168.0.0~192.168.255.255 | /16 |

### 특징

- 로컬 네트워크 내에서 작동하는 주소
  - 주소들은 인터넷에서 라우팅할 수 없음
  - 개인 IP 주소는 비용이 없음
  - 고유한 개인 IP 주소는 동일한 네트워크에 있는 모든 장치에 제공
    - 기본적으로 네트워크 라우터에 의해 특정 장치로 할당
    - LAN 관리자 또는 네트워크 운영자에 의해 할당
- 디바이스들은 전체 인터넷에 연결되지 않고 동일한 네트워크에서 서로 통신
- 개인 IP 주소는 특정 네트워크 내에서 더 많은 보안을 제공

### 출처

- [https://ko.m.wikipedia.org/wiki/사설망](https://ko.m.wikipedia.org/wiki/%EC%82%AC%EC%84%A4%EB%A7%9D)
- https://www.geeksforgeeks.org/private-ip-addresses-in-networking/
