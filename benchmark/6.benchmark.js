const Benchmark = require('benchmark');
const {
    convert
} = require('../src/6');
const suite = new Benchmark.Suite;

// 添加测试
suite.add('Z 字形变换#convert#1', function () {
        convert('LEETCODEISHIRING', 3)
    })
    .add('Z 字形变换#convert#2', function () {
        convert('LEETCODEISHIRING', 4)
    }) // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({
        'async': true
    });