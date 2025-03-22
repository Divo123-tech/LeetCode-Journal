
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
function diameterOfBinaryTree(root: TreeNode | null): number {
    //initialize total variable
    let longestTotal = 0
    //create dfs function
    function dfs(root){
    //base case
    if (root == null){
        return 0;
    }

    
    const leftDepth = dfs(root.left)        
    const rightDepth = dfs(root.right)     
    longestTotal = Math.max(longestTotal, leftDepth + rightDepth)
    const longest = Math.max(leftDepth, rightDepth)
    return longest + 1 
}
    dfs(root)
    return longestTotal



};
