const Benchmark = require('benchmark');
const {
    longestPalindrome
} = require('../src/5');
const suite = new Benchmark.Suite;

// 添加测试
suite.add('找出最长回文子串#longestPalindrome', function () {
    longestPalindrome('babadab')
})
.add('找出最长回文子串#longestPalindrome', function () {
    longestPalindrome('babadab')
})
// add listeners
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
