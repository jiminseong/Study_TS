# Study_TS

타입스크립트 기초 문법 학습을 위한 저장소입니다

## 섹션 1 : 기본 세팅 하기

- 기초적인 타입 스크립트 세팅과, VSCODE 세팅 그리고, 타입스크립트는 tsc라는 컴파일러(혹은 트랜스파일러)가 자바스크립트로 변환해 작동한다(런타임에서)
- forceConsistentCasingInfile~ : 파일 시스템에선 다른 파일을 import할수 있는데 (대,소문자 구분 없이) 윈도우 환경에서 에러 가능
- skipLibCheck : 라이브러리 체크를 건너뛴다. 나중에 라이브러리 분석할 때 보게 된다. (실제로 사용하는 타입만 검사하도록 하는 것 -> 안쓰면 검사 안한다)

## 섹션 2 : 기본 문법 배우기

```
const a : stirng = '5';
const b : number = 5;
const c  : boolean  = false;
const d : undefined = undefined;
const e : null = null;
```

- 형식 기억하기
- symbol, bigint라는 새로운 타입이 있지만, 이는 기초강좌 이기에 생략
- any를 사용한다는 것은 TS가 아닌 JS를 사용하는 것

- type으로 타입을 선언하는 방식, type alias(타입 애일리어스 )

```
type Add = (x:number, y:number) => number;
const add: Add= (x,y) => x + y;

위코드와 아래코드 동일
const add: (x:number, y:number) => number = (x, y) => x + y ;
```

- interface로 타입을 만드는 방식도 있다.
- 따라서, 총 3가지

- 객체 표기법

```
const : obj:{ lat:number,lon:number } = { lat :37.5, lon : 127.5};
```

- 배열 표기법

```
const arr : string[] = ['홍길동','지민성']
const arr: Array<number> = [123,456]
```

- 튜플 표기법 ( 길이가 고정된 배열 )

```
const arr3 : [number, number,string] = [123,456,'123'];

```

- **any를 없애고, 최대한 TS가 추론해주는 것을 믿어라**

- !는 null, undeifned가 아님을 보증하는 것은데, 사용하는 것이 좋지 않을 수 있다

- TS는 오타를 잡아주고, 혹여나 생길 상황을 미연에 방지한다.
- 또한 자동완성을 추천해준다.

- union을 사용하다보면 타입이 꼬일 수 있으니 유의해야한다.
- and(intersection) 일때는 모든 속성이 다 있어야하고, 또는(union) 이면 여러개 중에 하나만 있으면 된다.

- interface, type은 표현의 차이가 더 중요, 기능의 차이는 실무에서 그렇게 중요하진 않을 수 있다.
- interface엔 I, type엔 T , enum엔 E를 붙이는게 예전 국룰

- 넓은 타입에서 좁은 타입으로 대입이 가능하다
- 객체는 상세할 수 록 좁다고 생각하면 된다. ( 헷갈리지 말 것, 집합 관계 생각하면 될 듯 )

- **객체 리터럴 검사**
-> 좁 -> 넓 해도, 잉여속성 검사에서 걸릴 수 있다. 


- return 이 void이면 return 값이 있으면 안된다 (null불가,undefined가능)
- void 크게 2가지 전체 3가지 종류
  - 리턴 값이 void
    
  - 매개변수가 void 함수
  - 매소드가 void 함수
- 리턴 값을 사용치 않겠다와, 리턴 값이 없다로 나눌 수 있다

- 강제 변환 방법은 <> 사용 as 사용이 있는데
  - 이건 React에서 문제를 야기 할 수 있다.


- 외부에서 만들어지는 type 선언할 때 declare로 처리할 수 있다. ex) forEach

- any : 타입 포기, unkonwn : 타입을 잘모르겠을 때에
- error as Error로 에러는 TS가 제공하는 타입 사용해야함
  

- **타입 좁히기**
- type quard 기법

- 객체를 만들때 타입이라는 속성을 넣는게 좋다
- 혹은 특징을 활용한다

- 타입을 구분해주는 커스텀 함수를 직접 만들 수 있다.
- 리턴값에 is -> 커스텁 타입 가드 함수 -> if 문 안에 써서 정확한 타입

- {}, Object 는 모든 타입을 의미함 object(실제 객체)랑 다름  (null, undefined 제외)
  - but, 실제 객체시 interface, type, class를 사용 지향

- #a 이런식의 private와 private a 와 같은 형식이 있는데 각각 JS, TS에서 지원하는것
- TS의 private은 실제 코드에서 public으로 바뀐다

- private : 한 클래스 안에서만 사용
- protected : 안에서는 기본적으로 쓸 수 있는데, 밖에서 못쓴다
  - 둘의 차이는 상속 받았을 때 쓸 수 있냐 없냐 -> protected는 부모의 protected 사용 가능!
- public(default)

- abstract는 반드시 구현해야한다


- 제네릭 : 타입을 변수처럼

## 섹션 3 : lib.es5.d.ts 분석
### 공변성 / 반공변성
- 이론보다는 결론 -> 매개변수는 좁은타입, 리턴은 넓은 타입

### 하나에는 걸리겠지 - 오버로딩
- 타입 하나로 표현 못할 때 -> 두가지 방식으로 
- 여러가지 케이스를 오버로딩해서 만들어라
  
### 타입스크립트는 건망증이 심하다(+에러 처리법)
- 타입 스크립트 조심해야할점 -> as로 지정했는데 실수하면 고장난다
  - if(err instanceof typeof CustomError) => 이런식으로 사용 
  -  err as CustomError => 고장 가능성