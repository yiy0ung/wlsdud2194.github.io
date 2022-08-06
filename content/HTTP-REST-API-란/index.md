---
emoji: 🖥️
title: REST API 란
date: '2019-10-28 00:00:00'
author: JY Lee
tags: REST API client http server web
categories: Web
---

![](./images/thumbnail.png)

과거에는 브라우저가 웹서버에 웹페이지를 요청하여 클라이언트를 제공하여 웹페이지가 작동하였습니다.

하지만 최근에는 SPA(Signle-Page-Application)를 이용하여 클라이언트(대표적으로 React, Vue, Angular)를 구현하며, 클라이언트를 서버와 분리하여 클라이언트 로직을 분명히 합니다.

또한 서버에 API를 요청하므로써 웹 어플리케이션을 개발합니다.

## REST API가 무엇인가?

REST API에 REST는 **Representational State Transfer**의 약자로 소프트웨어 프로그램 아키텍처의 한 형식입니다.

REST api의 등장은 2000년도에 HTTP의 주요 저자 중 한 사람인 로이 필딩이 그 당시 웹(HTTP) 설계의 우수성에 비해 제대로 사용되어지지 못하는 모습에 안타까워하며 웹의 장점을 최대한 활용할 수 있는 아키텍처로써 REST를 발표 하였습니다.

## REST 구성

REST API는 다음의 구성으로 이루어져있습니다.

- 자원 (Resource) - URL
- 행위 (Verb) - Http method
- 표현 (Representations)

## REST 특징

REST 아키택처를 이용하여 API를 설계하였을 때 아래와 같은 이점을 가집니다.

### 1) 클라이언트/서버 구조

클라이언트는 유저와 관련된 처리를, 서버는 REST api를 제공함으로써 각각의 역활이 확실하게 구분되고 일관적인 인터페이스로 분리되어 작동할 수 있게 한다.

### 2) 무상태성 (Stateless)

REST는 HTTP의 특성을 이용하기 때문에 무상태성을 갖는다. 즉 서버에서 어떤 작업을 하기 위해 상태정보를 기억할 필요가 없고 들어온 요청에 대해 처리만 해주면 되기 때문에 구현이 쉽고 단순해진다.

### 3) 캐시 처리 가능(Cacheable)

HTTP라는 기존 웹표준을 사용하는 REST의 특징 덕분에 기본 웹에서 사용하는 인프라를 그대로 사용 가능하다.

### 4) 자체 표현 구조(Self-descriptiveness)

Json을 이용한 메세지 포멧을 이용하여 직관적으로 이해할 수 있고 REST api 메세지만으로 그 요청이 어떤 행위를 하는지 알 수 있다.

### 5) 계층화(Layered System)

클라이언트와 서버가 분리되어 있기 때문에 중간에 프록시 서버, 암호화 계층등 중간매체를 사용할 수 있어 자유도가 높다.

### 6) 유니폼 인터페이스(Uniform)

Uniform Interface는 Http 표준에만 따른다면 모든 플랫폼에서 사용이 가능하며, URI로 지정한 리소스에 대한 조작을 가능하게 하는 아키텍처 스타일을 말한다.

## REST API를 설계하는 법

### URL는 정보의 자원을 표현한다.

제목 대로 URL는 정보의 자원을 표현해야하기 때문에 설계 할때 몇 가지 지켜야 할 것들이 있습니다.

**1) 소문자를 사용한다.**

- 대소문자에 차이를 두기 떄문에(foo.com과 FOo.com은 서로 다르다) 혼란을 줄 수 있기 때문에 지양하는 것이 좋다.

**2) 하이픈( - )을 사용한다.**

**3) 확장자를 사용하지 않는다.**

```
http://foo.com/world.txt
http://foo.com/world.png
```

위와 같이 했을 때, 확장자에 때른 url을 만들어야 하기 떄문에 비효울적일 수 있다.

**4) 밑줄( \_\_ )은 사용하지 않는다.**

### 자원에 대한 행위는 HTTP Method로 표현한다

아래가 대표적으로 사용하는 4가지 Mehtod이다.

| HTTP Method | 역할                                                 |
| :---------: | :--------------------------------------------------- |
|     GET     | GET을 동해 해당 리소스를 조회합니다.                 |
|    POST     | POST를 통해 해당 URL를 요청하면 리소스를 생성합니다. |
|     PUT     | PUT을 통해 해당 리소스를 수정합니다.                 |
|   DELETE    | DELETE를 통해 해당 리소스를 삭제합니다.              |

예를 들어 글을 수정하기 위해선 아래와 같이 할 수 있다.

```
POST /posts/put/:id (X)
POST /posts/update/:id (X)

PUT /posts/:id (O)
```

## 마치며 ...

REST API에 대해 대충 알고 사용하고 있었지만 REST API가 생겨난 배경과 사용방법에 대한 여러가지 글을 읽고 직접 정리를 해보니 원리와 구조를 알고 좀더 체계적이게 코드를 작성 할 수 있었던 것 같습니다.

PS. 글에 오류나 보완할 점이 있다면 댓글을 남겨주시면 감사하겠습니다 😄

**참고 자료**
가그린민트 : https://brainbackdoor.tistory.com/53
ToastMeetUp : https://meetup.toast.com/posts/92
위키백과 : https://ko.wikipedia.org/wiki/REST

```toc

```
