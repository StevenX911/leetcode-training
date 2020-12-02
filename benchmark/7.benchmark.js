const Benchmark = require('benchmark');
const {
    reverse
} = require('../src/7');
const suite = new Benchmark.Suite;

suite.add('整数反转', function () {
        reverse(12345667890)
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