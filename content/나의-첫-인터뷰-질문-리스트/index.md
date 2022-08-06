---
emoji: 💬
title: 나의 첫 인터뷰 질문 리스트
date: '2019-12-22 00:00:00'
author: JY Lee
tags: JavaScript caching http web 면접
categories: Web
---

![](./images/thumbnail.png)

학교에 고등학생 개발자를 채용하기 위해 기업설명회가 열렸었는데, 지원하고 싶은 3학년 학생과 2학년 학생들을 대상으로 채용 면접이 진행되었습니다.

성장하는 스타트업 회사이고, 떨어져도 좋은 경험이 될 수 있을 것 같아 **웹 프론트 개발**에 지원하여 면접을 진행하였습니다.

난생처음 보는 **기술면접**에서 한 50%정도만 정확히 이야기 한 것 같았는 데, 면접을 통해 개발을 할 줄 아는 것도 중요하지만 개발에 필요한 이론을 습득하는 것도 꽤나 중요한 것 임을 알게 되는 계기가 되었던 것 같습니다.

이 글에서는 면접의 질문 내용 중에 웹 개발에 있어서 꽤나 중요했던 질문들이 있어서 정리해보려고 합니다.

## 1. 웹 표준이란?

> 웹 표준이란 www(World Wide Web) 의 측면을 서술하고
> 정의하는 공식 표준이나 다른 기술 규격을 가리키는 일반적인 용어이다

보통 웹 개발과 디자인에 관계되어 표준이 되는 규칙등을 말한다.
이러한 규칙들은 **W3C** 에서 표준을 정의하고 발표(?)한다.

- HTML : 접근성과 시멘틱 태그(main, section 태그 등)의 가이드라인
- CSS : css의 W3C 권고
- Javascript : 바닐라 js, ESMA스크립트로 불리는 ESMA 국제 표준

이러한 규칙을 지킴으로써 무엇을 얻을 수 있을까?

1. CSS와 HTML이 분리되어 유지보수에 들어가는 시간이 단축되고, 불필요한 마크업이 최소화되어 페이지 로딩속도가 향상된다.
2. 오래된 브라우저에서도 컨텐츠가 적절하게 표시되고 호환성과 운용성이 확보된다.
3. 논리적이고 효율적으로 작성된 웹 문서는 코드의 양이 줄어 파일 크기가 줄고 서버의 부담을 감소시킬 수 있다.

---

## 2. HTTP 통신에 대해

http의 전반적인 부분에 관한 질문이였습니다.

### - HTTP 란,

HTTP (HyperText Transfer Protocol)는 WWW 상에서 정보를 주고 받을 때, 사용하는 프로토콜이다. TCP 혹은 UDP 기반으로 작동하고 80번 포트를 이용하여 통신한다.

HTTP 기본적으로 요청과 응답으로 이루어져있는 데, 클라이언트에서 요청을 하면 스트림을 연결하고 서버에서 응답을 해준 뒤에 스트림을 종료하는 형식으로 데이터 전송이 진행된다. (http/1)

HTTP의 종류로는 현재는 HTTP/1.1, HTTP/2, HTTP/3가 존재하고 각 버전마다 작동 방식이 다르다. (HTTP/1.1, 2는 TCP, HTTP/3 UDP 기반으로 작동 - 자세한 내용은 추후 글에서...)

### - HTTP Header 와 Body

HTTP는 요청와 응답을 할 때, 기본적으로 **HTTP Header 와 Body**로 구성하여 통신합니다. **Header**에는 바디 데이터의 형식, 요청 클라이언트의 정보, 쿠키 데이터 등을 포함하고 **Body**에는 서버에 전송하는 데이터를 가지고 있다.

#### 공동 General

- **Request URL :** 요청 주소
- **Request Method :** 요청 메소드, 자원에 대한 요청 형식을 명시한다(GET, POST, PUT, DELETE 등)
- **Status Code :** 응답 코드(200-ok, 400-bad request 등)

#### 요청 Header 정보

- **Accept :** 클라이언트가 허용할 수 있는 파일 형식(Mime type), **\*/\*** 는 모든 파일 형식을 허용한다는 의미
- **User-Agent:** 클라이언트 소프트웨어 정보(브라우저 종류, OS 등)
- **Host :** 요청 서버의 IP
- **Referer :** 특정 페이지에서 링크를 클릭하여 요청하였을 경우 나타나는 필드로, 링크를 제공한 페이지에 대한 정보를 명시한다.
- **Origin :** 요청이 어디서 시작되었는지를 명시합니다.
- **Accept-Language:** 클라이언트가 인식할 수 있는 언어(ko, en 등)의 우선 순위를 지정할 수 있다.
- **Accept-Encoding :** 클라이언트가 인식할 수 있는 인코딩 방식을 명시

##### 응답 Header 정보

- **Server :** 웹서버 정보 표현
- **Date :** 현재 날짜
- **Cache-Control :** 웹 캐싱 이용을 위한 정보 (캐시정책을 정의할 수 있다 - 응답 해더에서도 사용가능)
- **Content-Type :** Body 데이터의 형식 (클라와 서버가 다를 수 있다 - text/html, application/json 등)
- **Content-Encoding:** 어떤 것으로 압축을 하였는지 명시
- **Connection :** 연결 상태를 의미한다. 요청시에는 keep-alive, 응답시에는 close로 된다.(Http/1에서만 사용)

---

## 3. 웹 클라이언트와 서버 상의 보안 문제

### - SQL Injection

데이터 베이스와 연결되어 있는 어플리케이션의 값을 조작하여 DBMS에 의도하지 않은 결과값을 반환하도록 하는 공격 기법을 말한다.

### - XSS 공격

XSS는 **Cross Site Scripting**의 약자로 공격자에 의해 작성된 스크립트가 다른 사용자에게 전송되는 것이다. 이 스크립트를 통해 정보 탈취, 다른사이트로 이동시킬 수 있는 공격이다. 만약 XSS이 가능 하다면 주요한 다른 공격(CSRF 공격 등)도 손쉽게 가능해진다.

### - 직접 객체 참조

웹 브라우저에서 확인 가능한 경로의 상위로 탐색하여 특정 시스템 파일을 다운로드하는 공격 기법을 말한다.

예를 들어 아래와 같은 주소로 파일을 다운로드 한다면

```
http://example.com/file/download.jsp?filename=post.jpg
```

QueryParam를 수정하여 시스템의 파일을 탐색, 다운로드 하여 서버의 중요 정보를 탈취 당할 수 있다.

```
 http://example.com/file/download.jsp?filename=../api/post.jsp
```

### - CSRF

CSRF는 **Cross Site Request Forgery**의 약자로 불특정 다수에게 피해를 주는 공격이다. CSRF는 로그인된 사용자의 의지와는 무관하게 생성, 수정, 삭제등 공격자가 의도한 행위를 하게 한다. 위에서 말했던 XSS가 보안되어 있지 않다면 XSS를 이용하여 CSRF 공격 역시 가능해질 수 있다.

이를 막기 위해서는 특정 액션, 요청에서 사용자를 인식하는 파라미터 값이 존재하지 않도록 해야하고, 있더하더라도 인증과정을 통해 이를 예방해야 합니다.

---

## 4. TCP의 특징

1. 연결형 서비스를 제공
2. 흐름제어 및 혼잡제어
3. 높은 신뢰성을 제공
4. 전송 과정이 복잡
5. 데이터 전송 크기 제한 X
6. UDP 보다 비교적 느린 전송속도
7. UDP 보다 오버헤드가 큰 편

---

## 5. Caching 캐싱

캐싱이란 컴퓨터에서 오래걸리고 반복적인 일 혹은 정적인 것을 특정 공간에 미리 **저장**하는 것이다.
캐싱을 이용하면 응답시간을 단축할 수 있고 짧은 만큼 **검색엔진**에 우선순위를 가질 수 있다.

### - Web Cashing (클라이언트)

이미지나 HTML, CSS, Javascript등과 같은 정적 파일을 웹브라우저에서 캐싱하는 방법으로 내부 디스크에 저장하여 관리한다. Header 지시문(Cache-Control)을 사용하면 웹 캐싱을 설정할 수 있다.

### - Http Reverse Proxy Cashing (서버)

![proxy caching.png](https://images.velog.io/post-images/wlsdud2194/78dc5900-247d-11ea-ac67-e9a0ffd3f7c8/proxy-caching.png)
리버스 프록시 캐싱이란 웹 서버로 유입되는 HTTP 트래픽을 캐싱하여서 동일한 요청이 들어왔을 때, 프록시 서버에 캐싱된 데이터를 응답해줌으로써 응답속도를 빠르게 하는 것 이다.

이 처럼 처리하였을 때 캐싱 이외에도 아래와 같은 이점을 얻을 수 있다.

- 로드밸런싱을 통해 서버에 부하되는 트래픽을 분산할 수 있다.
- 실제 리얼 서버의 주소를 보호할 수 있다.
- GSLB(Global Server Load Balancing)을 통해 지리적으로 가장 가까운 프록시 서버에 요청하여 응답 속도를 단축할 수 있다.

### - 캐싱의 문제점

캐싱의 가장 큰 문제점은 파일이 달라졌을 때이다, 만약 이전에 저장해두었던 정적 파일(이미지, css, js 파일)들이 변경되었을 때, 어떻게 최신 데이터로 변경할 것인가?

이를 **갱신의 어려움**이라고 한다. 내가 찾아본 해결방법은 2가지 이다. (더 있다면 알려주세요 ㅠㅠ)

1. **TTL(Time To Live)**
   캐시를 생성할 때, 만료기간을 두어서, 만료기간을 지나면 캐시할 데이터를 다시 받아오는 방법

2. **캐시의 명시적 삭제**
   캐시가 유효하지 않을 때, 캐시를 명시적으로 삭제하고 새로운 캐시를 만드는 방법

---

## 5. DOM에 대하여

DOM은 **Document Object Model** 이라는 의미로 웹 페이지의 인터페이스를 의미한다. **트리구조**로 되어 있으며 페이지의 컨텐츠 및 구조, 스타일을 읽고 조작할 수 있는 API를 제공함으로써 자바스크립트와 같은 스크립팅 언어를 통해 조작할 수 있도록 해주는 것이다.

### 용도

1. 뷰포트에 무엇을 렌터링할지 결정하기 위해 사용
2. 페이지의 콘텐츠 및 구조, 그리고 스타일을 스크립팅 언어에 의해 수정되기 위해 사용

### DOM의 조건

- 항상 유효한 HTML 형식
- 자바스크립트에 수정될 수 있는 동적 모델이어야 한다.
- 가상 요소를 포함하지 않는다. (Ex. ::after)
- 보이지 않는 요소를 포함한다. (Ex. display: none)

---

## 6. 쿠키와 세션이란?

### - 쿠키

사용자의 정보 혹은 일시적으로 저장해야하는 데이터를 클라이언트의 디스크에 **일정 기간**동안 저장 하여 보관하는 것이다.

### - 세션

서버에 메모리 혹은 메모리 디비에 일시적으로 데이터를 저장하는 것으로 RAM에 데이터를 저장하여 보관한다. 따라서 서버가 종료되면 저장해두었던 데이터가 모두 사라질 수 있다. (메모리 디비 같은 경우는 디스크에 저장하도록 할 수 있다)

---

## 7. `script` 태그 속성, async, defer 속성

HTML5 부터 script 태그에 추가된 속성으로 async와 defer 라는 속성이 있다.
이 둘에 차이는 호출하는 방법에서 차이가 생기는데

```html
<script async src="./first.js"></script>
<script defer src="./second.js"></script>
```

아래 그림을 보면 위에 아무 속성을 쓰지 않으면 script 문서을 읽어 들일 때까지 페이지 파싱을 중단한다. 따라서 로딩속도가 느려진다.

그와 반대로 defer와 async는 비동기로 먼저 네트워크상 불러오고 추후에 execution을 한다.
![javascript_execution.jpg](https://images.velog.io/post-images/wlsdud2194/99a39d20-23b9-11ea-b188-554875b92f73/javascriptexecution.jpg)

- async : 다 불러와지면 페이지 파싱을 중단하고 execution
- defer : 다 불러와지고 페이지 파싱이 끝이 나야지만 execution

---

## 8. JS 클로저란?

클로저란 내부함수가 외부함수의 맥락(context)에 접근하는 것을 말한다.

```javascript
// example 1 ///////////
function wallet() {
  let money = 1000;

  return function () {
    return money;
  };
}

console.log(wallet()()); // 1000

// example 2 ///////////
function subject(defaultValue) {
  let pos = 3000;

  return function (x) {
    return pos - defaultValue + x;
  };
}

const subject100 = subject(100);
console.log(subject100(20)); // 2920
```

이 처럼 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미한다.

아래의 코드를 살펴보자. 아래 코드는 클로저의 특성을 이용하여 다른 언어에서 마치 **private 변수**를 사용하듯이 하여 **캡슐화**와 **은닉화**의 장점을 얻을 수 있다.

```typescript
function Counter(defaultValue: int): object {
  let privateValue: int = defaultValue;

  return {
    getter: (): int => privateValue,
    setter: (value: int) => {
      privateValue = value;
    },
    increase: () => {
      privateValue += 1;
    },
    decrease: () => {
      privateValue -= 1;
    },
  };
}

const myCounter = Counter(10);

myCounter.setter(20);
console.log(myCounter.getter()); // 20

myCounter.increase();
myCounter.decrease();
myCounter.increase();
console.log(myCounter.getter()); // 21

myCounter.privateValue = 40; // error /////////
```

---

## 9. 호이스팅에 대해

아래의 코드는 정상적으로 작동한다. 호이스팅이 되어, 선언 이전에 호출하여도 구현이 되어있다면 함수를 호출하여 결과를 반환한다.

```javascript
add(1, 2); // 3

function add(a, b) {
  return a + b;
}
```

하지만 아래와 같은 코드는 작동하지 않는다. add라는 변수에 함수가 할당되기 전에 함수를 호출하여 아래와 같이 에러를 발생시킨다.

```javascript
add(1, 2); // TypeError: add is not a function

const add = (a, b) => {
  return a + b;
};
```

---

## 10. JS 이벤트 버블링 + 이벤트 캡쳐

**이벤트 버블링**이란 자식 element의 이벤트가 발생하였을 때, 부모 element의 이벤트도 함께 호출되는 것을 말한다. 이를 막기위해서는 event.stopPropation()을 호출하여 상위 DOM에 이벤트가 전달되지 않도록 한다.

![bubble.png](https://images.velog.io/post-images/wlsdud2194/6e828910-23b6-11ea-b874-774057d25cf0/bubble.png)

반대로, **이벤트 캡쳐**란 상위 element로 부터 이벤트가 전달되는 방식이다.
![capture.png](https://images.velog.io/post-images/wlsdud2194/85685a10-23b6-11ea-879b-370228c88536/capture.png)

아래 코드와 같이 capture 옵션을 true로 하였을 때, 하위 element의 이벤트를 탐색하여 이벤트를 실행시킨다.

```javascript
var body = document.querySelector('body');

body.addEventListener('click', bodyClickEvent, {
  capture: true, // default는 false
});

const bodyClickEvent = (e) => {...};
```

만약 최하위 element에 이 옵션을 적용하면 최상위 element 부터 탐색하여 자신을 포함한 하위 이벤트를 순차적으로 호출합니다.

---

## 11. 클라이언트에서의 애니메이션 처리

[@tmmoond8](https://velog.io/@tmmoond8)님의 글을 참조하였습니다.

CSS : transition, transform, keyframe 등을 이용하여 애니메이션을 처리할 수 있다.
JS : setTimeout, setInterval을 사용하기도 하고, webGL, Canvas등으로 구현한다.

### - css 애니메이션과 js 애니메이션의 차이

- **크로스 브라우징:** jquery가 낮은 버전에서도 호환을 잘 해주는 편이다.
- **속도차이:** velocity.js > css 애니메이션 > jquery 애니메이션
- **생산성:** 라이브러리를 제외하고 일일히 Html, Css관리를 해주어야 하는 jquery 보다 css가 비교적 더욱 빠르다

[velocity.js](http://velocityjs.org/) 구글과 어도비와 같은 회사에서 만들어낸 애니메이션 라이브러리이다.

velocity.js의 애니메이션 최적화 방법이다.

1. 레이아웃 스레싱을 최소화
2. DOM 질의를 최소화 하기 위해 속성값을 캐싱
3. px, em 같은 단위 변환 비율을 캐싱
4. 업데이트가 시각적으로 판별할 수 없는 수준이면 스타일 업데이트 스킵

빠르고 안정적인 애니메이션을 구현하기 위해서는 라이브러리를 적극사용하는 것이 좋을 것 같다.

## 👍 마치며

면접의 내용이 주로 기술, 전공과 관련된 질문이 많았지만 이론적인 부분을 한번더 검토하게 되는 중요한 계기가 되었던 것 같습니다. 프론트엔드로 지원하여 웹 클라이언트에 관한 내용이 꽤 많네요😅

PS. 수정사항에 대한 피드백은 언제든지 환영입니다. ㅎㅎ

```toc

```
