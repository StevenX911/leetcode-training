const Benchmark = require('benchmark');
const {
    longestPalindrome,
    longestPalindrome2,
    longestPalindrome3
} = require('../src/5');
const suite = new Benchmark.Suite;

// 添加测试
suite.add('找出最长回文子串#longestPalindrome', function () {
        longestPalindrome('babadab')
    })
    .add('找出最长回文子串#longestPalindrome2', function () {
        longestPalindrome2('babadab')
    })
    .add('找出最长回文子串#longestPalindrome3', function () {
        longestPalindrome3('babadab')
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

// 基准测试结果：
// 找出最长回文子串#longestPalindrome x 4,176,100 ops/sec ±3.05% (83 runs sampled)
// 找出最长回文子串#longestPalindrome2 x 497,542 ops/sec ±1.14% (89 runs sampled)
// 找出最长回文子串#longestPalindrome3 x 5,411,586 ops/sec ±2.11% (85 runs sampled)
// Fastest is 找出最长回文子串#longestPalindrome3