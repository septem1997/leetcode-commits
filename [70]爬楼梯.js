//假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
//
//
//
// 示例 1：
//
//
//输入：n = 2
//输出：2
//解释：有两种方法可以爬到楼顶。
//1. 1 阶 + 1 阶
//2. 2 阶
//
// 示例 2：
//
//
//输入：n = 3
//输出：3
//解释：有三种方法可以爬到楼顶。
//1. 1 阶 + 1 阶 + 1 阶
//2. 1 阶 + 2 阶
//3. 2 阶 + 1 阶
//
//
//
//
// 提示：
//
//
// 1 <= n <= 45
//
//
// Related Topics 记忆化搜索 数学 动态规划 👍 2569 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /*
    一开始的想法，暴力迭代法，会超时
    var count = function (arr,start){
        let end = arr.length - 1
        let n = 0
        for (let i = start;i<end;i++){
            if (arr[i]==='1'&&arr[i]===arr[i+1]){
                const newArr = arr.slice(0,i)+'2'+arr.slice(i+2)
                n = n + 1 + count(newArr,i)
            }
        }
        return n
    }
    return count(Array(n).fill(1).join(''),0) + 1*/

    // 动态规划
    let p = 0, q = 0, r = 1;
    for (let i = 1; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};
//leetcode submit region end(Prohibit modification and deletion)
