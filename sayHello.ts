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

// 引数にデフォルト値をつけれる
function genGreet(firstname: string, greet: string = 'Hello!'){
  console.log("${greet} ${firstname}")
}

// これならもちろん呼べる
sayGreet('Katsuya', 'Good evening')
// これでもいける
sayGreet('Tanaka')

sayHello(firstname)
console.log(genNightGreet(firstname))

// 関数を引数に取れる
// 引数名: (関数の引数: 型) => 返り値の型
// 以下の例ではstringの引数を1つ要求するstringの配列を返す関数を引数として要求している
function singBird(bird: (x: string) => string[]){
  return bird('hato, kiji')[0] + "piyopiyo"
}

// こんな感じ
function splitbird(birds: string): string[]{
  return birds.split(',')
}
console.log(singBird(splitbird))

// 宣言時に代入すると型推論が働くので宣言しなくても大丈夫なこともある
let num = 10

// 型エイリアスっていうらしい
type Point = {
  x : number;
  y : number; 
}

// こんな感じで使う
function PrintPoint(p: Point){
  console.log("今の地点はX:${p.x},Y:${p.y}です")
}
PrintPoint({x: 100, y:200})

// インターフェースはエイリアスと似てるけどちょっと違う
// =がいらないとか
interface User {
  name : string;
  sex : boolean;
}

// インターフェースなら後から拡張できる
interface User {
  age : number;
}

// JSにはないがenumがある
enum Fruits{
  Melon,
  Apple,
  Orange
}
// こんな感じで使える
const select: Fruits = Fruits.Apple

// 対応する値を設定することもできる
enum Body {
  HAND = 'Hand',
  HEAD = 'Head',
  LEG = 'Leg'
}

const str = 'Hand';
const target = str as Body
