//给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。 
//
// 
// 
//
// 
//
// 示例 1： 
//
// 
//输入：nums = [-4,-1,0,3,10]
//输出：[0,1,9,16,100]
//解释：平方后，数组变为 [16,1,0,9,100]
//排序后，数组变为 [0,1,9,16,100] 
//
// 示例 2： 
//
// 
//输入：nums = [-7,-3,2,3,11]
//输出：[4,9,9,49,121]
// 
//
// 
//
// 提示： 
//
// 
// 1 <= nums.length <= 104 
// -104 <= nums[i] <= 104 
// nums 已按 非递减顺序 排序 
// 
//
// 
//
// 进阶： 
//
// 
// 请你设计时间复杂度为 O(n) 的算法解决本问题 
// 
// Related Topics 数组 双指针 排序 
// 👍 249 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let mid = 0
    const pows = []
    nums.forEach((n,i)=>{
        pows.push(Math.pow(n,2))
        if (n < 0){
            mid = i
        }
    })
    if (pows.length===1){
        return pows
    }
    const res = []
    let left = mid,right = mid+1
    while (left>=0&&right<nums.length){
        if (pows[left]<pows[right]){
            res.push(pows[left--])
        }else {
            res.push(pows[right++])
        }
    }
    if (left<0){
        return res.concat(pows.splice(right))
    }
    if (right===nums.length){
        return res.concat(pows.splice(0,left+1).reverse())
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
