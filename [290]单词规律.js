//给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
//
// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
//
// 示例1:
//
// 输入: pattern = "abba", str = "dog cat cat dog"
//输出: true
//
// 示例 2:
//
// 输入:pattern = "abba", str = "dog cat cat fish"
//输出: false
//
// 示例 3:
//
// 输入: pattern = "aaaa", str = "dog cat cat dog"
//输出: false
//
// 示例 4:
//
// 输入: pattern = "abba", str = "dog dog dog dog"
//输出: false
//
// 说明:
//你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。
// Related Topics 哈希表
// 👍 324 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const split = s.split(' ')
    if (pattern.length!==split.length){
        return false
    }
    const hash1 = {},hash2 = {}
    let res1 = '',res2 = '',count1 = 1,count2 = 1
    for (let i = 0;i<pattern.length;i++){
        const s1 = pattern[i],s2 = split[i]
        if (!hash1[s1]){
            hash1[s1] = count1++
        }
        if (!hash2[s2]){
            hash2[s2] = count2++
        }
        res1 += hash1[s1]
        res2 += hash2[s2]
    }
    return res1==res2
};
//leetcode submit region end(Prohibit modification and deletion)
