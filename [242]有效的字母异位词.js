//给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
//
// 示例 1:
//
// 输入: s = "anagram", t = "nagaram"
//输出: true
//
//
// 示例 2:
//
// 输入: s = "rat", t = "car"
//输出: false
//
// 说明:
//你可以假设字符串只包含小写字母。
//
// 进阶:
//如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
// Related Topics 排序 哈希表
// 👍 264 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sMap = {}
    if (s.length!==t.length){
        return false
    }
    for (let i = 0;i<s.length;i++){
        if (sMap[s[i]]){
            sMap[s[i]]++
        }else {
            sMap[s[i]] = 1
        }
    }
    for (const c of t){
        if (sMap[c]){
            sMap[c]--
        }
    }
    for (let key in sMap){
        if (sMap[key]!==0){
            return false
        }
    }
    return true
};
//leetcode submit region end(Prohibit modification and deletion)
