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

function reverseList(head: ListNode | null): ListNode | null {
    //create a dummy node
    const dummy = new ListNode();
    //create a tail to edit the dummy node
    const tail = dummy
    //go through the linked list
    while(head != null){
        //have a temp variable for the current head
        let temp = head
        //have a temp variable for the next of the linked list
        let nextTemp = head.next
        //have the temporary head's next be the current tail's next
        temp.next = tail.next
        //make the next of the tail the current head
        tail.next = temp
        //move along the linked list
        head = nextTemp
    }
    return dummy.next

};
