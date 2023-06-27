---
title: Sorting(정렬)
authors: dldkffh
tags: [알고리즘, c++, visualgo]
enableComments: true # for Gisqus
---

### 정렬을 배우면 쉬워지는 문제들

- 배열 A에서 특정 값 v를 검색
- (정적) 배열 A 에서 최소/최대 또는 k번째 최소/최대 값 찾기
- 배열 A에서 고유성 테스트 및 중복 삭제
- 특정 값 v가 배열 A에 나타나는 횟수 세기
- 배열 A와 다른 정렬된 배열 B 사이에 교집합/합집합을 설정
- $x+y$가 목표 $z$와 같 도록 목표 쌍 $x ∈ A$ 및 $y ∈ A$ 찾기

<!--truncate-->

### 정렬 알고리즘 종류

#### 비교기반 정렬 알고리즘

- [Bubble Sort (버블 정렬)](#버블-정렬)
- [Selection Sort (선택 정렬)](#선택-정렬)
- [Merge Sort (병합 정렬) (재귀적 구현)](#병합-정렬)
- Quick Sort (퀵 정렬) (재귀적 구현)
- Random Quick Sort (랜덤 퀵 정렬) (재귀적 구현)

#### 비교기반이 아닌 정렬 알고리즘

- Counting Sort (카운팅 정렬)
- Radix Sort (기수 정렬)

<br/>

---

<br/>

### 버블 정렬

#### 속도

$O(N^2)$

#### 과정

1. 인접한 항목 쌍(a, b)을 비교
2. 항목의 순서가 잘못된 경우 해당 쌍을 교체(이 경우 a > b인 경우)
3. 배열 끝에 도달할 때까지 1단계와 2단계 를 반복
4. N을 1만큼 줄이고 N이 1이 될 때까지 1단계를 반복

#### 구현

```c showLineNumbers title="c++"
void bubbleSort(int a[], int N) { // 표준 버전
  for (; N > 0; --N) // N 반복
    for (int i = 0; i < N-1; ++i) // 마지막을 제외하고, O(N)
      if (a[i] > a[i+1]) // 비내림차순 아님
        swap(a[i], a[i+1]); // O(1)에서 교체
}
```

<br/>

### 선택 정렬

#### 속도

$O(N^2)$

#### 과정

1. [ L ... N −1] 범위에서 가장 작은 항목의 위치 X를 찾기
2. X번째 항목을 L번째 항목으로 교체
3. 하한 L을 1씩 늘리고 L이 N - 2가 될 때까지 1단계를 반복

#### 구현

```c showLineNumbers title="c++"
void selectionSort(int a[], int N) {
  for (int L = 0; L <= N-2; ++L) { // O(N)
    int X = min_element(a+L, a+N) - a; // O(N)
    swap(a[X], a[L]); // O(1), X는 L과 같을 수 있다(실제 스왑 없음)
  }
}
```

<br/>

### 삽입 정렬

#### 속도

$O( N )$ ~ $O(N^2)$

#### 구현

```c showLineNumbers title="c++"
void insertionSort(int a[], int N) {
  for (int i = 1; i < N; ++i) { // O(N)
    int X = a[i]; // X는 삽입할 항목
    int j = i-1;
    for (; j >= 0 && a[j] > X; --j) // 빠르거나 느릴 수 있음
      a[j+1] = a[j]; // X를 위한 자리 만들기
    a[j+1] = X; // 인덱스 j+1은 삽입점
  }
}
```

<br/>

### 병합 정렬

#### 속도

$O(N^2)$

#### 과정

1. 개별 요소의 각 쌍(기본적으로 정렬됨)을 2개 요소의 정렬된 배열로 병합
2. 2개 요소의 정렬된 배열 쌍을 4개 요소의 정렬된 배열로 병합
3. 프로세스를 반복...
4. 최종 단계: N/2 요소의 정렬된 2개 배열을 병합하여 (간단하게 설명하기 위해 N이 짝수라고 가정함) N 요소의 완전히 정렬된 배열을 획득

##### Divide and Conquer(약칭 D&C) - 분할 정복 패러다임

1. 분할 단계: 큰 원래 문제를 더 작은 하위 문제로 나누고 더 작은 하위 문제를 재귀적으로 해결합니다.
2. 정복 단계: 더 작은 하위 문제의 결과를 결합하여 더 큰 원래 문제의 결과를 생성합니다.

#### 구현

##### 병합 서브루틴 $O(N)$

```c showLineNumbers title="c++"
void merge(int a[], int low, int mid, int high) {
  // subarray1 = a[low..mid], subarray2 = a[mid+1..high], 모두 정렬됨
  int N = high-low +1;
  int b[N]; // 토론: 임시 배열 b가 필요한 이유는?
  int left = low, right = mid+1, bIdx = 0;
  while (left <= mid && right <= high) // 병합
    b[bIdx++] = (a[left] <= a[right]) ? a[left++] : a[right++];
  while (left <= mid) b[bIdx++] = a[left++]; // 남은 경우
  (right <= high) b[bIdx++] = a[right++]; // 남은 경우
  for (int k = 0; k < N; ++k) a[low+k] = b[k]; // 다시 복사
}
```

##### 병합 정렬

```c showLineNumbers title="c++"
void mergeSort(int a[], int low, int high) {
  // 정렬할 배열은 a[low..high]
  if (low < high) { // 기본 사례: low >= high (0 또는 1 항목)
    int mid = (저+고) / 2;
    mergeSort(a, low , mid ); // 두 부분으로 나눕니다.
    mergeSort(a, mid+1, high); // 그런 다음 재귀적으로 정렬
    merge(a, low, mid, high); // 정복: 병합 서브루틴
  }
}
```

<br/>

---

<br/>

### 온라인 연습

- [Kattis - mjehuric](https://open.kattis.com/problems/mjehuric)
- [Kattis - sortofsorting](https://open.kattis.com/problems/sortofsorting)
- [Kattis - sidewayssorting](https://open.kattis.com/problems/sidewayssorting)
