const Benchmark = require('benchmark');
const {
    climbStairs,
    climbStairs2
} = require('../src/70');
const suite = new Benchmark.Suite;

suite
    .add('爬楼梯#1', function () {
        climbStairs(5);
    })
    .add('爬楼梯#2', function () {
        climbStairs2(5);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({
        'async': true
    })

// 爬楼梯#1 x 27,500,601 ops/sec ±1.14% (87 runs sampled)
// 爬楼梯#2 x 167,088,396 ops/sec ±1.36% (90 runs sampled)
// Fastest is 爬楼梯#2