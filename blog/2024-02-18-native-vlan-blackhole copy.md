---
title: native & blackhole VLAN
authors: dldkffh
tags: [VLAN, native, blackhole, 네트워크, 개념]
enableComments: true # for Gisqus
---

### native VLAN

- native VLAN 태그 지정 기능이 없는 장치를 지원하는 VLAN 서비스
- 트렁크 포트에서 태그가 지정되지 않은 트래픽을 전달하는 데 사용

### blackhole VLAN

- 사용되지 않고 죽은 VLAN으로 생성된 VLAN
- 특정 포트나 장치를 격리 또는 격리하거나, 네트워크에 대한 무단 액세스나 트래픽을 방지
<!--truncate-->

#### 네트워크 블랙홀(blackhole)

- 블랙홀은 네트워크에서 데이터가 의도한 수신자에게 도달하지 못했다는 사실을 소스에 알리지 않고 들어오거나 나가는 트래픽이 자동으로 삭제되는 장소

### 출처

- https://www.ruijienetworks.com/support/tech-gallery/what-is-native-vlan#:~:text=Native%20VLAN%20is%20a%20VLAN,when%20trunk%20links%20are%20transmitted
- https://www.examtopics.com/discussions/cisco/view/71351-exam-200-301-topic-1-question-655-discussion/#:~:text=Traffic%20that%20is%20sent%20to%20a%20port,traffic%20on%20a%20network.%20upvoted%2011%20times
- https://en.wikipedia.org/wiki/Black_hole_(networking)#:~:text=In%20networking%2C%20a%20black%20hole%2C%20also%20known,of%20the%20network%2C%20the%20black%20holes%20themselves
