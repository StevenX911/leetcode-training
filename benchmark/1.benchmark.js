const Benchmark = require('benchmark');
const {
    twoSum, // O(n2)
    twoSum2, // O(n)
    twoSum3,
    twoSum4
} = require('../src/1');
const suite = new Benchmark.Suite;

// 生成指定长度的数组
function generateArr(size) {
    size = size || size < 10 ? 10 : size;
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(i);
    }
    return arr;
}
const size = 1000000;
const nums = generateArr(size);
const target = nums[size - 1] + nums[size - 2];

// 添加测试
suite.add('两数之和#twoSum', function () {
        twoSum(nums, target)
    })
    .add('两数之和#twoSum2', function () {
        twoSum2(nums, target)
    })
    .add('两数之和#twoSum3', function () {
        twoSum3(nums, target)
    })
    .add('两数之和#twoSum4', function () {
        twoSum4(nums, target)
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
// 两数之和#twoSum x 24,015,711 ops/sec ±2.60% (81 runs sampled)
// 两数之和#twoSum2 x 1,590,391 ops/sec ±1.08% (87 runs sampled)
// 两数之和#twoSum3 x 20,069,101 ops/sec ±2.59% (87 runs sampled)
// 两数之和#twoSum4 x 114,917 ops/sec ±3.06% (84 runs sampled)
// Fastest is 两数之和#twoSum