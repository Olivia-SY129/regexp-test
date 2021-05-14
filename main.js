const str = `
010-1234-5978
thesecon@gmail.com
https://www.naver.com
http://localhost:1234
Hello my name is SomeOne the Newbie.
The monster M
Dry: Don't repeat yourself.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)
