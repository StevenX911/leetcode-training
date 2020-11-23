// 对比Object和Map的时间复杂度
const benchmarkMap = size => {
    console.time('benchmarkMap');
    var map = new Map();
    for (var i = 0; i < size; i++) map.set(i, i);
    for (var i = 0; i < size; i++) var x = map.get(i);
    console.timeEnd('benchmarkMap');
}

const benchmarkObj = size => {
    console.time('benchmarkObj');
    var obj = {};
    for (var i = 0; i < size; i++) obj[i] = i;
    for (var i = 0; i < size; i++) var x = obj[i];
    console.timeEnd('benchmarkObj');
}

var size = 1000000;

benchmarkMap(size);
benchmarkObj(size);

// 你会惊讶的发现：Object比Map的性能更好！！！