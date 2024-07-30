# Next13 이후에 바뀐 점

- pages 라우터의 구조상의 문제로 개선할 수 없던 부분을 해결하기 위해 app router 등장!
- app router에서는 directory 기능이 달라짐
- pages router layout 기능이 없었다?
- pages router 권한 체크 어려움
- app router, react v18에서 등장한 server component 개념 사용 가능
- server component의 경우 next server에서 처리하기 때문에 서버에 부담이 되며, 이 때문에 서버에 캐싱 적용

- 클론 코딩을 하더라도 왜? 를 생각하며 하기

* 다음에 패러렐 라우트부터 들어야 함
* 다음에 인터셉팅 라우트 이후부터 들어야 함 5/29
* 다음에 seSelectedLayoutSegment로 ActiveLink 만들기 이후부터 들어야 함 6/12

# 라이브러리와 프레임워크의 차이

라이브러리는 사용자가 선택적으로 사용한다.
프레임워크는 사용자가 정해진 규칙을 따라 사용한다.
모든 페이지와 컴포넌트는 일단 서버측에서 우선 렌더링 된다.
자바스크립트 활성화여부와 상관없이 UI를 확인할 수 있는 점으로 알 수 있다.
클라이언트단에서 브라우저가 이해할 수 있게 HTML로 변환

view-source: + {URL}

# hydration

hard refresh가 아니라 client side navigation
nextjs의 Link 컴포넌트가 anchor 태그의 동작을 intercept

boring HTML -> init(boring HTML) (to interact by loading framework), onClick이 붙는 등

# what does "use client" directive mean?

- 모든 페이지와 컴포넌트를 서버에서 초기렌더링 함 server side renders boring HTMLs
- client에서 hydrated되는 컴포넌트는 "use client"를 사용한 컴포넌트에서만 발생함, others stay boring.
- "use client" means that this component needs hydration.
- "use client"가 많을수록 더 많은 자바스크립트 코드 필요함.
  - 서버 컴포넌트를 사용할수록, hydration이 적게 필요할 수록 유저가 자바스크립트 코드를 덜 받을 수 있음.
- server components는 data fetching 할 때 위력을 발휘함.

- nextjs 서버에서 boring HTML(non-interactive)을 우선 만들어서 내려줌.
- 클라이언트 컴포넌트의 children은 클라이언트 컴포넌트가 됨.
- 서버 컴포넌트 내부에 작성된 코드는 DB와 통신할 수 있고, client 단으로 코드가 가지 않음.

# Layout system, layout.tsx

- layout component로 먼저 가서 URL을 확인해서 해당 페이지를 레이아웃 내 children에 렌더링 함.
- 레이아웃은 중첩됨. 레이아웃이 상위 레이아웃의 children으로 들어감.

# metadata: Metadata

- import { Metadata } from "next";
- 꼭 내보내야하는 데이터
- html의 head에 담김.
- title, description 등 메타 정보 제공
- 메타데이터 템플릿
- 당근마켓 클론 코딩

# route group

- (home) URL을 생성하지 않는다. 기존 라우티에 영향을 주지 않음.
- layout.tsx와 not-found.tsx는 모든 곳에 공통으로 사용 그대로 두고, 그 이외의 컴포넌트를 그룹화하는데 유용

# dynamic route

-

# data fetching

- 자동으로 캐싱을 제공, refetch 하지 않음
- server component에서 fetch한 URL을 캐싱
- fetching 관련 코드는 사용자에게 전달되지 않음?
- 백엔드에서 fetch, loading 상태가 backend로 옮겨감
- 데이터 페칭이 완료되지 않아서, 렌더링이 늦고, 사이트가 뜨기 전, 브라우저 탭에서 로딩이 오래 돌리를 원하지는 않는데..
- 데이터가 도착하기 이전에 사용자에게 로딩 UI를 제공하고 싶다.
- page.tsx와 같은 위치 loading.tsx 추가
  const html = await HomePage();
  isLoading ? <Loading> : html
- backend에서 data

# parallel request

- await Promise.all()

# Suspense

# error.tsx

# style

#
