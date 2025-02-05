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
// これならもちろん呼べる
sayGreet('Katsuya', 'Good evening');
// これでもいける
sayGreet('Tanaka');
sayHello(firstname);
console.log(genNightGreet(firstname));
