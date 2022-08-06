---
emoji: ⚛️
title: React - eject 없이 Mobx 데코레이터 사용하기
date: '2019-10-27 00:00:00'
author: JY Lee
tags: JavaScript React State decorator eject mobx
categories: React
---

![](./images/thumbnail.png)

오늘 써볼 글은 React의 상태관리를 할 때 많이 사용하는 라이브러리인 Mobx의 데코레이터를 CRA에서 `yarn eject` 없이 사용하는 법을 알아보겠습니다 :)

보통은 Mobx 말고도 데코레이터를 사용할 수 있습니다.

하지만 Mobx를 사용하면서 데코레이터를 많이 사용하고 react에서 데코레이터를 사용할 때 여러가지 설정에 관한 문제를 겪었기 때문에 이를 해결하고자 하는 글을 써봅니다.

## 🤔 eject 란?

기본적으로 CRA로 만든 프로젝트에서 `yarn eject`를 하면 숨겨져 있던 웹팩, 바벨 등의 설정을 보여주고 이것을 커스터마이징 할 수 있도록 해주는 명령어입니다.

**주의 : 한번 eject를 하면 이전 상태로 돌아갈 수 없습니다.**

## 🚫 eject를 했을 때 생길 수 있는 문제

하지만 eject를 했을 때 다음과 같은 문제 아닌 문제가 발생합니다.

1. CRA의 웹팩, 바벨과 같은 모든 configuration를 직접 관리해줘야 한다.
   (익숙하지 않다면 관리하는 것이 까다롭다)

2. One Build Dependency의 장점을 잃게 된다. 작업 도중 하나의 패키지가 필요해서 설치한다거나, 삭제할 때, 항상 다른 패키지들과의 의존성을 신경 써야 한다.

그럼에도 불구하고 eject를 하고 싶다면 몇 가지 고려해봐야 합니다.

1. 얼마나 많은 설정을 기존 CRA 설정에 추가하거나 뺄 것인가?
2. 추가하고 싶은 설정의 중요성이 Eject를 하기 이전에 가지는 장점보다 큰가?

## 💡 eject 없이 데코레이터 사용하기

CRA를 커스터마이징하고 싶다면 몇 가지 필요한 의존성을 설치해야 합니다.

**customize-cra**와 **react-app-rewired**는 eject 없이 CRA의 설정을 커스터마이징을 할 수 있도록 해주는 라이브러리 입니다. (eject보다 자유롭지는 않다)

만약 CRA(v1)을 쓰고 있다면 **react-app-rewired** 만 설치하면 됩니다.

저는 현재 최신 버전인 **CRA v2** 를 기준으로 하겠습니다.

```javascript
// npm
npm install --save -d customize-cra
npm install --save -d react-app-rewired

// yarn
yarn add --dev customize-cra
yarn add --dev react-app-rewired
```

두 가지를 설치하면 다음과 같이 package.json에 있는 `scripts`를 다음과 같이 수정합니다.

```javascript
"scripts": {
	"start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-scripts eject",
}
```

루트 폴더에 **config-overrides.js**를 추가 해줍니다.

```javascript
const {
  addDecoratorsLegacy, // decorator를 사용할 수 있도록 해주는 config
  disableEsLint,
  override,
} = require('customize-cra');

// 사용자 정의 웹팩 설정
module.exports = {
  webpack: override(disableEsLint(), addDecoratorsLegacy()),
};
```

## 🔨 Mobx를 이용한 상태관리

이제 우린 mobx의 데코레이터를 통해서 상태관리를 할 수 있게 되었으므로 간단한 Store와 해당 Store의 state를 이용하는 컴포넌트를 만들어 보겠습니다.

(Mobx를 다룰 줄 아시는 분이라면 건너뛰셔도 좋습니다)

```javascript
// babel 플러그인 설치
yarn add --dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties

// 추가적인 es7 데코레이터 설치
yarn add --dev core-decorators

// mobx 설치
yarn add mobx mobx-react

```

```javascript
// package.json
...
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ]
  }
 ...
```

### Mobx Store

```javascript
// stores/userStore.js
import { observable, action } from "mobx";
import { autobind } from 'core-decorators';

@autobind
class UserStore {
  @observable userInfo = null;

  @action async getUserInfomation () {
  	...
  }
}
```

### Component

```javascript
// components/UserView.js
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class UserView extends Component {
  render() {
    const { userInfo } = this.props.store.UserStore;

    return <div>이름 : {userInfo ? userInfo.name : ''}</div>;
  }
}

export default UserView;
```

## ✍️ 마치며...

간단한 설정으로 eject없이 데코레이터를 사용하는 법을 알아보았습니다.

하지만 이렇게 eject를 하지 않고 웹팩설정을 재정의하는 것으로 절대적으로 CRA가 가지는 안정성을 보장해주지 않기 때문에 잘 고려하여 사용하면 좋을 것 같습니다.

PS. 글에 오류나 보완할 점이 있다면 댓글을 남겨주시면 감사하겠습니다 😄

```toc

```
