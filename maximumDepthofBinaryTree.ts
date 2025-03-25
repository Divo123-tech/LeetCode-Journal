/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    let longestDepth = 1;
    if (root == null){
        return 0;
    }
    function dfs(root){
        if (root == null){
            return 0
        }
        const left = dfs(root.left)
        const right = dfs(root.right)
        const longest = Math.max(left, right) + 1
        if (longest > longestDepth){
            longestDepth = longest
        }
        return longest
    }
    return dfs(root)
};
