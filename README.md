# Regular Expression (정규표현식)

## Roles

- Search
- replace
- extract

## Test website

https://regexr.com/

## 정규식 생성

```js
// 생성자
new RegExp("expression", "option");
new RegExp("[a-z]", "gi") /
  // Literal
const regexp = /expression/option
const example = /[a - z]/gi
```

## Methods

| Method  | 문법                                | 설명                               |
| ------- | ----------------------------------- | ---------------------------------- |
| test    | `expression.text(str)`              | Boolean 반환                       |
| match   | `str.match(expression)`             | 일치하는 문자의 Array              |
| replace | `str.replace(expression, 대체문자)` | 일치하는 문자를 대체 (원본 손상 X) |

```js
const str = `
010-1234-5978
thesecon@gmail.com
https://www.naver.com
Hello my name is SomeOne the Newbie
The monster
abbcccdddd
`;

const regexp = /SomeOne/gi;
console.log(str.replace(regexp, "Olivia")); // SomeOne이 Olivia로 대체됨.
```

## Flag(optional)

| 플래그 | 설명                            |
| ------ | ------------------------------- |
| g      | 모든 문자 일치, global          |
| i      | Non case-senstive (ignore case) |
| m      | Multi-line                      |

## Pattern (expression)

| 패턴         | 설명                                                   |
| ------------ | ------------------------------------------------------ |
| ^ab          | 줄(Line) 시작에 있는 ab와 일치                         |
| ab$          | 줄(Line) 끝에 있는 ab와 일치                           |
| .            | 임의의 한 문자와 일치                                  |
| a &verbar; b | a 또는 b와 일치                                        |
| ab?          | b가 없거나 b와 일치                                    |
| {3}          | 3개 연속 일치                                          |
| {3,}         | 3개 이상 연속 일치                                     |
| {3,5}        | 3개 이상 5개 이하 연속 일치                            |
| [abc]        | a 또는 b 또는 C                                        |
| [a-z]        | a부터 z 사이의 문자 구간에 일치 (영어 소문자)          |
| [A-Z]        | A부터 Z 사이의 문자 구간에 일치 (영어 대문자)          |
| [0-9]        | 0부터 9 사이의 문자 구간에 일치 (숫자)                 |
| [가-힣]      | 가부터 힣 사이의 문자 구간에 일치(한글)                |
| \w           | 63개 문자 (Word, 대소영문 52개, 숫자 10개 + \_)에 일치 |
| \b           | 63개 문자에 일치하지 않는 문자 경계(Boundary)          |
| \d           | 숫자(Digit)에 일치                                     |
| \s           | 공백(Space, Tab, 줄바꿈 등)에 일치                     |
| (?=)         | 앞쪽 일치(Lookahead)                                   |
| (?<=)        | 뒤쪽 일치(Lookbehind)                                  |

```js
const str = `
010-1234-5978
thesecon@gmail.com
https://www.naver.com
http://localhost:1234
Hello my name is SomeOne the Newbie
The monster M
abbcccdddd
`;

console.log(str.match(/m$/gim)); // ['m', 'm', 'M']
console.log(str.match(/h..p/gim)); // ["http"]
console.log(str.match(/monster|newbie/gim)); // ["Newbie", "monster"]
console.log(str.match(/https?/gim)); // ["https", "http"]
console.log(str.match(/d{3}/gim)); // ["ddd"]
console.log(str.match(/d{4}/gim)); // ["dddd"]
console.log(str.match(/d{2,4}/gim)); // ["dddd"]
console.log(str.match(/\b\w{2,3}\b/gim)); //["010", "com", "www", "com", "my", "is", "The", "Dry", "Don"]
console.log(str.match(/(?<=@).{1,}/g)); // ["gmail.com"]
```
