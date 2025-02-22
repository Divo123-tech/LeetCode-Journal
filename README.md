# LeetCode-Journal
The solutions and notes to my current leetcode grind!
## **LeetCode Solutions**

### **Two Sum**
- Create a hashmap to store the number that the loop is currently on.
- For every number, check if `target - number` is present in the hashmap.
- If so:
  - Return the index from the hashmap and the index from the current loop.
- If not:
  - Add the number the loop is currently on as the key and the index as the value.

---

### **Valid Parentheses**
- Create an array to keep track of the latest parenthesis (acts as a stack).
- Create a hashmap to check the corresponding parenthesis (to make it DRY).
- Only push to the array if it's an **opening** bracket.
- The last item of the array should **never** be a closing bracket.
- If it's a closing parenthesis:
  - Check if the array is empty.
    - If so, return `false`.
  - If not:
    - Check if the top of the array is the corresponding opening parenthesis using the hashmap.
      - If so, **splice** the element.
      - If not, return `false`.
- If it's opening, just push to the array.
- Return whether or not the array is **empty**.

---

### **Merge Two Sorted Lists**
- The biggest hint is that you’re using a **linked list**, not an array.
- Create a **dummy node** to attach the next nodes to.
- Create a `tail` variable to keep track of where you are in the linked list.
- Use a `while` loop to make sure that both lists still have values (some lists are different lengths).
- Check which head of the linked list is greater.
  - Whichever one is greater, move it to the `next` of the tail.
  - Make the new head of that linked list the `next`.
  - Move the tail to `next` to avoid rewriting.
- Check which list still has content.
  - Add the rest of the list.
- Return `dummy.next` (remember the tail is just for tracking).

---

### **Best Time to Buy and Sell Stock**
- Remember: You only need to return the **max profit**, **not the index of the days**.
- Use **two pointers**.
- Iterate through the array, increasing the sell window each time.
- If the sell price is lower than the buy price, move the buy pointer to the current sell.
- Compare the **max profit** to the current profit of the window.
- Return the **max profit**.

---

### **Valid Palindrome**
- If the string is less than **two characters long**, it's a palindrome.
- Use **two pointers**, one at the start and one at the end.
- While the end pointer is greater than or equal to the start pointer:
  - Keep comparing characters.
  - If at any time they don’t match, return `false`.
- Return `true` at the end of the while loop.

---

### **Invert Binary Tree**
- The key is recursion using **Depth-First Search (DFS)**.
- Have a **base case** to check if the root is `null`.
- **Swap** the left and right of the root.
- Call the function recursively, passing in the left and right of the root.
- Return the root.
