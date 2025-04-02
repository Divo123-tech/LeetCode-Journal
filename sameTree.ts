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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

    //if theyre both null return true (base case)
    if(!p && !q) return true
    //if at any point p or q is not equal to each other or one of them is null and the other isnt
    //return false
    if(!p || !q || p.val != q.val) return false
    //recursively call for both left and right subtrees until both are null or different
    return isSameTree(p.left,q.left) && isSameTree(p.right, q.right)
};
