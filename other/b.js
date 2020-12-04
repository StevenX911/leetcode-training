// JS中取整函数性能测试
const os = require('os')
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
console.log(os.platform(), os.arch())

function getNum1(str){
    return parseInt(str);
}

function getNum2(num){
    return num.toFixed(0);
}

function getNum3(num){
    return Math.ceil(num);
}

function getNum4(num){
    return Math.floor(num)
}

function getNum5(num){
    return Math.round(num)
}

function getNum6(num){
    return Math.trunc(num)
}


function getNum7(num){
    return ~~num;
}

function getNum8(num){
    return num | 0;
}

function getNum9(num){
    return num ^ 0;
}

function getNum10(num){
    return num << 0;
}

suite
.add('整数取整#getNum1#parseInt', function () {
    getNum1(12345.54321)
})
.add('整数取整#getNum2#toFixed', function () {
    getNum2(12345.54321)
})
.add('整数取整#getNum3#Math.ceil', function () {
    getNum3(12345.54321)
})
.add('整数取整#getNum4#Math.floor', function () {
    getNum4(12345.54321)
})
.add('整数取整#getNum5#Math.round', function () {
    getNum5(12345.54321)
})
.add('整数取整#getNum6#Math.trunc', function () {
    getNum6(12345.54321)
})
.add('整数取整#getNum7#~~num', function () {
    getNum7(12345.54321)
})
.add('整数取整#getNum8#num | 0', function () {
    getNum8(12345.54321)
})
.add('整数取整#getNum9#num ^ 0', function () {
    getNum9(12345.54321)
})
.add('整数取整#getNum10#num << 0', function () {
    getNum10(12345.54321)
})
.on('cycle', function (event) {
    console.log(String(event.target))
})
.on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({
    'async': true
})