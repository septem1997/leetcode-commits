//写一个程序，输出从 1 到 n 数字的字符串表示。
//
// 1. 如果 n 是3的倍数，输出“Fizz”；
//
// 2. 如果 n 是5的倍数，输出“Buzz”；
//
// 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
//
// 示例：
//
// n = 15,
//
//返回:
//[
//    "1",
//    "2",
//    "Fizz",
//    "4",
//    "Buzz",
//    "Fizz",
//    "7",
//    "8",
//    "Fizz",
//    "Buzz",
//    "11",
//    "Fizz",
//    "13",
//    "14",
//    "FizzBuzz"
//]
//
// 👍 76 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const res = []
    for(let i = 1;i<=n;i++){
        let n = '',
            div3 = i % 3,
            div5 = i % 5
        if (div3===0){
            n += 'Fizz'
        }
        if (div5===0){
            n += 'Buzz'
        }
        res.push(n===''?i.toString():n)
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
