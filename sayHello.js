// 型はこうやって宣言するらしい。なんか慣れない。
var firstname = 'Takuya';
// なるほど基本の関数はこんな感じ
function sayHello(firstname) {
    console.log('Hello' + firstname);
}
// 返り値の型はこうやって指定するらしい
function genNightGreet(firstname) {
    return "Good night " + firstname;
}
// ?をつけることでオプショナルな引数になるらしい
function sayGreet(firstname, greet) {
    console.log('${greet} ${firstname}');
}
// 引数にデフォルト値をつけれる
function genGreet(firstname, greet) {
    if (greet === void 0) { greet = 'Hello!'; }
    console.log("${greet} ${firstname}");
}
// これならもちろん呼べる
sayGreet('Katsuya', 'Good evening');
// これでもいける
sayGreet('Tanaka');
sayHello(firstname);
console.log(genNightGreet(firstname));
// 関数を引数に取れる
// 引数名: (関数の引数: 型) => 返り値の型
// 以下の例ではstringの引数を1つ要求するstringの配列を返す関数を引数として要求している
function singBird(bird) {
    return bird('hato, kiji')[0] + "piyopiyo";
}
// こんな感じ
function splitbird(birds) {
    return birds.split(',');
}
console.log(singBird(splitbird));
// 宣言時に代入すると型推論が働くので宣言しなくても大丈夫なこともある
var num = 10;
// こんな感じで使う
function PrintPoint(p) {
    console.log("今の地点はX:${p.x},Y:${p.y}です");
}
PrintPoint({ x: 100, y: 200 });
// JSにはないがenumがある
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Melon"] = 0] = "Melon";
    Fruits[Fruits["Apple"] = 1] = "Apple";
    Fruits[Fruits["Orange"] = 2] = "Orange";
})(Fruits || (Fruits = {}));
