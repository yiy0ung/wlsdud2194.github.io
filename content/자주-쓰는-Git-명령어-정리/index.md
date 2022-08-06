---
emoji: 👨‍💻
title: 자주 쓰는 Git 명령어
date: '2022-07-31 00:00:00'
author: JY Lee
tags: git
categories: Git
---

이번 글에서는 Git의 기본적인 내용들과 자주 사용하는 Git 명령어, 그리고 Alias를 통해 간단하게 Git 명령어를 사용하는 방법에 대해 정리해보려고 한다.

사용하는 Git 명령어가 많아질수록 하나씩 추가해 나갈 예정이다.

# Git Lifecycle

![git lifecycle](./images/git-lifecycle.png)

- [출처](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)

# 자주 쓰는 Git 명령어

### `Staged Area`에 변경사항 추가

```
$ git add [<FILE_PATH>] [--all]
```

### 현재 Git 상태 조회

```
$ git status [--short, -s]
```

### 저장소에 저장

```
$ git commit [-a] [-m <Message>] [--amend]
```

- `-m`: 커밋 시 메시지를 작성할 수 있다
- `-a`: Staging Area 생략 'add' 함과 동시에 커밋 가능
- `--amend`: 이전의 커밋을 완전히 새로 고쳐서 새 커밋으로 변경

### 파일명 변경

- 간혹 파일의 대소문자를 변경했을때, git이 이에 대한 변경사항을 알아채지 못할 때 사용

```
$ git mv <OLD_FILE_PATH> <NEW_FILE_PATH>
```

### Remote 저장소에 Push

```
$ git push origin
$ git push --set-upstream origin <BRANCH_NAME>
```

### Branch 명 바꾸기

**Local 브랜치 명 변경**

```
$ git branch -m <OLD_BRANCH> <NEW_BRANCH>
```

**Remote 브랜치 명 변경**

- Remote 브랜치는 기존 브랜치를 지우고, 새로운 브랜치에 커밋하는 방식으로 rename이 가능하다

```
// [1] 새로운 브랜치 생성
$ git push [--set-upstream] origin <NEW_BRANCH>

// [2] 기존 브랜치 삭제
$ git push origin --delete <OLD_BRANCH>
또는
$ git push origin :<OLD_BRANCH>
```

```
// 생성과 삭제를 동시에 진행
$ git push origin :<OLD_BRANCH> <NEW_BRANCH>
```

### Branch 생성

```
$ git switch -C <BRANCH_NAME>
```

### Branch 이동

```
$ git switch <BRANCH_NAME>
```

```toc

```
