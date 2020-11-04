//给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
//
//
//
// 示例：
//二叉树：[3,9,20,null,null,15,7],
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回其层次遍历结果：
//
// [
//  [3],
//  [9,20],
//  [15,7]
//]
//
// Related Topics 树 广度优先搜索
// 👍 682 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let stack = [],res = []
    if (root)
        stack.push(root)
    while(stack.length!==0){
        const a = [],tempNodes = []
        let node
        while(node = stack.shift()){
            a.push(node.val)
            tempNodes.push(node.left,node.right)
        }
        stack.push(...tempNodes.filter(item => item!==null))
        res.push(a)
    }
    return res

};
//leetcode submit region end(Prohibit modification and deletion)
