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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    while(root != null){
        //if its lower than the root shift it to the left
        if(p.val < root.val && q.val < root.val){
            root = root.left
        }
        //if its higher than the root shift it to the right
        else if(p.val > root.val && q.val > root.val){
            root = root.right
        }
        //return the root since they're on opposite sides
        else{
            return root
        }
    }
    return null
    
};
