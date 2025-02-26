
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    //if the linked list is empty or only has one element theres no cycle
    if(head == null || head.next == null){
        return false
    }
    //initilalize a tortoise hare pointer
    let slowPointer = head
    let fastPointer = head.next
    //while the fast pointer is not null which means theres still a list
    while(fastPointer != null){
        //if its the same pointer it means theres a loop
        if (slowPointer == fastPointer){
            return true
        }
        //make sure theres no null pointer exception
        if(fastPointer.next == null){
            return false
        } 
        //fast pointer moves twice as fast
        fastPointer = fastPointer.next.next
        //slow moves once 
        slowPointer = slowPointer.next
    }
    //if theres an end to the list return false
    return false
};
