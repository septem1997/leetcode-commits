//给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
//
//
//
// 示例：
//
// s = "leetcode"
//返回 0
//
//s = "loveleetcode"
//返回 2
//
//
//
//
// 提示：你可以假定该字符串只包含小写字母。
// Related Topics 哈希表 字符串
// 👍 277 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {}
    for (let i = 0;i<s.length;i++){
        const c = s[i]
        if (map[c]){
            map[c].push(i)
        }else {
            map[c] = [i]
        }
    }
    for (const key in map){
        if (map[key].length===1){
            return map[key][0]
        }
    }
    return -1
};
//leetcode submit region end(Prohibit modification and deletion)
