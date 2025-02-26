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

function isBalanced(root: TreeNode | null): boolean {
    //go down to the lowest root
    function dfs(root){
        //if the root is null return true
        if(root == null){
            return [true, 0]
        }
        //do for both sides
        const left = dfs(root.left)
        const right = dfs(root.right)
        //check if its balanced by checking if the left and right are balanced
        //and that the difference isnt greater than one
        if(left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1){
            //return whether its balanced and the height
            return [true, 1 + Math.max(left[1], right[1])]
        }
        //return whether its balanced and the height
        return [false, Math.max(left[1], right[1])]
    }
    return dfs(root)[0]

};
