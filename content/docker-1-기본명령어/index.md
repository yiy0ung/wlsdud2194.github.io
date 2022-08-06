---
emoji: 🐳
title: Docker 도커 - 1. 기본 명령어 모음
date: '2019-09-24 00:00:00'
author: JY Lee
tags: docker
categories: Docker
---

![](./images/thumbnail.png)

도커란 간단하게 말해 서버환경에서의 다양한 프로그램, 실행환경을 **컨테이너**라는 격리된 환경에서 실행할 수 있게 해주는 **컨테이너 기반의 오픈소스 가상화 플랫폼** 입니다.

이를 이용하면 복잡한 서버환경을 코드로 쉽게 관리할 수 있고 안정적인 배포환경 (무중단 배포 등) 구성할 수 있습니다.

그래서 이번 글에서는 도커에서 이미지를 받고 컨테이너를 생성하고 삭제 할 때, 자주쓰는 기본 명령어를 알아보려 합니다 :)

## docker 설치

#### 리눅스 자동 설치 스크립트

```
$ sudo wget -qO- https://get.docker.com/ | sh

$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sh get-docker.sh
```

#### 우분투

```
$ sudo apt-get update
$ sudo apt-get install docker.io
$ sudo ln -sf /usr/bin/docker.io /usr/local/bin/docker
```

#### 윈도우, 맥

Docker for windows, Docker for Mac 설치

## 📜 이미지 관련

도커에서는 도커 이미지를 이용하여 컨테이너를 생성할 수 있는데,

도커 이미지를 이용하면 이미지에 설정해둔 대로 컨테이너의 구성환경을 적용할 수 있습니다.

#### 이미지 목록 보기

```
$ sudo docker images
```

#### 이미지 검색

```
$ sudo docker search [이미지 이름]
```

#### 이미지 받기

```
$ sudo docker pull [이미지 이름]:[버전]
```

버전: **latest** 를 쓰면 최신 버전으로 받을수 있다.

#### 이미지 삭제

```
$ sudo docker rmi [이미지 id]
```

컨테이너를 삭제하기 전에 이미지를 삭제 할때, **-f** 옵션을 붙어면 컨테이너도 강제 삭제가 가능하다.

```
$ sudo docker rmi -f [이미지 id]
```

## 📦 컨테이너 관련

다양한 프로그램(nginx, database, WAS 등)을 컨테이너 라는 격리된 환경을 이용하여 실행시킬수 있습니다.

#### 컨테이너 목록 보기

```
$ sudo docker ps
```

옵션

- -a : 모든 컨테이너 목록 출력

#### 컨테이너 실행

```
$ sudo docker run [options] image[:TAG|@DIGEST] [COMMAND] [ARG...]
```

|  옵션  | 설명                                                                                                             |
| :----: | ---------------------------------------------------------------------------------------------------------------- |
|   -d   | detached mode 흔히 말하는 백그라운드 모드                                                                        |
|   -p   | 호스트와 컨테이너의 포트를 연결 (포워딩)                                                                         |
|   -v   | 호스트와 컨테이너의 디렉토리를 연결 (마운트)                                                                     |
|   -e   | 컨테이너 내에서 사용할 환경변수 설정                                                                             |
| --name | 컨테이너 이름 설정                                                                                               |
|  --it  | -i와 -t를 동시에 사용한 것으로 터미널 입력을 위한 옵션 (컨테이너의 표준 입력과 로컬 컴퓨터의 키보드 입력을 연결) |
|  --rm  | 프로세스 종료시 컨테이너 자동 제거                                                                               |
| --link | 컨테이너 연결 \[컨테이너 명:별칭\]                                                                               |

- ex) $ sudo docker run -i -t --name server ubuntu:latest /bin/bash

#### 컨테이너 시작

```
$ sudo docker start [컨테이너 id 또는 name]
```

#### 컨테이너 재시작

```
$ sudo docker restart [컨테이너 id 또는 name]
```

#### 컨테이너 접속

```
$ sudo docker attach [컨테이너 id 또는 name]
```

#### 컨테이너 정지

```
$ sudo docker stop [컨테이너 id 또는 name]
```

- Bash Shell에서 `exit` 또는 `Ctrl + D`를 입력하면 컨테이너가 정지된다.

- `Ctrl + P`, `Ctrl + Q`를 차례대로 입력하여 컨테이너를 정지하지 않고, 컨테이너에서 빠져나온다.

#### 컨테이너 삭제

```
$ sudo docker rm [컨테이너 id 또는 name]
```

```
// 모든 컨테이너 삭제
$ sudo docker rm `docker ps -a -q`
```

#### sudo 없이 Docker 명령어 쓰기

```
$ sudo usermod -aG docker $USER # 현재 접속중인 사용자에게 권한주기

$ sudo usermod -aG docker your-user # your-user 사용자에게 권한주기
```

사용자가 로그인 중 일 때, 다시 로그인하면 권한이 적용된다.

# 🤞 마치며...

간단하게 도커와 관련된 기본 명령어에 대해 알아보았습니다. 하지만 평생 도스창에 도커 명령어를 칠 순 없기 때문에, 다음 글에서는 도커를 더욱 편리하게 사용해주는 **도커 gui툴**에 대해 포스팅 해보도록 하겠습니다.

```toc

```
