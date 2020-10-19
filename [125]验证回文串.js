//给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
//
// 说明：本题中，我们将空字符串定义为有效的回文串。
//
// 示例 1:
//
// 输入: "A man, a plan, a canal: Panama"
//输出: true
//
//
// 示例 2:
//
// 输入: "race a car"
//输出: false
//
// Related Topics 双指针 字符串
// 👍 283 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isAlphaOrNum = (a)=> {
    return (a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z') || (a >= '0' && a <= '9')
}
var isPalindrome = function(s) {
    for (let i = 0,j=s.length-1;i<j;i++,j--){
        while (i<j&&!isAlphaOrNum(s[i])){
            i++
        }
        while (i<j&&!isAlphaOrNum(s[j])){
            j--
        }
        if (s[i].toLowerCase()!==s[j].toLowerCase()){
            return false
        }
    }
    return true
};
//leetcode submit region end(Prohibit modification and deletion)
