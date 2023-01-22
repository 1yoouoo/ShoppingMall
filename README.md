# 프로젝트 진행 기간 : 2022.12.18 ~ 2023. 01. 07
---------------------------------------------


## 프로젝트 목표 : 쇼핑몰 만들기
## 프로젝트 이름 : ZOMBO
## 프로젝트 동기
- 도메인 직접 사서 서버 배포해보기
- API통신에 익숙해지기
- SASS(SCSS)사용해보기
- github로 협업하기
- state 관리 라이브러리 없이 완성해보기
-----------------------------------------
## 코드리뷰
### 프로젝트 하면서 느낀 점
- 잘한 점 
  - 성능 향상을 위해 API호출에 항상 고민했다.
  - 좋은 코드를 짜기 위해 state관리, props관리에 신경을 썼다.
  - 다른 사람이 코드를 볼 수도 있단 생각으로 가독성에 대한 고민을 했다.

- 부족한 점
  - HTML5 태그를 특정한 의미를 갖도록 잘 쓰지 못했던 거 같다. 
    + 시각적인 부분을 포커스 하지말고 의미적인 부분에 포커스를 맞춰보자.
  - SCSS를 사용하면서 BEM 클래스 이름에 대한 고민이 적었던 거 같다.(deps가 4층으로 되어버릴 때 문제가 확 다가왔음)
    + 다른 사람들의 코드를 참고하면서 비교해보자
  - type관리가 안되면서 에러발생시 수정하는데 오래걸렸다. 
    + 다음 프로젝트에 typescript를 도입해보자.
  - 리액트를 사용하는데 어느정도 익숙해 졌지만 프로젝트가 점점 커짐에 따라 컴포넌트 관리가 안되고 있음을 느꼈다. 
    + 컴포넌트를 기능단위, 그리는 단위로 나눠서 관리해보자
  - 좋은 코드를 만드려면 초반 설계가 무척 중요함을 알았다. 
    + 프로젝트 회고에서 언급 -> task 관리 
  - 반복되는 코드를 방치한 부분이 있었다 (api.js.. 등) 
    + 3의 법칙으로 3번 반복되면 리펙토링 해보자.

--------------------------------------
## 프로젝트 회고
- 좋았던 점
  - spec-out을 과감하게 해서 기간이 늘어지지 않고 빠르게 끝낼 수 있었다.
  - 리액트를 확실히 전보다 능숙하게 다룰 수 있게 되었다.
  - 서버 배포를 함으로써 로컬과 서버를 분리시킨 부분이 협업으로 인한 시간지연을 줄일 수 있었다.
  
- 안좋았던 점
  - 코딩이 잘되는 오전에 시간 할애를 많이 못했다.
  - AWS서버에 대한 지식이 부족해서 서버가 다운될 때 불필요한 시간소모가 있었다.
  - 초반 설계에 능동적으로 참여하지 않아서 API합을 맞출 때 아쉬운 부분이 있었다.
 
## Action Plan
- task 관리
 + 설계 이후에 바로 task 관리 엑셀을 생성하여 관리한다.
 
 
![Large GIF (640x468)](https://user-images.githubusercontent.com/79697414/213917269-bdad48e2-a598-4e7c-9fd6-c4dc0d85de64.gif)


 ![Large GIF (640x468)](https://user-images.githubusercontent.com/79697414/213917259-6c155097-ce60-4989-a185-791e52209a12.gif)

## 사용된 기술
- react
- axios
- styled-components
- SCSS
