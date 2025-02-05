// 型はこうやって宣言するらしい。なんか慣れない。
let firstname: string = 'Takuya'

// なるほど基本の関数はこんな感じ
function sayHello(firstname: string){
  console.log('Hello' + firstname)
}

// 返り値の型はこうやって指定するらしい
function genNightGreet(firstname: string): string{
  return "Good night " + firstname
}

// ?をつけることでオプショナルな引数になるらしい
function sayGreet(firstname: string, greet?: string){
  console.log('${greet} ${firstname}')
}

// これならもちろん呼べる
sayGreet('Katsuya', 'Good evening')
// これでもいける
sayGreet('Tanaka')

sayHello(firstname)
console.log(genNightGreet(firstname))