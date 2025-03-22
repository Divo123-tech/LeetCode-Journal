
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

    //check depth of left and right subtree
    const leftDepth = dfs(root.left)        
    const rightDepth = dfs(root.right)     
    //assign the longest total based on whether the current Longest Total 
    //or the current diamter of the subtree is bigger
    longestTotal = Math.max(longestTotal, leftDepth + rightDepth)
    //return the longest tree between left and right
    const longest = Math.max(leftDepth, rightDepth)
    //return longest + 1 to account for trees of size 1
    return longest + 1 
}
    dfs(root)
    return longestTotal



};
